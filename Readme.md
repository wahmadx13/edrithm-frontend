# Edrithm – Education Operations Simplified

## What is Edrithm?

**Edrithm** is a modern, all-in-one platform designed to give schools, colleges, and educational institutes complete control over their operations—without the headaches of managing multiple systems, software maintenance, or hiring extra staff.

It combines administration, teaching, student management, and parent engagement into one sleek, intuitive application.

The goal of Edrithm is simple: **give principals, directors, and administrators a complete view of their institution at a glance and provide actionable insights to run their school or college efficiently.**

---

## Who is Edrithm for?

- School Principals
- College Directors
- Institute Administrators
- Heads of Departments
- Operations Managers

Edrithm is designed for institutions of any size:

- Single campuses
- Multiple branches across cities or countries
- Small private institutes
- Large colleges or international schools

---

## The Power You Get With Edrithm

By using Edrithm, your institution will be able to:

- Supervise operations without manual tracking
- Make data-driven decisions instantly
- Understand trends in student performance, attendance, and teacher effectiveness
- Monitor finances and expenses without complex accounting systems
- Communicate seamlessly with teachers, students, and parents
- Manage multiple branches under one platform

Edrithm puts **control, clarity, and efficiency** at your fingertips.

---

## Features of Edrithm

### MVP Features (First Launch)

1. **Admin Dashboard**
   - Visual overview of your institution
   - Infographics and charts of student enrollment, attendance trends, fees dues, and expenses
   - Teacher and student performance insights
   - AI-powered predictions on enrollment trends
   - Quick snapshots to make instant decisions

2. **Students Management**
   - Student directory with easy search and filters
   - Admissions / Enrollment tracking
   - Academic records and class assignments
   - Alumni and transfer management
   - Attendance supervision (admin view only)

3. **Teachers Management**
   - Directory of teachers and staff
   - Assign classes and subjects
   - Track performance and appraisals
   - Salary tracking (admin can log payments and receipts, but not process payments)

4. **Academics Management**
   - Class and section management
   - Subject management and timetables
   - Exams and results tracking
   - Curriculum planner

5. **Finance Tracking (Admin-Only Overview)**
   - Fee records and due tracking
   - Expense monitoring
   - Scholarships and discounts management
   - Financial summary dashboards

6. **Communication**
   - Announcements and notices to students and staff
   - Messaging logs
   - Email/SMS alerts for critical information

7. **Multi-Branch Management**
   - Switch between branches easily
   - Compare branch KPIs
   - Centralized control for multiple campuses

8. **Role-Based Access**
   - Admin, Teacher, Student, Parent
   - Permissions fully controlled by the institution
   - Safe and structured access for every role

---

### Later Features (Future Releases)

1. **Mobile App**
   - iOS and Android app for teachers, students, and parents
   - Real-time notifications and updates
   - Attendance marking and communication tools

2. **AI-Powered Insights**
   - Predict student performance trends
   - Predict enrollment growth or decline
   - Identify teachers or classes needing attention

3. **Creative Tools for Institutions**
   - Integrated template system for brochures, cards, and banners
   - Option to design school logos and branding material directly in-app

4. **Advanced Analytics**
   - Custom reports on academics, attendance, finance, and enrollment
   - Exportable reports for audits or management review

5. **Tiered Subscription Features**
   - Free tier with limits on number of students, teachers, or branches
   - Premium tiers unlocking multi-branch management, AI predictions, and advanced analytics
   - Feature flags to activate modules based on subscription

6. **Integration with Other Services**
   - Email providers, notification systems
   - Optional integrations for external ERP or accounting systems

---

## Why Edrithm is Different

Unlike traditional education management software:

- **All-in-One**: One platform, all operations — no juggling multiple systems
- **Data-Driven**: Visual dashboards and AI predictions for better decision-making
- **Scalable**: Works for a single school or a network of multiple branches
- **Intuitive UI**: Simple, modern, and minimalistic — no training manuals required
- **Customizable**: Institutions can configure workflows, roles, and views as they need
- **Affordable**: Powerful SaaS without hiring extra IT staff or managing complex infrastructure

---

## What Schools and Colleges Can Manage with Edrithm

- **Students**
  - Admission, enrollment, and academic records
  - Attendance supervision
  - Discipline notes and parent notifications
  - Alumni and transfers

- **Teachers**
  - Assign subjects and classes
  - Track performance and appraisals
  - Record salary payments (tracking only)

