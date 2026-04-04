---
pdf_banner: CONFIDENTIAL — OPERATIONS
pdf_title: Operations & Ownership Record
pdf_org: Bluestreak India Private Limited
pdf_subtitle: Hosting, domain, email, code location, and platform usage
doc_version: "Document version 1.0"
doc_date: "28 March 2026"
cover_blurb: This document records where the Bluestreak India site and admin panel live, who owns related services, how to sign in and use the platform, and how to reach the developer. It does not contain passwords. Treat as confidential.
pdf_footer_line: Bluestreak India · Confidential · Operations & ownership documentation
pdf_info_title: Bluestreak India — Operations & Ownership
pdf_info_subject: Confidential operations record
pdf_theme: executive
---

# Operations & ownership (source for PDF)

**Security:** Do not commit this file to a **public** repository once it contains real URLs, personal emails, or internal details. Passwords and API secrets belong only in your hosting dashboard, password manager, and secure runbooks — **not** in this document. For a filled copy with sensitive extras, use `docs/OPERATIONS_HANDOVER_SOURCE.private.md` (that path is **gitignored** in this repo).

**Regenerate PDF after editing:** `npm run operations:pdf`  
**Custom input/output:** `node scripts/generate-handover-pdf.mjs docs/YOUR.md docs/YOUR.pdf`

---

## 1. Purpose of this document

This record is for **authorised owners and operators** of the Bluestreak India website and admin panel. It complements the technical handover (`docs/CLIENT_HANDOVER.md`) with **business and infrastructure facts**: domains, hosting, purchased email, where code lives, admin access (without passwords), and day-to-day usage.

| Field                   | Details                                               |
| ----------------------- | ----------------------------------------------------- |
| **Application**         | Bluestreak India — corporate site and admin (Next.js) |
| **Technical reference** | See `docs/CLIENT_HANDOVER.md` / `CLIENT_HANDOVER.pdf` |

---

## 2. Work completed (chronology)

Fill in dates and notes as applicable.

| Milestone                   | Date       | Status    |
| --------------------------- | ---------- | --------- |
| Discovery & scope           | 01/03/2026 | Completed |
| Design / UI                 | 06/03/2026 | Completed |
| Build (public site + admin) | 06/03/2026 | Completed |
| Staging / UAT               | 12/03/2026 | Completed |
| Production deploy           | 13/03/2026 | Completed |
| DNS / domain cutover        | 15/03/2026 | Completed |
| Email / workspace setup     | 28/03/2026 | Completed |
| Handover & training         | 29/03/2026 | Completed |

---

## 3. Domain and DNS

| Item                               | Value (fill in)           |
| ---------------------------------- | ------------------------- |
| **Primary production domain**      | `www.bluestreakindia.com` |
| **Additional domains / redirects** | “None”                    |
| **Domain registrar**               | Hostinger                 |
| **Registrar account / org**        | Admin                     |
| **DNS hosting**                    | same as registrar         |
| **Nameservers**                    | Vercel Nameservers        |
| **SSL / HTTPS**                    | auto via Vercel           |

---

## 4. Hosting (application)

| Item                      | Value (fill in)                                                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hosting provider**      | Vercel                                                                                                                                      |
| **Project / app name**    | bluestreakindia                                                                                                                             |
| **Region**                | USA                                                                                                                                         |
| **Production branch**     | `main`                                                                                                                                      |
| **Environment variables** | Set in hosting UI only — names in technical handover (`MONGODB_URI`, `JWT_SECRET`, `CLOUDINARY_URL` or `CLOUDINARY_*`, etc.); **do not paste values here** |
| **Who has deploy access** | MST Developers                                                                                                                              |

---

## 5. Source code (repository)

| Item                             | Value (fill in)                                 |
| -------------------------------- | ----------------------------------------------- |
| **Git host**                     | GitHub                                          |
| **Organisation / owner**         | MST                                             |
| **Repository URL**               | https://github.com/Student9970/bluestreaksindia |
| **Default branch**               | main                                            |
| **Who has admin / write access** | MST Developers                                  |

---

## 6. Email and workspace

| Item                                | Value (fill in) |
| ----------------------------------- | --------------- |
| **Provider**                        | Hostinger       |
| **Plan / billing**                  | 2 Years         |
| **Primary admin / billing contact** | Akshay Singh    |

