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
