# Site Redesign Design

## Overview

Redesign chrisvanlaw.com with a clean, minimal aesthetic. Stay with Jekyll and customize the Minima theme. Add a hero section, improve resume layout, and add blog infrastructure.

## Goals

- **Modernize look**: Move away from generic Minima defaults to a Stripe/Linear-inspired clean aesthetic
- **Personal branding**: Reflect identity as a platform engineer through typography and design choices
- **Improve usability**: Better scannability, mobile experience, and navigation

## Structure

### Pages

- **Home** (`/`) - Hero section with name, title, one-liner, and navigation to other sections
- **Resume** (`/resume/`) - Full experience, skills, and background
- **Blog** (`/blog/`) - Post listing (empty initially, ready for future use)

### Home Page Layout

```
┌─────────────────────────────────────────┐
│  Chris Van Law          [theme toggle]  │  ← minimal header
├─────────────────────────────────────────┤
│                                         │
│         CHRIS VAN LAW                   │  ← monospace, large
│         Platform Engineer               │  ← sans-serif, subdued
│                                         │
│   Building reliable, observable systems │  ← one-liner, accent color
│                                         │
│   [GitHub]  [LinkedIn]  [Email]         │  ← subtle icon links
│                                         │
├─────────────────────────────────────────┤
│   → View Resume    → Read Blog          │  ← clear CTAs
└─────────────────────────────────────────┘
```

### Navigation

Minimal top-right navigation: `Resume` | `Blog` | theme toggle icon. No hamburger menu.

## Visual Design System

### Color Palette

**Light mode:**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Secondary text: `#666666`
- Accent (blue): `#2563eb`
- Accent hover: `#1d4ed8`
- Borders/dividers: `#e5e5e5`

**Dark mode:**
- Background: `#0a0a0a`
- Text: `#fafafa`
- Secondary text: `#a3a3a3`
- Accent (blue): `#3b82f6`
- Accent hover: `#60a5fa`
- Borders/dividers: `#262626`

### Typography

**Fonts:**
- Headings: JetBrains Mono (bold weight only)
- Body: System font stack (`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, etc.`)

**Scale:**
- Hero name: 3rem (48px), monospace, bold
- Hero title: 1.25rem (20px), sans-serif, secondary color
- One-liner: 1.125rem (18px), sans-serif, accent color
- Section heads: 1.5rem (24px), monospace, bold
- Body text: 1rem (16px), sans-serif, 1.6 line-height

### Spacing

- Generous whitespace throughout
- Sections separated by `4rem`
- Content max-width: `680px`
- Hero vertical padding: `6rem`

### Links

Accent blue, no underline by default, subtle underline on hover.

## Resume Page Layout

```
┌─────────────────────────────────────────┐
│  Chris Van Law     Resume | Blog  [◐]  │
├─────────────────────────────────────────┤
│                                         │
│  ABOUT                                  │
│  ─────                                  │
│  Platform Engineer focused on...        │
│                                         │
│  EXPERIENCE                             │
│  ──────────                             │
│                                         │
│  Fanatics Betting & Gaming              │  ← company, bold
│  Staff Engineer, Platform Engineering   │  ← title, secondary
│  October 2023 - Present                 │  ← date, muted
│                                         │
│  • Led infrastructure buildout...       │
│  • Rewrote RDS snapshot system...       │
│                                         │
│  ───────────────────────────            │
│                                         │
│  SKILLS                                 │
│  ──────                                 │
│  Languages: C#, SQL, TypeScript, Go...  │
│  Cloud: AWS (SA Associate), Azure       │
│  Tools: Kubernetes, Terraform, Datadog  │
│                                         │
└─────────────────────────────────────────┘
```

**Changes from current:**
- Skills condensed into categorized inline lists
- Dates on same line as title or right-aligned
- Company descriptions reduced
- Clear hierarchy: Company → Role → Date → Bullets

## Blog Infrastructure

### Blog Index

Empty state initially with "No posts yet." message. When posts exist, show title and date for each.

### Post Layout

Simple and readable. Title, date, content. No sidebars or clutter.

## File Structure

```
src/
├── _layouts/
│   ├── default.html    ← base layout (header, footer, theme toggle)
│   ├── home.html       ← hero page
│   ├── page.html       ← resume and other pages
│   └── post.html       ← blog posts
├── _sass/
│   └── minima/
│       └── custom-styles.scss
├── assets/
│   └── css/
│       └── style.scss
├── _includes/
│   ├── header.html
│   └── footer.html
├── _posts/             ← empty, ready for future
├── blog.md
├── resume.md
└── index.md
```

## Implementation Approach

### Customizing Minima

Override specific theme files rather than ejecting entirely. Custom SCSS imports Minima base then applies overrides.

### Theme Toggle

Vanilla JavaScript (~20 lines):
1. Check `prefers-color-scheme` on load
2. Store preference in `localStorage`
3. Apply `data-theme="dark"` attribute to `<html>`
4. CSS uses `[data-theme="dark"]` selectors

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
```

Only bold weight for headings. System fonts for body.

## Out of Scope

- JavaScript frameworks
- Build tools beyond Jekyll
- CSS frameworks
- Comments system
- Analytics
