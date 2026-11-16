# Developement steps
### 16.10.2026

## 1. Initial Project Creation

**Objective:** Establish the GitHub repository, local development environment, and initial project structure for Stephworld Delights.

### Tasks Completed

- [x] Create the empty GitHub repository/project.
- [x] Clone the GitHub repository to the local Mac.
- [x] Create the initial project directory structure.
- [x] Create and configure the Next.js application.
- [x] Configure TypeScript and Tailwind CSS.

### Development Approach

The project was initialized using a Git-first workflow:

1. Create the remote repository on GitHub.
2. Clone the repository to the local development machine.
3. Create the planned directory structure.
4. Initialize the Next.js application inside `application/web/`.
5. Configure the development environment and required technologies.

This approach ensures that the project is organized and version-controlled from the beginning.

### Technologies

- Git and GitHub — Version control.
- Next.js — Web application framework.
- React — User interface development.
- TypeScript — Type-safe development.
- Tailwind CSS — Styling and responsive design.

### Result

The initial Stephworld Delights project foundation was established.

The remaining documentation, branding, and design preparation activities are tracked in the development history for 20.10.2026.


### 20.10.2026

## 1. What have been completed
- Next.js project created and configured.
- GitHub repository connected.
- Logo and flyer added to the project.
- architecture.md and requirements.md created.
- Mermaid architecture diagram working in Markdown Preview.
- Initial theme configuration file (theme-default.ts) created.
- Website navigation concept agreed upon.
The screenshots confirm the project structure, but we still need to verify the functionality of the new components.

## What should be done next?
Develop of the website navigation system first.
The design concept ist already fix.
Now just turn it into working components.

- The navigation system will include:
    - Top Navigation Bar: A fixed bar with the menu button, Stephworld Delights logo/name, and account button.
    - Left Sidebar: Opens when the visitor clicks the menu button. It contains Home, Products, Gallery, About and Contact.
    - Right Sidebar: Opens when the visitor clicks the account button. It will eventually contain Profile, Orders, Favorites and Settings.
    - Active Page Indicator: Displays the current page name and adjusts its position when a sidebar opens.
    - Responsive Design: Works on desktop, tablet and mobile devices.

We will initially implement these components without applying the final brand colors.

## About the Admin Dashboard?

We will develop it after the basic website components are working.
The administrator will eventually be able to:
- Upload and replace images, logos and icons.
- Edit website text and descriptions.
- Add, modify and remove products.
- Change colors, fonts and visual effects.
- Preview changes before publishing.
- Manage business information.
The important principle is that website content and appearance must be editable without changing the application code.

### 22.10.2026

## Default Theme Configuration

### Tasks completed:

- Defined the neutral default theme in theme-default.ts.
- Connected the theme configuration to the root layout.
- Integrated CSS variables into globals.css.
- Resolved the CSS variable naming mismatch.
- Verified the theme by changing the website background color.

Result: The website now uses centralized theme variables instead of hardcoded background and text colors.

### 2026-11-05

## Phase 2: Design Token Integration

**Objective:** Connect the responsive navigation system to centralized design tokens.

**Implementation completed:**
- Extended `theme-default.ts` with overlay, hover, active navigation, and sidebar shadow tokens.
- Connected the new tokens through `ThemeProvider.tsx`.
- Updated `LeftSidebar.tsx`, `RightSidebar.tsx`, and `TopNavigation.tsx`.
- Centralized navigation colors, borders, shadows, border radius, and transition settings.
- Preserved navigation functionality and responsive behavior.

**Verification results:**
- Theme color checks: 8/8 passed.
- Smartphone (390px): 7/7 passed.
- Tablet (768px): Pending.
- Desktop (1440px): Pending.
- TypeScript, ESLint, and production build: Final confirmation pending.

**Status:** Design-token integration completed. Phase 2 final verification pending.

**Next action:** Complete tablet and desktop responsive testing, then close Phase 2 and begin Phase 3 — Homepage Layout and Components.

### 2026-11-15 — Global Navigation Enhancement

**Branch:** `feature/global-navigation`

Inspected AppShell, both sidebars, TopNavigation, ThemeProvider, and theme-default before editing. Kept the existing component structure and added independent collapse state in AppShell, passed through TopNavigation to LeftSidebar. The hamburger continues opening/closing the menu; the new 36 × 36px button immediately above Home switches between icons with labels and icons only.

- Added `spacing.sidebarCollapsedWidth: "64px"` and `--swd-sidebar-collapsed-width`.
- Added Lucide navigation icons, 14px labels, accessible names, native desktop title tooltips, keyboard focus styling, and preserved active-page highlights.
- Desktop content margin follows the expanded/collapsed width using existing transition durations. Tablet/mobile retain overlays, scroll locking, Escape dismissal, and close-on-navigation.
- Preserved the current closed initial menu state, branding, account menu, and cart. No changes to page content, footer, authentication, or internationalization.

**Verification:**

- ESLint: passed (`npm run lint`).
- TypeScript: passed (`npx tsc --noEmit --incremental false`, after build-generated types were ready).
- Production build: passed (`npm run build -- --webpack`). Default Turbopack build was attempted but blocked by an environment worker/port permission error, including on retry with elevated execution. No build configuration was changed.
- Chromium browser checks against the production server: passed at desktop 1440px, tablet 768px, and mobile 390px. Checked hamburger open/close, 280px/64px sidebar widths, content margins, 36px control, 14px labels, icon-only accessible names and tooltip attributes, route highlighting after navigation, keyboard activation, Escape, overlay dismissal, scroll locking, account controls, cart destination, branding, and breakpoint resizing. No browser page errors.
- Visually reviewed desktop collapsed and mobile expanded screenshots; captured expanded/collapsed screenshots at all three widths. These are browser viewport tests, not physical-device tests.
- Browser tooling, test script, and screenshots were kept in `/tmp/stephworld-navigation-check`, without adding project dependencies.

**Status:** Enhancement implemented and checked. No commit created.


### 2026-11-15 — Restore sidebar slide transition

Added `translate` to the left sidebar transition properties: Tailwind uses the individual CSS `translate` property for opening/closing. Retained width animation and the shared medium transition duration used by the account sidebar. ESLint and the webpack production build (including TypeScript) passed.


### 2026-11-15 — Responsive sidebar defaults

Updated the navigation modes to follow viewport width, including browser resizing:

- Desktop (≥1024px): initially open with icons and labels.
- Tablet (768–1023px): initially open with icons only.
- Both persistent modes resize the content when expanded/collapsed or closed, keep the page interactive, and preserve the sidebar on route navigation, Escape, and account-menu opening. X closes it; hamburger reopens it.
- Phone (<768px): initially closed; hamburger opens the full menu over a shaded page. The collapse control is hidden. Overlay, Escape, and route navigation still dismiss the phone menu.
- Crossing a breakpoint reapplies the new mode's default. Resizing within a mode preserves the user's open/collapsed choice. The existing 500ms slide and width transitions remain in place.

Verification: ESLint, standalone TypeScript, and webpack production build passed. Responsive Chromium checks passed at 1440, 1024, 1023, 768, 767, and 390px, covering initial state, collapse/expand, content margins, active links, route navigation, X/reopen, phone overlay, account/Escape behavior, breakpoint crossing, and manual-close preservation within one mode. No commit created.


### Account and cart temporarily disabled

The top navigation retains visible, disabled account and cart buttons while these features are unfinished. Native disabled buttons prevent mouse and keyboard activation; the cart has no active link and the account sidebar cannot open. Existing account sidebar, handlers, cart page, and enabled cart link are retained. Reactivate independently by setting `accountEnabled` or `cartEnabled` to `true` in `application/web/src/config/features.ts`. This controls navigation availability only; it is not route authorization.


### 2026-11-15 — Internationalization (`feature/i18n`)

Inspected routing, navigation, theme, homepage components, page placeholders, and the clean branch before editing. Added `next-intl` 4.15.1 using its locale routing and navigation APIs, with independent namespaced English/French/German message catalogs.

**Implementation and migration:**

