"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Shield,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/siteConfig";

interface QuoteFormProps {
  initialProduct?: string;
  initialApplication?: string;
}

export function QuoteForm({ initialProduct, initialApplication }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cityState: "",
    projectType: initialApplication || "Corporate Office / Boardroom",
    dimensions: "",
    description: "",
    productContext: initialProduct || "",
    company_website_hp: "", // Honeypot
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverSuccess, setServerSuccess] = useState<{
    message: string;
    leadId: string;
    gmailUrl: string;
    mailtoUrl: string;
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setServerError(null);

    // Client validation
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.phone.trim())
      newErrors.phone = "Phone or WhatsApp Number is required";
    if (!formData.cityState.trim())
      newErrors.cityState = "City and State are required";
    if (!formData.projectType)
      newErrors.projectType = "Please select a project type";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Build the formatted email Subject and Body for info@sgsmartglass.com
    const subject = `Smart Glass Quote Enquiry - ${formData.fullName} (${formData.projectType})`;
    const body = `Dear SG Smart Glass Team,

I would like to request a quotation for a smart glass project. Here are my project details:

• Full Name: ${formData.fullName}
• Phone / WhatsApp: ${formData.phone}
• Email: ${formData.email || "Not provided"}
• Location (City & State): ${formData.cityState}
• Project Type: ${formData.projectType}
• Product / Reference: ${formData.productContext || "SG Smart Glass / PDLC Smart Film"}
• Approximate Dimensions / Glass Area: ${formData.dimensions || "To be discussed"}

Project Description:
${formData.description || "Looking for quotation and site coordination details."}

--------------------------------------------------
Inquiry submitted via official SG Smart Glass website.
Legal Entity: ${siteConfig.legalCompanyName}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      siteConfig.contact.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const mailtoUrl = `mailto:${encodeURIComponent(
      siteConfig.contact.email
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Directly open Gmail in a new tab with the filled data
    try {
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
    } catch (e) {
      // fallback handled below
    }

    // Asynchronously record the lead on the backend as well
    try {
      fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).catch((err) => console.error("Background sync error:", err));
    } catch (err) {
      // non-blocking
    }

    setIsLoading(false);
    setServerSuccess({
      message: `Gmail has been opened with your pre-filled project details addressed to ${siteConfig.contact.email}. Please review and click send in Gmail to deliver your enquiry.`,
      leadId: `SG-${Date.now().toString(36).toUpperCase()}`,
      gmailUrl,
      mailtoUrl,
    });
  };

  if (serverSuccess) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#286497]/30 shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-[#eaf2f8] text-[#286497] flex items-center justify-center mx-auto shadow-inner">
          <Mail className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-bold text-[#286497] uppercase tracking-wider block mb-1">
            Opening Gmail • {siteConfig.contact.email}
          </span>
          <h3 className="text-2xl font-bold text-slate-900">
            Enquiry Prepared for {formData.fullName}
          </h3>
          <p className="mt-3 text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            {serverSuccess.message}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#F5F9FB] border border-slate-200 text-xs text-slate-600 max-w-md mx-auto space-y-1.5 text-left">
          <div>
            <strong>Recipient:</strong>{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-[#286497] font-semibold underline"
            >
              {siteConfig.contact.email}
            </a>
          </div>
          <div>
            <strong>Reference ID:</strong> {serverSuccess.leadId}
          </div>
          <div>
            <strong>Support Phone:</strong> {siteConfig.contact.indiaPrimary.display}
          </div>
        </div>

        {/* Action Buttons to re-open or chat */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href={serverSuccess.gmailUrl}
            target="_blank"
            variant="primary"
            size="md"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            Re-open in Gmail
          </Button>

          <Button
            href={serverSuccess.mailtoUrl}
            variant="secondary"
            size="md"
            icon={<Mail className="w-4 h-4" />}
          >
            Open in Default Mail App
          </Button>

          <Button
            href={`${siteConfig.contact.whatsapp.url}?text=${encodeURIComponent(
              `Hello SG Smart Glass, I just prepared quote enquiry ${serverSuccess.leadId} for ${formData.fullName}.`
            )}`}
            variant="teal"
            size="md"
            icon={<MessageCircle className="w-4 h-4" />}
          >
            WhatsApp
          </Button>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setServerSuccess(null);
              setFormData({
                fullName: "",
                phone: "",
                email: "",
                cityState: "",
                projectType: "Corporate Office / Boardroom",
                dimensions: "",
                description: "",
                productContext: "",
                company_website_hp: "",
              });
            }}
            className="text-xs text-slate-400 hover:text-[#286497] underline cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6"
      noValidate
    >
      <div>
        <h3 className="text-2xl font-bold text-slate-900">Request a Project Quote</h3>
        <p className="text-xs text-slate-500 mt-1">
          Provide your project requirements to generate an enquiry email directly to{" "}
          <strong className="text-slate-700">{siteConfig.contact.email}</strong>.
        </p>
      </div>

      {serverError && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Honeypot hidden input */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website_hp">Leave empty</label>
        <input
          type="text"
          id="company_website_hp"
          value={formData.company_website_hp}
          onChange={(e) =>
            setFormData({ ...formData, company_website_hp: e.target.value })
          }
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Row 1: Full Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Rahul Menon"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#286497] transition-all ${
              errors.fullName ? "border-red-500 ring-1 ring-red-500" : "border-slate-300"
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1.5">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
          >
            Phone / WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#286497] transition-all ${
              errors.phone ? "border-red-500 ring-1 ring-red-500" : "border-slate-300"
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1.5">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Row 2: Email & City / State */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@example.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#286497] transition-all ${
              errors.email ? "border-red-500 ring-1 ring-red-500" : "border-slate-300"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>
          )}
          <span className="text-[11px] text-slate-400 block mt-1">
            Optional; included in the quotation email
          </span>
        </div>

        <div>
          <label
            htmlFor="cityState"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
          >
            City and State <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="cityState"
            required
            value={formData.cityState}
            onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
            placeholder="e.g. Kochi, Kerala or Bangalore, KA"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#286497] transition-all ${
              errors.cityState ? "border-red-500 ring-1 ring-red-500" : "border-slate-300"
            }`}
          />
          {errors.cityState && (
            <p className="text-xs text-red-600 mt-1.5">{errors.cityState}</p>
          )}
        </div>
      </div>

      {/* Row 3: Project Type & Approximate Dimensions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="projectType"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
          >
            Project Type <span className="text-red-500">*</span>
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) =>
              setFormData({ ...formData, projectType: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#286497] transition-all"
          >
            <option value="Corporate Office / Boardroom">
              Corporate Office / Boardroom
            </option>
            <option value="Residential Villa / Apartment">
              Residential Villa / Apartment
            </option>
            <option value="Healthcare / Clinic / ICU">
              Healthcare / Clinic / ICU
            </option>
            <option value="Hotel / Hospitality Suite">
              Hotel / Hospitality Suite
            </option>
            <option value="Retail Showroom / Storefront">
              Retail Showroom / Storefront
            </option>
            <option value="Special Glazing Project">
              Special Glazing Project
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="dimensions"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
          >
            Approximate Dimensions / Glass Area
          </label>
          <input
            type="text"
            id="dimensions"
            value={formData.dimensions}
            onChange={(e) =>
              setFormData({ ...formData, dimensions: e.target.value })
            }
            placeholder="e.g. 10 ft x 8 ft or 80 sq.ft (approx)"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#286497] transition-all"
          />
          <span className="text-[11px] text-slate-400 block mt-1">
            Rough estimate is fine; verified before film preparation
          </span>
        </div>
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
        >
          Brief Project Description
        </label>
        <textarea
          id="description"
          rows={3}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Tell us about the space, whether glass is already installed or new, and your preferred timeline..."
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#286497] transition-all"
        />
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isLoading}
          className="w-full sm:w-auto flex-1 justify-center shadow-md"
          icon={<Send className="w-4 h-4" />}
        >
          Get a Quote
        </Button>

        <Button
          href={siteConfig.contact.whatsapp.url}
          variant="secondary"
          size="lg"
          className="w-full sm:w-auto flex-1 justify-center"
          icon={<MessageCircle className="w-4 h-4 text-[#25D366]" />}
        >
          Chat on WhatsApp
        </Button>
      </div>

      {/* Guarantee & Email Destination Note */}
      <p className="text-[11px] text-slate-400 text-center pt-2 flex items-center justify-center gap-1.5">
        <Shield className="w-3.5 h-3.5 text-[#66BEAE]" />
        Clicking &quot;Get a Quote&quot; directly opens Gmail with your prefilled details addressed to{" "}
        <span className="text-slate-600 font-medium">{siteConfig.contact.email}</span>.
      </p>
    </form>
  );
}
