/**
 * components.js
 * ------------------------------------------------------------------
 * Small, reusable "component" functions — each takes a data object
 * and returns an HTML string. Every page-level script (home.js,
 * services.js, etc.) composes pages out of these instead of writing
 * one-off markup, so a card only has one definition anywhere on the
 * site.
 * ------------------------------------------------------------------
 */
import { icon, starRow } from "./icons.js";
import { whatsappHref, escapeHtml } from "./format.js";
import { siteConfig } from "../data/siteConfig.js";

export function sectionHeadingHTML({ eyebrow, title, subtitle, align = "center" }) {
  return `
    <div class="section-heading section-heading--${align}">
      ${eyebrow ? `<span class="section-heading__eyebrow">${eyebrow}</span>` : ""}
      <h2 class="section-heading__title">${title}</h2>
      ${subtitle ? `<p class="section-heading__subtitle">${subtitle}</p>` : ""}
    </div>`;
}

export function ratingBadgeHTML(rating, reviewCount, size = "md") {
  return `
    <div class="rating-badge rating-badge--${size}">
      <span class="rating-badge__stars">${starRow(rating, size === "lg" ? 20 : 16)}</span>
      <span class="rating-badge__text"><strong>${rating}</strong><span class="rating-badge__count"> (${reviewCount.toLocaleString("en-IN")}+ reviews)</span></span>
    </div>`;
}

export function featureCardHTML(item) {
  return `
    <div class="feature-card">
      <span class="feature-card__icon">${icon(item.icon || "sparkle", 26)}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>`;
}

export function statItemHTML(stat) {
  return `
    <div class="stats-strip__item">
      <span class="stats-strip__value">${stat.value}</span>
      <span class="stats-strip__label">${stat.label}</span>
      ${stat.sublabel ? `<span class="stats-strip__sublabel">${stat.sublabel}</span>` : ""}
    </div>`;
}

export function offerCardHTML(offer) {
  return `
    <div class="offer-card">
      ${offer.badge ? `<span class="offer-card__badge">${offer.badge}</span>` : ""}
      <h3>${offer.title}</h3>
      <p>${offer.description}</p>
      ${!offer.verified ? `<p class="offer-card__note">Ask our team for current, active offers.</p>` : ""}
      <a class="offer-card__cta" href="contact.html">${offer.ctaLabel} ${icon("arrowRight", 16)}</a>
    </div>`;
}

export function serviceCardHTML(service) {
  const enquireHref = whatsappHref(`Hi ${siteConfig.brandName}, I'd like to book: ${service.name}`);
  return `
    <article class="service-card" data-category="${service.category}">
      ${service.popular ? `<span class="service-card__badge">Popular</span>` : ""}
      <div class="service-card__image"><img src="${service.image}" alt="${escapeHtml(service.name)} at ${siteConfig.brandName}" loading="lazy"></div>
      <div class="service-card__body">
        <h3>${service.name}</h3>
        <p class="service-card__desc">${service.shortDescription}</p>
        <div class="service-card__meta">
          <span class="service-card__price">${service.price || service.pricingLabel}</span>
          ${service.duration ? `<span class="service-card__duration">${service.duration}</span>` : ""}
        </div>
        <a class="service-card__cta" href="${enquireHref}" target="_blank" rel="noopener noreferrer">Enquire / Book ${icon("arrowRight", 16)}</a>
      </div>
    </article>`;
}

