# Nuevarix Dev — Company Website

Modern, fully-responsive single-page site for **Nuevarix Dev**, a senior AI engineering studio.
Built with pure HTML, CSS, and vanilla JavaScript — no build step, no framework, deploys anywhere.

## Quick start

Just open `index.html` in your browser. That's it. No npm, no node, no build.

```
Nuevarix Dev/
├─ index.html       ← Page markup (all sections)
├─ styles.css       ← Dark theme, animations, responsive layout
├─ script.js        ← Nav, scroll reveals, counters, contact form
└─ README.md
```

For local development with live reload, you can use any static server, e.g.:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then open http://localhost:8000

## Sections

1. **Hero** — animated gradient orbs, floating capability cards, primary CTA
2. **Stats bar** — animated counters (40+ projects, 25+ clients, etc.)
3. **Services** — 6 cards: Agentic AI, Generative AI, AI SaaS, Automation, Strategy, MLOps
4. **Industries** — 8 verticals (Healthcare, Fintech, E-commerce, EdTech, …)
5. **Selected work** — 6 project case studies
6. **Process** — 4-step delivery flow
7. **Team** — Asad Nawaz (CEO), Imran Ashraf (CTO), Aleeza Ashraf (PM)
8. **Testimonials** — 3 client quotes
9. **CTA + Contact form** — mailto-based, works without a backend
10. **Footer** — sitemap, socials, copyright

## Editing the content

All copy lives in `index.html`. Common edits:

| What to change | Where |
|---|---|
| Tagline / hero title | `<h1 class="hero-title">` near the top |
| Stats numbers | Search `data-count="..."` |
| Services list | The 6 `<article class="service-card">` blocks |
| Projects | The 6 `<article class="project-card">` blocks |
| Team members | The 3 `<article class="team-card">` blocks |
| Email / GitHub / LinkedIn | Search `aideveloper250@gmail.com`, `github.com`, `linkedin.com` |
| Brand colors | `:root` in `styles.css` (`--primary`, `--primary-2`) |

## Contact form

The form opens the visitor's email client pre-filled with their message, sent to
`aideveloper250@gmail.com`. To use a real backend instead:

- **Formspree** — change the form's `action` to your Formspree endpoint and remove the JS handler
- **Netlify Forms** — add `netlify` and `name="contact"` attributes to the `<form>` tag
- **Custom** — POST to your own API in the submit handler in `script.js`

## Deployment

Any static host works. Pick one:

### Vercel (recommended)
```bash
npx vercel --prod
```

### Netlify
Drag the project folder onto https://app.netlify.com/drop

### GitHub Pages
1. Push the folder to a repo
2. Settings → Pages → Source: `main` branch, root → Save
3. Done

### Cloudflare Pages
Connect your GitHub repo at https://pages.cloudflare.com — no build command needed.

## Brand assets

The current logo is an inline SVG (an "N" mark with a cyan→purple gradient).
To replace with a custom logo:

1. Drop your SVG into an `assets/` folder
2. Replace the `<svg>` block inside `<span class="logo-mark">` (appears twice — nav and footer)
3. Update the favicon in the `<link rel="icon">` tag in `<head>`

## Browser support

Modern Chrome, Firefox, Safari, Edge. Uses `IntersectionObserver`, `backdrop-filter`,
CSS custom properties, and CSS grid — all widely supported. Reduced-motion users get
a static experience automatically.

## Credits

- Fonts: Space Grotesk + Inter (Google Fonts)
- Icons: Inline SVG (no external icon library)
