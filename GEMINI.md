# GEMINI.md

This file serves as the foundational guideline for the Mylink project, defining development principles, technology stacks, and workflows. These instructions must be prioritized in all development activities.

## 1. Project Overview

- **Project Name**: Mylink
- **Objective**: A multi-link hub platform for developers to integrate various links (SNS, Portfolio, Blog) into a single public page.
- **Core Value**: Strengthening personal branding, integrated traffic management, and developer-friendly UX.
- **Reference**: See @docs/PRD.md for detailed product requirements.

## 2. Technology Stack

- **Framework**: Next.js 16.1.7 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, Lucide React
- **UI Components**: shadcn/ui
- **Auth & Database**: Firebase (Authentication, Firestore)
- **Fonts**: Geist, Inter

## 3. Key Features (MVP)

1.  **Account & Access**: Google Social Login via Firebase, Public URL based on unique User ID.
2.  **Profile Management**: Profile image, nickname, and Bio (one-line intro).
3.  **Link Management (CRUD)**:
    - Add/Edit/Delete links.
    - Automatic Favicon integration for destination URLs.
4.  **Public Profile Page**: Mobile-first responsive layout.
- **Reference**: Detailed behavior and UI are defined in @docs/SCENARIO.md and @docs/WIREFRAME.md.

## 4. Commands (Building and Running)

- **Dev Server**: `npm run dev` (Turbopack)
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Lint**: `npm run lint`
- **Format**: `npm run format` (Prettier)
- **Type Check**: `npm run typecheck`

## 5. Development Conventions

### 5.1. Language & Communication
- **Korean Mandate**: Plans, Tasks, and Walkthroughs MUST be written in **Korean**.
- **Response Language**: All interactions and responses must be in **Korean**.

### 5.2. Quality Control
- **Mandatory Verification**: After completion, you MUST verify changes using `npm run build` and `npm run typecheck`.
- **Components**: Follow shadcn/ui patterns; manage them in `components/ui`.
- **Utilities**: Use `lib/utils.ts` for shared utility functions.

### 5.3. Git Commit Convention
- **Format**: `Prefix: Detailed Korean description`
- **Prefix Keywords**: Use concise English keywords (e.g., `feat`, `fix`, `refactor`, `docs`, `style`, `chore`).
- **Description**: Describe the reason and core content of the change in detail using **Korean**.
- **Example**: `feat: 구글 소셜 로그인 연동 및 Firebase Auth 설정 추가`

## 6. Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: UI components and providers.
- `docs/`: Planning documents (@docs/PRD.md, @docs/SCENARIO.md, @docs/WIREFRAME.md).
- `hooks/`: Custom React hooks.
- `lib/`: Utilities and global configurations.
- `public/`: Static assets.

---

*This guide is subject to continuous updates as the project progresses.*