- `application/web/messages/{en,fr,de}.json`: 49 consistent keys per language, including visible content, accessibility labels, reserved account/cart labels, error messages, and metadata description.
- `src/i18n/routing.ts`, `navigation.ts`, `request.ts`, `server.ts`, and `types.d.ts`: supported locale definitions, locale-aware links/router/pathnames, validated message loading, per-page locale setup, and typed keys.
- `src/proxy.ts`: next-intl locale routing. URLs take precedence, followed by the one-year `NEXT_LOCALE` cookie, then English. The proxy normalizes Accept-Language to English so a first-time visitor's browser language does not silently change the default. Images/framework assets, API paths, and future unprefixed `/admin` paths are excluded.
- Moved the existing root layout and pages under `src/app/[locale]`. The layout validates locale, sets the HTML language, preserves theme variables, and supplies NextIntlClientProvider around the existing AppShell. Pages are prerendered for all three languages using explicit locale setup.
- Removed the old permanent `/ → /home` redirect from `next.config.ts` and wrapped the config with the next-intl plugin. Old `/home`, `/products`, `/abouts`, `/contact`, and `/cart` URLs redirect to the saved/default locale. `/` and `/{locale}` resolve to the corresponding localized homepage. Temporary redirects are appropriate because the target depends on a preference cookie.
- Added `LanguageSelector.tsx` immediately before the account button: globe, current language name, chevron, active-language check/highlight, translated language names, keyboard navigation, Escape/outside/blur dismissal, and same-page switching with query/hash preservation.
- Updated navigation and homepage links to the shared locale-aware Link. Locale-stripped pathname matching preserves active sidebar highlights. Kept page layout classes and centralized theme tokens. On phones the logo provides compact branding; full brand text and slogan remain visible from 640px so all header controls fit.
- Kept desktop expanded/tablet icon-only/phone closed defaults and the 500ms transitions. Account/cart remain disabled through their existing flags. Disabled account implementation is preserved but not mounted, preventing prefetches to unfinished login/register pages. No authentication, commerce, backend, or footer implementation added.
- Future public pages belong under `[locale]` and should call `prepareLocale(params)`. Future unprefixed admin routes need their own layout/provider. Future CMS content translations remain separate work.
- Added `scripts/check-messages.mjs` and `npm run check:i18n` for key parity, nonempty text, and valid ICU messages. Add new keys to all three catalogs; use translation hooks/server APIs rather than inline translated strings.

**Validation:**

- Node 24 used for final checks, matching the project's engine requirement.
- Route types and TypeScript were checked incrementally before navigation changes. Stale generated types referring to moved routes were archived outside the repository under `/tmp` and regenerated.
- `npx tsc --noEmit`: passed.
- `npm run lint`: passed.
- `npm run check:i18n`: passed, 49 valid matching keys per locale.
- `npm run build`: attempted, including an elevated retry; Turbopack cannot bind its CSS processing worker port in this environment. `npm run build -- --webpack` passed and generated all 15 localized content routes plus the three locale entry redirects. Build scripts/configuration were not changed to hide this environment limitation.
- Chromium production browser checks passed at desktop 1440px, tablet 768px, and phone 390px/320px, with no browser page/console errors. They cover all localized pages, old URL redirects, explicit locale entry redirects, English default even with a German browser, cookie preference, refresh, language names/highlight, same-page switching on every existing page, filters/query/hash preservation, locale-aware links, active page, responsive sidebar defaults/collapse/content resizing, disabled account/cart, keyboard selection/dismissal, and header fit.
- API/admin exclusion paths and unsupported locale/missing-page requests return 404; public logo asset loads successfully. Browser checks use viewport emulation, not physical devices.
- Test harness and screenshots are in `/tmp/stephworld-navigation-check/i18n.cjs` and `i18n-*.png`; browser tooling was not added as a project dependency.

**Status:** Implemented; review and merge remain manual. No commit or push created.


### 2026-11-15 — Safari language selection fix

Reproduced a Safari/WebKit-specific regression: selecting French closed the dropdown while the URL, HTML language, and active language remained English. Safari can blur the focused menu button with a null `relatedTarget` before dispatching the clicked item's click event. The wrapper's blur handler unmounted the dropdown before that event could change locale.

Updated `LanguageSelector.tsx` to dismiss on blur only when focus moves to a known element outside the selector. The existing outside-pointer handler still dismisses outside clicks; keyboard focus handling and Escape remain available. This preserves the clicked menu item's handler without changing routing or cookie behavior. ESLint, TypeScript, and the webpack production build passed. Cross-browser regression harness: `/tmp/stephworld-navigation-check/cross-browser-language.cjs`.

Cross-browser checks passed in WebKit and Chromium at 1440px, 768px, and 390px: mouse/keyboard language changes, updated active label/check, translated content, query/hash preservation, cookie/refresh, outside dismissal, and Escape. No browser page errors.


### 2026-11-16 — Global Footer (`feature/global-footer`)

Inspected the shared locale layout, AppShell, theme tokens, translation architecture, and current public routes before editing. The branch was already `feature/global-footer` with a clean working tree.

**Implementation:**

- Added a reusable server-rendered `src/components/layout/Footer.tsx` after page content in `[locale]/layout.tsx`. It is passed through AppShell with the page, so it participates in the existing content margin/width transitions without changing sidebar state or handlers. It appears on all existing public pages, including the retained cart placeholder, without changing commerce behavior.
- Logo and business name link to the localized homepage; the slogan reuses the existing Navigation translation. The short description is configurable via the Footer message namespace and uses content already present on the homepage.
- Four sections use a single-column phone, two-column tablet (≥768px), and four-column desktop (≥1024px) grid. The footer stays in document flow, wraps long labels, and uses existing surface/foreground/border/primary colors and quick transition duration.
- Added `src/config/footer.ts` for business name/logo, description key, navigation destinations/visibility, and optional social URLs. Local links use the existing locale-aware Link; enter routes without language prefixes.
- Explore links to Home, Products, About Us. Customer Service links to Contact; Custom Orders currently links to the same Contact page for inquiries. No new ordering workflow was added.
- Imprint and Privacy Policy have non-clickable translated “Coming soon” labels. FAQ and Terms are configured but hidden. No legal-policy content was written. Enable a destination only after the corresponding page exists and its content is approved.
- Instagram, TikTok, and WhatsApp have null URL values. A translated message appears in Follow Us until configured. Approved HTTPS URLs render as normal external links in the same tab. Empty/malformed/non-HTTPS URLs and URLs containing credentials are excluded; no business contact details or social accounts were invented.
- Added 20 matching Footer translation keys per locale (69 total keys in EN/FR/DE). Updated the existing message-check script's sample interpolation values to validate copyright year/business-name arguments.
- Copyright year is generated during page rendering. Because these public pages are prerendered, rebuild the site at the start of a new year to refresh it.

**Configuration:**

- Edit branding/destinations in `application/web/src/config/footer.ts`.
- Edit translated descriptions, group headings, labels, notices, and copyright wording in `messages/en.json`, `fr.json`, and `de.json`.
- To enable Imprint/Privacy, create approved public pages and replace null hrefs with their unprefixed routes. For FAQ/Terms also change `visible` to true. Set only approved profile/contact URLs in `footerSocialLinks`.

**Validation:**

- `npx tsc --noEmit`, `npm run lint`, and `npm run check:i18n`: passed under Node 24.
- `npm run build` was attempted and retried with elevated execution. Turbopack still cannot bind its CSS worker port in this environment. `npm run build -- --webpack` passed; no build scripts/configuration changed.
- Social configuration checks passed: empty, malformed, non-HTTPS, and credential-bearing URLs are filtered out; a neutral HTTPS test fixture is accepted without modifying the actual configuration.
- Chromium and WebKit functional checks passed at 1440px, 768px, 390px, and 320px in EN/FR/DE: four/two/one columns, normal-flow positioning after main content, no horizontal overflow, valid locale-preserving links, language switching, unavailable/future/social states, sidebar collapse/close alignment, and phone overlay behavior. Each of the 15 public locale/page combinations has exactly one footer. Screenshots were reviewed for desktop, tablet, and phone. These are browser viewport tests, not physical-device tests.
- Browser regression harness and screenshots: `/tmp/stephworld-navigation-check/footer.cjs` and `footer-*.png`. Browser tooling remains outside project dependencies.
- WebKit reported access-control console messages for background Contact RSC prefetches during automated page/language changes. These messages also occurred with footer prefetch disabled; direct destinations returned HTTP 200 and visible navigation worked. The final harness records these specific background messages separately from functional/page errors. No navigation behavior was changed to suppress them.

No authentication, checkout, cart logic, homepage component, or navigation behavior changes. No commit created; review and merge remain manual.


### 2026-11-16 — Compact footer spacing

Removed the repeated footer logo, business name, and slogan at the user’s request. Kept the localized description and copyright. Halved category gaps, heading margins, link padding/list gaps, unavailable-note margins, outer vertical padding, and copyright spacing while retaining readable text line heights.


### 2026-11-16 — Step 4.1: Homepage Hero (`feature/home`)

Inspected the Hero, locale homepage routing, theme variables, EN/FR/DE catalogs, and available public assets before editing. The branch was already `feature/home` and the working tree was clean. The only supplied business imagery is the logo and `public/branding/flyer.jpeg`; the flyer contains actual cake photographs.

**Implementation:**

- Extended the existing `HeroSection.tsx` rather than creating a duplicate homepage component. The brand introduction, marketing headline/description, two localized actions, and prominent square cake image use the existing colors, inherited typography, radius, and transition tokens.
- Added `src/config/home.ts`: image source, crop coordinates, translation keys for image/caption, and unprefixed action destinations. Product navigation points to `/products`; custom-order inquiries point to the existing `/contact` page. No order/checkout flow was added.
- Reused the birthday cake with red roses from the supplied 1132 × 1600 flyer. A CSS crop at original-image coordinates x=700, y=760, width=400, height=400 displays that real photograph without generating imagery or altering the original asset. The photograph is served by `next/image` with responsive sizes and preload.
- The cropped source has limited resolution because it comes from a flyer. A higher-resolution approved standalone image can replace it in configuration; omit `crop` for a standalone photo. Setting `image` to null displays a translated placeholder.
- A container-query grid switches to two columns at 56rem of available content width, rather than using only the browser width. This keeps sidebar resizing intact; narrower tablet/phone content stacks. Top padding includes the navigation height so the fixed top bar does not obscure the introduction.
- Kept copy in the existing Hero namespaces; updated the custom-order button wording and added photo alt/caption/placeholder in all three locales. Message validation now checks 72 matching keys per locale.
- Homepage routing, category component, footer, navigation handlers, account/cart flags, and all backend/commerce functionality remain unchanged.

