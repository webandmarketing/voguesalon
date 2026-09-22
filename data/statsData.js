/**
 * statsData.js — "Why choose us" style statistics. Every number is
 * either directly from verified salonData, or derived (counted) from
 * other data files at runtime — never a separately hardcoded figure
 * that could drift out of sync.
 */
import { salonData } from "./salonData.js";
import { servicesData, serviceCategories } from "./servicesData.js";

export const getStats = () => [
  { id: "rating", value: `${salonData.rating}★`, label: "Average Google Rating", sublabel: `from ${salonData.reviewCount}+ reviews` },
  { id: "reviews", value: `${salonData.reviewCount}+`, label: "Customer Reviews", sublabel: salonData.ratingSource },
  { id: "services", value: `${servicesData.length}+`, label: "Services Offered", sublabel: `across ${serviceCategories.length} categories` },
  { id: "categories", value: `${serviceCategories.length}`, label: "Beauty Categories", sublabel: "Hair, Skin, Nails, Makeup & more" },
];

export default getStats;
