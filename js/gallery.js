/**
 * gallery.js — Gallery page: filterable masonry grid + lightbox.
 */
import { renderLayout } from "./common.js";
import { applySEO, buildLocalBusinessSchema } from "./seo.js";
import { siteConfig } from "../data/siteConfig.js";
import { galleryData, galleryCategories, getGalleryByCategory } from "../data/galleryData.js";
import { sectionHeadingHTML, galleryItemHTML, initGalleryLightbox, ctaSectionHTML } from "./components.js";

renderLayout();

applySEO({
  title: "Gallery",
  description: `Browse the ${siteConfig.brandName} gallery — salon interior, hair, nails, makeup and grooming inspiration.`,
  path: "gallery.html",
  schema: [buildLocalBusinessSchema()],
});

document.getElementById("gallery-heading").innerHTML = sectionHeadingHTML({
  eyebrow: "Gallery",
  title: "A Look Inside Vogue Salon",
  subtitle: "Representative photography across our service categories. See README for image sourcing notes.",
});

const filterEl = document.getElementById("gallery-filter");
const gridEl = document.getElementById("gallery-grid");

function renderFilter(active) {
  filterEl.innerHTML = galleryCategories
    .map((c) => `<button type="button" class="gallery-filter__pill ${active === c.id ? "is-active" : ""}" data-cat="${c.id}">${c.label}</button>`)
    .join("");
  filterEl.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      renderFilter(btn.dataset.cat);
      renderGrid(btn.dataset.cat);
    });
  });
}

function renderGrid(cat) {
  gridEl.innerHTML = getGalleryByCategory(cat).map(galleryItemHTML).join("");
  initGalleryLightbox(gridEl);
}

renderFilter("all");
renderGrid("all");

document.getElementById("gallery-count").textContent = `${galleryData.length} photos`;

document.getElementById("cta-section").outerHTML = ctaSectionHTML({
  eyebrow: "Like What You See?",
  title: "Book the Look You Love",
  subtitle: "Bring a reference photo and our stylists will help bring it to life.",
});
