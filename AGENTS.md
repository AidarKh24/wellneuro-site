# AGENTS.md

## Project Context
**Name**: wellneuro-site
**Description**: A Next.js landing page for Wellneuro, focused on lead generation and information dissemination.
**Tech Stack**:
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email Service**: Resend
- **State Management**: React Hooks (standard)

## Development Guidelines

### Code Style
- **Components**: Use Functional Components with TypeScript interfaces.
- **Styling**: Use Tailwind CSS classes. Avoid CSS Modules or global CSS unless necessary.
- **Types**: Maintain strict type safety. Avoid `any`. Define interfaces for props and data structures.
- **Imports**: Use absolute imports or relative imports consistently.

### Directory Structure
- `src/app`: App Router pages, layouts, and global styles.
- `src/app/sections`: Components specific to the landing page sections (e.g., Hero, System, Exclusive).
- `public`: Static assets (images, icons).

### Key Features
- **Lead Generation**: Captures user info and sends notifications via Telegram and Email.
  - *Note*: An implementation snippet exists as `API: lead endpoint (telegram + email)` in the root, which likely belongs in `src/app/api/lead/route.ts`.

## Agent Roles

### Developer
- **Goal**: Implement new features, update UI, and fix bugs.
- **Behavior**: 
  - Follow existing patterns in `src/app/sections`.
  - Ensure all new code is typed correctly.
  - Update documentation if architectural changes are made.

### Architect
- **Goal**: Maintain code quality, project structure, and performance.
- **Behavior**: 
  - Review code for consistency and scalability.
  - Suggest refactors when components become too large.

## Maintenance
- Ensure `next.config.mjs` and `package.json` are kept up to date.
- Verify environment variables (e.g., `RESEND_API_KEY`, `TELEGRAM_BOT_TOKEN`) are configured in the deployment environment.
