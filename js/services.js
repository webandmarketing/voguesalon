/**
 * services.js — Services page: category tabs + filtered service grid,
 * entirely data-driven from servicesData.js.
 */
import { renderLayout } from "./common.js";
import { applySEO, buildLocalBusinessSchema, buildServiceSchema } from "./seo.js";
import { siteConfig } from "../data/siteConfig.js";
import { servicesData, serviceCategories, getServicesByCategory } from "../data/servicesData.js";
import { sectionHeadingHTML, serviceCardHTML, ctaSectionHTML } from "./components.js";

renderLayout();

applySEO({
  title: "Services",
  description: `Explore the full hair, skin, nail, makeup and bridal service menu at ${siteConfig.brandName}, ${siteConfig.address.area}, ${siteConfig.address.city}.`,
  path: "services.html",
  schema: [buildLocalBusinessSchema(), buildServiceSchema()],
});

document.getElementById("services-heading").innerHTML = sectionHeadingHTML({
  eyebrow: "Our Menu",
  title: "The Full Service Catalogue",
  subtitle: "Browse by category, or view everything we offer. Pricing varies by hair length/condition — contact us for an estimate.",
});

const tabsEl = document.getElementById("category-tabs");
const gridEl = document.getElementById("service-grid");

function renderTabs(active) {
  const allTab = `<button type="button" class="category-tabs__tab ${active === "all" ? "is-active" : ""}" data-cat="all">All Services</button>`;
  const tabs = serviceCategories
    .map((c) => `<button type="button" class="category-tabs__tab ${active === c.id ? "is-active" : ""}" data-cat="${c.id}">${c.name}</button>`)
    .join("");
  tabsEl.innerHTML = allTab + tabs;
  tabsEl.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.cat;
      renderTabs(cat);
      renderGrid(cat);
      history.replaceState(null, "", cat === "all" ? "services.html" : `services.html#${cat}`);
    });
  });
}

function renderGrid(cat) {
  const list = getServicesByCategory(cat);
  gridEl.innerHTML = list.length
    ? list.map(serviceCardHTML).join("")
    : `<p class="service-grid__empty">No services found in this category yet.</p>`;
}

const initialCat = window.location.hash ? window.location.hash.replace("#", "") : "all";
const validInitial = serviceCategories.some((c) => c.id === initialCat) ? initialCat : "all";
renderTabs(validInitial);
renderGrid(validInitial);

document.getElementById("services-count").textContent = `${servicesData.length}+ services across ${serviceCategories.length} categories`;

document.getElementById("cta-section").outerHTML = ctaSectionHTML({
  eyebrow: "Not Sure What You Need?",
  title: "Talk to Our Team Before You Book",
  subtitle: "Tell us your hair type, skin concern or occasion and we'll recommend the right service.",
});
