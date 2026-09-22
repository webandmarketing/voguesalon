/**
 * common.js
 * ------------------------------------------------------------------
 * Renders the parts shared by every page — announcement bar, header/
 * navigation, footer, and the mobile sticky bottom bar — purely from
 * data/config. Import and call `renderLayout()` once per page.
 * ------------------------------------------------------------------
 */
import { siteConfig } from "../data/siteConfig.js";
import { salonData } from "../data/salonData.js";
import { mainNavigation, footerNavigation, headerCta } from "../data/navigationData.js";
import { formatAddress, to12Hour } from "./format.js";
import { icon } from "./icons.js";

const socialIconMap = { instagram: "instagram", facebook: "facebook", youtube: "youtube" };

function currentPage() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  return path;
}

function renderAnnouncementBar() {
  const el = document.getElementById("announcement-bar");
  if (!el) return;
  el.innerHTML = `
    <div class="announcement-bar__inner container">
      <span class="announcement-bar__rating">${icon("star", 14)} ${salonData.rating}★ · ${salonData.reviewCount}+ Google reviews</span>
      <div class="announcement-bar__links">
        <a href="${siteConfig.contact.primaryPhoneHref}" class="announcement-bar__link">${icon("phone", 14)} ${siteConfig.contact.primaryPhone}</a>
        <a href="${siteConfig.contact.whatsappHref}" class="announcement-bar__link" target="_blank" rel="noopener noreferrer">${icon("whatsapp", 14)} WhatsApp</a>
      </div>
    </div>`;
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const page = currentPage();

  const desktopLinks = mainNavigation
    .map((item) => `<li><a href="${item.path}" class="${item.path === page ? "is-active" : ""}">${item.label}</a></li>`)
    .join("");
  const mobileLinks = mainNavigation
    .map((item) => `<li><a href="${item.path}" class="${item.path === page ? "is-active" : ""}">${item.label}</a></li>`)
    .join("");

  el.innerHTML = `
    <div class="site-header__inner container">
      <a href="index.html" class="brand">
        <span class="brand__logo-text">${siteConfig.logo.text}<span class="brand__logo-sub">${siteConfig.logo.subText}</span></span>
      </a>
      <nav class="main-nav main-nav--desktop" aria-label="Primary">
        <ul>${desktopLinks}</ul>
      </nav>
      <div class="site-header__actions">
        <a href="${siteConfig.contact.primaryPhoneHref}" class="header-icon-link" aria-label="Call ${siteConfig.brandName}">${icon("phone", 20)}</a>
        <a href="contact.html" class="btn btn--primary btn--sm header-cta" aria-label="${headerCta.ariaLabel}">${headerCta.label}</a>
        <button type="button" class="hamburger" aria-label="Open menu" aria-expanded="false" id="hamburger-btn">${icon("menu", 24)}</button>
      </div>
    </div>
    <div class="mobile-nav" id="mobile-nav">
      <nav aria-label="Mobile primary"><ul>${mobileLinks}</ul></nav>
      <div class="mobile-nav__actions">
        <a href="contact.html" class="btn btn--primary btn--full">${headerCta.label}</a>
        <a href="${siteConfig.contact.primaryPhoneHref}" class="btn btn--outline btn--full">${icon("phone", 18)}<span>Call ${siteConfig.contact.primaryPhone}</span></a>
      </div>
    </div>`;

  const hamburger = document.getElementById("hamburger-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const header = el;
  hamburger.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.innerHTML = icon(isOpen ? "close" : "menu", 24);
    document.body.classList.toggle("no-scroll", isOpen);
  });
  mobileNav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.innerHTML = icon("menu", 24);
      document.body.classList.remove("no-scroll");
    })
  );

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const socialLinks = Object.entries(siteConfig.social)
    .filter(([, url]) => url)
    .map(([key, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${key}">${icon(socialIconMap[key], 18)}</a>`)
    .join("");

  const exploreLinks = footerNavigation.explore.map((i) => `<li><a href="${i.path}">${i.label}</a></li>`).join("");
  const connectLinks = footerNavigation.connect.map((i) => `<li><a href="${i.path}">${i.label}</a></li>`).join("");
  const today = salonData.openingHours[0];

  el.innerHTML = `
    <div class="container site-footer__grid">
      <div class="site-footer__brand">
        <span class="brand__logo-text">${siteConfig.logo.text}<span class="brand__logo-sub">${siteConfig.logo.subText}</span></span>
        <p>${salonData.shortDescription}</p>
        ${socialLinks ? `<div class="site-footer__social">${socialLinks}</div>` : ""}
      </div>
      <div class="site-footer__col"><h3>Explore</h3><ul>${exploreLinks}</ul></div>
      <div class="site-footer__col"><h3>Connect</h3><ul>${connectLinks}</ul></div>
      <div class="site-footer__col site-footer__contact">
        <h3>Visit Us</h3>
        <p class="site-footer__address">${icon("location", 16)}<span>${formatAddress(salonData.address)}</span></p>
        <a href="${siteConfig.contact.primaryPhoneHref}" class="site-footer__link">${icon("phone", 16)} ${siteConfig.contact.primaryPhone}</a>
        <p class="site-footer__hours">${icon("clock", 16)}<span>Daily: ${to12Hour(today.opens)} – ${to12Hour(today.closes)}</span></p>
      </div>
    </div>
    <div class="site-footer__bottom container">
      <p>${siteConfig.copyrightText}</p>
      <p class="site-footer__note">${siteConfig.footerNote}</p>
    </div>`;
}

function renderMobileBottomBar() {
  const el = document.getElementById("mobile-bottom-bar");
  if (!el) return;
  el.innerHTML = `
    <a href="${siteConfig.contact.primaryPhoneHref}" class="mobile-bottom-bar__item">${icon("phone", 20)}<span>Call</span></a>
    <a href="${siteConfig.contact.whatsappHref}" class="mobile-bottom-bar__item" target="_blank" rel="noopener noreferrer">${icon("whatsapp", 20)}<span>WhatsApp</span></a>
    <a href="${siteConfig.googleMapsDirectionsUrl}" class="mobile-bottom-bar__item" target="_blank" rel="noopener noreferrer">${icon("location", 20)}<span>Directions</span></a>
    <a href="contact.html" class="mobile-bottom-bar__item mobile-bottom-bar__item--primary">${icon("arrowRight", 20)}<span>Book Now</span></a>`;
}

export function renderLayout() {
  renderAnnouncementBar();
  renderHeader();
  renderFooter();
  renderMobileBottomBar();
}

export default renderLayout;