**Validation:**

- `npx tsc --noEmit`, `npm run lint`, and `npm run check:i18n`: passed with Node 24.
- `npm run build`: attempted and retried with elevated execution; Turbopack remains blocked from binding its CSS processing worker port in this environment. `npm run build -- --webpack` passed without changing the build configuration.
- Chromium and WebKit functional checks passed at 1440px, 768px, and 390px for English, French, and German. Verified optimized image loading and alt text, translated caption/buttons, two-column/stacked layout, expanded/collapsed sidebar alignment where available, fixed-top-bar clearance, no horizontal overflow, both button destinations, and language switching on the homepage. Existing footer remains present.
- Desktop and phone screenshots were visually reviewed, including the real cake crop and long German text. These are browser viewport checks, not physical-device tests.
- The initial rapid-navigation WebKit run recorded the previously documented background RSC access-control errors. The final rerun checked destination HTTP 200 responses and completed all functional checks; no such messages were emitted on that rerun. This Hero-only change does not alter shared navigation/prefetch behavior.
- Browser harness/screenshots: `/tmp/stephworld-navigation-check/hero.cjs` and `hero-*.png`. Tooling stays outside project dependencies.

Scope stops at Step 4.1 — Hero Section. No later homepage steps implemented; no commit created.

### 2026-11-16 — Hero example image and future Admin uploads

Replaced the flyer crop with the user-supplied example `Image/cak/ai_cak_ex` (JPEG, 1200 × 1199). Copied it without image alterations to `application/web/public/images/home/hero-cake-example.jpg` so Next.js can serve it with a normal filename. The original files in `Image/` are preserved. EN/FR/DE captions clearly identify this as an example pending a business photograph; alt text now describes the pink cake.

**How to replace the image now:**

1. Put an approved photograph in `application/web/public/images/home/`, preferably with a new filename such as `hero-cake.jpg` to avoid cached old images.
2. In `application/web/src/config/home.ts`, change the image import to that file and use the imported image for `src`, `width`, and `height`. No change to `HeroSection.tsx` is needed. Omit `crop` for a standalone photograph; optional crop coordinates are original-image pixels.
3. Update `Hero.photoAlt` and `Hero.photoCaption` in `messages/en.json`, `fr.json`, and `de.json`. Remove the example wording only when the photograph is an approved business image.
4. Run `npm run check:i18n`, TypeScript, ESLint, and the production build from `application/web`. Preview desktop/tablet/phone and redeploy the site. Configuration/file changes currently require a rebuild/deployment.
5. Setting `heroContent.image` to `null` shows the translated placeholder instead.

**Future Admin upload workflow — planned, not implemented in this step:**

The Hero now accepts a `content` prop using the exported `HeroContent`/`HeroPhoto` contract. Image `src` supports either a static import or a URL string with explicit `width` and `height`; optional `altText` and `caption` accept text already resolved for the active locale. Current message keys remain the fallback. This allows a future content service to supply uploaded media without rewriting the Hero presentation.

The Admin platform should let an authorized user upload/select a Hero image in the Media Library, enter EN/FR/DE alt text and captions, preview the crop/layout, and publish it. The server should validate uploads, store files in persistent media storage, and save the media URL, dimensions, localized text, and optional crop in a content record. The locale homepage should fetch that published record and pass the resolved data to `<HeroSection content={publishedHero} />`, falling back to the current configuration when no published record exists.

Uploaded files should live in persistent media storage rather than the deployed application's `public` directory. Once the storage provider is chosen, allow only its actual image host/path through Next.js `images.remotePatterns` (or use a controlled same-origin media URL). Publishing must revalidate the cached homepage for all supported locales so an Admin image change appears without a source-code edit or application rebuild.

No Admin upload UI, authentication, storage integration, database schema, or publishing endpoint is implemented here. Those belong to the planned Admin Dashboard / Media Library phase. The public Hero's data contract is ready for that integration.

Verification after the example-image change: TypeScript, ESLint, all 72 translation keys per language, and the webpack production build passed. Chromium and WebKit checks passed at 1440px, 768px, and 390px in EN/FR/DE, including image loading, translated example captions/alt text, sidebar modes, button destinations, and language switching. Desktop appearance was visually reviewed. No upload backend or Admin screen added; no commit created.

### 2026-11-16 — Step 4.2: Product Categories (`feature/home`)

Inspected `CategorySection.tsx`, locale homepage/Products routing, shared navigation helpers, translations, and all supplied images before editing. Existing cards already linked to category query values, but the Products placeholder did not read them.

**Implementation:**

- Extended the existing CategorySection; preserved Cakes, Cupcakes, and Custom Orders. Cards now have square media areas, localized descriptions, directional icons, focus outlines, and transitions using existing theme variables. Grid breakpoints are one column below 768px, two at 768–1023px, and three at ≥1024px, including when the sidebar changes the content width.
- Added `src/config/categories.ts` with typed category records, stable slugs, label/description keys, nullable image metadata, and a shared lookup. CategorySection accepts a data prop, so a future Admin content service can supply records without replacing the presentation component.
- Cakes displays the real red-rose birthday cake from the business flyer, cropped at x=700/y=760/400×400. Custom Orders displays its real personalized pink cake, cropped at x=570/y=1180/370×370. Both use optimized, lazy-loaded `next/image` with responsive sizes. The flyer file is unmodified. Supplied `Image/cak` examples are cakes, not cupcakes; no matching cupcake photograph is available. Cupcakes therefore shows a neutral camera icon and translated photo-pending message instead of misrepresenting another cake.
- Locale-aware links target `/products?category=cakes`, `/products?category=cupcakes`, and `/products?category=custom-orders`. The Products page now resolves the query using the shared records and shows the selected category's localized heading/description. Missing, unknown, or repeated values show the general Products content. Language switching preserves the category query.
- Reading `searchParams` makes the Products route request-rendered instead of prerendered. The homepage and other public pages remain prerendered. No product inventory, purchasing, cart, payment, or checkout behavior is added.
- Added six matching Categories message keys per locale: three descriptions, two alt descriptions, and a photo-pending label. EN/FR/DE catalogs now contain 78 matching keys each.

**Changing category content later:**

1. Add an approved standalone image to `application/web/public/images/categories/` and import it in `src/config/categories.ts`.
2. Set the category's image to `{src, width, height, altKey}` using imported dimensions; omit `crop` for a standalone photo. Add the alt key in all three message catalogs. For Cupcakes, replace its current null image only when a suitable photo is supplied.
3. Keep slugs stable: they identify category destinations/bookmarks independently of translated labels.
4. Future Admin Media Library integration should upload/validate/store the image, save its URL and dimensions, resolve localized text, and pass records through the CategorySection data prop. Image metadata supports URL strings and locale-resolved `altText` as well as static imports. Configure only the chosen media host in Next.js image remote patterns and revalidate homepage/content caches on publishing. Admin upload UI/storage/backend remain planned.

**Validation:**

- `npx tsc --noEmit`, `npm run lint`, and `npm run check:i18n`: passed under Node 24.
- `npm run build` attempted and retried with elevated execution; Turbopack remains blocked by the environment's CSS worker-port restriction. `npm run build -- --webpack` passed. No build configuration changes.
- Chromium and WebKit functional checks passed at 390px, 768px, and 1440px for EN/FR/DE, including both persistent-sidebar widths where applicable. Checked one/two/three columns, optimized photo loading/alt text, cupcake placeholder, each card click and HTTP 200 category destination, selected-category headings, generic/invalid/repeated-query fallbacks, locale/query preservation on switching, no horizontal overflow, and unchanged Hero/footer presence. Desktop and phone screenshots were visually reviewed.
- WebKit emitted the previously documented background RSC access-control messages during rapid navigation; the harness records those separately. Direct destinations returned HTTP 200 and all visible navigation/category assertions passed.
- Browser harness/screenshots: `/tmp/stephworld-navigation-check/categories.cjs` and `categories-*.png`; test tooling remains outside project dependencies. These are browser viewport checks rather than physical-device tests.

Only Step 4.2 implemented. Hero, navigation, footer, and their configuration files were not changed. No commit created.


### 2026-11-16 — Supplied cupcake image

Replaced the Cupcakes placeholder with the newly supplied `Image/cak/Screenshot 2026-11-16 at 13.12.54.png`, copied unchanged to `application/web/public/images/categories/cupcakes.png`. Category configuration now uses this standalone 1666 × 1738 image through next/image; added descriptive EN/FR/DE alt text. Other category images and the Hero remain unchanged. Original source files and the user’s renames in `Image/` were preserved.

