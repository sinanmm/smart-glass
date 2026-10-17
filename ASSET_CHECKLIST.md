# SG Smart Glass Media Asset Replacement & Verification Checklist

This document details the asset structure, paths, and content verification status for the **SG Smart Glass** website (powered by **Technical Glass and Glazing India Pvt. Ltd.**).

---

## 1. Brand Assets (`public/brand/`)

| Asset Description | Current Path | Status / Notes | Replacement Instructions |
| :--- | :--- | :--- | :--- |
| **Official Logo (Transparent)** | `/brand/sg-logo-transparent.png` | **Active & Verified** | Extracted from official high-res asset with transparent background. Configured in `src/content/siteConfig.ts`. |
| **Official Logo (White BG)** | `/brand/sg-logo.png` | **Active & Verified** | High-resolution master provided by client. |

> **Logo Path Configuration:** The logo path is centralized in `src/content/siteConfig.ts` (`siteConfig.logo.primary`). You can change the filename or path in one place without touching any navigation or footer code.

---

## 2. Hero Interactive Media (`public/images/hero/`)

| Asset Description | Current Path | Visual Role | Replacement Guidance |
| :--- | :--- | :--- | :--- |
| **Clear State Hero Boardroom** | `/images/hero/hero-smart-glass-clear.jpg` | Power ON (Transparent State) for interactive comparison slider | Replace with high-resolution photograph of an SG Smart Glass installation in clear mode. |
| **Private State Hero Boardroom** | `/images/hero/hero-smart-glass-private.jpg` | Power OFF (Frosted State) for interactive comparison slider | Must feature the exact same camera angle and framing as the clear state photograph. |

---

## 3. Product Catalog Media (`public/images/products/`)

| Product | Current Path | Approved Specifications |
| :--- | :--- | :--- |
| **SG 95% Clear View** | `/images/products/sg95-clear-view.jpg` | 99% UV Block, 20% Heat Reduction, 3-Yr Warranty, Custom Pre-cut. |
| **SG 91% Clear View** | `/images/products/sg91-clear-view.jpg` | 99% UV Block, 20% Heat Reduction, 3-Yr Warranty. |
| **SG 89% Clear View** | `/images/products/sg89-clear-view.jpg` | 99% UV Block, 20% Heat Reduction, 3-Yr Warranty. |
| **SG Black Tinted Smart Film** | `/images/products/sg-black-tinted.jpg` | Deep Charcoal Tint, 99% UV Block, 3-Yr Warranty. |
| **Twin Pro** | `/images/products/twin-pro.jpg` | Architectural double-glazed acoustic profile system with wire conduits. |
| **Slim Pro** | `/images/products/slim-pro.jpg` | Minimalist single-glazed ultra-slim frame profile system. |

---

## 4. Application Gallery Media (`public/images/applications/`)

| Application | Current Path | Recommended Dimensions |
| :--- | :--- | :--- |
| **Offices & Boardrooms** | `/images/applications/offices.jpg` | 1920 × 1080 (16:9), WebP / JPG |
| **Homes & Villas** | `/images/applications/residential.jpg` | 1920 × 1080 (16:9), WebP / JPG |
| **Hospitality** | `/images/applications/hospitality.jpg` | 1920 × 1080 (16:9), WebP / JPG |
| **Healthcare** | `/images/applications/healthcare.jpg` | 1920 × 1080 (16:9), WebP / JPG |
| **Retail & Showrooms** | `/images/applications/retail.jpg` | 1920 × 1080 (16:9), WebP / JPG |
| **Special Projects** | `/images/applications/special-projects.jpg` | 1920 × 1080 (16:9), WebP / JPG |

---

## 5. Facility & About Media (`public/images/about/`)

| Asset Description | Current Path | Notes |
| :--- | :--- | :--- |
| **Workshop / Production Unit** | `/images/about/facility.jpg` | Represents precision cutting and film customisation bench testing. |

---

## 6. Client Logos & Case Study Assets (`public/images/clients/`)

- **Status:** In accordance with the prompt's strict content integrity rules, fictional client logos and corporate claims were **not** fabricated.
- **To add verified client logos:** Place SVG or monochrome PNG logos in `/public/images/clients/` and update `src/features/home/ClientLogos.tsx`.

---

## 7. Claim Verification Status

- **17+ Years of Industry Experience:** Attributed specifically to **Technical Glass and Glazing India Pvt. Ltd. / group**.
- **Scope of Work Clarification:**
  - Base-glass selection and procurement is handled by the client or appointed glass supplier.
  - Film preparation, customisation to confirmed measurements, application coordination, and electrical connections are handled by SG Smart Glass.
  - Electrical point planning must occur **before** glass installation.
- **Product Nomenclature:** Percentages (95%, 91%, 89%) designate product clarity tiers and relative optical clarity, not independently lab-certified transmission percentages.
