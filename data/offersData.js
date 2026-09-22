/**
 * offersData.js
 * ------------------------------------------------------------------
 * Only `walkin-10` is sourced from a public listing (magicpin)
 * referencing this exact salon and marked `verified: true` with its
 * source. It may be a third-party voucher rather than an official
 * salon promotion, so it is labelled clearly. The remaining entries
 * are generic, non-numeric invitations (no invented discount
 * percentages), always safe to display and easy to swap for real,
 * current promotions.
 * ------------------------------------------------------------------
 */
export const offersData = [
  { id: "walkin-10", title: "Walk-in Bill Discount", description: "A 10% discount voucher on your bill has been listed for walk-in customers via third-party salon-booking platforms.", badge: "10% Off", verified: true, source: "magicpin listing (third-party, unofficial)", ctaLabel: "Ask In-Salon" },
  { id: "bridal-consult", title: "Free Bridal Consultation", description: "Planning your big day? Book a no-obligation consultation to discuss bridal makeup, hair and draping options.", badge: "New Brides", verified: false, source: null, ctaLabel: "Book Consultation" },
  { id: "first-visit", title: "First-Time Visitor?", description: "Tell our team it's your first visit and we'll help you pick the right service and stylist for your hair and skin type.", badge: "Welcome", verified: false, source: null, ctaLabel: "Plan Your Visit" },
];

export default offersData;
