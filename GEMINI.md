<!-- # Project Context: my-profile

## Project Overview
This is a modern Next.js web application, likely for a personal profile or portfolio. It leverages the latest React 19 features and Next.js App Router for high-performance and efficient web development.

### Core Technologies
- **Framework:** Next.js (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Language:** TypeScript
- **Linting:** ESLint

### Architecture
- **Root Directory:** Contains project configuration files (`next.config.ts`, `tsconfig.json`, `package.json`, etc.).
- **app/**: The core of the application using the Next.js App Router.
  - `layout.tsx`: Root layout shared across pages.
  - `page.tsx`: The main landing page.
  - `globals.css`: Global styles including Tailwind directives.
- **public/**: Static assets like images and fonts.

## Building and Running
The following commands are defined in `package.json`:

- **Development:** `npm run dev` - Starts the development server at [http://localhost:3000](http://localhost:3000).
- **Build:** `npm run build` - Compiles the application for production.
- **Start:** `npm run start` - Runs the production-built application.
- **Lint:** `npm run lint` - Executes ESLint to verify code quality.

## Development Conventions
- **TypeScript:** Use strong typing across the codebase.
- **App Router:** Follow the Next.js App Router conventions (layouts, templates, loading/error states).
- **Styling:** Use Tailwind CSS utility classes for styling.
- **Import Aliases:** Use the `@/` prefix to import modules from the project root (e.g., `import MyComponent from "@/components/MyComponent"`).
- **Standard Formatting:** Adhere to ESLint and Prettier (if configured) for consistent code style. -->

1. 계획, task, walkthrough는 한글로 작성해줘.
2. 항상 한국어로 대답해줘.
3. 개발이 끝나고 난 후에는 빌드 명령어로 검증해줘.
4. 커밋 메시지는 상세하게 한글로 작성해줘