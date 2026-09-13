# PREMIUM PERSONAL PORTFOLIO

## Vanilla HTML + CSS + JavaScript Design Specification

> This document is the single source of truth for the visual design, UX, layout, animation, responsive behavior, accessibility, and implementation direction of this portfolio website.
>
> The AI Agent MUST read this document completely before implementing anything.

---

# 1. PROJECT OVERVIEW

Build a premium, modern, professional personal portfolio website for an Informatics undergraduate student.

The website must communicate:

* Technical ability
* Creativity
* Professionalism
* Communication
* Organizational experience
* Continuous learning
* Personal identity
* Future career potential

The website must NOT look like a generic student portfolio template.

The final result should feel like a:

> Premium creative developer portfolio.

Visual direction:

**Minimal + Elegant + Futuristic + Professional + Interactive**

---

# 2. TECHNOLOGY STACK

The website MUST use:

* HTML5
* CSS3
* Vanilla JavaScript

The website MUST NOT use:

* React
* Vue
* Angular
* Svelte
* Next.js
* Tailwind CSS
* shadcn/ui
* Bootstrap
* jQuery
* Framer Motion
* GSAP

The goal is to build the portfolio using native web technologies.

---

# 3. CORE PRINCIPLE

Use:

```text
HTML
    ↓
Structure

CSS
    ↓
Visual Design

JavaScript
    ↓
Interaction + Animation
```

Do not use JavaScript for styling that can easily be handled by CSS.

Use JavaScript only when interaction or dynamic behavior is required.

---

# 4. PROJECT STRUCTURE

Use a clean static website architecture.

Recommended structure:

```text
portfolio/
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
│
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── animations.js
│   ├── projects.js
│   └── interactions.js
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── documents/
│
├── data/
│   └── portfolio.js
│
├── README.md
└── design.md
```

If the project is simple enough, JavaScript files may be combined, but maintain clear separation of responsibilities.

---

# 5. HTML ARCHITECTURE

Use semantic HTML5.

Required semantic elements where appropriate:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Do not build the entire website using `<div>` elements.

Maintain proper heading hierarchy:

```text
h1
 ├── h2
 │    ├── h3
 │    └── h3
 └── h2
```

There should only be one primary `<h1>` on the homepage.

---

# 6. GLOBAL VISUAL STYLE

Primary visual identity:

> DARK PREMIUM EDITORIAL DEVELOPER

The website should feel:

* Sophisticated
* Clean
* Modern
* Technical
* Personal
* Confident

Avoid making it look like a cyberpunk website.

Avoid excessive neon.

Avoid excessive glowing effects.

---

# 7. COLOR SYSTEM

Primary background:

```text
#09090B
```

Secondary background:

```text
#111113
```

Card background:

```text
#141417
```

Elevated surface:

```text
#18181B
```

Primary text:

```text
#FAFAFA
```

Secondary text:

```text
#A1A1AA
```

Muted text:

```text
#71717A
```

Border:

```text
rgba(255,255,255,0.08)
```

Strong border:

```text
rgba(255,255,255,0.14)
```

Primary accent:

```text
#6366F1
```

Secondary accent:

```text
#8B5CF6
```

Soft accent:

```text
rgba(99,102,241,0.15)
```

Do not randomly introduce new colors.

---

# 8. CSS VARIABLES

Define the design system using CSS custom properties.

Example:

```css
:root {
  --bg-primary: #09090b;
  --bg-secondary: #111113;
  --bg-card: #141417;

  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;

  --border: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.14);

  --accent: #6366f1;
  --accent-secondary: #8b5cf6;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  --container-width: 1200px;

  --transition-fast: 180ms;
  --transition-normal: 300ms;
  --transition-slow: 700ms;
}
```

Do not hardcode the same values repeatedly.

---

# 9. TYPOGRAPHY

Use:

```text
Inter
```

or:

```text
Geist
```

via Google Fonts if external font loading is acceptable.

Fallback:

