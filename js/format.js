/**
 * format.js — small formatting/link helpers shared by every renderer.
 */
import { siteConfig } from "../data/siteConfig.js";

export const telHref = () => siteConfig.contact.primaryPhoneHref;

export const whatsappHref = (customMessage) => {
  if (!customMessage) return siteConfig.contact.whatsappHref;
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
};

export const formatAddress = (address) =>
  [address.line1, address.landmark, address.area, `${address.city}, ${address.state} ${address.postalCode}`, address.country]
    .filter(Boolean)
    .join(", ");

export const to12Hour = (time24) => {
  const [hourStr, minuteStr] = time24.split(":");
  let hour = parseInt(hourStr, 10);
  const suffix = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minuteStr} ${suffix}`;
};

export const escapeHtml = (str = "") =>
  str.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export default { telHref, whatsappHref, formatAddress, to12Hour, escapeHtml };
