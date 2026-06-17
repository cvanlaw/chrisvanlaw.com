# Site Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign chrisvanlaw.com with a clean, minimal aesthetic featuring a hero section, improved resume layout, blog infrastructure, and light/dark mode toggle.

**Architecture:** Override Minima theme with custom layouts and SCSS. Three pages: home (hero), resume, and blog. Vanilla JS theme toggle with localStorage persistence.

**Tech Stack:** Jekyll 4.2, Minima theme (customized), SCSS, vanilla JavaScript, JetBrains Mono font

**Design Document:** `docs/plans/2026-01-09-site-redesign-design.md`

---

## Task 1: Set Up Custom SCSS Structure

**Files:**
- Create: `src/assets/css/style.scss`
- Create: `src/_sass/custom-variables.scss`
- Create: `src/_sass/custom-styles.scss`

**Step 1: Create main style entry point**

Create `src/assets/css/style.scss`:

```scss
---
---

// Import Minima's base styles
@import "minima";

// Import our customizations
@import "custom-variables";
@import "custom-styles";
```

**Step 2: Create custom variables file**

Create `src/_sass/custom-variables.scss`:

```scss
// Typography
$font-family-mono: 'JetBrains Mono', monospace;
$font-family-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;

// Light mode colors
$color-bg-light: #ffffff;
$color-text-light: #1a1a1a;
$color-text-secondary-light: #666666;
$color-accent-light: #2563eb;
$color-accent-hover-light: #1d4ed8;
$color-border-light: #e5e5e5;

// Dark mode colors
$color-bg-dark: #0a0a0a;
$color-text-dark: #fafafa;
$color-text-secondary-dark: #a3a3a3;
$color-accent-dark: #3b82f6;
$color-accent-hover-dark: #60a5fa;
$color-border-dark: #262626;

// Spacing
$spacing-section: 4rem;
$spacing-hero: 6rem;
$content-max-width: 680px;

// Typography scale
$font-size-hero-name: 3rem;
$font-size-hero-title: 1.25rem;
$font-size-hero-tagline: 1.125rem;
$font-size-section-heading: 1.5rem;
$font-size-body: 1rem;
$line-height-body: 1.6;
```

**Step 3: Create custom styles file**

Create `src/_sass/custom-styles.scss`:

```scss
// Base styles
:root {
  --color-bg: #{$color-bg-light};
  --color-text: #{$color-text-light};
  --color-text-secondary: #{$color-text-secondary-light};
  --color-accent: #{$color-accent-light};
  --color-accent-hover: #{$color-accent-hover-light};
  --color-border: #{$color-border-light};
}

[data-theme="dark"] {
  --color-bg: #{$color-bg-dark};
  --color-text: #{$color-text-dark};
  --color-text-secondary: #{$color-text-secondary-dark};
  --color-accent: #{$color-accent-dark};
  --color-accent-hover: #{$color-accent-hover-dark};
  --color-border: #{$color-border-dark};
}

html {
  font-family: $font-family-sans;
  font-size: $font-size-body;
  line-height: $line-height-body;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  margin: 0;
  padding: 0;
  transition: background-color 0.2s, color 0.2s;
}

// Links
a {
  color: var(--color-accent);
  text-decoration: none;

  &:hover {
    color: var(--color-accent-hover);
    text-decoration: underline;
  }
}

// Headings - monospace
h1, h2, h3, h4, h5, h6 {
  font-family: $font-family-mono;
  font-weight: 700;
  color: var(--color-text);
}

h2 {
  font-size: $font-size-section-heading;
  margin-top: $spacing-section;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

// Content wrapper
.content-wrapper {
  max-width: $content-max-width;
  margin: 0 auto;
  padding: 0 1.5rem;
}

// Secondary text
.text-secondary {
  color: var(--color-text-secondary);
}

// Dividers
hr {
  border: none;
  border-top: 1px solid var(--color-border);
  margin: 2rem 0;
}
```

**Step 4: Verify build**

Run: `make build`
Expected: Build succeeds with new styles compiled