Validation: TypeScript, ESLint, all 79 translation keys per locale, and the webpack production build passed. No commit created.

### 2026-11-16 — Step 4.3: Featured Products and image organization (`feature/home`)

Inspected the homepage component order, category data, Products query routing, locale messages, all source pictures, and available app routes before editing. No product-detail pages currently exist. The working tree already contained a removed screenshot name and newly supplied image files; those user changes were preserved.

**Featured Products:**

- Added `src/components/home/FeaturedProducts.tsx` after CategorySection in the locale homepage. It shows a configurable three-record selection using descriptive portfolio labels: a birthday cake with red roses, a cupcake assortment, and a personalized pink cake. These describe what is pictured, not invented official product names or inventory entries. Descriptions cover visible decoration only; no flavors, ingredient/allergen claims, prices, availability, or purchasing controls were added.
- Added `src/config/featured-products.ts` with stable record IDs, localized name/description keys, category keys, image metadata/crops, and optional detail destinations. A data prop allows future server/backend records with uploaded media URLs, dimensions, and locale-resolved text to replace the current configuration. No dependency was added.
- Used existing real cake photographs from the supplied business flyer and the supplied cupcake photograph. `next/image` optimizes/lazy-loads the media. A null image renders a translated photo-pending placeholder; set `image.isExample: true` when selecting an illustrative/example asset so its status is visible.
- Featured records deliberately do not use the newly supplied `ai_*` images as verified business photographs; those files remain available as examples. Replace media with approved photographs or explicitly mark example imagery.
- Cards display one column below 768px, two at 768–1023px, and three from 1024px. Existing theme colors, radius, typography inheritance, and transition settings are reused; sidebar state/spacing implementation is unchanged.
- Every card displays its localized category label. Explore All Products uses the shared locale-aware Link to `/products`.
- Current records have no `detailsHref`, so no View Details links are rendered. Add a locale-neutral detail destination only after its actual published route exists and has been checked; this step does not create detail pages or link to nonexistent slugs.
- Added 15 matching `FeaturedProducts` keys per locale (94 total keys per language), including names, appearance descriptions, alt text, placeholder/example labels, heading, and links.

**Image moves and actual filenames:**

All six source files were moved out of `Image/cak/` directly into the existing `Image/` folder, with no image modifications or overwrites:

```text
Image/
├── ai_cak_ex.png
├── ai_cak_ex01.png
├── ai_celebration_cakes.jpeg
├── ai_cupcakes.jpeg
├── ai_custom_creations.jpeg
└── screenshot_insta.png
```

The empty `cak` directory was removed as requested. Earlier references to `Image/cak/` in this chronological log describe historical locations.

Served assets/imports were aligned with source naming:

- Hero: `public/images/home/hero-cake-example.jpg` → `public/images/home/ai_cak_ex.jpg`; config variable `heroCakeExample`. The `.jpg` extension matches the file's actual JPEG data even though its original source filename ends in `.png`.
- Cupcakes: `public/images/categories/cupcakes.png` → `public/images/categories/screenshot_insta.png`; config variable `cupcakePhotograph`. Its served bytes match `Image/screenshot_insta.png`.
- Both original tracked cake-source files were compared against their pre-move Git bytes; the Hero's served image bytes are unchanged. All six current source files remain present. Hero/Category presentation components, navigation, footer, and product routes were not modified.

**Future content management:**

Edit the selection/order and media in `featured-products.ts`, with translated copy in the three `FeaturedProducts` namespaces. To replace an image now, add/import the approved file under public images and set its dimensions/alt key (omit crop for a standalone photograph). For future Admin integration, store validated uploads in persistent media storage and published records with localized text; resolve the active locale server-side and pass records through `<FeaturedProducts products={publishedProducts} />`. Configure only the chosen media host for remote next/image URLs, and revalidate the homepage for all locales after publishing. Upload UI/storage/publishing remain future work.

**Validation:**

- `npx tsc --noEmit`, `npm run lint`, and `npm run check:i18n`: passed under Node 24.
- `npm run build`: attempted and retried with elevated execution; Turbopack remains blocked by the environment's CSS worker-port restriction. `npm run build -- --webpack` passed. Build configuration is unchanged.
- Chromium and WebKit functional checks passed at 390px, 768px, and 1440px for EN/FR/DE, including expanded/collapsed persistent-sidebar states. Verified placement below Categories, one/two/three columns, all image loading and alt text, descriptive names/copy/category labels, absence of detail links, localized catalog navigation, language switching, no horizontal overflow, and Hero/Category/footer presence after asset renames. Desktop and phone screenshots were visually reviewed.
- WebKit emitted the already documented background RSC access-control messages during automated navigation; the harness records those separately. All visible functionality assertions passed. These are browser viewport checks rather than physical-device tests.
- Browser harness/screenshots: `/tmp/stephworld-navigation-check/featured.cjs` and `featured-*.png`; test tools remain outside the project dependencies.

Only Step 4.3 and the requested file organization/naming changes implemented. No commerce, accounts, backend, or later homepage steps added. No commit created.

### 2026-11-16 — Step 4.4: About Preview (`feature/home`)

Inspected the locale homepage order, existing About Us route (`/abouts`), component/configuration patterns, all supplied imagery, translations, and centralized theme tokens. The branch was already `feature/home` with a clean working tree.

**Implementation:**

- Added reusable `src/components/home/AboutPreview.tsx`, mounted immediately below Featured Products. The desktop grid places a business creation photograph on the left and the heading, two short introductory paragraphs, and About Us action on the right. A 56rem content-width container query switches to two columns; narrower tablet/mobile content stacks and remains compatible with sidebar expansion/collapse.
- Reused the authentic white decorated cake photographed in the supplied business flyer. The unchanged flyer is displayed through optimized, lazy-loaded `next/image` with crop x=620/y=360/380×380. Alt text and caption accurately describe it as a creation pictured in the flyer; it is not presented as a photograph of staff or bakery premises. The crop is limited by the source flyer's resolution.
- Copy describes only the already established cakes, cupcakes, personalized creations, and contact invitation. No founder biography, business history, qualifications, awards, dates, or achievements were added.
- Added `src/config/about-preview.ts` for translation keys, image source/dimensions/crop, and action route. `AboutPreviewContent` and the component's content prop support future server-supplied, locale-resolved title/paragraphs, image alt/caption, and uploaded image URL/dimensions. A null image displays an explicit translated photo placeholder. No Admin backend/upload implementation added.
- The shared locale-aware Link targets `/abouts`, preserving English, French, or German. Added eight matching AboutPreview keys per locale, bringing message validation to 102 keys per language.
- Styling uses existing surface/background/foreground/primary/border colors, inherited typography, radius, and quick transition duration. Keyboard focus remains visible and the action has a minimum 44px height. No dependencies added.
- Hero, CategorySection, FeaturedProducts, navigation, footer, and the About Us page implementation are unchanged. The homepage changed only to import/render the new preview.

**Replacing content later:**

Edit the AboutPreview message namespace in each language file and media/action settings in `src/config/about-preview.ts`. Replace the flyer with an approved standalone photo and omit `crop`; set null if a suitable image is unavailable. A future Admin content service should store approved published descriptions and media metadata, resolve localized copy server-side, and pass `<AboutPreview content={publishedAboutPreview} />`. Persistent upload storage, approved image-host configuration, and homepage revalidation remain part of the future Admin phase rather than this step.

**Validation:**

- `npx tsc --noEmit`, `npm run lint`, and `npm run check:i18n`: passed under Node 24.
- `npm run build`: attempted and retried with elevated execution; the existing Turbopack CSS worker-port restriction persists in this environment. `npm run build -- --webpack` passed without build configuration changes.
- Chromium and WebKit functional checks passed at 390px, 768px, and 1440px in EN/FR/DE, including expanded/collapsed persistent-sidebar states. Verified position below Featured Products, two-column desktop/stacked smaller layouts, image loading and alt/caption text, translated introduction, localized About Us click with HTTP 200 destination, language switching, no horizontal overflow, and existing Hero/Categories/Featured/footer presence. Desktop and phone screenshots were visually reviewed.
- WebKit emitted the existing background RSC access-control messages during automated navigation; these were recorded separately from the functional assertions. No shared navigation code was modified. Tests use browser viewport emulation, not physical devices.
- Browser harness/screenshots: `/tmp/stephworld-navigation-check/about-preview.cjs` and `about-preview-*.png`. No browser tooling added to project dependencies.

Only Step 4.4 implemented. No authentication, cart, checkout, payments, backend, or later homepage work added. No commit created.

### 2026-11-16 — Step 4.5: Custom Orders (`feature/home`)

Inspected the homepage order, Contact placeholder, category metadata, translation namespaces, and theme tokens. The branch was already `feature/home` and the working tree was clean. There was no existing Custom Orders journey component.

**Implementation:**

