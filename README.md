# Vogue Salon (Lakme Salon) — Kanchan Bagh, Indore

A premium, fully static, data-driven marketing website for Vogue Salon /
Lakme Salon, built to be pushed straight to **GitHub Pages** — plain
HTML/CSS/JS, zero build step, zero npm install required to run it.

---

## 1. Running it locally

Because the pages load JavaScript as ES modules (`<script type="module">`),
browsers require the files to be served over `http://`, not opened directly
as `file://`. From this folder, run any static server, e.g.:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

No build tools, no `npm install`, no bundler — this **is** the deployable
site.

## 2. Deploying to GitHub Pages

1. Push the contents of this folder to a GitHub repository (this folder can
   *be* the repo root, or a `/docs` folder — either works with Pages).
2. In the repo settings → Pages, set the source to the branch/folder you
   pushed to.
3. Update `data/siteConfig.js` → `seo.siteUrl` and `robots.txt` /
   `sitemap.xml` with your real `https://<username>.github.io/<repo>` URL
   (needed for correct canonical tags and structured data — everything else
   uses relative links, so the site works before this step too).
4. Done — GitHub Pages serves static files directly, which is exactly what
   this project is.

## 3. Project structure

```
perfectcut-1.0.0/
├── index.html          Home
├── services.html        Full service catalogue (filterable by category)
├── about.html            Salon story, values, team
├── gallery.html          Filterable photo gallery + lightbox
├── reviews.html          Full reviews/testimonials page
├── contact.html          Address, map, hours, WhatsApp enquiry form, FAQ
├── 404.html              GitHub Pages 404 fallback
├── robots.txt / sitemap.xml
├── css/
│   └── theme.css         ALL styling — design tokens (CSS variables) + components
├── data/                 ← EVERY piece of editable content lives here
│   ├── siteConfig.js     Brand identity, contact links, social, SEO defaults, theme tokens
│   ├── salonData.js      Business facts, address, hours, rating, highlights
│   ├── servicesData.js   Full service catalogue + categories
│   ├── reviewsData.js    Review summary + testimonial highlights
│   ├── galleryData.js    Gallery images + categories
│   ├── faqData.js        FAQ question/answer pairs
│   ├── navigationData.js Header/footer navigation links
│   ├── teamData.js       Team/department cards
│   ├── offersData.js     Homepage offers/promotions
│   └── statsData.js      "Why choose us" stats (derived from the data above)
└── js/
    ├── icons.js          Inline-SVG icon set (no external icon library)
    ├── format.js         Small formatting helpers (phone/WhatsApp links, address, time)
    ├── seo.js             Builds <title>/meta/OG tags + JSON-LD structured data from data/*
    ├── components.js     Reusable "component" functions — one HTML template per card/section
    ├── common.js          Renders the shared header, footer, announcement bar & mobile bottom bar
    └── home.js / services.js / about.js / gallery.js / reviews.js / contact.js
                            One small script per page that wires data + components together
```

**The rule this project follows throughout:** no HTML page and no `js/*.js`
renderer contains salon-specific copy, prices, links, or images directly.
Every page script imports data from `data/*.js` and hands it to a function
in `js/components.js` that turns it into HTML. If you can't find a piece of
text in `data/`, it's a UI label (e.g. "Enquire / Book") rather than
salon-specific content.

## 4. How to edit things

| I want to change... | Edit this file |
|---|---|
| Salon name, phone, address, socials, SEO defaults | `data/siteConfig.js` |
| Rating, review count, hours, "why choose us" highlights | `data/salonData.js` |
| A service, its price/duration/image, or add a new one | `data/servicesData.js` |
| Reviews / testimonials | `data/reviewsData.js` |
| Gallery photos | `data/galleryData.js` |
| FAQs | `data/faqData.js` |
| Navigation menu items | `data/navigationData.js` |
| Team/department cards | `data/teamData.js` |
| Homepage offers | `data/offersData.js` |
| Colors / fonts (theme) | CSS variables at the top of `css/theme.css` (mirror the values in `data/siteConfig.js` → `theme` for consistency) |
| Page-level SEO title/description | The `applySEO({...})` call near the top of each `js/<page>.js` file |

No HTML editing is required for any of the above — every page re-renders
its content from the data files on load.

