/**
 * icons.js
 * Inline-SVG icon set shared by every renderer — avoids an external
 * icon-font/library dependency so the site stays 100% self-contained
 * and fast on GitHub Pages.
 */
const paths = {
  phone: '<path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1.1l-2.2 2.2z"/>',
  whatsapp: '<path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5C10 9 9.4 7.6 9.1 7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z"/>',
  location: '<path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>',
  clock: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.75 5v5.4l4.2 2.5-.75 1.2-5-3V7h1.55z"/>',
  star: '<path d="M12 2.5l2.9 6.3 6.9.7-5.1 4.6 1.5 6.9L12 17.7l-6.2 3.3 1.5-6.9-5.1-4.6 6.9-.7z"/>',
  check: '<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  arrowRight: '<path d="M5 12h13m0 0l-5-5m5 5l-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  close: '<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  scissors: '<path d="M9.6 12L20 4.6 18.8 3 8 10.7 6.7 9.9a2.6 2.6 0 1 0-.8 1.2l1 .7-1 .7a2.6 2.6 0 1 0 .8 1.2L8 13.3 18.8 21l1.2-1.6L9.6 12zM4.5 8.7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 6.6a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>',
  sparkle: '<path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z"/>',
  hand: '<path d="M8 13V5a1.5 1.5 0 0 1 3 0v6M11 5a1.5 1.5 0 0 1 3 0v6M14 6a1.5 1.5 0 0 1 3 0v5M17 10a1.5 1.5 0 0 1 3 0v4a6 6 0 0 1-6 6h-2a6 6 0 0 1-5-2.7L4.6 14a1.4 1.4 0 0 1 2.1-1.8L8 13" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>',
  brush: '<path d="M3 21c1-4 2-6 5-7l7-7 2 2-7 7c-1 3-3 4-7 5zM14 4l2-2 4 4-2 2z"/>',
  razor: '<path d="M4 4l9 9-3 3-9-9zM13 13l3-3 6 6-3 3zM6 20l2-2" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>',
  crown: '<path d="M3 8l4 3 5-6 5 6 4-3-1.5 10h-15z"/>',
  quote: '<path d="M9 7c-3 1-5 3.5-5 7 0 2.2 1.8 4 4 4s4-1.8 4-4-1.6-3.8-3.6-4c.3-1.2 1.4-2 3.1-2.4L9 7zm10 0c-3 1-5 3.5-5 7 0 2.2 1.8 4 4 4s4-1.8 4-4-1.6-3.8-3.6-4c.3-1.2 1.4-2 3.1-2.4L19 7z"/>',
  instagram: '<path d="M12 2.2c2.7 0 3 0 4.1.1 1 .1 1.7.2 2.3.5.6.3 1.1.6 1.6 1.1.5.5.8 1 1.1 1.6.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 1-.2 1.7-.5 2.3-.3.6-.6 1.1-1.1 1.6-.5.5-1 .8-1.6 1.1-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1-.1-1.7-.2-2.3-.5-.6-.3-1.1-.6-1.6-1.1-.5-.5-.8-1-1.1-1.6-.3-.6-.4-1.3-.5-2.3-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c.1-1 .2-1.7.5-2.3.3-.6.6-1.1 1.1-1.6.5-.5 1-.8 1.6-1.1.6-.3 1.3-.4 2.3-.5C9 2.2 9.3 2.2 12 2.2zm0 1.8c-2.6 0-2.9 0-4 .1-.8.1-1.3.2-1.6.3-.4.2-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.6-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c.1.8.2 1.3.3 1.6.2.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.6.3 1.1.1 1.4.1 4 .1s2.9 0 4-.1c.8-.1 1.3-.2 1.6-.3.4-.2.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.6.1-1.1.1-1.4.1-4s0-2.9-.1-4c-.1-.8-.2-1.3-.3-1.6-.2-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.6-.3-1.1-.1-1.4-.1-4-.1zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4zm5.7-2a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0z"/>',
  facebook: '<path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2A22 22 0 0 0 14.5 3c-2.5 0-4.2 1.5-4.2 4.3v2.5H7.6v3.2h2.7v8z"/>',
  youtube: '<path d="M22 12s0-3.1-.4-4.6a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.4a2.9 2.9 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.4 4.6a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.4a2.9 2.9 0 0 0 2-2C22 15.1 22 12 22 12zM10 15.5v-7l6 3.5z"/>',
};

export function icon(name, size = 20, extraClass = "") {
  const d = paths[name];
  if (!d) return "";
  return `<svg class="icon icon-${name} ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">${d}</svg>`;
}

export function starRow(rating, size = 16) {
  const full = Math.round(rating);
  let out = "";
  for (let i = 0; i < 5; i++) {
    out += icon("star", size, i < full ? "is-filled" : "is-empty");
  }
  return out;
}

export default icon;
