# Example Next.js Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Learn More](#learn-more)
- [Deploy](#deploy)

## 🎯 Overview

A modern Next.js application built with TypeScript, Tailwind CSS, and React 19. The project includes components for layouts, sections, and UI elements with a focus on registration forms and content display.

## 📁 Project Structure

```
example_nextjs/
├── public/                    # Static assets
│   ├── facebook.png
│   ├── favicon.ico
│   ├── hackathon-cloud.png
├── src/
│   ├── middleware.ts          # Next.js middleware
│   ├── app/                   # App Router directory
│   │   ├── globals.css        # Global styles
│   │   ├── layout.js          # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── api/               # API routes
│   │   │   └── route/
│   │   │       └── route.ts
│   │   └── detail/            # Detail page
│   │       └── page.tsx
│   └── components/            # React components
│       ├── layouts/           # Layout components
│       │   ├── Footer.tsx
│       │   └── Header.tsx
│       ├── sections/          # Section components
│       │   ├── SectionAbout.tsx
│       │   ├── SectionCarousel.tsx
│       │   ├── SectionRegister.tsx
│       │   ├── SectionTittle.tsx
│       │   └── register/      # Registration components
│       │       ├── FormData.ts
│       │       ├── IndividualForm.tsx
│       │       ├── RegisterHeader.tsx
│       │       ├── RegisterIllustration.tsx
│       │       └── TeamForm.tsx
│       └── ui/                # UI components
│           ├── Button.tsx
│           ├── Countdown.tsx
│           └── Text.tsx
├── jsconfig.json              # JavaScript configuration
├── next-env.d.ts              # Next.js TypeScript declarations
├── next.config.mjs            # Next.js configuration
├── package.json               # Project dependencies
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## 🛠 Tech Stack

- **Framework:** [Next.js 15.5.4](https://nextjs.org/) with App Router
- **Runtime:** [React 19.1.0](https://reactjs.org/)
- **Language:** [TypeScript 5.9.2](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4.1.13](https://tailwindcss.com/)
- **Build Tool:** [Turbopack](https://turbo.build/pack) (enabled)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |

## 📦 Dependencies

### Production Dependencies
- **next**: Next.js framework
- **react**: React library
- **react-dom**: React DOM bindings

### Development Dependencies
- **@tailwindcss/postcss**: Tailwind CSS PostCSS plugin
- **@types/node**: TypeScript definitions for Node.js
- **@types/react**: TypeScript definitions for React
- **autoprefixer**: PostCSS plugin for vendor prefixes
- **postcss**: CSS transformation tool
- **tailwindcss**: Utility-first CSS framework
- **typescript**: TypeScript compiler

## 🎓 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🚢 Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

*Built with ❤️ using Next.js*