```css
font-family:
  Inter,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

Typography must have strong hierarchy.

---

# 10. HERO TYPOGRAPHY

Desktop:

```text
64px – 88px
```

Font weight:

```text
700
```

Line height:

```text
0.95 – 1.05
```

Letter spacing:

```text
-0.04em
```

Mobile:

```text
40px – 52px
```

The Hero heading should dominate the visual hierarchy.

---

# 11. CONTAINER

Use a centered container.

Maximum width:

```text
1200px
```

Example:

```css
.container {
  width: min(1200px, calc(100% - 40px));
  margin-inline: auto;
}
```

Desktop may use:

```text
calc(100% - 64px)
```

depending on viewport size.

---

# 12. NAVIGATION

Create a sticky navigation bar.

Desktop:

```text
┌───────────────────────────────────────────────┐
│ N.     About Projects Skills Experience  Contact │
└───────────────────────────────────────────────┘
```

Navigation characteristics:

* Sticky
* Transparent initially
* Becomes slightly opaque on scroll
* Backdrop blur
* Thin border
* Smooth transitions

Use JavaScript to detect scroll state.

Example behavior:

```text
Initial:
transparent

After scrolling:
background + blur + border
```

---

# 13. MOBILE NAVIGATION

On mobile:

Hide desktop navigation.

Show:

```text
Logo                       Menu ☰
```

When clicked:

Open a full-screen or side navigation overlay.

Menu:

```text
Home
About
Projects
Skills
Experience
Education
Contact
```

Use Vanilla JavaScript.

Do not use external menu libraries.

The menu must:

* Animate in
* Animate out
* Lock body scrolling when open
* Close when navigation item is clicked
* Close when Escape is pressed

---

# 14. HERO SECTION

The Hero must immediately answer:

> Who is this person?

Recommended structure:

```text
Small label

Hello, I'm

[NAME]

Informatics Student
&
Future Technology Professional

Short personal statement.