- **Academics**
  - Manage classes, sections, and subjects
  - Timetables and exam schedules
  - Track results and performance metrics

- **Finance**
  - Monitor fees due and expenses
  - Scholarships and discounts
  - Generate financial summaries

- **Operations**
  - Multi-branch KPIs
  - Comparison across campuses
  - Streamlined communication with staff, students, and parents

- **Insights**
  - AI-driven predictions
  - Charts, infographics, and dashboards
  - Actionable insights for better decision-making

---

## The Vision

With Edrithm, schools, colleges, and institutes gain:

- **Control without complexity**
- **Transparency across all operations**
- **The ability to make smart decisions quickly**
- **The freedom to focus on education, not software management**

Edrithm empowers institutions to run smarter, operate efficiently, and scale without growing administrative headaches.

---

## Bottom Line

**Edrithm is more than a software. It is the operational backbone of your institution.**

It allows principals, directors, and administrators to focus on what matters most — **student success, teacher performance, and institutional growth** — while the system handles data, insights, and organization behind the scenes.

With Edrithm, you are not just managing your school — you are **optimizing it.**


# Edrithm – Technical Architecture & Stack

This document outlines the complete technical architecture of **Edrithm**, covering the MVP and future enhancements, including frontend, backend, AI workers, storage, security, integrations, and operational considerations.

---

## 1️⃣ Frontend

**Purpose:** The user-facing interface for admins, teachers, students, parents, and the landing page.

**Stack & Decisions:**

- **Framework:** Next.js (App Router + Server Components)
- **Styling:** TailwindCSS + Shadcn UI components + Radix primitives
  - Full control over design
  - Custom theming system
  - Light/Dark mode with neon/glass aesthetics
- **Charts:** Recharts / Tremor for dashboards and landing page infographics
- **Components:**
  - Buttons, forms, tables, modals, radio buttons, cards
  - Fully reusable design tokens
- **Landing Page:**
  - Sectioned layout
  - Infographics/mock charts
  - Email capture / demo booking CTA
  - Clean, premium, data-driven visual design
- **Mobile (Future):**
  - React Native for iOS and Android
  - Later optional native Swift for iOS if necessary

**Notes:**

- Consistent design system applied from landing page → dashboard → other pages
- Server Components for faster performance
- Minimal JS for landing page performance

---

## 2️⃣ Backend

**Purpose:** Central business logic, API layer, RBAC, multi-tenant orchestration, AI orchestration.

**Stack & Decisions:**

- **Framework:** NestJS (Modular Monolith for MVP)
  - Modules: Auth, Users, Students, Teachers, Attendance, Academics, Finance, Communication, AI
  - Future microservices possible if scaling requires
- **Database:** PostgreSQL with Prisma ORM
  - Tenant-based row-level isolation (`tenant_id` column)
  - Roles, permissions, subscriptions stored in DB
- **API Communication:**
  - Direct REST/GraphQL endpoints
  - No TanStack Query; use custom hooks and API client
  - Validation via Zod or class-validator
- **RBAC:**
  - Roles and permissions fully enforced server-side
  - No reliance on Firebase claims

**MVP Implementation:**

- Admin dashboard endpoints
- Students/Teachers/Academics endpoints
- Attendance and finance overview
- Multi-branch management
- Subscription-based feature flags

---

## 3️⃣ Authentication & Authorization

**Purpose:** Secure identity management and access control.

**Stack & Decisions:**

- **Auth Provider:** Firebase Auth
  - Email/password login
  - OAuth login (Google, Microsoft)
  - Optional phone login in the future
- **Token Flow:**
  1. Frontend receives Firebase ID token
  2. NestJS verifies token via Firebase Admin SDK
  3. User fetched from PostgreSQL (tenant_id, role)
  4. Authorization applied based on DB roles
- **RBAC:** Handled fully in NestJS
  - Admin, Teacher, Student, Parent roles
  - Permissions enforced per endpoint
- **Security:**
  - Verify token signature, issuer, and audience
  - Middleware to check tenant scoping automatically
  - Logging for all auth attempts

---

## 4️⃣ Storage & Media Management

**Purpose:** File storage for documents, images, and media assets.

**Stack & Decisions:**

- **Primary Storage:** Firebase Storage (MVP)
  - Private buckets only
  - Signed URLs generated for access
  - Paths structured by tenant:
    ```
    schools/{tenant_id}/students/{student_id}/documents/...
    schools/{tenant_id}/branding/logo.png
    ```