### Adding a service
Add an object to the `servicesData` array in `data/servicesData.js`:
```js
{
  id: "unique-id",
  category: "hair", // must match an id in serviceCategories
  name: "Service Name",
  shortDescription: "One-line summary.",
  description: "Longer description.",
  price: null,              // or a string like "₹499 onwards" once verified
  pricingLabel: "Contact for pricing",
  duration: "30–45 min",
  image: "https://...",     // or a local path under assets/
  popular: false,
}
```
It automatically appears on the Services page (in its category and "All"),
and can be surfaced on the homepage by adding `popular: true`.

### Adding a review
Add an object to `reviewHighlights` in `data/reviewsData.js`. See the
comment at the top of that file — **do not** invent a reviewer's name,
date or a verbatim quote you can't verify. If you have a real, verified
review, set `isVerifiedQuote: true` and fill in `reviewerName` and `date`.

### Replacing images
This project ships with verified-working, freely-licensed stock photography
(Unsplash License) as tasteful placeholders — no official photography of
this exact salon location was available to source responsibly. To replace
any image with real photography:
1. Add the file under a new `assets/images/` folder.
2. Update the relevant `src`/`thumb`/`image`/`photo` field in `data/*.js`
   to point at it (e.g. `assets/images/my-photo.jpg`).
No component changes are needed.

### Changing theme colors
Edit the `:root` custom properties at the top of `css/theme.css`
(`--color-primary`, `--color-accent`, etc.), and mirror the same values in
`data/siteConfig.js` → `theme` so the two stay in sync (the JS theme object
is there for any future JS-driven theming/reporting, e.g. a dark-mode
toggle or a theme picker admin page).

### Configuring SEO
- Global defaults (site title, description, keywords, OG image, canonical
  domain): `data/siteConfig.js` → `seo`.
- Per-page title/description/structured-data: the `applySEO({...})` call
  in each `js/<page>.js` file.
- Structured data (LocalBusiness, Service list, FAQ, Breadcrumbs) is built
  entirely from `data/salonData.js` / `servicesData.js` / `faqData.js` by
  `js/seo.js` — it is never duplicated by hand in any HTML `<script>` tag.

### Adding another salon (re-skinning this project)
Because all content lives in `data/` and `css/theme.css`'s CSS variables:
1. Replace the contents of every file in `data/` with the new salon's
   information (keep the same shape/keys).
2. Update the color tokens in `css/theme.css`.
3. Swap image URLs in `galleryData.js`/`servicesData.js`/`teamData.js`.
4. Everything else — HTML pages, `js/components.js`, `js/common.js`,
   `js/seo.js` — needs **no changes** at all.

## 5. Content integrity — what's verified vs. placeholder

This project deliberately avoids inventing facts. A quick summary (full
detail is in code comments at the top of each affected data file):

- **Verified** (from the Google Business Profile data provided, and
  cross-referenced against public salon-listing aggregators referencing
  this exact address/phone): business name, alternate name, address,
  phone, category, aggregate rating (4.5★ / 814 reviews), and the general
  service categories offered.
- **Indicative, not officially confirmed**: opening hours (sourced from a
  third-party listing, not the business directly) — the site displays a
  visible note asking customers to call ahead.
- **Never invented**: exact prices (`servicesData.js` uses "Contact for
  pricing" instead), named staff members/credentials (`teamData.js` uses
  departments, not fabricated names), individual customer reviews with
  invented names/dates (`reviewsData.js` uses transparently-labelled
  "aggregated sentiment" instead — see that file's header comment), years
  in business, awards, or certifications.
- **Stock photography**: all gallery/service images are freely-licensed
  Unsplash photos chosen to thematically match each category, not photos
  of the real premises — every URL was verified to return HTTP 200 before
  being added.

## 6. Pre-launch checklist

- [ ] Update `data/siteConfig.js` → `seo.siteUrl` with your real GitHub
      Pages URL (and in `robots.txt`/`sitemap.xml`).
- [ ] Confirm opening hours directly with the salon and update
      `data/salonData.js` if they differ.
- [ ] Replace placeholder gallery/service images with real, licensed
      photography once available.
- [ ] Fill in `data/siteConfig.js` → `social` with real Instagram/Facebook
      URLs if the salon has them.
- [ ] Add a real `assets/og-cover.jpg` (1200×630) for social share previews
      (referenced by `siteConfig.seo.ogImage`).
- [ ] If a real booking platform (Zenoti/Vagaro/etc.) becomes available,
      set `data/siteConfig.js` → `bookingUrl` and wire it into the "Book an
      Appointment" CTAs.

---

Design and original template structure inherited from the "Perfectcut"
HTML template (MIT-licensed, via ThemeWagon/Free HTML Templates); the
markup, styling, content architecture and all business content in this
repository have been rebuilt from scratch for Vogue Salon.