- Added reusable `src/components/home/CustomOrdersSection.tsx` immediately below About Preview. An ordered list explains Choose → Request → Confirm. Choose covers styles/inspiration; Request covers occasion, preferred design, size, and date; Confirm directs customers to discuss details, availability, and pricing with the business before agreeing on an order.
- A prominent Request a Custom Cake link opens the existing locale-aware `/contact` route. The section explicitly states that an inquiry is not an order confirmation. The Contact page remains unchanged, including its placeholder status; no submission form or contact information was added.
- Used existing Lucide icons (Compass, MessageSquare, ClipboardCheck), with decorative step numbers and icon treatment hidden from assistive technology to avoid duplicating the ordered list. The CTA has visible keyboard focus and a minimum 44px height.
- Three steps appear horizontally at ≥48rem of available content width using a container query. Narrower tablet/phone content stacks vertically for readability, including when the sidebar expands. Existing background/surface/foreground/primary/border variables, inherited typography, radius, and quick transition duration are reused. No dependencies added.
- Added `src/config/custom-orders.ts` containing typed steps, icon choices, text keys, and action destination. The content prop accepts future Admin-published, locale-resolved titles, descriptions, and note text, without changing the presentation component. Admin storage/publishing remains future work.
- Added ten matching CustomOrders message keys in English, French, and German (112 total keys per language). No fixed price/date/delivery promise or automatic-acceptance claim appears in the copy.
- Existing Hero, Categories, Featured Products, About Preview, navigation, footer, and product/contact routes are unchanged. The homepage changed only to import/render the new section.

**Changing content later:**

Edit the CustomOrders namespace in each message file; configure step order/icon choices and the locale-neutral Contact destination in `src/config/custom-orders.ts`. A future Admin content service can pass approved, active-locale content to `<CustomOrdersSection content={publishedCustomOrders} />` and revalidate locale homepages after publication. This does not create an ordering backend or automate order acceptance.

**Validation:**

- `npx tsc --noEmit`, `npm run lint`, and `npm run check:i18n`: passed under Node 24.
- `npm run build`: attempted and retried with elevated execution; the known Turbopack CSS worker-port restriction persists in this environment. `npm run build -- --webpack` passed without build configuration changes.
- Chromium and WebKit functional checks passed at 390px, 768px, and 1440px in EN/FR/DE, including expanded/collapsed persistent-sidebar states. Verified placement below About Preview, three readable ordered steps/icons, horizontal desktop/stacked smaller layouts, translated descriptions/note, localized Contact CTA click with HTTP 200 destination, language switching, no form controls, no horizontal overflow, and existing sections/footer presence. Desktop and phone screenshots were visually reviewed.
- WebKit emitted the previously documented background RSC access-control messages during automated navigation; these are recorded separately. All functional assertions passed; shared navigation behavior was not altered. Tests are browser viewport emulation rather than physical-device checks.
- Browser harness/screenshots: `/tmp/stephworld-navigation-check/custom-orders.cjs` and `custom-orders-*.png`; no test dependencies added to the project.

Only Step 4.5 implemented. No form, checkout, payment, account, invented contact channel, or later homepage functionality added. No commit created.


### 2026-11-16 — Finer Custom Orders cards

Refined the three step cards into compact squares (maximum 288px wide), with smaller corner radii, finer 20px icons, lighter headings, and softer primary-colored text on a slightly toned-down surface derived from existing theme variables. Reduced padding and gaps while retaining readable 14px descriptions and the existing CTA/navigation.


### 2026-11-16 — Clearer Custom Orders icons and tablet columns

Kept the compact 288px maximum card width. Step icons and titles now use the darker foreground token, with slightly stronger icon strokes and semibold titles. Tablet viewports (≥768px) use two columns; three columns still apply when the section has ≥48rem available. Cards retain their square preference but can grow vertically to keep longer translated text readable when the sidebar narrows the tablet content.

### 2026-11-16 — Step 4.6: Portfolio Gallery (`feature/home`)

Inspected the homepage order, existing product/image components, all current source assets, public routes, locale catalogs, design tokens, and sidebar Escape/scroll behavior. Existing user-added gallery sample files in `Image/` were preserved; no source images were moved or deleted in this step.

**Implementation:**

- Added `src/components/home/GallerySection.tsx` immediately below Custom Orders. Native square thumbnail buttons form a one-column phone, two-column tablet (≥768px), and three-column desktop (≥1024px) grid, with descriptive optional titles/categories.
- Added `src/config/gallery.ts` with typed records for unique IDs, image source/dimensions/crop, required alt text key/optional locale-resolved alt text, optional title/description/category, numeric order, homepage visibility, and example status. Records are filtered and sorted without mutating the source data. A missing image renders a clearly labelled, disabled placeholder rather than a broken preview button; `isExample` marks illustrative imagery explicitly.
- Initial records show four views from existing supplied business imagery: red-rose cake, cupcakes, personalized pink cake, and white decorated cake. Both thumbnails and enlarged views use `next/image`. Flyer crops remain focused on the individual photograph rather than opening the full flyer. The standalone cupcake photo is contained in the enlarged view so its full proportions remain visible. Original assets are unchanged. Low-resolution flyer photos remain limited by their source resolution.
- The supplied `ai_galery_*` samples are not presented as completed business work. Future example media must be marked as an example, or replaced with approved authentic business photographs.
- A native `dialog.showModal()` preview provides browser-managed background inertness; explicit Tab/Shift+Tab cycling keeps focus within the preview controls consistently across browsers. The close button receives initial focus; closing restores focus to the original thumbnail and restores the body's previous overflow setting. Previous/Next controls and ArrowLeft/ArrowRight wrap through available images; Home/End jump to first/last; Escape closes. Escape does not bubble to the underlying AppShell sidebar handler. Clicking the backdrop outside the dialog also closes it.
- Preview labels, keyboard help, descriptions, and live image-position status are translated. Native dialog semantics and labelled controls avoid introducing a modal dependency. Phone previews are full-screen so the image can be larger than the one-column thumbnail; larger screens use a bounded modal. Images retain a consistent square frame, with containment for uncropped preview photos.
- No View All Creations link is configured because a dedicated destination does not exist. Only pass `viewAllHref` after creating/checking a valid public route. No gallery/detail route or broken navigation link was added.
- Added 24 matching Gallery keys in EN/FR/DE (136 total per language). Extended the message-validation sample values for title/current/total interpolations. Existing theme surface/background/foreground/primary/border/overlay colors, radius, inherited typography, and quick transition duration are reused.
- Existing navigation, Hero, Categories, Featured Products, About Preview, Custom Orders, footer, and their configurations remain unchanged. Only the homepage import/render order was extended.

**Future Admin / Media Library integration:**

The gallery accepts an `items` prop using the exported `GalleryItem` contract. Admin workflows should validate/store uploads in persistent media storage, collect localized required alt text and optional captions, save stable IDs and numeric order, and expose homepage-selection/removal controls. Fetch published records server-side, resolve active-locale text, and pass them to `<GallerySection items={publishedGallery} />`. Set `showOnHomepage` false or remove a record to remove it from both grid and preview navigation; adjust `order` to reorder it. A missing title falls back to alt text for preview/button naming. Configure only the chosen media host for remote image URLs and revalidate each locale homepage after publication. No Admin UI, authentication, storage, backend, or publishing endpoint is implemented here.

**Validation:**

- `npx tsc --noEmit`, `npm run lint`, and `npm run check:i18n`: passed under Node 24.
- `npm run build`: attempted and retried with elevated execution; the known CSS worker-port restriction still blocks Turbopack in this environment. `npm run build -- --webpack` passed without build configuration changes.
- Chromium and WebKit functional checks passed at 390px, 768px, and 1440px in EN/FR/DE, including expanded/collapsed persistent-sidebar states. Verified position below Custom Orders, one/two/three columns, image loading/alt text and square frames, larger preview dimensions, all four thumbnail previews, initial close-button focus, Tab/Shift+Tab containment, Enter/Space opening, ArrowLeft/ArrowRight wrap, Home/End, previous/next buttons, Escape, close/backdrop dismissal, focus restoration, scroll locking/restoration, translated counter, no horizontal overflow, language switching, no unconfigured View All link, and existing sections/footer presence. Desktop gallery and phone preview screenshots were visually reviewed.
- WebKit emitted the already documented background RSC access-control messages during automated navigation; these were recorded separately. All gallery functionality assertions passed. Tests use browser viewport emulation, not physical devices.
- Browser harness/screenshots: `/tmp/stephworld-navigation-check/gallery.cjs`, `gallery-*.png`, and `gallery-preview-*.png`; no test dependency added to the project.

Only Step 4.6 implemented. No shopping, account, backend, or later homepage functionality added. No commit created.


### 2026-11-16 — Gallery placement revision

Moved Gallery immediately after Hero and before Shop by Category at the user’s request. Current order: Hero → Gallery → Categories → Featured Products → About Preview → Custom Orders → Footer. Gallery behavior and all other components are unchanged.

### 2026-11-16 — Step 4.7: Homepage final verification (`feature/home`)

**Architecture and scope:**

