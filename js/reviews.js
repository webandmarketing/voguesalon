/**
 * reviews.js — dedicated Reviews page: full summary + all highlights.
 */
import { renderLayout } from "./common.js";
import { applySEO, buildLocalBusinessSchema } from "./seo.js";
import { siteConfig } from "../data/siteConfig.js";
import { salonData } from "../data/salonData.js";
import { reviewSummary, reviewHighlights } from "../data/reviewsData.js";
import { sectionHeadingHTML, ratingBadgeHTML, testimonialCardHTML, ctaSectionHTML } from "./components.js";

renderLayout();

applySEO({
  title: "Reviews",
  description: `See what customers say about ${siteConfig.brandName} — rated ${salonData.rating}★ from ${salonData.reviewCount}+ Google reviews.`,
  path: "reviews.html",
  schema: [buildLocalBusinessSchema()],
});

document.getElementById("reviews-heading").innerHTML = sectionHeadingHTML({
  eyebrow: "Testimonials",
  title: "What Our Customers Say",
  subtitle: "A transparent summary of sentiment from our Google Business Profile — see the note below on how this is sourced.",
});

document.getElementById("review-summary").innerHTML = `
  <span class="review-summary__value">${reviewSummary.aggregateRating}</span>
  ${ratingBadgeHTML(reviewSummary.aggregateRating, reviewSummary.reviewCount, "lg")}
  <p class="review-summary__source">Based on ${reviewSummary.reviewCount.toLocaleString("en-IN")}+ reviews on ${reviewSummary.source}</p>
  <p class="review-summary__note">${reviewSummary.ratingBreakdownNote}</p>`;

document.getElementById("reviews-grid").innerHTML = reviewHighlights.map(testimonialCardHTML).join("");

document.getElementById("cta-section").outerHTML = ctaSectionHTML({
  eyebrow: "Join Our Happy Customers",
  title: "Book Your Appointment Today",
  subtitle: "Experience the service our customers keep coming back for.",
});
