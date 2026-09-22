/**
 * contact.js — Contact page: address/hours/map, quick-contact CTAs,
 * a WhatsApp-powered enquiry form (no backend required — a fully
 * static site can't accept server-side form submissions, so this
 * builds a pre-filled WhatsApp message instead), and the full FAQ.
 */
import { renderLayout } from "./common.js";
import { applySEO, buildLocalBusinessSchema, buildFaqSchema } from "./seo.js";
import { siteConfig } from "../data/siteConfig.js";
import { salonData } from "../data/salonData.js";
import { faqData } from "../data/faqData.js";
import { formatAddress, to12Hour, whatsappHref } from "./format.js";
import { icon } from "./icons.js";
import { sectionHeadingHTML, faqItemHTML, initFaqAccordion } from "./components.js";

renderLayout();

applySEO({
  title: "Contact & Location",
  description: `Get directions, phone, WhatsApp and opening hours for ${siteConfig.brandName} in ${siteConfig.address.area}, ${siteConfig.address.city}.`,
  path: "contact.html",
  schema: [buildLocalBusinessSchema(), buildFaqSchema()],
});

document.getElementById("contact-heading").innerHTML = sectionHeadingHTML({
  eyebrow: "Get In Touch",
  title: "Visit or Book Your Appointment",
  subtitle: "We're easy to reach by phone, WhatsApp, or in person in Kanchan Bagh.",
});

document.getElementById("contact-info").innerHTML = `
  <div class="contact-info-card__row">${icon("location", 22)}<div><h4>Address</h4><p>${formatAddress(salonData.address)}</p></div></div>
  <div class="contact-info-card__row">${icon("phone", 22)}<div><h4>Phone</h4><a href="${siteConfig.contact.primaryPhoneHref}">${siteConfig.contact.primaryPhone}</a></div></div>
  <div class="contact-info-card__row">${icon("whatsapp", 22)}<div><h4>WhatsApp</h4><a href="${siteConfig.contact.whatsappHref}" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a></div></div>
  <div class="contact-info-card__row">${icon("clock", 22)}<div><h4>Hours</h4>
    <table class="hours-table"><tbody>
      ${salonData.openingHours.map((h) => `<tr><td>${h.day}</td><td>${to12Hour(h.opens)} – ${to12Hour(h.closes)}</td></tr>`).join("")}
    </tbody></table>
    <p style="font-size:.8rem;margin-top:8px;">${salonData.openingHoursNote}</p>
  </div></div>
  <div class="contact-info-card__actions">
    <a href="${siteConfig.contact.primaryPhoneHref}" class="btn btn--primary">${icon("phone", 18)}<span>Call Now</span></a>
    <a href="${siteConfig.contact.whatsappHref}" class="btn btn--outline" target="_blank" rel="noopener noreferrer">${icon("whatsapp", 18)}<span>WhatsApp</span></a>
    <a href="${siteConfig.googleMapsDirectionsUrl}" class="btn btn--outline" target="_blank" rel="noopener noreferrer">${icon("location", 18)}<span>Get Directions</span></a>
  </div>`;

document.getElementById("map-embed").innerHTML = `<iframe src="${siteConfig.googleMapsEmbedUrl}" title="Map to ${siteConfig.brandName}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;

/* ---------- Enquiry form -> pre-filled WhatsApp message ---------- */
const form = document.getElementById("enquiry-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const service = (data.get("service") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();
    const lines = [
      `Hi ${siteConfig.brandName}, I'd like to book an appointment.`,
      name ? `Name: ${name}` : null,
      phone ? `Phone: ${phone}` : null,
      service ? `Service: ${service}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
  });
}

/* ---------- FAQ (full list) ---------- */
document.getElementById("faq-heading").innerHTML = sectionHeadingHTML({ eyebrow: "FAQs", title: "Frequently Asked Questions" });
const faqList = document.getElementById("faq-list");
faqList.innerHTML = faqData.map(faqItemHTML).join("");
initFaqAccordion(faqList);
