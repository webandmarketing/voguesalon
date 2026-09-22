/**
 * navigationData.js — drives Header (desktop + mobile) and Footer
 * quick-links so route labels/order are never hardcoded into HTML.
 */
export const mainNavigation = [
  { id: "home", label: "Home", path: "index.html" },
  { id: "services", label: "Services", path: "services.html" },
  { id: "about", label: "About", path: "about.html" },
  { id: "gallery", label: "Gallery", path: "gallery.html" },
  { id: "reviews", label: "Reviews", path: "reviews.html" },
  { id: "contact", label: "Contact", path: "contact.html" },
];

export const footerNavigation = {
  explore: [
    { id: "home", label: "Home", path: "index.html" },
    { id: "services", label: "Services", path: "services.html" },
    { id: "about", label: "About Us", path: "about.html" },
    { id: "gallery", label: "Gallery", path: "gallery.html" },
  ],
  connect: [
    { id: "reviews", label: "Reviews", path: "reviews.html" },
    { id: "contact", label: "Contact & Location", path: "contact.html" },
    { id: "faq", label: "FAQs", path: "contact.html#faq" },
  ],
};

export const headerCta = {
  label: "Book an Appointment",
  ariaLabel: "Book an appointment at Vogue Salon",
};

export default mainNavigation;