- **Future Option:** S3 or Cloudflare R2 for enterprise scaling
- **Database:** Store file paths/URLs in PostgreSQL

---

## 5️⃣ AI Workers

**Purpose:** Provide predictions, insights, and analytics.

**Stack & Decisions:**

- **Service:** Separate Python service (FastAPI)
- **Responsibilities:**
  - Predict student performance trends
  - Predict enrollment growth or decline
  - Generate dashboards/insights for admins
- **Integration:**
  - NestJS sends requests to AI service via internal endpoints
  - Async tasks for long-running jobs
  - Queue-based processing with BullMQ and Redis
- **Future:** More AI-powered recommendations (teacher performance, class optimization)

---

## 6️⃣ Canva/Design Tool Integration

**Purpose:** Allow institutions to create branding materials.

**MVP Approach:**

- Minimal: pre-made templates + simple editor for logos, banners, brochures
- Libraries: Fabric.js / Konva.js
- Users can customize:
  - Text, colors, logos
  - Export PDF/PNG
- Secure: Assets stored in tenant-specific storage paths

**Future:**

- Evaluate Canva Embed SDK or Canva Connect API
- Advanced template library for schools/colleges

---

## 7️⃣ Security

**Purpose:** Protect sensitive student, teacher, and financial data.

**Implementation:**

- HTTPS only
- CSRF protection for any cookie-based sessions
- Helmet for headers
- Input validation using Zod / class-validator
- Rate limiting and brute-force protection
- Tenant scoping enforced server-side
- Logging of sensitive actions (attendance alerts, grade edits, financial changes)
- Signed storage URLs
- Strong password policies (Firebase handled)

---

## 8️⃣ Analytics & Dashboards

**Purpose:** Present actionable insights.

**Stack & Decisions:**

- Charts: Recharts / Tremor
- Data aggregation in NestJS
- AI predictions integrated into dashboard cards
- Landing page uses mock charts/infographics

---

## 9️⃣ Communication

**Purpose:** Connect admins, teachers, students, parents.

**Implementation:**

- Announcements & notices
- Messaging logs
- Email/SMS logs
- Alerts for critical events (attendance, fee dues)
- Queued via BullMQ for async dispatch

---

## 🔟 Billing & Subscriptions

**Purpose:** Feature-based subscriptions and tier management.

**Implementation:**

- Stripe integration
- Plan table + feature flags per tier
- Usage tracking for limits (students, teachers, branches)
- Free → Premium tiers
- Future: Advanced billing for multi-branch and AI insights

---

## 1️⃣1️⃣ Infrastructure

**Deployment:**

- Frontend: Vercel (Next.js)
- Backend: Railway / Render / Fly.io (NestJS)
- Database: Managed PostgreSQL
- Queue: Redis for async tasks
- Storage: Firebase Storage

**Observability:**

- Structured logging
- Error monitoring (Sentry)
- Request tracing

---

## 1️⃣2️⃣ MVP vs Future Work

| Area            | MVP                                     | Future Work                                   |
| --------------- | --------------------------------------- | --------------------------------------------- |
| Admin Dashboard | Core charts, KPIs, AI mock insights     | Full AI predictions, drill-down analytics     |
| Students        | Directory, admissions, academic records | Attendance alerts, performance predictions    |
| Teachers        | Directory, assignments                  | Performance analytics, appraisals             |
| Finance         | Tracking fees and expenses              | Automated suggestions, predictive cashflow    |
| Communication   | Announcements, logs                     | Real-time chat, parent app push notifications |
| Mobile App      | -                                       | React Native iOS/Android                      |
| AI              | Basic enrollment predictions            | Full student/teacher performance insights     |
| Design Tools    | Simple templates & logos                | Canva embed SDK / advanced branding editor    |
| Multi-Branch    | Basic switch & KPIs                     | Full branch comparisons, reporting            |
| Security        | Firebase Auth + DB RBAC                 | Optional enterprise-grade audit & SSO         |

---

## Summary

**Edrithm** is built for:

- **Clarity:** Clean dashboards and data-driven insights
- **Control:** Role-based access, multi-branch oversight
- **Efficiency:** Reduce administrative overhead
- **Scalability:** Ready for multiple branches, thousands of students/teachers
- **Security:** Sensitive data fully protected with Firebase Auth, PostgreSQL RBAC, and best practices
- **Future Growth:** AI insights, mobile app, creative tools, advanced reporting

This architecture ensures a **professional, SaaS-grade application** from day one, while remaining modular for future growth without major rewrites.