[View My Work]
[Let's Connect]

Small status indicator

                 Visual composition
```

Do not use:

> Welcome to my portfolio website.

The copy should be confident and personal.

---

# 15. HERO VISUAL

The Hero visual should not simply be a giant circular profile image.

Create an editorial composition.

Possible elements:

* Profile photo
* Abstract gradient
* Grid
* Code snippet
* Floating information card
* Technology tags
* Small status indicator

Keep the composition clean.

Maximum:

```text
2–4 floating decorative elements.
```

Do not overcrowd.

---

# 16. HERO BACKGROUND

Use a subtle grid.

Example:

```css
background-image:
  linear-gradient(...),
  linear-gradient(...);
```

Grid opacity:

```text
0.03 – 0.06
```

Add a subtle blurred radial gradient.

Do not make the background visually dominant.

---

# 17. HERO ANIMATION

Use Vanilla JavaScript to trigger initial animation states.

Animation sequence:

```text
Page load
   ↓
Badge
   ↓
Heading
   ↓
Description
   ↓
CTA
   ↓
Visual
```

Use staggered delays.

Example:

```text
100ms
200ms
300ms
400ms
500ms
```

Animation style:

```text
opacity: 0 → 1
transform: translateY(20px) → translateY(0)
```

CSS performs the actual transition.

JavaScript controls when animation classes are added.

---

# 18. PRIMARY BUTTON

Primary:

```text
View My Work
```

Secondary:

```text
Let's Connect
```

Button style:

* Medium radius
* Strong typography
* Subtle border
* Accent background for primary CTA

Hover:

```text
translateY(-2px)
```

Active:

```text
translateY(0)
```

Transition:

```text
180ms – 250ms
```

---

# 19. ABOUT SECTION

Structure:

```text
01 — ABOUT

Large heading

Personal introduction

Longer story

                 Quick facts
                 ────────────
                 Education
                 Focus
                 Location
                 Interests
```

Use a two-column layout on desktop.

Mobile:

```text
1 column
```

---

# 20. ABOUT VISUAL

Possible visual:

* Profile image
* Workspace
* Code editor mockup
* Abstract graphic

The visual must support the story.

Do not use random stock photography.

---

# 21. PROJECTS SECTION

Title:

```text
Selected Work
```

Description:

```text
A collection of projects I've built while learning,
experimenting, and solving problems.
```

Projects are the main proof of technical ability.

---

# 22. FEATURED PROJECT

The first project should receive larger visual treatment.

Structure:

```text
┌──────────────────────────────────────┐
│                                      │
│           PROJECT IMAGE              │
│                                      │
├──────────────────────────────────────┤
│ FEATURED                             │
│                                      │
│ Project Name                         │
│ Description                          │
│                                      │
│ HTML • CSS • JavaScript              │
│                                      │
│ View Project →                       │
└──────────────────────────────────────┘
```

---

# 23. PROJECT GRID

Other projects:

```text
Desktop:
2 columns

Tablet:
2 columns

Mobile:
1 column
```

Each project card contains:

* Image
* Category
* Title
* Description
* Technologies
* GitHub
* Demo

Only show links that actually exist.

---

# 24. PROJECT HOVER

On hover:

```text
Image:
scale(1.03)

Card:
translateY(-4px)

Arrow:
translateX(4px)
```

Border becomes slightly brighter.

Keep animation subtle.

---

# 25. PROJECT FILTER

Optional.

If implemented:

Categories:

```text
All
Web
Python
Database
UI/UX
Other
```

Use Vanilla JavaScript.

Filtering should:

1. Detect selected category.
2. Hide irrelevant projects.
3. Animate visible projects.
4. Update active filter.

Do not use a library.

---

# 26. SKILLS SECTION

Group skills.

Example:

```text
Programming
Python
JavaScript
HTML
CSS

Database
MySQL
MariaDB
SQL

Frontend
HTML
CSS
JavaScript

Tools
Git
GitHub
VS Code
Figma
Canva
```

Only include technologies actually known.

---

# 27. SKILL CARDS

Use compact visual cards.

Structure:

```text
[ICON]

Technology

Short context
```

Avoid fake percentage bars.

Do not display:

```text
90%
85%
```

unless real data exists.

---

# 28. EXPERIENCE

Use a timeline.

Example:

```text
2026
│
● Organization
│  Position
│  Description
│
2025
│
● Internship
│  Position
│  Description
```

Timeline should be visually elegant.

Use JavaScript to reveal timeline entries as they enter the viewport.

---

# 29. ORGANIZATION EXPERIENCE

Treat organization experience professionally.

Focus on:

* Leadership
* Communication
* Teamwork
* Responsibility
* Event management
* Administration

Possible experiences:

* Secretary
* Event committee
* MC
* Moderator
* Protocol
* Editorial activities

Do not present this as an unstructured activity dump.

---

# 30. EDUCATION

Use a clean timeline or editorial card.

Example:

```text
Bachelor of Informatics

University Name

2025 — Present

Relevant areas:
Programming
Database
Algorithms
UI/UX
```

High school may also be included.

---

# 31. HIGHLIGHTS

Optional.

Possible format:

```text
05+
Projects

03+
Organizations

02+
Years Active

∞
Things Still Learning
```

Only use verified information.

Never fabricate statistics.

---

# 32. CONTACT SECTION

The final CTA should be visually strong.

Headline:

```text
Let's build something meaningful.
```

Supporting text:

```text
Have an opportunity, collaboration, or simply want to say hello?
My inbox is open.
```

Buttons:

```text
Email Me
GitHub
LinkedIn
```

---

# 33. FOOTER

Minimal.

Example:

```text
© 2026 [NAME]

Built with HTML, CSS & JavaScript.
```

Include social links.

Optional:

```text
Back to top ↑
```

---

# 34. SCROLL ANIMATION SYSTEM

Use:

```text
IntersectionObserver
```

for scroll-triggered animations.

Do NOT attach expensive scroll listeners to every element.

Create one reusable observer.

Example concept:

```javascript
const observer = new IntersectionObserver(...)
```

Elements can use:

```html
<section data-animate>
```

JavaScript adds:

```text
is-visible
```

when the element enters the viewport.

---

# 35. ANIMATION CLASSES

Create reusable classes:

```text
fade-up
fade-down
fade-left
fade-right
scale-in
blur-in
stagger
```

Example:

```css
[data-animate] {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 700ms ease,
    transform 700ms ease;
}

[data-animate].is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

# 36. REDUCED MOTION

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

* Disable decorative animations
* Reduce transitions
* Remove parallax
* Make content immediately visible

Accessibility has priority over animation.

---

# 37. CURSOR EFFECT

Optional.

Desktop only.

Possible effect:

```text
small radial glow
```

The native cursor MUST remain visible.

Disable on:

```text
touch devices
```

Do not use an expensive animation loop.

Use:

```text
requestAnimationFrame
```

only if necessary.

---

# 38. SCROLL PROGRESS

Optional.

A very thin progress indicator may appear at the top of the page.

It shows:

```text
0% ─────────────── 100%
```

Use Vanilla JavaScript.

Keep it extremely subtle.

---

# 39. BACK TO TOP

When the visitor scrolls down:

Show:

```text
↑
```

button.

On click:

```javascript
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
```

Hide it near the top.

---

# 40. ACTIVE NAVIGATION

Use IntersectionObserver to detect the currently visible section.

Example:

```text
About
Projects
Skills
Experience
Contact
```

The corresponding navigation item receives an active state.

---

# 41. RESPONSIVE DESIGN

The website MUST be mobile-first.

Breakpoints may include:

```text
480px
768px
1024px
1280px
```

Do not design desktop first and simply shrink it.

---

# 42. MOBILE DESIGN

Mobile requirements:

* Comfortable spacing
* Large touch targets
* No horizontal overflow
* Readable typography
* Stacked sections
* Simplified hero visual
* Mobile navigation
* Reduced decorative elements

Buttons should be easy to tap.

Minimum recommended touch target:

```text
44px
```

---

# 43. TABLET DESIGN

Use:

* Moderate typography
* Two-column layouts where appropriate
* Reduced spacing
* Full navigation if space allows

---

# 44. DESKTOP DESIGN

Use:

* Large typography
* Strong visual hierarchy
* Generous whitespace
* Two-column layouts
* Large project cards
* Editorial compositions

---

# 45. ACCESSIBILITY

Required:

* Semantic HTML
* Proper headings
* Alt text
* Keyboard navigation
* Visible focus states
* Accessible buttons
* Accessible links
* ARIA labels where necessary
* Sufficient contrast

Do not rely solely on color to communicate state.

---

# 46. IMAGE RULES

Use optimized images.

Prefer:

```text
WebP
AVIF
```

where possible.

Always provide:

```html
alt=""
```

with meaningful descriptions.

Do not use generic stock images for personal identity.

---

# 47. CONTENT RULES

NEVER INVENT PERSONAL INFORMATION.

Do not fabricate:

* Jobs
* Internships
* Awards
* Certifications
* Projects
* Clients
* Companies
* Skills
* Testimonials
* Social accounts
* Achievements
* URLs

If information is missing:

Use:

```text
YOUR_INFORMATION
```

or a clearly identifiable placeholder.

---

# 48. PERSONAL DATA

Store portfolio data separately.

Recommended:

```text
data/portfolio.js
```

Example:

```javascript
const portfolio = {
  personal: {
    name: "YOUR_NAME",
    role: "Informatics Student",
    location: "Indonesia",
    email: "YOUR_EMAIL"
  },

  social: {
    github: "",
    linkedin: "",
    instagram: ""
  },

  skills: [],

  projects: [],

  experience: [],

  education: [],

  organizations: []
};
```

The UI should read data from this object whenever practical.

---

# 49. JAVASCRIPT ARCHITECTURE

JavaScript should be modular.

Recommended responsibilities:

### main.js

Initialize the application.

### navigation.js

Handle:

* Mobile menu
* Sticky navigation
* Active navigation

### animations.js

Handle:

* IntersectionObserver
* Scroll reveal
* Stagger animations

### projects.js

Handle:

* Project rendering
* Filtering
* Project interactions

### interactions.js

Handle:

* Back to top
* Cursor
* Scroll progress
* Other micro-interactions

---

# 50. NO INLINE JAVASCRIPT

Avoid:

```html
<button onclick="...">
```

Prefer:

```javascript
button.addEventListener("click", ...)
```

Keep behavior inside JS files.

---

# 51. CSS ARCHITECTURE

Use:

```text
style.css
```

for:

* Variables
* Reset
* Typography
* Components
* Layout

Use:

```text
responsive.css
```

for responsive rules.

Use:

```text
animations.css
```

for animation definitions.

Do not scatter styles randomly.

---

# 52. CSS RESET

Use a lightweight reset.

Example:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
}
```

---

# 53. PERFORMANCE

Prioritize:

* Small JavaScript bundle
* Optimized images
* Lazy loading
* Minimal dependencies
* Efficient DOM manipulation
* IntersectionObserver
* CSS animations where possible

Do not create unnecessary animation loops.

---

# 54. SEO

Add:

```html
<title>
<meta name="description">
<meta name="author">
<meta name="viewport">
```

Example:

```text
[NAME] — Informatics Student & Developer
```

---

# 55. OPEN GRAPH

Include:

```text
og:title
og:description
og:image
og:url
```

---

# 56. FAVICON

Use a minimal personal favicon.

Possible:

```text
Initial
Monogram
Minimal geometric symbol
```

---

# 57. DESIGN DETAILS

Use subtle:

* Borders
* Shadows
* Gradients
* Blur
* Grid patterns
* Lines
* Accent highlights

Do NOT use all effects simultaneously.

The design should breathe.

---

# 58. THINGS TO AVOID

DO NOT create:

* Generic portfolio template
* Neon cyberpunk website
* Excessive glassmorphism
* Excessive gradients
* Rainbow colors
* Huge glowing text
* Excessive rounded cards
* Excessive shadows
* Excessive floating elements
* Fake testimonials
* Fake clients
* Fake statistics
* Fake achievements
* Fake URLs
* Excessive animations
* Background video
* Heavy particle systems

---

# 59. UX PRINCIPLE

Every section must answer one question.

Hero:

> Who am I?

About:

> What is my story?

Projects:

> What can I build?

Skills:

> What do I know?

Experience:

> What have I done?

Education:

> What is my academic background?

Organization:

> What have I contributed to?

Contact:

> How can someone reach me?

---

# 60. PAGE STRUCTURE

Default order:

```text
Navbar

