/**
 * seo.js
 * ------------------------------------------------------------------
 * Builds JSON-LD structured data + <meta>/<title> tags purely from
 * the centralized data files, and injects them into <head> at
 * runtime. No business information is duplicated in any HTML page —
 * every page calls `applySEO({ title, description, path, schema })`
 * from its own small script.
 * ------------------------------------------------------------------
 */
import { siteConfig } from "../data/siteConfig.js";
import { salonData } from "../data/salonData.js";
import { servicesData } from "../data/servicesData.js";
import { faqData } from "../data/faqData.js";

const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export function buildLocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: salonData.name,
    alternateName: salonData.alternateName,
    description: salonData.description,
    image: `${siteConfig.seo.siteUrl}/${siteConfig.seo.ogImage}`,
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.contact.primaryPhoneHref.replace("tel:", ""),
    priceRange: salonData.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${salonData.address.line1}, ${salonData.address.landmark}`,
      addressLocality: salonData.address.city,
      addressRegion: salonData.address.state,
      postalCode: salonData.address.postalCode,
      addressCountry: siteConfig.address.countryCode,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: salonData.rating,
      reviewCount: salonData.reviewCount,
    },
    openingHoursSpecification: salonData.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${dayNames.includes(slot.day) ? slot.day : slot.day}`,
      opens: slot.opens,
      closes: slot.closes,
    })),
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    hasMap: siteConfig.googleMapsUrl,
  };
  if (salonData.geo.verified) {
    schema.geo = { "@type": "GeoCoordinates", latitude: salonData.geo.latitude, longitude: salonData.geo.longitude };
  }
  return schema;
}

export function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: servicesData.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.shortDescription,
        provider: { "@type": "BeautySalon", name: salonData.name },
        areaServed: salonData.serviceArea.city,
      },
    })),
  };
}

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.seo.siteUrl}/${item.path}`,
    })),
  };
}

/**
 * applySEO — sets <title>, meta description/keywords, canonical,
 * Open Graph + Twitter tags, and injects any number of JSON-LD
 * <script> blocks. Call once per page, right after the data imports.
 */
export function applySEO({ title, description, path = "index.html", schema = [] }) {
  const fullTitle = title ? `${title} | ${siteConfig.shortTitle}` : siteConfig.siteTitle;
  const desc = description || siteConfig.metaDescription;
  const canonical = `${siteConfig.seo.siteUrl}/${path}`;
  const ogImage = `${siteConfig.seo.siteUrl}/${siteConfig.seo.ogImage}`;

  document.title = fullTitle;
  setMeta("description", desc);
  setMeta("keywords", siteConfig.seo.keywords.join(", "));
  setLink("canonical", canonical);

  setMeta("og:title", fullTitle, "property");
  setMeta("og:description", desc, "property");
  setMeta("og:url", canonical, "property");
  setMeta("og:image", ogImage, "property");
  setMeta("og:type", "website", "property");
  setMeta("og:site_name", siteConfig.brandName, "property");
  setMeta("og:locale", siteConfig.seo.locale, "property");

  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", fullTitle);
  setMeta("twitter:description", desc);
  setMeta("twitter:image", ogImage);

  schema.forEach((item) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  });
}

function setMeta(name, content, attr = "name") {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default { buildLocalBusinessSchema, buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema, applySEO };