**Step 5: Commit**

```bash
git add src/assets/css/style.scss src/_sass/custom-variables.scss src/_sass/custom-styles.scss
git commit -m "feat: add custom SCSS structure with design system variables"
```

---

## Task 2: Create Base Layout with Header

**Files:**
- Create: `src/_layouts/default.html`
- Create: `src/_includes/header.html`

**Step 1: Create header include**

Create `src/_includes/header.html`:

```html
<header class="site-header">
  <div class="header-wrapper">
    <a href="{{ '/' | relative_url }}" class="site-title">Chris Van Law</a>
    <nav class="site-nav">
      <a href="{{ '/resume/' | relative_url }}" {% if page.url == '/resume/' %}class="active"{% endif %}>Resume</a>
      <a href="{{ '/blog/' | relative_url }}" {% if page.url == '/blog/' %}class="active"{% endif %}>Blog</a>
      <button id="theme-toggle" class="theme-toggle" aria-label="Toggle dark mode">
        <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
    </nav>
  </div>
</header>
```

**Step 2: Create default layout**

Create `src/_layouts/default.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{% if page.title %}{{ page.title }} | {% endif %}{{ site.title }}</title>
  <meta name="description" content="{{ page.description | default: site.description }}">

  <!-- Preconnect to Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

  <!-- Theme initialization (prevent flash) -->
  <script>
    (function() {
      const theme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    })();
  </script>

  {% feed_meta %}
</head>
<body>
  {% include header.html %}

  <main class="content-wrapper">
    {{ content }}
  </main>

  <script>
    const toggle = document.getElementById('theme-toggle');
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  </script>
</body>
</html>
```

**Step 3: Add header styles to custom-styles.scss**

Append to `src/_sass/custom-styles.scss`:

```scss
// Header
.site-header {
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-border);
}

.header-wrapper {
  max-width: $content-max-width;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-title {
  font-family: $font-family-mono;
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--color-text);
  text-decoration: none;

  &:hover {
    color: var(--color-text);
    text-decoration: none;
  }
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    color: var(--color-text-secondary);
    font-size: 0.875rem;

    &:hover, &.active {
      color: var(--color-text);
    }
  }
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;

  &:hover {
    color: var(--color-text);
  }

  .icon-sun {
    display: block;
  }

  .icon-moon {
    display: none;
  }
}

[data-theme="dark"] .theme-toggle {
  .icon-sun {
    display: none;
  }

  .icon-moon {
    display: block;
  }
}
```

**Step 4: Verify build**

Run: `make build`
Expected: Build succeeds

**Step 5: Commit**

```bash
git add src/_layouts/default.html src/_includes/header.html src/_sass/custom-styles.scss
git commit -m "feat: add base layout with header and theme toggle"
```

---

## Task 3: Create Home Page with Hero

**Files:**
- Create: `src/_layouts/home.html`
- Modify: `src/index.markdown` → `src/index.md`

**Step 1: Create home layout**

Create `src/_layouts/home.html`:

```html
---
layout: default
---

<section class="hero">
  <h1 class="hero-name">Chris Van Law</h1>
  <p class="hero-title">Platform Engineer</p>
  <p class="hero-tagline">Building reliable, observable systems</p>

  <div class="hero-links">
    <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener">GitHub</a>
    <a href="https://linkedin.com/in/chrisvanlaw" target="_blank" rel="noopener">LinkedIn</a>
    <a href="mailto:{{ site.email }}">Email</a>
  </div>

  <div class="hero-cta">
    <a href="{{ '/resume/' | relative_url }}" class="cta-link">View Resume &rarr;</a>
    <a href="{{ '/blog/' | relative_url }}" class="cta-link">Read Blog &rarr;</a>
  </div>
</section>
```

**Step 2: Add hero styles**

Append to `src/_sass/custom-styles.scss`:

```scss
// Hero
.hero {
  text-align: center;
  padding: $spacing-hero 0;
}

.hero-name {
  font-family: $font-family-mono;
  font-size: $font-size-hero-name;
  font-weight: 700;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.hero-title {
  font-size: $font-size-hero-title;
  color: var(--color-text-secondary);
  margin: 0 0 1rem;
}

.hero-tagline {
  font-size: $font-size-hero-tagline;
  color: var(--color-accent);
  margin: 0 0 2rem;
}

.hero-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;

  a {
    color: var(--color-text-secondary);
    font-size: 0.875rem;

    &:hover {
      color: var(--color-accent);
    }
  }
}

.hero-cta {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.cta-link {
  font-size: 1rem;
  color: var(--color-accent);

  &:hover {
    text-decoration: underline;
  }
}
```

**Step 3: Replace index.markdown with new index.md**

Delete `src/index.markdown` and create `src/index.md`:

```markdown
---
layout: home
title: Home
---
```

**Step 4: Verify build and preview**

Run: `make serve`
Expected: Home page shows hero section at http://localhost:4000

**Step 5: Commit**

```bash
git rm src/index.markdown
git add src/_layouts/home.html src/_sass/custom-styles.scss src/index.md
git commit -m "feat: add home page with hero section"
```

---

## Task 4: Create Resume Page

**Files:**
- Create: `src/_layouts/page.html`
- Create: `src/resume.md`

**Step 1: Create page layout**

Create `src/_layouts/page.html`:

```html
---
layout: default
---

<article class="page-content">
  {{ content }}
</article>
```

**Step 2: Add page/resume styles**

Append to `src/_sass/custom-styles.scss`:

```scss
// Page content
.page-content {
  padding: 3rem 0;
}

// Resume-specific styles
.resume-section {
  margin-bottom: $spacing-section;
}

.job {
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.job-company {
  font-weight: 700;
  font-size: 1.125rem;
  margin: 0 0 0.25rem;
}

.job-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 0.9375rem;
}

.job-title {
  color: var(--color-text-secondary);
}

.job-date {
  color: var(--color-text-secondary);

  &::before {
    content: "·";
    margin-right: 0.5rem;
  }
}

.job-description {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.75rem;
  font-style: italic;
}

.job ul {
  margin: 0;
  padding-left: 1.25rem;

  li {
    margin-bottom: 0.375rem;
  }
}

// Skills
.skills-list {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 0.5rem;

    strong {
      color: var(--color-text);
    }
  }
}
```

**Step 3: Create resume page with reformatted content**

Create `src/resume.md`:

