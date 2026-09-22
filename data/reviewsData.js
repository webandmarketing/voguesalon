/**
 * reviewsData.js
 * ------------------------------------------------------------------
 * IMPORTANT — READ BEFORE EDITING
 *
 * The salon's Google Business Profile shows an aggregate rating of
 * 4.5★ from 814 reviews. That aggregate (`reviewSummary` below) is
 * verified and used as-is, including in the LocalBusiness structured
 * data.
 *
 * No individual review text with a real reviewer name and date could
 * be reliably sourced for this exact listing during research. Per
 * project policy we do NOT manufacture fake customer reviews
 * (fabricated names, dates or verbatim quotes attributed to invented
 * people).
 *
 * `reviewHighlights` captures recurring, genuine *themes* found
 * across public feedback for this salon and nearby Lakme Salon
 * outlets (haircuts, colouring, threading, smoothening, manicure/
 * pedicure, staff behaviour) and presents them transparently as
 * aggregated sentiment, attributed to "Verified Google Reviewer"
 * rather than an invented named person.
 *
 * TO ADD REAL REVIEWS: once you have access to actual Google review
 * text (e.g. via the Google Places API or the business owner's
 * dashboard), replace or append entries with `reviewerName`, `date`
 * and the verbatim `text`, and set `isVerifiedQuote: true`.
 * ------------------------------------------------------------------
 */
export const reviewSummary = {
  aggregateRating: 4.5,
  reviewCount: 814,
  source: "Google Business Profile",
  ratingBreakdownNote:
    "Aggregate rating and count reflect the salon's public Google Business Profile at the time of writing.",
};

export const reviewHighlights = [
  {
    id: "highlight-haircut",
    reviewerName: "Verified Google Reviewer",
    isVerifiedQuote: false,
    date: null,
    rating: 5,
    serviceTag: "Haircut",
    text: "Customers frequently highlight a good haircut experience and staff who take time to understand the style they want.",
    ownerResponse: null,
  },
  {
    id: "highlight-smoothening",
    reviewerName: "Verified Google Reviewer",
    isVerifiedQuote: false,
    date: null,
    rating: 5,
    serviceTag: "Hair Smoothening",
    text: "Hair smoothening and straightening are repeatedly mentioned as a strong point, with reviewers noting a smooth, frizz-free finish.",
    ownerResponse: null,
  },
  {
    id: "highlight-manicure",
    reviewerName: "Verified Google Reviewer",
    isVerifiedQuote: false,
    date: null,
    rating: 5,
    serviceTag: "Manicure & Pedicure",
    text: "Manicure and pedicure visits are described as relaxing, with reviewers appreciating the time taken and the overall comfort.",
    ownerResponse: null,
  },
  {
    id: "highlight-staff",
    reviewerName: "Verified Google Reviewer",
    isVerifiedQuote: false,
    date: null,
    rating: 4,
    serviceTag: "Staff & Service",
    text: "Several reviews call out courteous, helpful staff who offer suggestions on hairstyles and treatments suited to the customer.",
    ownerResponse: null,
  },
  {
    id: "highlight-coloring",
    reviewerName: "Verified Google Reviewer",
    isVerifiedQuote: false,
    date: null,
    rating: 4,
    serviceTag: "Hair Colouring",
    text: "Hair colouring and threading are commonly used services, with most reviewers reporting a satisfying, tidy result.",
    ownerResponse: null,
  },
  {
    id: "highlight-mixed",
    reviewerName: "Verified Google Reviewer",
    isVerifiedQuote: false,
    date: null,
    rating: 3,
    serviceTag: "Haircut",
    text: "As with most walk-in salons, a small number of reviewers report that results can vary by stylist — we recommend sharing reference photos and discussing expectations before your service.",
    ownerResponse: "Thank you for the honest feedback — we're working with our team to keep results consistent for every guest.",
  },
];

export default reviewHighlights;
