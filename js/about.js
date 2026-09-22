/**
 * about.js — About page: salon story, values/highlights, team.
 */
import { renderLayout } from "./common.js";
import { applySEO, buildLocalBusinessSchema, buildBreadcrumbSchema } from "./seo.js";
import { siteConfig } from "../data/siteConfig.js";
import { salonData } from "../data/salonData.js";
import { teamData } from "../data/teamData.js";
import { galleryData } from "../data/galleryData.js";
import { sectionHeadingHTML, featureCardHTML, teamCardHTML, ctaSectionHTML } from "./components.js";

renderLayout();

applySEO({
  title: "About Us",
  description: `Learn about ${siteConfig.brandName} (${siteConfig.brandAlternateName}) in ${siteConfig.address.area}, ${siteConfig.address.city} — our story, values and team.`,
  path: "about.html",
  schema: [buildLocalBusinessSchema(), buildBreadcrumbSchema([{ name: "Home", path: "index.html" }, { name: "About", path: "about.html" }])],
});

const aboutImage = galleryData.find((g) => g.id === "interior-04");

document.getElementById("about-hero").innerHTML = `
  ${sectionHeadingHTML({ eyebrow: "Our Story", title: `About ${salonData.name}`, subtitle: salonData.description })}
`;

document.getElementById("about-media").innerHTML = `<img src="${aboutImage.src}" alt="${aboutImage.alt}" loading="lazy">`;

document.getElementById("about-values-heading").innerHTML = sectionHeadingHTML({
  eyebrow: "What We Stand For",
  title: "Our Values",
});
document.getElementById("about-values-grid").innerHTML = salonData.highlights.map(featureCardHTML).join("");

document.getElementById("about-hygiene").innerHTML = `
  <div class="value-card">
    <h3>Hygiene &amp; Cleanliness</h3>
    <p>Tools are cleaned between clients, consumables are fresh, and our space is kept tidy so every visit feels comfortable and safe.</p>
  </div>
  <div class="value-card">
    <h3>Customer-First Approach</h3>
    <p>Every service starts with a short consultation, so your stylist understands what you want before any scissors or colour come out.</p>
  </div>
  <div class="value-card">
    <h3>Quality Products</h3>
    <p>We use professional-grade products suited to each treatment. Let your stylist know about any sensitivities beforehand.</p>
  </div>
  <div class="value-card">
    <h3>Local &amp; Trusted</h3>
    <p>Rated ${salonData.rating}★ from ${salonData.reviewCount}+ Google reviews, we're proud to be a go-to salon for the Kanchan Bagh community.</p>
  </div>`;

document.getElementById("team-heading").innerHTML = sectionHeadingHTML({
  eyebrow: "Meet the Team",
  title: "The People Behind Your Look",
  subtitle: "Organised by specialism so you always know who's caring for your hair, skin or nails.",
});
document.getElementById("team-grid").innerHTML = teamData.map(teamCardHTML).join("");

document.getElementById("cta-section").outerHTML = ctaSectionHTML({
  eyebrow: "Come Say Hello",
  title: "Experience Vogue Salon for Yourself",
  subtitle: "We'd love to welcome you for your next haircut, colour, or bridal consultation.",
});
