# Abby Luxe Hair - WEDE5020 Portfolio of Evidence

Student: ST10502031 | Module: Web Development (Introduction) WEDE5020 | The Independent Institute of Education

**Live site:** `ADD YOUR NETLIFY / GITHUB PAGES LINK HERE`
**Repository:** `ADD YOUR GITHUB REPOSITORY LINK HERE`

Abby Luxe Hair is a small business selling quality, affordable wigs and hair care products. This repository contains the complete website across all three parts of the PoE: Part 1 (structure and proposal), Part 2 (CSS and responsive design) and Part 3 (JavaScript functionality, SEO, forms and deployment).

## Pages
| Page | Purpose | Main Part 3 features |
|---|---|---|
| `home.html` | Landing page | Featured wigs loaded dynamically, scroll animations, local-business structured data |
| `about.html` | Business story | Accessible tabs (Who we are / Vision and mission / Who we serve) |
| `services.html` | Products and services | Dynamic product listing, live search, category filter, sorting, product modal, FAQ accordion |
| `gallery.html` | Photo gallery | Category filter chips and a lightbox (keyboard, swipe, captions, counter) |
| `enquiry.html` | Quote request | Full form with JavaScript validation and a processed response (quote, availability, ready date) |
| `contact.html` | General messages | Validated form compiled into an email, plus an interactive Leaflet map with three locations |
| `404.html` | Error page | Friendly not-found page (used by Netlify) |
| `index.html` | Entry point | Redirects to `home.html` so hosts that expect `index.html` work |

## Project structure
```
index.html, home.html, about.html, services.html, gallery.html, enquiry.html, contact.html, 404.html
css/style.css            all styles (Part 2 + Part 3 components)
js/products.js           product/service data and card builder
js/main.js               navigation toggle, scroll animation, tabs, accordion, featured products
js/forms.js              shared validation helper (rules, error messages, error summary, counters)
js/enquiry.js            enquiry form logic and quote calculation
js/contact.js            contact form logic and email compilation (mailto)
js/services.js           search, filter, sort and product modal
js/gallery.js            gallery filter and lightbox
js/map.js                Leaflet map, locations, nearest-location lookup
images/                  logo, collage and descriptively named gallery images
documents/Proposal.pdf   Part 1 website proposal
robots.txt, sitemap.xml  crawler instructions and site map
_headers                 security and cache headers (Netlify)
```

## Part 3 implementation

### Functionality
- **Interactive elements:** tabs (About), accordion (Services FAQ), modal dialog (product details), mobile menu toggle. All use ARIA roles and full keyboard support.
- **Interactive map:** Leaflet 1.9.4 with OpenStreetMap tiles, three numbered markers with popups and directions links, a clickable location list that flies to each marker, a "Show all" button and a "Find my nearest" button that uses the browser's geolocation only when pressed.
- **Gallery with lightbox:** 18 images with category filters; the lightbox supports previous/next, arrow keys, Esc, click-outside, swipe, captions and a counter, and preloads neighbouring images.
- **Dynamic content and search:** the product catalogue (`js/products.js`) is rendered with JavaScript on the home, services and enquiry pages. Services has live multi-word search, category filter, four sort options and an empty-state message.
- **Animations:** CSS fade-up on load, scroll-reveal using `IntersectionObserver`, accordion height transition, modal transitions. `prefers-reduced-motion` is respected.
- **DOM manipulation:** all dynamic text is inserted with `textContent` / `createElement` (never `innerHTML` with user input), which also protects against script injection.

### Forms and validation
Both forms use proper `label`s, `autocomplete`, `aria-describedby`, `aria-invalid`, live error messages next to each field, an error summary that receives focus, and character counters.

**enquiry.html** (enquire about products/services):
- Controls: text, email, tel, select with optgroups, number, radio buttons, checkboxes, date, textarea. Length and delivery-area fields appear only when relevant.
- Validation: name (letters only, 2-60), email format, South African phone format (`082 123 4567` / `+27...`), quantity 1-10 whole number, required length for wigs, courier area required, date not in the past, not a Sunday and within 90 days, notes max 300, consent checkbox.
- Processing and response: calculates an estimated quote (item + length + quantity + extras + courier), checks stock to give availability and an estimated ready date, compares it with the preferred date, and shows a reference number. An "Email this enquiry to us" button is also provided.
- The form `action` is `enquiry.html` (method `get`); JavaScript intercepts the submit and processes the validated data on the client.

**contact.html** (general message):
- Controls: name, email, optional phone (required if a call or WhatsApp reply is chosen), message type select, reply-method radios, subject, message, consent.
- Validation: same rules plus subject 5-80 and message 20-1000 characters.
- Processing: the validated input is compiled into an email and opened with `mailto:` addressed to the recipient set in `js/contact.js` (`RECIPIENT`). A preview, an "Open in my email app" button and a "Copy email text" fallback are shown. The form `action` is also `mailto:` so it degrades gracefully.

