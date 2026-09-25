# Abby Luxe Hair — Website Project

**Module:** Web Development (Introduction) — WEDE5020
**Student Number:** ST10502031

A responsive multi-page website for Abby Luxe Hair, a small business selling wigs and hair care products, built as part of the WEDE5020 Portfolio of Evidence.

## Project Structure

```
Abby luxe/
├── home.html
├── about.html
├── services.html
├── gallery.html
├── enquiry.html          # Product/service enquiry form (AJAX + validation)
├── contact.html          # General contact form (AJAX + validation)
├── css/
│   └── style.css         # Single external stylesheet for the whole site
├── js/
│   ├── form-utils.js     # Shared validation helpers
│   ├── enquiry.js        # Enquiry form logic (validation, estimate, AJAX)
│   └── contact.js        # Contact form logic (validation, AJAX)
├── images/
│   ├── responsive/       # Multi-width image variants used in srcset
│   └── ...                # Cropped product/lifestyle images, logo
└── documents/
    └── Proposal.pdf       # Original Part 1 project proposal
```

## ⚠️ Before Deploying

Both `enquiry.html` and `contact.html` submit to a placeholder email via FormSubmit
(`https://formsubmit.co/ajax/enquiries@abbyluxehair.co.za`). Before going live:

1. Replace the placeholder address in both files' `<form action="...">` with the real business email.
2. Submit each form once after deploying and click the confirmation link FormSubmit emails to that
   address — submissions silently fail until this is done.

## Changelog

### v1.2 — Part 2: CSS Styling & Responsive Design
- Built a single external stylesheet (`css/style.css`) and linked it across all six pages, replacing
  the inline `style="background-color: pink;"` used in Part 1.
- Added a CSS reset and a shared set of design tokens (custom properties) for colour palette,
  typography scale, spacing scale, radius and shadows, so the whole site pulls from one source of truth.
- Applied a typographic scale using `rem` units (`font-family`, `font-size`, `line-height`,
  `letter-spacing`) with Playfair Display for headings and Poppins for body text.
- Rebuilt page layouts using CSS Grid and Flexbox: the navigation bar, the home page hero, the
  category/product card grids, the four-column feature grid, the gallery mosaic, and the footer.
- Added decorative and interactive styling: box shadows, rounded corners, and `:hover`, `:focus-visible`
  and `:active` states on buttons, nav links, product cards and gallery items.
- Implemented two responsive breakpoints using media queries: tablet (`max-width: 1024px`) and mobile
  (`max-width: 600px`), adjusting column counts, font sizes, spacing and nav layout at each.
- Added responsive images using `srcset`, `sizes`, and `<picture>` with real multi-resolution JPEG
  variants (480w / native width) for the home hero image and the products page texture banner.
- Populated `about.html`, `services.html`, `gallery.html`, which were empty placeholder pages in
  Part 1, with real content derived from the Part 1 proposal (mission, vision, target audience,
  product categories, pricing, and a photo gallery).
- Rebuilt `home.html`, replacing a broken `<video>` reference to a missing `download.mp4` file with
  a working responsive hero image.
- Standardised the header/nav and footer markup across `contact.html` and `enquiry.html` (previously
  built in Part 3) so all six pages now share identical structure and styling.
- Fixed a CSS Grid packing gap in the gallery mosaic by adding `grid-auto-flow: dense`.
- Tested all six pages at desktop (1440px), tablet (820px) and mobile (390px) widths using browser
  dev tools to confirm layout, navigation, and form behaviour at each breakpoint.

### v1.1 — Part 3: Forms & JavaScript Validation
- Added `enquiry.html`: a product/service enquiry form (name, email, phone, enquiry type, product
  category, preferred contact method, message) with HTML5 + JavaScript validation and an on-page
  cost/availability estimate generated after submission.
- Added `contact.html`: a general contact form (name, email, phone, message type, subject, message)
  with validation and a live character counter.
- Implemented client-side validation with custom inline error messages (`js/form-utils.js`,
  `js/enquiry.js`, `js/contact.js`), including a South African phone number pattern and email format
  checking.
- Implemented AJAX form submission using the Fetch API against FormSubmit, so both forms submit
  without a page reload and show a success/error panel in place.

### v1.0 — Part 1: Project Proposal
- Initial site skeleton created: `home.html`, `about.html`, `services.html`, `gallery.html`,
  `contact.html`, with a shared (inline-styled) nav and logo.
- Project proposal document completed (`documents/Proposal.pdf`), covering goals and objectives,
  current market analysis, proposed features, and design aesthetic (colour palette, typography).

### Corrections from Part 1 Feedback
> **To complete:** add the specific corrections made in response to your lecturer's Part 1 feedback
> here, e.g. changes to goals/objectives, the current analysis, proposed features, or the design
> aesthetic. List each point raised and the corresponding change made.

- [ ] *(add feedback point 1 and how it was addressed)*
- [ ] *(add feedback point 2 and how it was addressed)*

## References

- IIE. 2026. *IT Professional Practice / Web Development Module Manual*. The Independent Institute of Education.
- MDN Web Docs. n.d. *CSS Grid Layout*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- MDN Web Docs. n.d. *Responsive images*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images
- MDN Web Docs. n.d. *Using media queries*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
- FormSubmit. n.d. *FormSubmit — Free form backend, no JavaScript, no sign up*. Available at: https://formsubmit.co/
- Google Fonts. n.d. *Playfair Display*. Available at: https://fonts.google.com/specimen/Playfair+Display
- Google Fonts. n.d. *Poppins*. Available at: https://fonts.google.com/specimen/Poppins