### Purchased mailboxes (or aliases)

| Email address                          | Purpose / owner |
| -------------------------------------- | --------------- |
| info@bluestreakindia.com               | Akshay Singh    |
| hr@bluestreakindia.com                 | Akshay Singh    |
| akshay@bluestreakindia.com             | Akshay Singh    |
| legal@bluestreakindia.com              | Akshay Singh    |
| bluestreaktrustees@bluestreakindia.com | Akshay Singh    |

---

## 7. Other third-party services (no secrets in this doc)

| Service                         | Account / project name | Owner / notes |
| ------------------------------- | ---------------------- | ------------- |
| **MongoDB Atlas** (or other DB) | bluestreaksindia       | MST           |
| **Cloudinary** (product images) | Dashboard → product folder `bluestreakindia/products` | MST           |

_Connection strings and API tokens stay in the hosting environment only._

---

## 8. Administrator access

**Passwords are intentionally omitted.** Use your password manager or ask the developer (MST) through a secure channel if you need a reset or the initial password.

| Field                      | Value (fill in)                                              |
| -------------------------- | ------------------------------------------------------------ |
| **Production site URL**    | `https://www.bluestreakindia.com`                            |
| **Admin login URL**        | `[Production URL]` + `/admin/login`                          |
| **Administrator email**    | admin@bluestreaksindia.com                                   |
| **Administrator password** | _Not recorded here — use password manager / secure handover_ |
| **Role / persona**         | `administrator` (full menu)                                  |
| **Lockouts / new users**   | `administrator`                                              |

---

## 9. How to use the platform

### 9.1 Public website

| Path           | What visitors see                                  |
| -------------- | -------------------------------------------------- |
| `/`            | Home                                               |
| `/about`       | About                                              |
| `/services`    | Services                                           |
| `/products`    | Products                                           |
| `/partnership` | Partnership enquiry (`/dealership` redirects here) |
| `/contact`     | Contact form                                       |
| `/loans`       | Sell a Car / finance style flow                    |

### 9.2 Signing in to admin

1. Open **`/admin/login`** on the production site (e.g. `https://yourdomain.com/admin/login`).
2. Enter the **email** and **password** for a user that exists in the database (password not listed in this PDF).
3. After login you land on **`/admin`** (Dashboard). Session lasts **24 hours** (cookie `admin_token`); use **Log out** on shared computers.

### 9.3 Roles (personas)

| Persona              | Menu access                                                |
| -------------------- | ---------------------------------------------------------- |
| **Administrator**    | Dashboard, Products, Partnership, Sell Car, Contact, Users |
| **Product Manager**  | Dashboard, Products                                        |
| **Dealer Relations** | Dashboard, Partnership                                     |
| **Customer Support** | Dashboard, Contact                                         |
| **Finance Manager**  | Dashboard, Sell Car                                        |

Only **Administrator** can open **Users** and create staff accounts.

### 9.4 Day-to-day tasks

- **Dashboard** — Counts for areas your role can see.
- **Products** (`/admin/products`) — Add / edit / delete catalogue items; images via Cloudinary (`CLOUDINARY_URL` or `CLOUDINARY_CLOUD_NAME` + `CLOUDINARY_API_KEY` + `CLOUDINARY_API_SECRET` in production).
- **Partnership** (`/admin/partnership`) — Partnership form submissions; search by company / name / email.
- **Sell Car** (`/admin/finance`) — Leads from the sell-a-car flow.
- **Contact** (`/admin/contact`) — Contact form messages.
- **Users** (`/admin/users`, admins only) — Create users with email, password, and persona.

### 9.5 Mobile

Sidebar collapses on small screens; use the menu control to open navigation.

---

## 10. Developer contact

| Role          | Detail                   |
| ------------- | ------------------------ |
| **Developer** | MST                      |
| **Email**     | thprogrammer01@gmail.com |
| **Phone**     | 9021599825               |

Use this contact for technical questions, access issues, or changes beyond routine admin use.

---

## 11. Document control

| Item              | Detail                               |
| ----------------- | ------------------------------------ |
| **Source file**   | `docs/OPERATIONS_HANDOVER_SOURCE.md` |
| **Generated PDF** | `docs/OPERATIONS_HANDOVER.pdf`       |
| **Regenerate**    | `npm run operations:pdf`             |

**End of document**