Reviewed all six homepage sections, their separate typed configuration files, shared storefront layout/navigation/footer, locale routing/request configuration, three message catalogs, and centralized theme variables. Preserved the requested order: Hero → Gallery → Shop by Category → Featured Products → About Preview → Custom Orders → Footer. Most homepage presentation remains server-rendered; Gallery requires client state for its interactive preview. Passing server-rendered children through AppShell does not convert them into client components. No new feature, content redesign, application dependency, authentication, checkout, backend, or route was introduced.

No broken imports or unused runtime dependency was identified. Repeated flyer-crop/image calculations across sections are a future shared-helper candidate; a broad refactor was deliberately deferred. `ActivePageIndicator.tsx` is an unimported legacy component, including an obsolete `--swd-border-radius` reference; it has no effect on the current homepage. The default ThemeProvider wrapper is unused, but its exported `getThemeVariables` helper is actively used by the locale layout. These inactive leftovers were reported rather than removed during verification.

**Issues found and corrected:**

- Navigation slogan used secondary gray on a light surface: axe measured only 2.31:1 contrast. It now uses the existing primary token. No brand color was added.
- Initial desktop/tablet sidebar defaults were applied only after hydration, shifting all page content. AppShell and LeftSidebar now reserve the correct responsive widths in CSS before hydration, then retain the existing state-based collapse/open behavior. Default widths remain 280px desktop, 64px tablet, and closed phone.
- Added reduced-motion overrides for transitions, animations, hover/press movement, and smooth scrolling without resetting the sidebar's structural translate offsets. Normal 500ms sidebar transitions remain unchanged.
- Phone-menu background content is now inert while open. Escape restores focus to the hamburger. Disabled account controls no longer advertise an unavailable controlled sidebar; account/cart remain disabled and their implementation remains reserved.
- With the tablet sidebar expanded, the previous forced square Custom Orders cards let longer translated text extend beyond their borders. A single constrained grid track with a square sizing pseudo-element now keeps the compact square preference while allowing content to determine a taller minimum height. Three/two/one-column rules and existing sizes/colors remain unchanged.

**Automated validation:**

- `npx tsc --noEmit`, `npm run lint`, and `npm run check:i18n`: passed under Node 24. All 136 keys per language match, are nonempty, and have valid message syntax.
- `npm ls --depth=0`: passed; existing application dependencies resolve without missing packages. Browser audit tools were installed only under `/tmp`, not in the application.
- `npm run build`: attempted normally and with elevated execution. Turbopack is still blocked by this environment's CSS worker port binding restriction (`EPERM`). This is an environment limitation, not a passing standard build.
- `npm run build -- --webpack`: passed with TypeScript and all 20 prerendered paths generated. No build script or bundler configuration was changed to hide the standard-build limitation.

**Browser verification and remaining failures:**

- Tested Chromium and WebKit at 390, 768, 1024, and 1440px in EN/FR/DE: 24 combinations. Functional assertions passed in all 24: correct section order, localized headings, loaded photographs with nonempty alt text and undistorted frames, gallery opening/closing and every thumbnail, modal semantics/initial focus/Tab containment/Escape/focus restoration, image keyboard navigation, sidebar defaults/collapse/close/reopen, mobile overlay/inert background, reduced motion, category queries, every homepage CTA, active navigation, footer links, and no horizontal overflow or card text overflow in settled states.
- Language switching retained the route, category/filter query, and hash; refresh retained the selected locale. Tested 21 unique localized link destinations with HTTP 200 responses, legacy redirects with default English and saved-locale behavior, and invalid routes returning 404. Disabled account/cart stayed disabled.
- Chromium: **12/12 fully passed**, with no console errors, page errors, failed HTTP responses, or warnings. **24 axe scans** (page plus gallery dialog for each combination) reported no WCAG A/AA violations. Automated scans and keyboard checks are not a full accessibility certification.
- WebKit: functional assertions passed in **12/12**, but **12/12 failed the final clean-page-error assertion**. Each emitted one background `/<locale>/contact?_rsc=… due to access control checks` page error during the explicit refresh after switching language. No console errors or HTTP error responses were recorded. A phase-traced run isolated the event to refresh; an otherwise equivalent one-case control without refresh passed with zero errors. Locale persistence and all subsequent UI actions still worked. This repeats the earlier recorded WebKit issue; request cancellation during reload is a possible explanation, not a proven root cause. It remains unresolved and is not filtered/allowlisted or described as a clean browser pass. Recheck in supported Safari and CI before merge; shared prefetch/routing behavior was not broadly changed during homepage review.
- macOS WebKit skips buttons with plain Tab under its default keyboard traversal setting. The outer-gallery focus check used verified Option-Tab; the modal's explicit Tab/Shift+Tab containment passed. No application workaround was introduced for a browser keyboard preference.
- Live viewport transitions desktop → tablet → phone → tablet → desktop passed in both engines, applying the correct defaults on breakpoint changes. At 768px with the sidebar expanded, German cards measured 202px inner width and 252px inner height, with equal scroll/client dimensions and no overflowing text.
- Visually reviewed full-page content at all four widths, top-of-page viewport screenshots in German, and expanded-tablet Custom Orders cards. Full-page screenshot capture can reset emulated sidebar state at the 1024px breakpoint; functional state assertions were kept separate from that capture artifact.

Initial Chromium layout shift (local PerformanceObserver, entries without recent user input):

| Width | Before fixes (EN) | After fixes (maximum across EN/FR/DE) |
|---|---:|---:|
| 390px | 0 | 0 |
| 768px | 0.05549 | 0.00000275 |
| 1024px | 0.64337 | 0.00000201 |
| 1440px | 0.18666 | 0.00000102 |

Temporary reproducible harnesses/reports/screenshots: `/tmp/stephworld-navigation-check/home-final.cjs`, `home-final-chromium.json`, `home-final-webkit.cjs`, `home-final-webkit.json`, `home-webkit-trace.cjs`, `home-webkit-no-refresh.cjs`, `home-resize.cjs`, `final-top-*.png`, and `final-tablet-expanded-cards.png`. These local artifacts are not committed or added as application dependencies.

**Performance and content limitations:**

Images use `next/image`, responsive sizes and reserved frames; Hero is prioritized and below-the-fold photos are lazy-loaded. Existing optimized flyer crops still inherit their source resolution; the Hero remains a visibly labelled example pending an approved photograph. Local layout-shift measurements do not certify field Core Web Vitals or network-dependent LCP. Products, About, and Contact remain the existing placeholder destinations, not completed business workflows. Legal/social destinations stay unavailable until configured. No physical-device or assistive-technology screen-reader certification was performed.

The workflow remains **Testing** until the standard production build passes in a normal local terminal or CI and the WebKit refresh error is resolved or explicitly assessed. Requirements status is intentionally not marked Completed/merged. No commit, merge, or push was performed.

### 2026-11-16 — Step 5.1: Products Catalog (`feature/products`)

**Inspection and implementation:**

The existing Products route displayed only a category heading/description. Inspected its query handling, homepage Categories/Featured Products, localized navigation, theme tokens, AppShell, and footer. The branch was already `feature/products`; four untracked AI sample photos in `Image/` were present before work and remain untouched.

- Added `src/config/products.ts` as the shared catalog source. `CatalogProduct` supports stable ID/slug, translated name/description keys and active-locale string overrides, category slug/label key, source dimensions/crop/alt text, featured flag, display order, and optional future price/availability fields. Current records have no price/availability values. Selection filters and sorts a new array without mutating supplied records.
- Reused the three existing pictured creations and their existing descriptive labels, translations, and authentic business imagery: red-rose cake, cupcake assortment, and personalised pink cake. Names describe appearances rather than inventing official product names. No AI samples, new media, detail routes, reviews, prices, or availability claims were added.
- Extracted the existing featured card into `src/components/products/ProductCard.tsx`. It retains optimized `next/image`, square frames/crops, translated alt text, missing-photo placeholder, optional example badge, theme variables, and optional valid-detail-link support. The catalog uses h2 card headings; homepage Featured Products keeps its h3 headings, IDs, layout, and appearance. `featured-products.ts` now selects featured records from the central source and retains the original exported presentation type alias.
- Added server-rendered `ProductCatalog.tsx` with heading/introduction, category links, selected-state semantics, localized result count, responsive grid, empty state, and an inquiry section linking to the existing localized Contact page. The Contact page itself remains a placeholder; no form or submission channel was introduced. No extra client component, dependency, API, account, or shopping feature was added.
- Catalog columns follow available content width: one below 24rem, two from 24rem, and three from 54rem. This keeps tablet cards readable when the persistent sidebar expands and avoids forcing narrow desktop cards. Theme colors, radius, typography, focus outlines, and transition duration use the existing design system.
- Products route validates `?category=` against the existing category definitions. Missing category means All Products; known categories filter records. Unknown, empty, or repeated values show all records with a translated explanation. Filter choices are derived from categories represented in supplied records. Links use `next-intl` navigation, push URL history, and retain the active locale; no duplicate client filter state is stored. Selecting All Products clears the category query.
- Added nine net-new matching Products messages per language (145 total keys each). Product names/descriptions/alt text intentionally retain the shared `FeaturedProducts` namespace; category names retain `Categories`. Added a count sample to the message checker for the new ICU plural result message.

