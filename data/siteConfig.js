/**
 * siteConfig.js
 * ------------------------------------------------------------------
 * Global, brand-level configuration for the entire website.
 * This is the SINGLE SOURCE OF TRUTH for anything repeated across
 * the site: brand identity, contact channels, social links, SEO
 * defaults and theme/design-token values.
 *
 * To re-skin this static site for a different salon brand, this file
 * and the files inside `data/` are the ONLY places that should need
 * to change — no HTML page or js/*.js renderer should hardcode brand
 * copy, colors, phone numbers, or URLs.
 * ------------------------------------------------------------------
 */
export const siteConfig = {
  siteTitle: "Vogue Salon | Lakme Salon Kanchan Bagh, Indore",
  shortTitle: "Vogue Salon",
  brandName: "Vogue Salon",
  brandAlternateName: "Lakme Salon",
  tagline: "Where Every Look Tells a Story",
  metaDescription:
    "Vogue Salon (Lakme Salon) in Kanchan Bagh, Indore — premium hair, skin & bridal beauty services by trained professionals. Rated 4.5★ by 800+ customers. Book your appointment today.",
  logo: {
    text: "Vogue",
    subText: "SALON",
    image: null,
  },

  contact: {
    primaryPhone: "0731 402 3908",
    primaryPhoneHref: "tel:+917314023908",
    whatsappNumber: "917314023908",
    whatsappHref:
      "https://wa.me/917314023908?text=Hi%20Vogue%20Salon%2C%20I%27d%20like%20to%20book%20an%20appointment.",
    email: "hello@voguesalonindore.example",
    emailHref: "mailto:hello@voguesalonindore.example",
  },

  address: {
    line1: "Kuber House, Plot No. 162",
    landmark: "near Catalyser, Geeta Bhawan",
    area: "Kanchan Bagh",
    city: "Indore",
    state: "Madhya Pradesh",
    postalCode: "452001",
    country: "India",
    countryCode: "IN",
  },

  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Vogue+Salon+Lakme+Salon+Kuber+House+Kanchan+Bagh+Indore+452001",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Kuber+House,+Plot+No.+162,+near+Catalyser,+Geeta+Bhawan,+Kanchan+Bagh,+Indore,+Madhya+Pradesh+452001&output=embed",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Kuber+House,+Plot+No.+162,+near+Catalyser,+Geeta+Bhawan,+Kanchan+Bagh,+Indore,+Madhya+Pradesh+452001",

  // No verified third-party booking platform was found during research.
  // Booking CTAs route to phone/WhatsApp. Replace with a real booking
  // link (Zenoti/Vagaro/etc.) when available — every "Book" CTA reads
  // this value.
  bookingUrl: null,

  // Unverified — placeholders only. Replace with confirmed handles/URLs.
  social: {
    instagram: null,
    facebook: null,
    youtube: null,
  },

  seo: {
    siteUrl: "https://webandmarketing.github.io/voguesalon", // update after publishing to GitHub Pages
    ogImage: "assets/og-cover.jpg",
    twitterHandle: null,
    locale: "en_IN",
    keywords: [
      "Vogue Salon Indore",
      "Lakme Salon Kanchan Bagh Indore",
      "Lakme Salon Indore",
      "best salon in Indore",
      "hair salon Kanchan Bagh",
      "bridal makeup Indore",
      "hair smoothening Indore",
      "beauty parlour Geeta Bhawan",
    ],
  },

  copyrightText: `© ${new Date().getFullYear()} Vogue Salon. All rights reserved.`,
  footerNote:
    "Vogue Salon operates in association with Lakme Salon, Kanchan Bagh, Indore.",

  // Maps 1:1 onto the CSS custom properties in css/theme.css. Change
  // both places to re-theme the whole site.
  theme: {
    colorPrimary: "#1b1714",
    colorSecondary: "#f4ede3",
    colorAccent: "#b28a4c",
    colorAccentDark: "#8a6a35",
    colorBackground: "#fffdfa",
    colorSurface: "#ffffff",
    colorText: "#241f1b",
    colorTextMuted: "#6d6459",
    colorBorder: "#e7ded1",
  },
};

export default siteConfig;
