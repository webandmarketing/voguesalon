/**
 * home.js — assembles the homepage entirely from data + components.
 */
import { renderLayout } from "./common.js";
import { applySEO, buildLocalBusinessSchema, buildFaqSchema } from "./seo.js";
import { siteConfig } from "../data/siteConfig.js";
import { salonData } from "../data/salonData.js";
import { getPopularServices } from "../data/servicesData.js";
import { offersData } from "../data/offersData.js";
import { reviewSummary, reviewHighlights } from "../data/reviewsData.js";
import { galleryData } from "../data/galleryData.js";
import { faqData } from "../data/faqData.js";
import { getStats } from "../data/statsData.js";
import { to12Hour } from "./format.js";
import { icon } from "./icons.js";
import {
  sectionHeadingHTML,
  ratingBadgeHTML,
  featureCardHTML,
  statItemHTML,
  offerCardHTML,
  serviceCardHTML,
  testimonialCardHTML,
  styleInspirationItemHTML,
  faqItemHTML,
  initFaqAccordion,
  ctaSectionHTML,
} from "./components.js";

renderLayout();

applySEO({
  title: null, // use the full site title on the homepage
  description: siteConfig.metaDescription,
  path: "index.html",
  schema: [buildLocalBusinessSchema(), buildFaqSchema()],
});

/* ---------- Hero ---------- */
const heroImage = galleryData.find((g) => g.id === "interior-01");
const today = salonData.openingHours[0];
document.getElementById("hero").innerHTML = `
  <div class="hero__media"><img src="${heroImage.src}" alt="" loading="eager"></div>
  <div class="hero__scrim"></div>
  <div class="container hero__content">
    <p class="hero__eyebrow">${salonData.category} · ${salonData.address.area}, ${salonData.address.city}</p>
    <h1 class="hero__title">${siteConfig.brandName}<span class="hero__title-alt"> (${siteConfig.brandAlternateName})</span></h1>
    <p class="hero__tagline">${siteConfig.tagline}</p>
    <p class="hero__description">${salonData.shortDescription}</p>
    <div class="hero__rating">${ratingBadgeHTML(salonData.rating, salonData.reviewCount, "lg")}</div>
    <div class="hero__actions">
      <a href="contact.html" class="btn btn--secondary btn--lg">Book an Appointment ${icon("arrowRight", 18)}</a>
      <a href="${siteConfig.contact.primaryPhoneHref}" class="btn btn--outline btn--lg" style="border-color:#fff;color:#fff;">${icon("phone", 18)}<span>Call Now</span></a>
    </div>
    <div class="hero__meta">
      <span>${icon("location", 16)} ${salonData.address.line1}, ${salonData.address.landmark}</span>
      <span>${icon("clock", 16)} Open daily · ${to12Hour(today.opens)} – ${to12Hour(today.closes)}</span>
    </div>
  </div>`;

/* ---------- Stats ---------- */
document.getElementById("stats-strip").innerHTML = getStats().map(statItemHTML).join("");

/* ---------- Introduction ---------- */
const introImage = galleryData.find((g) => g.id === "hair-01");
document.getElementById("introduction").innerHTML = `
  <div class="introduction__media"><img src="${introImage.src}" alt="${introImage.alt}" loading="lazy"></div>
  <div class="introduction__content">
    ${sectionHeadingHTML({ eyebrow: "Welcome", title: `About ${salonData.name}`, align: "left" })}
    <p>${salonData.description}</p>
    <ul class="introduction__points">
      ${salonData.highlights.map((h) => `<li><strong>${h.title}.</strong> ${h.description}</li>`).join("")}
    </ul>
    <a href="about.html" class="btn btn--outline">Learn More About Us ${icon("arrowRight", 18)}</a>
  </div>`;

/* ---------- Why choose us ---------- */
document.getElementById("why-choose-heading").innerHTML = sectionHeadingHTML({
  eyebrow: "Why Choose Us",
  title: "The Vogue Salon Difference",
  subtitle: "Everything about your visit is designed around consistent, quality care.",
});
document.getElementById("why-choose-grid").innerHTML = salonData.highlights.map(featureCardHTML).join("");

/* ---------- Popular services ---------- */
document.getElementById("featured-services-heading").innerHTML = sectionHeadingHTML({
  eyebrow: "Our Menu",
  title: "Featured Treatments",
  subtitle: "A few of our most-booked services — see the full menu for everything we offer.",
});
document.getElementById("featured-services-grid").innerHTML = getPopularServices().slice(0, 6).map(serviceCardHTML).join("");

/* ---------- Offers ---------- */
document.getElementById("offers-heading").innerHTML = sectionHeadingHTML({
  eyebrow: "Offers",
  title: "Current Offers & Promotions",
  subtitle: "Ask our team about the latest offers when you visit — availability and terms may change.",
});
document.getElementById("offers-grid").innerHTML = offersData.map(offerCardHTML).join("");

/* ---------- Style inspiration ---------- */
document.getElementById("style-inspiration-heading").innerHTML = sectionHeadingHTML({
  eyebrow: "Style Inspiration",
  title: "Looks Our Guests Love",
  subtitle: "A glimpse of the finishes our stylists create — from sleek smoothening to editorial colour.",
});
const inspirationImages = galleryData.filter((g) => ["hair", "styling", "makeup"].includes(g.category)).slice(0, 5);
document.getElementById("style-inspiration-grid").innerHTML = inspirationImages.map(styleInspirationItemHTML).join("");

/* ---------- Reviews ---------- */
document.getElementById("reviews-heading").innerHTML = sectionHeadingHTML({
  eyebrow: "Testimonials",
  title: "What Our Customers Say",
  subtitle: "Real sentiment from our Google Business Profile, summarised transparently.",
});
document.getElementById("review-summary").innerHTML = `
  <span class="review-summary__value">${reviewSummary.aggregateRating}</span>
  ${ratingBadgeHTML(reviewSummary.aggregateRating, reviewSummary.reviewCount, "lg")}
  <p class="review-summary__source">Based on ${reviewSummary.reviewCount.toLocaleString("en-IN")}+ reviews on ${reviewSummary.source}</p>`;
document.getElementById("reviews-grid").innerHTML = reviewHighlights.slice(0, 3).map(testimonialCardHTML).join("");

/* ---------- FAQ preview (first 4) ---------- */
document.getElementById("faq-heading").innerHTML = sectionHeadingHTML({
  eyebrow: "FAQs",
  title: "Good to Know",
});
const faqList = document.getElementById("faq-list");
faqList.innerHTML = faqData.slice(0, 4).map(faqItemHTML).join("");
initFaqAccordion(faqList);

/* ---------- CTA ---------- */
document.getElementById("cta-section").outerHTML = ctaSectionHTML({
  eyebrow: "Ready When You Are",
  title: "Book Your Visit at Vogue Salon Today",
  subtitle: "Call, WhatsApp, or stop by — our team in Kanchan Bagh is ready to take care of you.",
});