**Editing and future Admin integration:**

Edit catalog records in `src/config/products.ts`; `featured: true` includes a record on the homepage, and `displayOrder` controls ordering. Keep stable IDs/slugs and matching category slug/label keys. Shared product copy lives in `messages/{en,fr,de}.json` under `FeaturedProducts`; catalog heading/filter/empty/inquiry copy lives under `Products`. Existing category definitions and labels live in `src/config/categories.ts` / `Categories`.

A future content service can pass published, active-locale records to `<ProductCatalog products={publishedProducts} />` and the featured subset to `<FeaturedProducts products={publishedFeaturedProducts} />`. Uploaded images can use URLs plus intrinsic dimensions, approved alt text, and optional crop metadata; configure only the actual media host in Next image configuration when remote storage exists. Validate records and translations before publishing. Storage, upload UI, Admin permissions, publishing/revalidation endpoints, and commerce behavior remain future work. Optional commercial fields are data contracts only and are not rendered.

**Validation:**

- `npx tsc --noEmit` and `npm run lint`: passed.
- `npm run check:i18n`: passed, with 145 matching, nonempty, valid messages in EN/FR/DE.
- Standard `npm run build`: attempted normally and with elevated execution; both fail at Turbopack's CSS worker port binding with `EPERM`, matching the previously documented environment restriction. No build configuration was changed.
- `npm run build -- --webpack`: passed, including TypeScript and 20 generated static paths. The Products route remains server-rendered and query-dependent.
- Isolated component-render/data checks passed: empty catalog text and Contact CTA in EN/FR/DE; missing-photo placeholder; no-match selection; stable unique IDs/slugs; display ordering without mutation; and no configured commercial values. Framework Link/Image were stubbed only in this isolated test; actual links/images are covered by browser checks. Empty state is exercised with supplied empty records because all currently configured categories have a pictured product.
- Supplementary 1024px Chromium checks passed in EN/FR/DE: two columns with expanded sidebar, three collapsed, no horizontal overflow.
- Chromium and WebKit: **18/18 combinations passed** at 390px, 768px, and 1440px in EN/FR/DE. Verified all category filters and selected state, URL queries, All Products reset, browser back/forward, unknown/repeated category fallback, each homepage category link, homepage featured-card presence, actual image decoding/nonempty alt text, translated card categories, Contact CTA, language switching with category retention, refresh persistence, sidebar collapse/expansion, mobile overlay/Escape, and no horizontal overflow. Tablet maintained two columns in both sidebar states; desktop showed three. No console/page/HTTP errors or warnings were recorded in this run. Refresh was performed after a one-second settled interval; this does not establish a fix for the separate earlier WebKit rapid-refresh issue.
- Nine Chromium axe scans reported zero WCAG A/AA violations. Reviewed catalog screenshots at all three required widths; phone uses one readable column, tablet two, and desktop three. Accessibility automation does not replace manual screen-reader review.

Validation harnesses/reports/screenshots are under `/tmp/stephworld-navigation-check/products*.cjs`, `products-results.json`, and `products-*.png`. No test dependencies were added to the application. Browser viewport emulation does not replace physical-device or screen-reader testing. Flyer crops retain source-resolution limits. The standard Turbopack build still requires verification in a normal terminal or CI. No commit, merge, or push performed.


### 2026-11-16 — Catalog presentation examples

At the user's request, added four AI-labelled source images as presentation-only catalog records: celebration cake, pastel cupcakes, themed cake, and wedding cake. Original files remain in `Image/`; served copies are in `application/web/public/images/products/`. The catalog now contains seven cards (three business-photo records plus four concepts). Existing Cakes, Cupcakes, and Custom Orders filters include the relevant concepts. No new category or commercial claims were added.

Each sample sets `image.isExample: true` and `image.isAiGenerated: true`, has translated concept name/description/alt text, and displays an explicit AI presentation badge in EN/FR/DE. The introduction distinguishes pictured creations from presentation concepts. All four set `featured: false`, preserving the three authentic homepage Featured Products. The shared card retains the generic example badge for other illustrative images.

To remove presentation samples, delete their four records from `src/config/products.ts`; remove the served copies after checking references. To replace one with approved business media, update its image source/dimensions and localized descriptions/alt text, then clear both example flags. Future Admin content must preserve these example flags until authentic media replaces a sample.

Validation: TypeScript, ESLint, 158 matching messages per locale, and webpack production build passed. Chromium checks passed at 390px, 768px, and 1440px in EN/FR/DE (9 combinations): seven catalog cards, four translated AI badges, every photograph decoded, category counts 3 Cakes / 2 Cupcakes / 2 Custom Orders, no horizontal overflow or recorded browser errors, and homepage Featured Products unchanged at three real creations. Desktop screenshot visually reviewed. Harness: `/tmp/stephworld-navigation-check/products-examples.cjs`. The earlier standard Turbopack build restriction remains unchanged. No commit, merge, or push performed.


### 2026-11-16 — Step 5.2: Product Details (`feature/products`)

**Inspection and minimal change:**

The working tree was clean on `feature/products`. Reviewed the seven central catalog records, shared ProductCard, catalog/homepage consumers, locale navigation and request setup, AppShell/theme, homepage gallery behavior, and Contact/404 pages. Current records have one photograph each and no approved extended descriptions or customization specifications. Reused the same catalog rather than creating a second database. The homepage gallery is tied to its section/modal workflow; a small inline photo selector is sufficient here and does not introduce another modal or alter the homepage gallery.

**Implementation:**

- Added `src/app/[locale]/products/[slug]/page.tsx`, with static parameters derived from catalog slugs, validated locale preparation, central `findCatalogProduct` lookup, and `notFound()` for unknown records. Existing localized navigation preserves the slug during language switching. All seven records, including labelled presentation concepts, have real detail destinations.
- Shared cards now derive the destination from a record's slug and link both title and View Details. The optional legacy `detailsHref` remains supported for presentation records without a slug. Homepage Featured Products uses the same cards and now exposes the three valid detail destinations; layout/content remain unchanged.
- Added server-rendered `ProductDetails.tsx`: existing title, category, short description, conditional extended description/customization, media, localized inquiry CTA, and Back to Products with the product's category query. Optional `detailedDescriptionKey`/`customizationKey` use shared product-copy keys, or active-locale strings can be supplied. Unconfigured sections are omitted, not filled with invented claims or repeated copy.
- Extended `CatalogProduct` with optional `additionalImages`, extended-description and customization fields. It still has stable IDs/slugs and reserved commercial fields. No prices, availability, flavors, sizes, ingredients, variants, orders, cart, accounts, backend, or Admin implementation was added.
- Extracted the existing optimized/cropped image renderer to `ProductImage.tsx`, shared by cards and detail media. Uncropped main photos use containment so their proportions remain visible; flyer crops preserve the existing framing. The main detail image loads eagerly, cards/thumbnails lazily. Assets are unchanged.
- Added a small client `ProductImageGallery.tsx` with localized alt text supplied from the server. Main image falls back to a labelled photo-pending state. Multiple photos reveal native thumbnail buttons with accessible names, `aria-pressed`, `aria-controls`, keyboard activation, visible focus, and a live position indicator. Thumbnails have empty decorative alt text to avoid duplicate announcements. Current single-photo products hide redundant controls. AI/example labels remain visible on the detail page. No extra photos were invented or assigned to the wrong product.
- Detail layout uses the existing tokens, typography, radius, and transition duration, with two columns from 48rem available content width and stacking below that. Phone/tablet and expanded sidebar states remain usable. Global navigation/footer and Contact implementation are untouched.
- Inquiry links to `/{locale}/contact?product=<slug>`, reserving product context for a later form. The current Contact placeholder does not read/prefill this parameter or submit an inquiry. Back to Products returns to the appropriate localized category; normal browser history remains available.
- Added nine ProductDetails messages per language, bringing validation to 167 keys per locale. No new dependencies.

**Content and future Admin use:**

Continue editing only `src/config/products.ts` for product records. Main photo stays in `image`; append genuine additional views of that same product to `additionalImages`, using the same source/dimensions/alt-key-or-localized-alt/crop/example contract. Controls appear automatically only when more than one photo is supplied. Do not use other products' pictures as extra views. Populate `detailedDescription` / `customization` with approved active-locale text, or add matching keys under FeaturedProducts in all three catalogs and reference the optional key fields. ProductDetails contains UI labels only. Current extended sections remain hidden because approved data is absent.

A future server content service can pass a published `CatalogProduct` to `<ProductDetails product={publishedProduct} />`; the gallery receives only resolved photo metadata and active-locale alt text. Persist stable slugs/IDs and validate uploaded media/translation/example status before publication. Configure the actual remote media host and caching/revalidation strategy when backend work begins; current static parameters reflect build-time catalog data. No upload endpoint, Admin UI, or commercial behavior is implemented by these types.

**Validation:**

