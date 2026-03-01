# CG Racing E-Commerce Project - AI Coding Instructions

## Project Overview
**CG Racing** is a mini e-commerce web application for selling automotive racing products (oils, filters, maintenance supplies). Built with vanilla HTML/CSS/JavaScript. Thai language interface targeting Thai market.

## Architecture & Framework Decisions

### No Build Tools / Vanilla Stack
- **Why**: Mini project requirement - no npm/build pipeline
- **Impact**: All logic is inline JavaScript in HTML files; static CSS imports from CDN (FontAwesome, Google Fonts)
- **Pattern**: Direct `<script>` tags in HTML, no module system
- **Key**: When adding features, keep code in single files per page

### Responsive Design - Sidebar + Main Layout
- Fixed left sidebar (80px collapsed, expands on hover to 180px)
- Fixed top header with search and user actions
- Main content with left margin to accommodate sidebar
- Mobile responsive: sidebar hidden on screens ≤768px, content takes full width
- Reference: [style.css](style.css) lines 95-160 for sidebar, lines 413-438 for media queries

### Dark Theme System
- Color palette via CSS variables in `:root` (see [style.css](style.css) lines 2-9):
  - `--bg-main`: Dark background (#15141b)
  - `--accent`: Red highlight (#ff3636) - use sparingly for CTAs
  - `--text-main`: Primary text (#e6e4f1)
  - `--text-faint`: Subtle text (#6a687d)
- **Pattern**: Always use variables, never hardcode colors
- Accent color only for interactive elements (buttons, active nav, hover states)

## UI Component Patterns

### Buttons
- Base class `.btn` with dark background
- Hover state: brightens to `--text-faint`
- Active state: `.btn-active` inverts colors (white bg, dark text)
- Pattern: Keep consistent padding (0.7rem) and border-radius (1rem)

### Product Card Layout
- Grid-based: `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`
- Card structure: Image + details + bottom metrics
- Bottom shows rating and sales count
- Reference: [index.html](index.html#L101-L115) product structure

### Hero Banner Carousel
- Opacity-based transitions (not translate)
- Auto-rotate every 5000ms, stops on user interaction
- Touch swipe support: >50px threshold triggers nav
- Dots indicate current slide and allow click navigation
- Reference: [index.html](index.html#L155-L180) slider implementation

## JavaScript Patterns

### DOM Content Generation
- **Pattern**: Clone a template element and append repeatedly
- Example: `productClone.innerHTML` cloned 7+ times on home and 50 times on discover
- Reference: [index.html](index.html#L121-L126) DOMContentLoaded pattern
- **Use Case**: Product grids populated on page load
- **Limitation**: No state management - refresh page data

### Event Listeners for Interactivity
- Used for: carousel navigation, tooltip behavior, form handling
- Touch + mouse support (touchstart, touchend, mousedown, click)
- Reference: [index.html](index.html#L165-L180) carousel event handling

### No Framework Libraries
- **No jQuery** - use vanilla DOM queries (`querySelectorAll`, `addEventListener`)
- **No state library** - local variables only
- **No async/await patterns** - static content only (no AJAX yet)

## File Structure & Naming

### Pages
- **[index.html](index.html)**: Home - hero banners, featured categories, recommended products
- **[discover.html](discover.html)**: Browse/filter - full product grid with category buttons
- `contact.html`, `seller.html`: Referenced but not in workspace (incomplete project)

### Styling Strategy
- Single [style.css](style.css) file for entire project
- Component classes grouped together (buttons, sidebar, products, etc.)
- Mobile-first breakpoint at 768px
- No CSS preprocessor (no SASS/LESS)

### Fonts
- **Google Fonts**: "Prompt" (Thai-optimized sans-serif, all weights 100-900)
- **Custom Font**: Novusa from `fonts/Novusa.otf` - used for brand text "CG" and "RACING"
- Pattern: Import custom fonts with `@font-face` before use

## Language & Localization

- **Interface Language**: Thai (ภาษาไทย)
- **Common Thai terms in codebase**:
  - "ค้นหา" = Search
  - "ช้อปเลย" = Shop Now / Start Shopping
  - "หมวดหมู่" = Categories
  - "สินค้า" = Products
- When adding features, maintain Thai text for consistency (or add EN toggle if expansion needed)

## Data Representation Patterns

### Product Object (Implied Structure)
```javascript
{
  name: "Castrol EDGE 5W-30",
  category: "น้ำมันเครื่อง",
  price: 1450,
  image: "url",
  rating: 4.9,
  sold: 1200
}
```
- Currently hardcoded in HTML; no API/database layer
- Reference: [index.html](index.html#L108-L115)

### Filter Categories (discover.html)
- All-products filter
- Per-category filters: oils, rear oil, maintenance kits, accessories
- Buttons styled with `.btn` class, active is `.btn-active`

## Common Development Tasks

### Adding a New Page
1. Create `.html` file with full template (header, sidebar, main content)
2. Create `<li>` in sidebar navigation for link
3. Ensure responsive class structure matches existing pages
4. Apply consistent dark theme variables in CSS

### Adding Product Category
1. Add new `<div class="cat-item">` in categories section
2. Update icon from FontAwesome (use same format as existing)
3. Add filter button to discover.html
4. Consider responsive grid breakpoint (auto-fit columns)

### Styling New Components
- Always prepend with component name (e.g., `.modal-header`, `.review-item`)
- Use `gap` for spacing instead of margins between children
- Add hover states for interactivity
- Test at 768px breakpoint for mobile collapse

## Testing & Validation

- **No automated tests** in project
- **Browser compatibility**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Responsive breakpoint**: Test at 768px (tablet/mobile switch)
- **Touch interactions**: Carousel swipe requires mobile device or browser dev tools device emulation

## Important Constraints & Gotchas

- **No backend**: All data is static/hardcoded
- **No dynamic routing**: Each page is separate HTML file
- **Touch threshold**: Carousel swipes need 50px minimum (not 30px or smaller)
- **Auto-slide stops**: Stops after user interaction then doesn't auto-resume (by design)
- **Sidebar nav items**: Missing contact.html and seller.html pages (incomplete project)

## External Dependencies

- **FontAwesome CDK**: `kit.fontawesome.com/5efd6bd50f.js` (icons)
- **Google Fonts API**: Prompt font-family
- **Placeholder images**: `placehold.co` URLs (replace with real images)
- **Discord media**: sidebar image on discover.html from Discord CDN (fragile)

## Quick File References

| Purpose | File |
|---------|------|
| Home page layout | [index.html](index.html) |
| Discovery/browse page | [discover.html](discover.html) |
| All styling & dark theme | [style.css](style.css) |
| Custom brand font | [fonts/Novusa.otf](fonts/Novusa.otf) |

---

**Last Updated**: March 2, 2026  
**Project Status**: Mini project (incomplete - missing contact.html, seller.html pages)