### SEO
- Unique, keyword-focused `<title>` (about 50-60 characters) and `<meta name="description">` (about 120-160 characters) on every page.
- `<meta name="keywords">` on every page (kept short and relevant to avoid keyword stuffing).

| Page | Title | Keywords |
|---|---|---|
| home | Abby Luxe Hair - Quality & Affordable Wigs and Hair Care | wigs, lace front wigs, affordable wigs, body wave wig, hair care |
| about | About Abby Luxe Hair - Affordable Luxury Wigs & Hair Care | about Abby Luxe Hair, wig business, our mission, our vision |
| services | Wigs, Hair Care & Styling Services - Abby Luxe Hair | wig prices, lace front wigs, wig care kit, lace customisation |
| gallery | Wig Gallery - Straight, Body Wave & Curly Wigs - Abby Luxe | wig gallery, lace front wig photos, wig before and after |
| enquiry | Wig Enquiry & Instant Quote - Abby Luxe Hair | wig quote, wig enquiry, buy a wig online |
| contact | Contact Abby Luxe Hair - Message Us & Find Our Locations | contact Abby Luxe Hair, wig store location, collection points |

- One `h1` per page with a logical `h2`/`h3` hierarchy; descriptive internal links ("enquiry form", "contact page").
- Descriptive image file names (for example `abby-luxe-body-wave-wig.jpg`) and meaningful `alt` text on every image; width/height set to prevent layout shift; `loading="lazy"` on gallery and product images.
- Clean, readable URLs; `robots.txt`; `sitemap.xml`; Open Graph/Twitter tags; JSON-LD `LocalBusiness` structured data on home and contact (local SEO).
- Mobile-friendly: responsive layouts, viewport tag, collapsible menu.
- **Off-page SEO plan (not code):** share the site and gallery on Instagram/TikTok/Facebook with the website link in the bio; add the business to Google Business Profile and local directories; ask hair and beauty bloggers or influencers for links; use the same business name, email and area everywhere.

### Performance, security and accessibility
- Fonts loaded with `<link>` and `preconnect`; the 2.4 MB PNG collage was replaced with optimised JPEGs (about 260 KB); scripts use `defer`; images are cached for a year via `_headers`.
- `_headers` adds a Content Security Policy, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and `Permissions-Policy`. No inline scripts or inline event handlers are used so the CSP can stay strict. External links use `rel="noopener noreferrer"`. All user input is validated and only ever written with `textContent`.
- Skip link, visible focus styles, ARIA labelling, live regions, adequate colour contrast and keyboard access for every interactive component.

## Placeholders to confirm before final submission
- **Prices and stock** in `js/products.js` are illustrative.
- **Map locations** in `js/map.js` (Rosebank studio, Sandton and Braamfontein collection points) are placeholders for the business's real locations.
- **Recipient email** `info@abbyluxe.co.za` (in `js/contact.js`, `js/enquiry.js`, `contact.html` and the footer) is the address used in Part 2.
- **Domain** `abby-luxe-hair.netlify.app` in `robots.txt` and `sitemap.xml` must be replaced with the real deployed address.

## Deployment
Deployed on Netlify (drag the project folder to Netlify Drop, or connect the GitHub repository; publish directory is the repository root). GitHub Pages also works: Settings > Pages > deploy from the `main` branch root. After deploying, add the live link at the top of this README and update `robots.txt` and `sitemap.xml`.

## Testing
Each page was tested at desktop (1280 px) and mobile (375 px) widths in Chromium for JavaScript errors, broken images, missing alt text and horizontal scrolling. Tests also covered the tabs, accordion, modal, search/filter/sort, lightbox (keyboard and filters), both forms (empty, invalid, valid and conditional paths), the quote calculation and the email link. The map code was tested with a stand-in for Leaflet; please open `contact.html` on the live site and confirm the OpenStreetMap tiles display.

## Changelog

### 2 November 2026 - Part 3: functionality, SEO, forms and deployment
**Functionality**
- Added `js/main.js`: mobile menu toggle, scroll-reveal animation, accessible tabs and accordion.
- Added tabs to `about.html` and a six-question FAQ accordion to `services.html`.
- Added `js/products.js` and `js/services.js`: dynamic product catalogue with live search, category filter, sorting, empty state and a product details modal.
- Added featured products to `home.html`, rendered from the same data.
- Rebuilt `gallery.html` with 18 distinct images (Part 2 repeated three images), filter chips and a lightbox (`js/gallery.js`).
- Added `js/map.js` and the "Our locations" section on `contact.html`: Leaflet map with three markers, popups, location list, show-all and nearest-location features.

**Forms**
- Created `enquiry.html` with a full enquiry form, `js/forms.js` (shared validation) and `js/enquiry.js` (conditional fields, validation, quote, availability and ready-date response).
- Replaced the basic three-field form on `contact.html` with a full contact form (message type, reply method, subject, message with counter, consent) validated in `js/contact.js` and compiled into an email to the recipient.

