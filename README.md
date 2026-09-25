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


Identified strengths and weaknesses.

Proposed improvements.

Planned website pages.

Planned website functionality.

Selected the initial colour scheme.

Planned typography.

Planned the homepage layout.

Created low-fidelity wireframes.

Identified technical requirements.

Planned the domain and hosting requirements.

Identified development tools.

Phase 1 Key Achievements

svg

The main achievements of Phase 1 are:

Established Abby Luxe Hair as the selected organisation.

Identified the purpose of the website.

Defined the target audience.

Established website goals and objectives.

Identified measurable KPIs.

Planned the main website pages.

Created initial wireframes.

Established the proposed visual identity.

Identified the required technologies.

Planned the technical requirements.

Established the foundation for the next stage of development.

Project Timeline

svg

The website project follows the timeline provided for the Web Development module.

Phase 1 focuses on planning and research before moving into the website development stages.

ActivityPhase



Organisation Selection

Phase 1

Organisation Research

Phase 1

Website Proposal

Phase 1

Target Audience Research

Phase 1

Website Goals and Objectives

Phase 1

Sitemap Planning

Phase 1

Wireframe Development

Phase 1

Technical Planning

Phase 1

HTML Development

Following Phase

CSS Development

Following Phase

JavaScript Development

Following Phase

Testing and Final Improvements

Final Phase

Project Information

svg

Project: Abby Luxe Hair Website

Student: Abongile Manzitshana

Student Number: ST10502031

Module: Web Development

Institution: Rosebank College

Project Type: Website Development / Website Redesign

Phase: Phase 1 – Planning and Foundation

Proposal Submission Date: 21 August 2026

References

svg

Abby Luxe Hair. (2026). Organisation information and business requirements. Information provided for the website development project.

Google Fonts. (n.d.). Google Fonts. Available online at: https://fonts.google.com/

GitHub. (n.d.). GitHub. Available online at: https://github.com/

Mozilla Developer Network. (n.d.). MDN Web Docs: HTML, CSS and JavaScript. Available online at: https://developer.mozilla.org/

Rosebank College. (2026). Web Development Module. Course material and assessment requirements.

W3C. (n.d.). World Wide Web Consortium. Available online at: https://www.w3.org/

Conclusion

svg

Phase 1 established the foundation for the Abby Luxe Hair website development project. During this phase, the organisation, target audience, website requirements, goals and objectives were identified.

The planning process also established the proposed website structure, design direction, technical requirements and low-fidelity wireframes. The website will focus on providing customers with a professional and user-friendly platform where they can learn about Abby Luxe Hair, view products and contact the business.

The proposed design combines dark pink, black, gold and white or cream to create a modern and feminine appearance that represents the Abby Luxe Hair brand.

The information and planning completed during Phase 1 will be used as the foundation for the following stages of the website development process.

Aboutsvg

No description, website, or topics provided.

Resources

svgReadme

svgActivity

Stars

svg0 stars

Watchers

svg0 watching

Forks

svg0 forks

Releases

No releases published

Create a new release

Packages

No packages published
Publish your first package

Contributors1 (1)

@ST10502031 (image)ST10502031

Footer

svg© 2026 Gi

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



### v1.0 — Part 1: Project Proposal
- Initial site skeleton created: `home.html`, `about.html`, `services.html`, `gallery.html`,
  `contact.html`, with a shared (inline-styled) nav and logo.
- Project proposal document completed (`documents/Proposal.pdf`), covering goals and objectives,
  current market analysis, proposed features, and design aesthetic (colour palette, typography).

#

- IIE. 2026. *IT Professional Practice / Web Development Module Manual*. The Independent Institute of Education.
- MDN Web Docs. n.d. *CSS Grid Layout*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- MDN Web Docs. n.d. *Responsive images*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images
- MDN Web Docs. n.d. *Using media queries*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
- FormSubmit. n.d. *FormSubmit — Free form backend, no JavaScript, no sign up*. Available at: https://formsubmit.co/
- Google Fonts. n.d. *Playfair Display*. Available at: https://fonts.google.com/specimen/Playfair+Display
- Google Fonts. n.d. *Poppins*. Available at: https://fonts.google.com/specimen/Poppins
