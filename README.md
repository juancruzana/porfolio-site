# Juan Cruz Ana — Portfolio

A modern, dark-themed portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — page animations & scroll reveals
- **Lucide React** — icons


## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles + CSS variables
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx         # Sticky nav + hamburger menu
│   ├── HeroSection.tsx    # Hero with typing animation (Framer Motion)
│   ├── SkillsSection.tsx  # Skill cards + language grid
│   ├── ExperienceSection.tsx # Timeline
│   ├── ProjectsSection.tsx   # 2x2 project grid
│   ├── EducationSection.tsx  # Education cards
│   └── Toast.tsx          # Floating "What's new?" notification
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customisation

- **Colors**: Edit CSS variables in `app/globals.css` (`:root` block)
- **Content**: All data lives inside each component as a typed array — easy to update
- **Fonts**: Imported via Google Fonts in `globals.css`; change the `@import` URL to swap them

## Deployment

Deploy instantly to [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic CI/CD.