**SEO**
- Rewrote title tags and meta descriptions, and added meta keywords, Open Graph/Twitter tags and JSON-LD structured data.
- Renamed images to descriptive file names and rewrote alt text.
- Added `robots.txt`, `sitemap.xml`, `404.html` and `index.html`.

**Performance and security**
- Replaced the CSS `@import` for Google Fonts with `<link>` tags and `preconnect`; converted the PNG collage to JPEG; added image dimensions and lazy loading.
- Added `_headers` (CSP and other security headers) and `rel="noopener noreferrer"` on external links.

**Repository and documentation**
- Updated this README with Part 3 documentation, references and the AI disclosure.

### 2 November 2026 - Part 2 feedback corrections
- Removed the visible placeholder sentence ("Replace the placeholder contact details...") from `contact.html` and made the email address a working link.
- Gallery used the same three images repeated twice; replaced with 18 distinct, descriptively named images and captions.
- Made the header and footer identical on every page (Part 2 footers listed different links on different pages) and added the new Enquiry page to the navigation.
- Darkened the gold eyebrow text colour for readable contrast against the pink and white backgrounds.
- Added a skip link, `aria-current` on the active page, visible focus outlines and ARIA labels.
- Added a collapsible mobile menu so the navigation no longer stacks above the content on small screens.
- Moved the Google Fonts `@import` out of the stylesheet to speed up rendering.
- Added `alt` text that describes each image's content, and corrected the hero heading to "wigs" to match the business.
- *Note: add or adjust entries here so they match the lecturer's specific Part 2 comments.*

### 24 September 2026 - Part 2 CSS and responsive design
- Replaced page-level pink inline styling with one external `css/style.css` file.
- Linked the external stylesheet to all five HTML pages.
- Added a CSS reset and reusable CSS variables for the Abby Luxe colour palette.
- Added consistent typography, spacing, buttons, cards, borders and shadows.
- Added Flexbox navigation and CSS Grid layouts for the main content sections.
- Added hover and focus-visible states for interactive elements.
- Added desktop, tablet (`56rem`) and mobile (`38rem`) responsive breakpoints.
- Changed multi-column card and gallery layouts to single-column layouts on mobile.
- Added responsive hero and contact layouts.
- Added responsive image handling using `srcset`, `sizes` and `picture`.
- Replaced the missing video reference from Part 1 with a responsive image-based hero section so the page does not display a broken media element.
- Added structured content to the previously empty About, Services, Gallery and Contact pages based on the Part 1 website proposal.
- Added a README documenting the Part 2 changes.

### Part 1
- Created the initial HTML page structure, navigation and the Website Development Proposal (`documents/Proposal.pdf`).

## References (Harvard, IIE style)
Agafonkin, V. (2023) *Leaflet: an open-source JavaScript library for interactive maps* (version 1.9.4) [JavaScript library]. Available at: https://leafletjs.com (Accessed 2 November 2026). *Used in `js/map.js` and `contact.html`.*

Anthropic (2026) *Claude Sonnet 5.5* [Large language model]. Available at: https://claude.ai (Accessed 2 November 2026). *See AI disclosure below.*

Google (n.d.) *Google Fonts: Montserrat and Playfair Display*. Available at: https://fonts.google.com (Accessed 2 November 2026).

Google Search Central (n.d.) *SEO starter guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed 2 November 2026). *Used for titles, descriptions, headings, alt text and robots.txt.*

MDN Web Docs (n.d.) *IntersectionObserver*; *The dialog element*; *Client-side form validation*. Available at: https://developer.mozilla.org (Accessed 2 November 2026). *Used in `js/main.js`, `js/services.js`, `js/gallery.js` and `js/forms.js`.*

OpenStreetMap contributors (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org/copyright (Accessed 2 November 2026). *Map tiles and data.*

Schema.org (n.d.) *LocalBusiness*. Available at: https://schema.org/LocalBusiness (Accessed 2 November 2026).

Sitemaps.org (n.d.) *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed 2 November 2026).

W3C Web Accessibility Initiative (n.d.) *ARIA Authoring Practices Guide: tabs, accordion and dialog (modal) patterns*. Available at: https://www.w3.org/WAI/ARIA/apg/ (Accessed 2 November 2026).

**Images:** ADD the sources for the collage image (`abby-luxe-hair-collection-collage.jpg` and the gallery images cropped from it), the luxury banner image and the logo, for example: *Author/Site (Year) Title [image]. Available at: URL (Accessed date)*, or *Created by the student using Canva*.

## AI disclosure (Annexe)
Claude Sonnet 5.5 (Anthropic) was used to help write and test the Part 3 JavaScript, the page templates, SEO files and this README, working from the PoE brief and my Part 2 files. I reviewed, tested and take responsibility for the submitted work.
*Annexe: ADD screenshots of the AI conversation here, as required by the IIE AI-use policy.*
