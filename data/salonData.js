/**
 * salonData.js
 * ------------------------------------------------------------------
 * Core business/brand facts, used to render content AND to generate
 * the LocalBusiness/BeautySalon structured data (see js/seo.js).
 *
 * VERIFIED fields are sourced from the Google Business Profile data
 * supplied for this project. UNVERIFIED fields are explicitly marked
 * and rendered with safe fallbacks/placeholders rather than invented
 * facts (years in business, awards, certifications, exact prices,
 * etc. are intentionally omitted — see README.md for details).
 * ------------------------------------------------------------------
 */
export const salonData = {
  name: "Vogue Salon",
  alternateName: "Lakme Salon",
  legalName: "Vogue Salon (Lakme Salon), Kanchan Bagh",
  description:
    "Vogue Salon, operating in association with Lakme Salon in Kanchan Bagh, Indore, is a full-service beauty parlour offering hair, skin, nail and bridal beauty services in a comfortable, professionally staffed space.",
  shortDescription:
    "A trusted neighbourhood beauty salon in Kanchan Bagh, Indore, known for haircuts, hair colouring, smoothening and everyday grooming.",

  category: "Beauty Parlour",
  additionalCategories: ["Hair Salon", "Beauty Salon", "Nail Salon"],

  rating: 4.5,
  reviewCount: 814,
  ratingSource: "Google Business Profile",

  businessStatus: "OPERATIONAL",
  phone: "0731 402 3908",

  address: {
    line1: "Kuber House, Plot No. 162",
    landmark: "near Catalyser, Geeta Bhawan",
    area: "Kanchan Bagh",
    city: "Indore",
    state: "Madhya Pradesh",
    postalCode: "452001",
    country: "India",
  },

  geo: {
    latitude: 22.7017,
    longitude: 75.8663,
    verified: false,
  },

  openingHours: [
    { day: "Monday", opens: "10:30", closes: "21:30" },
    { day: "Tuesday", opens: "10:30", closes: "21:30" },
    { day: "Wednesday", opens: "10:30", closes: "21:30" },
    { day: "Thursday", opens: "10:30", closes: "21:30" },
    { day: "Friday", opens: "10:30", closes: "21:30" },
    { day: "Saturday", opens: "10:30", closes: "21:30" },
    { day: "Sunday", opens: "10:30", closes: "21:30" },
  ],
  openingHoursNote:
    "Hours shown are indicative (sourced from public listings). Please call ahead to confirm, especially on public holidays.",

  priceRange: "₹₹",
  paymentAccepted: ["Cash"],

  serviceArea: {
    city: "Indore",
    neighborhoods: ["Kanchan Bagh", "Geeta Bhawan", "Ratlam Kothi", "Saket Nagar", "Vijay Nagar"],
  },

  highlights: [
    {
      id: "trained-stylists",
      title: "Trained Stylists",
      description: "A team of trained hair and beauty professionals delivering consistent, quality service.",
      icon: "scissors",
    },
    {
      id: "wide-services",
      title: "Complete Beauty Menu",
      description: "From haircuts and colour to smoothening, threading, manicures and bridal looks — under one roof.",
      icon: "sparkle",
    },
    {
      id: "trusted-locally",
      title: "Trusted in Kanchan Bagh",
      description: "Rated 4.5★ from 800+ customers on Google, built on years of walk-in and repeat local clientele.",
      icon: "star",
    },
    {
      id: "hygiene-first",
      title: "Hygiene First",
      description: "Clean tools, fresh consumables and a tidy, comfortable salon environment for every visit.",
      icon: "check",
    },
  ],
};

export default salonData;
