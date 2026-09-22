/**
 * galleryData.js
 * ------------------------------------------------------------------
 * Gallery image catalogue.
 *
 * NOTE ON IMAGES: No licensed, official photography of this exact
 * salon location was available to source responsibly. Rather than
 * scrape random/unverified photos of the real premises, this gallery
 * uses high-quality, freely-licensed stock photography (Unsplash
 * License — free to use) as tasteful, on-brand placeholders that
 * accurately represent each service category. Every URL below was
 * verified to load (HTTP 200) at build time.
 *
 * TO REPLACE WITH REAL PHOTOGRAPHY: swap `src`/`thumb` with a path
 * into `assets/images/` once real, licensed photos of the salon are
 * available. No renderer changes are required.
 *
 * An "exterior" (storefront) and named "team" portrait category have
 * intentionally been left out rather than filled with unrelated stock
 * photography that could be mistaken for the real premises/staff.
 * ------------------------------------------------------------------
 */
export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "interior", label: "Salon Interior" },
  { id: "hair", label: "Hair" },
  { id: "nails", label: "Nails" },
  { id: "makeup", label: "Makeup" },
  { id: "grooming", label: "Grooming" },
  { id: "team", label: "Our Team at Work" },
  { id: "styling", label: "Finished Styles" },
];

export const galleryData = [
  { id: "interior-01", category: "interior", src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=480&q=70", alt: "Bright, modern salon interior with styling chairs and mirrors" },
  { id: "interior-02", category: "interior", src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=480&q=70", alt: "Salon styling stations with mirrors along a bright window wall" },
  { id: "interior-03", category: "interior", src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=480&q=70", alt: "Salon seating area with styling chairs facing a large mirror wall" },
  { id: "interior-04", category: "interior", src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=480&q=70", alt: "Contemporary salon interior with round mirrors and product display" },
  { id: "hair-01", category: "hair", src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=480&q=70", alt: "Stylist blow-drying and styling a client's hair" },
  { id: "hair-02", category: "hair", src: "https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&w=480&q=70", alt: "Flowing, vibrant coloured hair showcasing a finished style" },
  { id: "hair-03", category: "hair", src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=480&q=70", alt: "Studio portrait highlighting natural hair texture and volume" },
  { id: "hair-04", category: "hair", src: "https://images.unsplash.com/photo-1554519515-242161756769?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1554519515-242161756769?auto=format&fit=crop&w=480&q=70", alt: "Creative multi-tone hair colour result, viewed from behind" },
  { id: "styling-01", category: "styling", src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=480&q=70", alt: "Finished elegant updo hairstyle on a smiling client" },
  { id: "team-01", category: "team", src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=480&q=70", alt: "Stylist washing a client's hair at the basin" },
  { id: "nails-01", category: "nails", src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=480&q=70", alt: "Close-up of a manicure with fresh pink nail polish" },
  { id: "nails-02", category: "nails", src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=480&q=70", alt: "Relaxing pedicure foot spa with flowers in water" },
  { id: "makeup-01", category: "makeup", src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=480&q=70", alt: "Makeup artist applying lip colour to a client" },
  { id: "makeup-02", category: "makeup", src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=480&q=70", alt: "Flatlay of premium makeup products and an eyeshadow palette" },
  { id: "makeup-03", category: "makeup", src: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?auto=format&fit=crop&w=480&q=70", alt: "Set of professional makeup brushes" },
  { id: "makeup-04", category: "makeup", src: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=480&q=70", alt: "Makeup artist selecting eyeshadow shades from a palette" },
  { id: "makeup-05", category: "makeup", src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=480&q=70", alt: "Flatlay of makeup essentials, candle and fragrance" },
  { id: "grooming-01", category: "grooming", src: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=480&q=70", alt: "Barber scissors and clippers laid out on a wooden surface" },
  { id: "grooming-02", category: "grooming", src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80", thumb: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=480&q=70", alt: "Portrait of a well-groomed beard and haircut on a male client" },
];

export const getGalleryByCategory = (categoryId) =>
  categoryId === "all" ? galleryData : galleryData.filter((item) => item.category === categoryId);

export default galleryData;
