/**
 * servicesData.js
 * ------------------------------------------------------------------
 * The full service catalogue, grouped into categories.
 *
 * Source: public salon-listing aggregators referencing this exact
 * address/phone (haircut, hair colour, smoothening, threading,
 * facials, manicure/pedicure, bridal & grooming are consistently
 * listed), cross-referenced with common Lakme Salon service menus.
 *
 * PRICING: No reliable, verified price list was found for this
 * specific outlet. Rather than invent prices, every service carries
 * a `pricingLabel` of "Contact for pricing" and `price: null`. If a
 * verified price list becomes available, populate `price` (a string,
 * e.g. "₹499 onwards") and the renderer will show it instead.
 * ------------------------------------------------------------------
 */
export const serviceCategories = [
  { id: "hair", name: "Hair", icon: "scissors" },
  { id: "skin", name: "Skin", icon: "sparkle" },
  { id: "nails", name: "Nails", icon: "hand" },
  { id: "makeup", name: "Makeup", icon: "brush" },
  { id: "grooming", name: "Grooming", icon: "razor" },
  { id: "bridal", name: "Bridal", icon: "crown" },
];

const CONTACT_FOR_PRICING = "Contact for pricing";

export const servicesData = [
  {
    id: "haircut-styling",
    category: "hair",
    name: "Haircut & Styling",
    shortDescription: "Precision haircuts and finishing styles for every face shape.",
    description:
      "A consultation-first haircut service — our stylists assess your face shape, hair texture and lifestyle before cutting, then finish with a blow-dry style tailored to you.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "30–45 min",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=75",
    popular: true,
  },
  {
    id: "hair-coloring",
    category: "hair",
    name: "Hair Colouring & Highlights",
    shortDescription: "Global colour, root touch-ups, balayage and highlights.",
    description:
      "From subtle root touch-ups to full global colour and dimensional highlights, our colour specialists use quality products to achieve long-lasting, healthy-looking results.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "60–120 min",
    image: "https://images.unsplash.com/photo-1554519515-242161756769?auto=format&fit=crop&w=800&q=75",
    popular: true,
  },
  {
    id: "hair-smoothening",
    category: "hair",
    name: "Hair Smoothening & Straightening",
    shortDescription: "Frizz-free, manageable hair with lasting smoothness.",
    description:
      "One of our most-loved treatments — professional smoothening and straightening that tames frizz and leaves hair sleek and easy to manage for months.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "120–180 min",
    image: "https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&w=800&q=75",
    popular: true,
  },
  {
    id: "hair-spa-treatment",
    category: "hair",
    name: "Hair Spa & Nourishing Treatments",
    shortDescription: "Deep-conditioning spa treatments to repair and strengthen hair.",
    description:
      "A relaxing, restorative hair spa that nourishes dry or damaged hair, improves scalp health and restores shine and softness.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "45–60 min",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=75",
    popular: false,
  },
  {
    id: "hair-extensions",
    category: "hair",
    name: "Hair Extensions",
    shortDescription: "Instant length and volume with professionally fitted extensions.",
    description:
      "Add length, volume or both with extensions fitted and blended to match your natural hair for a seamless finish.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "60–90 min",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=75",
    popular: false,
  },
  {
    id: "blow-dry",
    category: "hair",
    name: "Blow-Dry & Hair Styling",
    shortDescription: "Salon-fresh blow-dry styling for everyday or special occasions.",
    description:
      "Quick-turnaround blow-dry styling that leaves hair polished and voluminous — perfect before an event or simply to feel your best.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "20–40 min",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=75",
    popular: false,
  },
  {
    id: "threading-waxing",
    category: "skin",
    name: "Threading & Waxing",
    shortDescription: "Precise eyebrow threading and full-body waxing.",
    description:
      "Clean, precise eyebrow and facial threading alongside full-body waxing options, performed with hygienic, single-use consumables.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "10–45 min",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=75",
    popular: true,
  },
  {
    id: "facials",
    category: "skin",
    name: "Facials & Skin Treatments",
    shortDescription: "Cleansing, brightening and de-tan facials for every skin type.",
    description:
      "A range of facials — from everyday cleanups to brightening and de-tan treatments — with a quick consultation to match the facial to your skin's needs.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "45–60 min",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=75",
    popular: true,
  },
  {
    id: "bleach-detan",
    category: "skin",
    name: "Bleach & De-Tan",
    shortDescription: "Instant brightening for face and body.",
    description:
      "Fast, effective bleach and de-tan services to even out skin tone and add an instant glow before an event or as part of regular upkeep.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "20–40 min",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=75",
    popular: false,
  },
  {
    id: "manicure",
    category: "nails",
    name: "Manicure",
    shortDescription: "Hand care, shaping and polish for well-groomed hands.",
    description:
      "A relaxing manicure that includes nail shaping, cuticle care, hand massage and polish — a customer favourite for everyday upkeep.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "30–45 min",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=75",
    popular: true,
  },
  {
    id: "pedicure",
    category: "nails",
    name: "Pedicure",
    shortDescription: "Foot care and relaxation, from classic to spa pedicures.",
    description:
      "Soothing foot soaks, exfoliation, nail care and massage — leaving feet refreshed and well cared for.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "40–60 min",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=75",
    popular: true,
  },
  {
    id: "nail-art",
    category: "nails",
    name: "Nail Art & Extensions",
    shortDescription: "Creative nail art and extensions for a finished look.",
    description:
      "From simple accent nails to full nail art and extensions, add a personal, polished detail to complete your look.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "45–90 min",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=75",
    popular: false,
  },
  {
    id: "everyday-makeup",
    category: "makeup",
    name: "Everyday & Party Makeup",
    shortDescription: "Makeup looks for parties, functions and everyday occasions.",
    description:
      "Skin-friendly, long-lasting makeup application tailored to the occasion — from soft daytime looks to full glam for evening events.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "45–75 min",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=75",
    popular: false,
  },
  {
    id: "mens-grooming",
    category: "grooming",
    name: "Men's Haircut & Beard Styling",
    shortDescription: "Sharp haircuts and beard shaping for men.",
    description:
      "A dedicated grooming menu for men — precision haircuts, beard shaping and styling for a clean, sharp finish.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "20–40 min",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=75",
    popular: true,
  },
  {
    id: "bridal-makeup",
    category: "bridal",
    name: "Bridal Makeup & Draping",
    shortDescription: "Complete bridal beauty packages for your big day.",
    description:
      "A dedicated bridal consultation covering makeup, hairstyling and draping, planned in advance so your big day runs smoothly.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "By appointment",
    image: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?auto=format&fit=crop&w=800&q=75",
    popular: true,
  },
  {
    id: "bridal-hair",
    category: "bridal",
    name: "Bridal Hairstyling",
    shortDescription: "Trial and event-day hairstyling for brides and bridal parties.",
    description:
      "From trial sessions to event-day execution, bridal hairstyling designed to hold through long ceremonies and celebrations.",
    price: null,
    pricingLabel: CONTACT_FOR_PRICING,
    duration: "By appointment",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=75",
    popular: false,
  },
];

export const getServicesByCategory = (categoryId) =>
  categoryId === "all" ? servicesData : servicesData.filter((s) => s.category === categoryId);

export const getPopularServices = () => servicesData.filter((s) => s.popular);
export const getServiceById = (id) => servicesData.find((s) => s.id === id);

export default servicesData;
