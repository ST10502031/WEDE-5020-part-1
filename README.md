# Abby Luxe Hair - WEDE5020 Part 2

## Project
This version implements Part 2 of the WEDE5020 Web Development (Introduction) assessment. The website has been updated from the Part 1 structure to include an external stylesheet, consistent visual styling, desktop layouts and responsive layouts for tablets and mobile devices.

## Pages
- `home.html` - Home page and website introduction
- `about.html` - Organisation information, mission, vision and audience
- `services.html` - Products and services
- `gallery.html` - Image gallery
- `contact.html` - Contact information and enquiry form
- `css/style.css` - External stylesheet used by all pages

## Part 2 implementation
- External CSS stylesheet linked to every HTML page.
- CSS reset and base styles added for consistent browser rendering.
- Typography uses Playfair Display for headings and Montserrat for body text.
- Flexbox is used for the header/navigation and action buttons.
- CSS Grid is used for hero, cards, gallery, contact and footer layouts.
- Colour palette follows the Part 1 proposal: dark pink, black, gold and cream/white.
- Hover and focus states were added to navigation links, buttons and gallery images.
- Responsive breakpoints were added for tablet and mobile screens.
- Relative units including `rem`, `%`, `em`-style responsive sizing through `clamp()`, and flexible grid units are used.
- Responsive images use `srcset`, `sizes` and a `picture` element.
- Images use descriptive `alt` text.
- Navigation wraps into a mobile-friendly layout at smaller widths.
- Forms, cards and content sections resize into single-column layouts on mobile devices.

## Changelog

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