export function testimonialCardHTML(review) {
  return `
    <article class="testimonial-card">
      ${icon("quote", 28, "testimonial-card__quote-icon")}
      <div class="testimonial-card__stars">${starRow(review.rating, 14)}</div>
      <p class="testimonial-card__text">&ldquo;${review.text}&rdquo;</p>
      <footer class="testimonial-card__footer">
        <span class="testimonial-card__name">${review.reviewerName}</span>
        ${review.serviceTag ? `<span class="testimonial-card__tag">${review.serviceTag}</span>` : ""}
        ${review.date ? `<span class="testimonial-card__date">${review.date}</span>` : ""}
      </footer>
      ${review.ownerResponse ? `<div class="testimonial-card__response"><strong>Response from ${siteConfig.brandName}:</strong> ${review.ownerResponse}</div>` : ""}
      ${!review.isVerifiedQuote ? `<p class="testimonial-card__disclaimer">Aggregated sentiment from public reviews.</p>` : ""}
    </article>`;
}

export function galleryItemHTML(item) {
  return `
    <figure class="gallery-grid__item" data-category="${item.category}" data-full="${item.src}" data-alt="${escapeHtml(item.alt)}">
      <img src="${item.thumb}" alt="${escapeHtml(item.alt)}" loading="lazy">
    </figure>`;
}

export function styleInspirationItemHTML(item) {
  return `<figure class="style-inspiration__item"><img src="${item.thumb}" alt="${escapeHtml(item.alt)}" loading="lazy"></figure>`;
}

export function teamCardHTML(member) {
  return `
    <article class="team-card">
      <div class="team-card__image"><img src="${member.photo}" alt="${escapeHtml(member.role)} at ${siteConfig.brandName}" loading="lazy"></div>
      <div class="team-card__body">
        <span class="team-card__focus">${member.focus}</span>
        <h3>${member.role}</h3>
        <p>${member.description}</p>
      </div>
    </article>`;
}

export function faqItemHTML(faq, index) {
  return `
    <div class="faq-item" id="${faq.id}">
      <button type="button" class="faq-item__question" aria-expanded="false" data-faq-toggle="${index}">
        <span>${faq.question}</span>
        <span class="faq-item__icon">${icon("close", 20)}</span>
      </button>
      <div class="faq-item__answer"><p>${faq.answer}</p></div>
    </div>`;
}

export function ctaSectionHTML({ eyebrow, title, subtitle }) {
  return `
    <section class="cta-section">
      <div class="container">
        ${eyebrow ? `<span class="section-heading__eyebrow">${eyebrow}</span>` : ""}
        <h2>${title}</h2>
        <p>${subtitle}</p>
        <div class="cta-section__actions">
          <a href="contact.html" class="btn btn--secondary btn--lg">Book an Appointment</a>
          <a href="${siteConfig.contact.primaryPhoneHref}" class="btn btn--outline btn--lg" style="border-color:#fff;color:#fff;">${icon("phone", 18)}<span>Call Now</span></a>
        </div>
      </div>
    </section>`;
}

export function initFaqAccordion(root = document) {
  root.querySelectorAll("[data-faq-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("is-open");
      root.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem.querySelector("[data-faq-toggle]").setAttribute("aria-expanded", "false");
        }
      });
      item.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

export function initGalleryLightbox(root = document) {
  let lightbox = document.getElementById("lightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.className = "lightbox";
    lightbox.innerHTML = `<button class="lightbox__close" aria-label="Close">${icon("close", 28)}</button><img alt="">`;
    document.body.appendChild(lightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.closest(".lightbox__close")) {
        lightbox.classList.remove("is-open");
      }
    });
  }
  root.querySelectorAll(".gallery-grid__item").forEach((figure) => {
    figure.addEventListener("click", () => {
      const img = lightbox.querySelector("img");
      img.src = figure.dataset.full;
      img.alt = figure.dataset.alt;
      lightbox.classList.add("is-open");
    });
  });
}

export default {
  sectionHeadingHTML,
  ratingBadgeHTML,
  featureCardHTML,
  statItemHTML,
  offerCardHTML,
  serviceCardHTML,
  testimonialCardHTML,
  galleryItemHTML,
  styleInspirationItemHTML,
  teamCardHTML,
  faqItemHTML,
  ctaSectionHTML,
  initFaqAccordion,
  initGalleryLightbox,
};