```markdown
---
layout: page
title: Resume
permalink: /resume/
---

## About

Platform Engineer focused on cloud-native infrastructure, developer experience, and AI-powered tooling. Building systems that are reliable, observable, and enable teams to move fast. Experienced in Kubernetes cluster management, infrastructure automation with Terraform, and establishing observability practices using Datadog.

## Experience

<div class="job">
  <p class="job-company">Fanatics Betting & Gaming</p>
  <div class="job-meta">
    <span class="job-title">Staff Engineer, Platform Engineering</span>
    <span class="job-date">October 2023 - Present</span>
  </div>

- Led infrastructure buildout for Fanatics Markets (FMX) trading platform, provisioning AWS accounts, EKS clusters, and observability systems
- Rewrote RDS snapshot system from Python to Go, reducing memory usage from multiple gigabytes to under 100MB
- Took ownership of Datadog vendor relationship, coordinating product meetings and implementing cost transparency reporting
- Implemented AI-powered platform tooling using AWS Bedrock for automated PR review and intelligent support request routing
- Advanced to AWS re:Invent semi-finals in Fanatics AI League competition, developing a responsible gaming AI assistant
</div>

<div class="job">
  <p class="job-company">rearc</p>
  <p class="job-description">Boutique cloud engineering and devops consulting</p>
  <div class="job-meta">
    <span class="job-title">Lead Cloud Engineer</span>
    <span class="job-date">August 2021 - October 2023</span>
  </div>

- Designed and delivered an end-to-end SaaS authentication and authorization system using OAuth 2.0 and OIDC
- Implemented continuous delivery pipelines for infrastructure as code and migrated customers to trunk-based development
- Designed and delivered an application architecture to re-platform a traditional on-premise application to EKS
- Implemented a robust test orchestration platform using AWS Step Functions
- Mentored customer engineers and internal engineers
</div>

<div class="job">
  <p class="job-company">Pacific Medical Data Solutions</p>
  <p class="job-description">Healthcare Revenue Cycle Management</p>
  <div class="job-meta">
    <span class="job-title">Director of IT & Engineering</span>
    <span class="job-date">May 2017 - August 2021</span>
  </div>

- Designed, developed, and launched a new SaaS product in the healthcare provider compensation space
- Implemented continuous deployment pipeline using Azure Pipelines, Helm, and Azure Kubernetes Service
- Grew software engineering team from 1 to 5, defined SDLC, and maintained product roadmap
</div>

<div class="job">
  <p class="job-company">IDMWorks</p>
  <p class="job-description">Identity & Access Management Consulting</p>
  <div class="job-meta">
    <span class="job-title">IAM Engineer</span>
    <span class="job-date">September 2016 - May 2017</span>
  </div>

- Provided SailPoint Identity IQ implementation using Java, Beanshell, and SQL
- Developed custom connector logic for client-specific integrations
</div>

<div class="job">
  <p class="job-company">Hosting.com</p>
  <p class="job-description">Managed services and hosting provider</p>
  <div class="job-meta">
    <span class="job-title">Technical Lead / Software Engineer</span>
    <span class="job-date">July 2014 - September 2016</span>
  </div>

- Designed and developed managed services products for infrastructure management
- Mentored team members in web services, automated testing, and design patterns
- Built customer portal features for monitoring, notifications, and firewall management
</div>

<div class="job">
  <p class="job-company">Raymond James & Associates</p>
  <div class="job-meta">
    <span class="job-title">Security Developer / Team Lead</span>
    <span class="job-date">May 2007 - July 2014</span>
  </div>

- Led IAM Services team to deliver in-house user provisioning system, increasing accuracy from 20% to 95%
- Designed automated user provisioning based on HR events
- Provided 24x7 on-call support for custom and COTS IAM systems
</div>

## Skills

<ul class="skills-list">
  <li><strong>Languages:</strong> Go, Python, TypeScript, C#, SQL, Bash</li>
  <li><strong>Cloud:</strong> AWS (Solutions Architect Associate), Azure</li>
  <li><strong>Infrastructure:</strong> Kubernetes (EKS, AKS), Terraform, Karpenter, Helm</li>
  <li><strong>Observability:</strong> Datadog</li>
  <li><strong>CI/CD:</strong> GitHub Actions, GitLab CI, Azure DevOps</li>
</ul>
```

**Step 4: Verify build and preview**

Run: `make serve`
Expected: Resume page renders at http://localhost:4000/resume/

**Step 5: Commit**

```bash
git add src/_layouts/page.html src/_sass/custom-styles.scss src/resume.md
git commit -m "feat: add resume page with reformatted content"
```

---

## Task 5: Create Blog Infrastructure

**Files:**
- Create: `src/_layouts/post.html`
- Create: `src/blog.md`
- Create: `src/_posts/.gitkeep`

**Step 1: Create post layout**

Create `src/_layouts/post.html`:

```html
---
layout: default
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
    <time class="post-date" datetime="{{ page.date | date_to_xmlschema }}">
      {{ page.date | date: "%B %Y" }}
    </time>
  </header>

  <div class="post-content">
    {{ content }}
  </div>
</article>
```

**Step 2: Add blog/post styles**

Append to `src/_sass/custom-styles.scss`:

