import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { siteConfig } from "@/content/siteConfig";

// Validation schema for quotation enquiries
const enquirySchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters").max(100),
  phone: z.string().min(8, "Please enter a valid Phone or WhatsApp number").max(20),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  cityState: z.string().min(2, "City and State are required").max(100),
  projectType: z.string().min(1, "Please select a project type"),
  dimensions: z.string().max(200).optional(),
  description: z.string().max(1000).optional(),
  productContext: z.string().optional(),
  // Honeypot field for bot spam prevention
  company_website_hp: z.string().max(0, "Bot detected").optional(),
});

// Simple in-memory rate limiting map for standard protection
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const rateWindow = 60 * 1000; // 1 minute
    const maxRequests = 5;

    const rateData = rateLimitMap.get(ip);
    if (rateData && now - rateData.timestamp < rateWindow) {
      if (rateData.count >= maxRequests) {
        return NextResponse.json(
          {
            success: false,
            message: "Too many requests. Please try again after one minute.",
          },
          { status: 429 }
        );
      }
      rateData.count += 1;
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    const body = await req.json();

    // Check honeypot
    if (body.company_website_hp && body.company_website_hp.length > 0) {
      // Quietly reject bot
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    const validatedData = enquirySchema.parse(body);

    // Prepare email payload or system log
    const emailSubject = `New Smart Glass Enquiry: ${validatedData.fullName} (${validatedData.projectType} - ${validatedData.cityState})`;
    const emailBody = `
=============================================
NEW SG SMART GLASS PROJECT ENQUIRY
=============================================
Full Name: ${validatedData.fullName}
Phone / WhatsApp: ${validatedData.phone}
Email: ${validatedData.email || "Not provided"}
Location: ${validatedData.cityState}
Project Type: ${validatedData.projectType}
Product Reference: ${validatedData.productContext || "General Enquiry"}
Approximate Dimensions / Area: ${validatedData.dimensions || "To be discussed"}
Project Description:
${validatedData.description || "None provided"}
---------------------------------------------
Timestamp: ${new Date().toISOString()}
Company: ${siteConfig.legalCompanyName}
Target Inbox: ${siteConfig.contact.email}
=============================================
    `;

    console.log(emailBody);

    // If Resend API key is configured in environment:
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || "SG Smart Glass <onboarding@resend.dev>",
            to: process.env.EMAIL_TO || siteConfig.contact.email,
            reply_to: validatedData.email || undefined,
            subject: emailSubject,
            text: emailBody,
          }),
        });

        if (!res.ok) {
          const errData = await res.json();
          console.error("Resend error:", errData);
        }
      } catch (err) {
        console.error("Failed to deliver transactional email via Resend:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your quotation enquiry has been securely received by the SG Smart Glass engineering desk. A specialist will contact you shortly to review measurements and electrical requirements.",
      leadId: `SG-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: error.issues[0]?.message || "Validation failed",
          errors: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected server error occurred. Please contact us directly via WhatsApp or phone.",
      },
      { status: 500 }
    );
  }
}