Hero

About

Projects

Skills

Experience

Education

Organization

Contact

Footer
```

---

# 61. FINAL VISUAL GOAL

The website should communicate:

> "This person is still a student, but already presents themselves professionally."

The balance must be:

```text
Student Identity
        +
Technical Ability
        +
Creativity
        +
Communication
        +
Organization
        +
Professionalism
```

---

# 62. DEFINITION OF DONE

The project is complete when:

* [ ] HTML is semantic
* [ ] CSS design system implemented
* [ ] JavaScript interactions implemented
* [ ] Responsive design works
* [ ] Navigation works
* [ ] Mobile menu works
* [ ] Hero completed
* [ ] About completed
* [ ] Projects completed
* [ ] Skills completed
* [ ] Experience completed
* [ ] Education completed
* [ ] Organization completed
* [ ] Contact completed
* [ ] Footer completed
* [ ] Scroll animations implemented
* [ ] Reduced-motion supported
* [ ] Accessibility checked
* [ ] SEO metadata added
* [ ] No fake information
* [ ] No broken links
* [ ] No console errors
* [ ] No horizontal overflow
* [ ] Website works without JavaScript for basic content access
* [ ] Website works on mobile
* [ ] Website works on tablet
* [ ] Website works on desktop

---

# 63. AI AGENT DEVELOPMENT RULES

Before implementing:

1. Read `design.md` completely.
2. Inspect the existing project.
3. Determine what already exists.
4. Do not unnecessarily delete working files.
5. Follow the architecture defined here.
6. Build semantic HTML.
7. Build the CSS design system.
8. Implement JavaScript interactions.
9. Test responsiveness.
10. Test accessibility.
11. Test animations.
12. Fix errors.
13. Verify no console errors.
14. Verify no broken links.
15. Verify production-ready structure.

---

# 64. IMPORTANT

The AI Agent MUST NOT:

* Convert this project to React.
* Introduce Tailwind.
* Introduce Bootstrap.
* Introduce shadcn/ui.
* Introduce Vue.
* Introduce Angular.
* Introduce unnecessary frameworks.
* Replace Vanilla JavaScript with animation libraries.
* Create a generic template.
* Invent personal information.

The implementation must remain:

**HTML + CSS + Vanilla JavaScript.**

---

# 65. FINAL DESIGN STATEMENT

The final website should feel:

**Premium.**

**Clean.**

**Technical.**

**Human.**

**Modern.**

**Confident.**

It should look like a carefully designed professional portfolio rather than a website generated from a template.

> **Content is the hero. Design amplifies it.**