```scss
// Blog index
.blog-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
}

.blog-item {
  margin-bottom: 1.5rem;
}

.blog-item-title {
  font-size: 1.125rem;
  margin: 0 0 0.25rem;

  a {
    color: var(--color-text);

    &:hover {
      color: var(--color-accent);
    }
  }
}

.blog-item-date {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.blog-empty {
  color: var(--color-text-secondary);
  font-style: italic;
  margin-top: 2rem;
}

// Post
.post {
  padding: 3rem 0;
}

.post-header {
  margin-bottom: 2rem;
}

.post-title {
  font-size: 2rem;
  margin: 0 0 0.5rem;
}

.post-date {
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
}

.post-content {
  h2 {
    margin-top: 2.5rem;
  }

  p {
    margin-bottom: 1.25rem;
  }

  code {
    font-family: $font-family-mono;
    font-size: 0.875em;
    background: var(--color-border);
    padding: 0.125rem 0.375rem;
    border-radius: 3px;
  }

  pre {
    background: var(--color-border);
    padding: 1rem;
    border-radius: 6px;
    overflow-x: auto;

    code {
      background: none;
      padding: 0;
    }
  }
}
```

**Step 3: Create blog index page**

Create `src/blog.md`:

```markdown
---
layout: page
title: Blog
permalink: /blog/
---

## Blog

{% if site.posts.size > 0 %}
<ul class="blog-list">
  {% for post in site.posts %}
  <li class="blog-item">
    <h3 class="blog-item-title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h3>
    <time class="blog-item-date" datetime="{{ post.date | date_to_xmlschema }}">
      {{ post.date | date: "%B %Y" }}
    </time>
  </li>
  {% endfor %}
</ul>
{% else %}
<p class="blog-empty">No posts yet.</p>
{% endif %}
```

**Step 4: Create _posts directory**

Run: `mkdir -p src/_posts && touch src/_posts/.gitkeep`

**Step 5: Verify build and preview**

Run: `make serve`
Expected: Blog page shows "No posts yet." at http://localhost:4000/blog/

**Step 6: Commit**

```bash
git add src/_layouts/post.html src/_sass/custom-styles.scss src/blog.md src/_posts/.gitkeep
git commit -m "feat: add blog infrastructure with post layout and index"
```

---

## Task 6: Responsive Styles and Polish

**Files:**
- Modify: `src/_sass/custom-styles.scss`

**Step 1: Add responsive styles**

Append to `src/_sass/custom-styles.scss`:

```scss
// Responsive
@media (max-width: 600px) {
  .hero-name {
    font-size: 2rem;
  }

  .hero-links {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .hero-cta {
    flex-direction: column;
    gap: 1rem;
  }

  .job-meta {
    flex-direction: column;
    gap: 0.25rem;

    .job-date::before {
      display: none;
    }
  }

  .header-wrapper {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .site-nav {
    gap: 1rem;
  }
}
```

**Step 2: Verify mobile preview**

Run: `make serve`
Test: Resize browser to mobile width, verify layout stacks properly

**Step 3: Commit**

```bash
git add src/_sass/custom-styles.scss
git commit -m "feat: add responsive styles for mobile"
```

---

## Task 7: Clean Up and Final Verification

**Files:**
- Delete: `src/index.markdown` (if not already deleted)
- Update: `src/_config.yml`

**Step 1: Update config for LinkedIn**

Check `src/_config.yml` - add LinkedIn if not present. If github_username exists, the config is fine.

**Step 2: Full build test**

Run: `make clean && make build`
Expected: Clean build with no errors

**Step 3: Visual verification**

Run: `make serve`

Verify:
- [ ] Home page hero displays correctly
- [ ] Theme toggle works (light/dark)
- [ ] Resume page shows all content
- [ ] Blog page shows empty state
- [ ] Navigation works between pages
- [ ] Mobile responsive layout works

**Step 4: Final commit if any changes**

```bash
git status
# If any uncommitted changes, add and commit with appropriate message
```

---

## Summary

After completing all tasks you will have:

1. **Custom SCSS** with design system variables and CSS custom properties for theming
2. **Base layout** with header, navigation, and theme toggle
3. **Home page** with hero section
4. **Resume page** with reformatted, scannable content
5. **Blog infrastructure** ready for future posts
6. **Responsive styles** for mobile devices

All changes are incremental commits on the `feature/site-redesign` branch.