- `npx tsc --noEmit`, `npm run lint`, and `npm run check:i18n`: passed; 167 matching, nonempty, valid messages per locale.
- `npm run build`: attempted; the existing Turbopack CSS worker port binding restriction still fails with EPERM. `npm run build -- --webpack` passed, including TypeScript and 41 generated static paths (21 product-detail paths). No build configuration change.
- HTTP checks: all seven detail slugs return 200 in EN/FR/DE (21 routes); unknown product slugs return 404 in all three languages.
- Isolated server-render/data fixtures passed in EN/FR/DE: central lookup/missing slug; omission of unconfigured extended sections; rendering supplied approved-test descriptions/customization; image fallback; and inquiry product context. Fixtures do not modify published records.
- Product-detail browser matrix: **18/18 combinations passed** in Chromium and WebKit at 390px, 768px, and 1440px in EN/FR/DE. Chromium clicked through all seven catalog products per combination; WebKit exercised the wedding concept per combination. Both engines verified title and View Details destinations, translated content and AI labels, loaded main images/alt text, hidden single-photo controls and absent optional sections, localized category Back link, sidebar expansion/collapse or mobile overlay/Escape, no horizontal overflow, language switching preserving the slug, refresh persistence, product-context Contact link, browser back, and homepage featured links. No recorded console or page errors. All 21 slug/locale combinations additionally passed HTTP checks.
- Nine Chromium WCAG A/AA axe scans reported zero violations. Screenshots at all three required widths were visually reviewed: photos left/information right on wide desktop, photos above text on smaller screens.
- Actual gallery component fixture: **18/18 combinations passed** in Chromium/WebKit at all required widths and languages. Verified two-photo selection, selected-state changes, main alt/source update, Enter and Space activation, keyboard traversal (Option-Tab for default macOS WebKit button traversal), translated position status, single-image control suppression, and no-image fallback. No fixture photos or extended-content samples were added to published data. Fixture checks cover component behavior; responsive styling/optimized media are verified on real production routes.

Temporary tooling is under `/tmp/stephworld-navigation-check/product-details*.cjs`, `product-gallery-fixture.cjs`, and `fixture-*`; no test-only route, sample product database, or dependency was added to the application. Fixture gallery checks bundle the actual component with React/next-intl and a plain-image adapter; actual production routes separately verify optimized Next images. Physical-device/screen-reader certification remains outside browser-emulation evidence. Source flyer resolution limits and the existing Contact placeholder remain. No commit, merge, or push performed.


### 2026-11-16 — Step 5.3: Products final verification (`feature/products`)

**Architecture review:**

Started on `feature/products` with a clean working tree. Inspected the catalog route/filter handling, detail route/static parameters/404 lookup, ProductCatalog, ProductCard, ProductDetails, ProductImageGallery, ProductImage, centralized product records, homepage Categories/Featured Products, locale routing/request helpers, theme tokens, AppShell/navigation, and footer configuration.

The seven catalog records remain the single product source; homepage Featured Products selects from that source. IDs/slugs are unique, category labels match category slugs, ordering does not mutate records, and all optional commercial values remain absent. Shared image/card components avoid duplicate catalog/detail rendering. Catalog/detail content stays server-rendered; only interactive gallery selection requires a client boundary, and product imports within it are type-only. No missing imports, unused Products components, duplicate product database, or unnecessary runtime dependency was found. `npm ls --depth=0` resolves existing dependencies without missing packages. No dependency or architectural refactor was added.

The retired `ActivePageIndicator.tsx` remains an unimported navigation leftover outside Products scope. Other page/section configuration intentionally references the same business photos for different presentation roles; those references are not independent product databases. Unrelated navigation/footer structure, authentication/cart implementation, content, and source assets remain unchanged.

**Issues reproduced and fixed:**

1. Gallery removal state: with three fixture photos, select the third, then supply only two without remounting the component. Baseline incorrectly announced “Photograph 3 of 2” and had no selected thumbnail. The gallery now derives a bounded active index and uses it consistently for the main photo, position status, `aria-pressed`, and selected border. The regression now announces “Photograph 2 of 2” with exactly one selected control. Zero/one-image behavior remains supported.
2. Detail image sizes: at 1024px with an expanded persistent sidebar, the detail layout is stacked but its `sizes` advertised only 50vw. Main-image sizing now conservatively allows full viewport width below 1280px, including crop scaling; larger viewports retain 50vw. This avoids requesting an undersized image for a stacked small-desktop frame. Layout, image sources, crops, and card image-sizing rules are unchanged.

Only `ProductImageGallery.tsx`, `ProductImage.tsx`, and the two documentation files changed in this step. No new feature, redesign, product facts, photos, routes, dependencies, or commerce behavior was introduced.

**Automated checks:**

- `npx tsc --noEmit`: passed.
- `npm run lint`: passed.
- `npm run check:i18n`: passed; 167 matching, nonempty, valid messages in each of EN/FR/DE. No missing product/UI translations were identified.
- `npm run build`: failed normally and after an elevated retry. The pre-existing environment restriction prevents Turbopack's CSS worker from binding a port (`EPERM`, reported through `globals.css`). This is not counted as a passing standard build or a Products TypeScript/source error.
- `npm run build -- --webpack`: passed after fixes, including TypeScript and 41 generated paths (21 localized detail paths). No build script/config change was used to hide the standard-build limitation.
- `git diff --check`: passed.

**Functional, visual, accessibility, and performance verification:**

- Catalog: **24/24** Chromium/WebKit × four widths × EN/FR/DE combinations passed: all filters (7 total / 3 Cakes / 2 Cupcakes / 2 Custom Orders), selected URL state, All Products reset, browser back/forward, unknown/repeated category fallback, homepage category links, photo decoding, localized categories, inquiry CTA, locale switching with category retention, settled refresh persistence, sidebar states, and overflow checks. No console/page/HTTP errors or warnings were recorded.
- Details: **24/24** combinations passed, clicking through all seven catalog detail links in every case in both engines. Verified matching translated titles/labels, authentic/AI media states, omission of absent optional fields and redundant single-photo controls, category Back links, inquiry product query, browser back, locale switching preserving the slug, settled refresh, sidebar states, and homepage featured links. No recorded console/page errors.
- Gallery fixtures: **24/24** combinations passed for thumbnail selection, Enter/Space activation, Tab traversal (Option-Tab for default macOS WebKit behavior), translated position, selected state, single-photo controls hidden, and missing-photo fallback. The separate removal regression also passes after reproducing the baseline failure.
- **24 Chromium WCAG A/AA axe scans** (12 catalog plus 12 detail) reported zero violations, including automated text-contrast checks. Automated accessibility scans are not a full screen-reader or physical-device certification.

Independent audit checks have passed on catalog and representative detail pages at 390/768/1024/1440px in EN/FR/DE: semantic main/footer and one h1, no skipped heading levels, nonempty descriptive alt text, undistorted photos with reserved square frames, actual Next image optimizer sources, lazy catalog images/eager detail main image, corrected 1024px sizes, no horizontal overflow, keyboard traversal/visible outlines, reduced-motion transitions, active Products navigation, and static footer positioned after main content.

All 63 unique internal destinations discovered from catalog/detail navigation and CTA links returned HTTP 200. All 21 known localized detail routes returned 200; unknown product slugs returned 404 with localized error content. Local initial CLS measured on catalog and representative detail pages was at most 0.00000275 across the four widths and three languages. These local measurements do not certify field Core Web Vitals, network-dependent LCP, or physical-device behavior.

Isolated EN/FR/DE render/data checks passed for empty catalog, no-match selection, localized recovery/Contact links, missing-photo placeholders, stable unique IDs/slugs, sort nonmutation, central detail lookup, absent optional sections, supplied approved-test extended content, and absent commercial values. Fixture content is temporary and never published. Actual gallery fixture checks use React/next-intl and the real selector component with a plain-image adapter; real production routes independently verify optimized images and styling. The selected-photo removal regression was tested before and after the fix. Live resizing across desktop/tablet/phone modes passed on catalog and real-photo detail pages in Chromium and WebKit.

Visually reviewed current catalog and detail screenshots at all four widths. Product grids stay one phone/two tablet columns; at 1024px they adapt from two to three with sidebar collapse; desktop uses three. Detail photos stack above information when space is limited and appear left of information on wide desktop. Existing seven cards, authentic photos, four clearly labelled AI concepts, and three real homepage featured records are preserved.

**Remaining limitations and merge gate:**

Products remains **Testing** and is not unconditionally ready to merge until the required standard build passes in a normal terminal or CI. No Products functional/source error remains identified by the completed local checks. Contact is still the existing placeholder and does not process inquiry context. Each published record currently has one photograph and no approved extended description/customization data; multiple-image and optional-content paths are verified through fixtures. Flyer crops retain their source resolution. AI examples remain clearly labelled presentation concepts. Physical-device/screen-reader review and field performance measurements were not performed. Earlier rapid-refresh WebKit errors are not declared globally resolved by this settled-navigation test run.

Temporary audit artifacts: `/tmp/stephworld-navigation-check/products-final-*.cjs`, corresponding JSON reports/screenshots, `product-details-data.cjs`, and `gallery-shrink.cjs`. No test-only route, dependency, or data source was added to the repository. No commit, merge, or push performed.
