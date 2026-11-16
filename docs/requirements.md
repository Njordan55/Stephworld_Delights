
# Stephworld Delights — Requirements & Development Plan

## 1. Project Overview

**Project:** Stephworld Delights  
**Application:** Bakery and cake business website  
**Architecture:** Modular, responsive, theme-independent  
**Current Stage:** Digital Flyer & Portfolio — Internationalization

### 1.1 Project Objectives

Develop a modern, responsive website where customers can:

- Explore cakes, cupcakes, desserts and other products.
- View product images and galleries.
- Learn about Stephworld Delights.
- Access contact information and social media.
- Navigate easily on desktop, tablet and mobile.

The website must also provide an Admin Dashboard that allows authorized administrators to manage content and visual appearance without modifying application source code.

### 1.2 Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Web application framework |
| React | User interface |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling and responsive layouts |
| next-intl | Locale routing, messages, and language persistence |
| Git / GitHub | Version control |
| PostgreSQL | Proposed database |
| Supabase | Proposed backend and storage provider |

**Note:** Database and backend providers have not yet been finalized.

### 1.3 Architectural Principles

- Reusable and independent UI components.
- No hardcoded brand colors in reusable components.
- Centralized theme configuration.
- Separation between application logic and website content.
- Responsive design.
- Secure administrator access.
- Validated media uploads.
- Support for future expansion.

## Development Roadmap

| # | Workflow | Git Branch | Status | Merged to develop | Published to main |
|---|---|---|---|---|---|
| 01 | Global Navigation | `feature/global-navigation` | Completed | [x] | [] |
| 02 | Internationalization | `feature/i18n` | Testing | [] | [] |
| 03 | Global Footer | `feature/global-footer` | Testing | [] | [] |
| 04 | Homepage | `feature/home` | Progress | [] | [] |
| 05 | Products | `feature/products` | Planned | [] | [] |
| 06 | Admin Dashboard | `feature/admin` | Future | [] | [] |

### status system
To be use consistently:
- Planned — Not started.
- Progress — Currently being developed.
- Pending - work's state on hold
- Testing — Implementation completed, awaiting verification.
- Completed — Tested and merged into develop.
- Published — Released through main.
- Blocked — Cannot continue until an issue is resolved.

---

# 2. Development Plan

## Phase 1 — Project Setup and Documentation

|||**Status:** |||
|---|---|---|---|---|
|[0] Next  | [0]ongoing  | [2]complet  | [2]verification  |  [x]done |
|---|---|---|---|---|

Description: Completed — final verification done.


### Objective

Establish the technical foundation of the project.

### Tasks
- [x] Create the empty GitHub repository/project.
- [x] Clone the GitHub repository.
- [x] Create the initial project structure.
- [x] Create and configure the Next.js project.
- [x] Configure TypeScript and Tailwind CSS.
- [x] Add logo and flyer assets.
- [x] Create `architecture.md`.
- [x] Create `requirements.md`.
- [x] Create `dev_steps.md`.
- [x] Document the system architecture using Mermaid.
- [x] Concept of the initial website navigation concept.
- [x] Verify the actual project structure.
- [x] Run TypeScript, lint and production build checks.

### Completion Criteria

- The development server runs successfully.
- The application builds without errors.
- The GitHub repository is synchronized.
- Documentation reflects the current project.

---

## Phase 2 — Responsive Navigation System

|||**Status:** |||
|---|---|---|---|---|
|[0] Next  | [0]ongoing  | [0]complet  | [0]verification  |  [x]done |
|---|---|---|---|---|

Description:  26.10.2026: ongoing
              05.10.2026: Code is completed will be tested.
              05.10.2026: Description: Navigation implementation and design-token integration
                          completed. Final tablet and desktop verification pending.
              05.10.2026: done

### Objective

Implement the approved navigation concept using reusable components.

### Features

#### 2.1 Top Navigation Bar

- Fixed navigation bar.
- Menu button on the left.
- Centered clickable business logo/name.
- Account button on the right.
- Space for future contact and notification icons.
- Responsive behavior.

#### 2.2 Left Navigation Panel

- Sliding panel opening from the left.
- Home navigation.
- Products navigation.
- Gallery navigation.
- About navigation.
- Contact navigation.
- Active-page highlighting.
- Close button and backdrop interaction.

#### 2.3 Right Account Panel

- Sliding panel opening from the right.
- Login and registration entry points.
- Future Profile section.
- Future Orders section.
- Future Favorites section.
- Future Settings section.

#### 2.4 Active Page Indicator

- Displays the current page title.
- Supports the approved frosted-glass visual effect.
- Adjusts position when a sidebar opens.
- Remains responsive.

### Technical Tasks
- [x] Create `theme-default.ts`.
  - [x] Define the default theme configuration.
  - [x] Connect the default theme to the website.
  - [x] Verify that the theme configuration works.
- [x] Create navigation components.
  - [x] Define the neutral default theme.
  - [x] Connect the theme to globals.css.
  - [x] Implement the top navigation bar.
  - [x] Implement the left navigation sidebar.
  - [x] Implement the right account sidebar.
  - [x] Highlight the active page in the left sidebar.

Responsive Navigation — Revised Design

* [x]	Replace the floating navigation concept with a collapsible sidebar layout.
* [x]	Keep the active-page highlighting inside the sidebar.
* [x]	Remove the floating active-page indicator.
* [x]	Display the left sidebar by default on desktop.
* [x]	Allow users to collapse the sidebar using an × button.
* [x]	Allow users to reopen the sidebar using a hamburger button.
* [x]	Automatically resize the main content when the desktop sidebar opens or closes.
* [x]	Use an overlay sidebar on narrow smartphone screens.
* [x]	Preserve the right-side account navigation.
* [x]	Add smooth transitions using centralized theme variables.
* [x]	Test desktop, tablet and smartphone behavior.

AppShell Implementation

* [x] Create the AppShell.tsx component.
* [x] Integrate AppShell into the root layout.
* [x] Move sidebar state management into AppShell.
* [x] Implement persistent collapsible sidebar on desktop.
* [x] Implement automatic content resizing.
* [x] Implement overlay navigation on smartphones.
* [x] Preserve right account navigation.
* [x] Remove the floating active-page indicator.
- [x] Verify responsive behavior on real devices.
- [x] Resolve JavaScript interaction failure through the network IP.
- [x] Refine sidebar and top-bar visual integration.

Design reference: Collapsible dashboard-style navigation with a persistent active-page highlight and adaptive content width.

- [x] Test navigation on desktop, tablet, and mobile.
- [x] Implement sidebar interactions.
- [x] Integrate Next.js routing.
- [x] Implement responsive layouts.
- [x] Connect styling to design tokens.
- [x] Test desktop, tablet and mobile behavior.

### Global Navigation Enhancement — `feature/global-navigation`

- [x] Preserve the top navigation, branding, account button, and shopping cart.
- [x] Keep hamburger open/close separate from sidebar collapse/expand.
- [x] Place a 36 × 36px collapse/expand button immediately above Home.
- [x] Show icons and 14px labels when expanded; icons with accessible names and native desktop tooltips when collapsed.
- [x] Preserve active-page highlighting in both modes.
- [x] Define `sidebarCollapsedWidth: "64px"` centrally and expose it through ThemeProvider.
- [x] Resize desktop/tablet content with the sidebar; retain phone overlay, Escape dismissal, navigation dismissal, and scroll locking.
- [x] Use existing theme colors, radius, and transition durations.
- Desktop (≥1024px) defaults open with icons and labels; tablet (768–1023px) defaults open with icons only. Both resize content, allow collapse/expand, and remain open on navigation or Escape until closed with X.
- Phone (<768px) defaults closed and opens expanded over a shaded page; hide the collapse control.
- Apply these defaults on initial load and when crossing responsive breakpoints; preserve manual choices when resizing within one mode.
- Homepage, catalog, footer, authentication, and internationalization remain outside this enhancement.
- [x] Validate TypeScript, ESLint, and production build (webpack); test Chromium at desktop 1440px, tablet 768px, and mobile 390px. See `dev_steps.md` for checks and the Turbopack environment limitation.

### Completion Criteria

All navigation components work correctly and use configurable styling instead of hardcoded brand colors.

---
## Utility tool before continuing with phase 3

### Internationalization (i18n)

**Branch:** `feature/i18n` — implemented; awaiting review/merge.

- [x] English (`en`, default), French (`fr`), and German (`de`) via `next-intl`.
- [x] Shared routing, locale navigation helpers, validated request configuration, and typed message keys under `src/i18n`.
- [x] Namespaced message files at `application/web/messages/{en,fr,de}.json`, with consistent keys.
- [x] Locale-based public routes: `/{locale}/home`, `/products`, `/abouts`, `/contact`, and the retained cart placeholder.
- [x] Legacy unprefixed routes redirect using the locale cookie, falling back to English. `/` and `/{locale}` lead to the matching homepage. Browser language does not override the English first-visit default.
- [x] A globe/current-language/chevron selector immediately before the reserved account button. Translate language names into the active language, highlight the current choice, support keyboard navigation, and dismiss on Escape or outside click.
- [x] Switching language preserves the current page, query parameters, and hash. Navigation links and refresh retain the locale. `NEXT_LOCALE` stores preference for one year.
- [x] Translate navigation, accessibility labels, hero, categories, buttons, page headings/placeholders, metadata description, and reserved account/cart labels. Keep the brand name unchanged.
- [x] Preserve responsive navigation defaults, width tokens, active links, and 500ms transitions. Account/cart remain disabled; disabled account implementation does not mount or prefetch unfinished routes.
- [x] Preserve public images and framework assets; exclude API and future unprefixed Admin Dashboard routes from locale routing. Future admin pages should provide their own layout/provider rather than depending on the public locale layout.
- [x] Add `npm run check:i18n` to validate matching keys and ICU message syntax.

Validation details, environment limitations, and migration notes are recorded in `docs/dev_steps.md`. Authentication, checkout, payments, backend work, and unrelated page layout changes are excluded.

### Global Footer

**Branch:** `feature/global-footer` — Digital Flyer & Portfolio.

- [x] Reusable `src/components/layout/Footer.tsx`, rendered after page content by the shared public `[locale]/layout.tsx` inside AppShell's resizing content area.
- [x] Compact footer with configurable localized description; repeated logo, business name, and slogan removed by design revision. Business name remains in copyright.
- [x] Four link groups: Explore, Customer Service, Legal, Follow Us.
- [x] Locale-aware Home, Products, About Us, and Contact links. Custom Orders currently leads to Contact for inquiries.
- [x] Imprint and Privacy Policy are non-clickable “Coming soon” labels until approved pages exist. FAQ and Terms remain hidden. No policy content or business contact details added.
- [x] Instagram/TikTok/WhatsApp are rendered only when approved HTTPS URLs are configured; an explanatory message appears when none are configured. No invented accounts or dead links.
- [x] Central configuration in `src/config/footer.ts`; translated content in the `Footer` message namespace for English, French, and German.
- [x] Four columns at ≥1024px, two at 768–1023px, one below 768px. Footer follows page content in normal flow, with wrapping for narrow screens. Category/link gaps and vertical padding reduced by half for a compact layout.
- [x] Existing theme colors and transition durations; existing sidebar behavior and disabled commerce controls preserved.
- [x] TypeScript, ESLint, and translation checks passed. Production build and browser validation details are recorded in `docs/dev_steps.md`.

To activate a future destination, create its public page and set the corresponding non-prefixed `href` in `footerContent.groups`. Set `visible: true` for FAQ/Terms when ready. Supply approved social profile/contact URLs in `footerSocialLinks`. Localized description and labels are edited in `messages/{en,fr,de}.json`; do not add business details without approval.

---
## Phase 3 — Homepage Layout and Components

|||**Status:** |||
|---|---|---|---|---|
|[0] Next  | [x]ongoing  | [ ]complet  | [ ]verification  |  [ ]done |
|---|---|---|---|---|

Description: Planned

### Objective

Develop the public homepage.

### Features

- Hero section.
- Featured products.
- Product categories.
- Gallery preview.
- Business introduction.
- Contact section.
- Social media links.
- Footer.

### Tasks

- [ ] Create reusable homepage sections.
- [ ] Implement responsive layouts.
- [ ] Integrate initial images and logo.
- [ ] Add placeholder or initial business content.
- [ ] Prepare content for future admin editing.
- [ ] Optimize images.
- [ ] Add SEO metadata.
- [ ] Test desktop and mobile layouts.

### Step 4.1 — Hero Section (`feature/home`)

- [x] Extend the existing `HeroSection.tsx`; preserve the homepage route and other sections.
- [x] Brand introduction, prominent real cake photograph, short localized message, Explore Products, and custom-order/contact action.
- [x] Use the supplied example from `Image/ai_cak_ex.png`, served as `public/images/home/ai_cak_ex.jpg`, with an explicitly translated example caption. Use `next/image` with responsive sizes and preload; no new product imagery generated.
- [x] Configure image/crop and locale-neutral button destinations in `src/config/home.ts`; keep all copy, alt text, caption, and placeholder text in EN/FR/DE message catalogs.
- [x] Use existing theme colors, inherited typography, border radius, and transitions. Add Hero clearance beneath the fixed top bar.
- [x] Adapt the Hero grid to available content width using container queries; preserve sidebar expanded/collapsed resizing and phone stacking.
- [x] Retain a translated placeholder option when the configured image is null; replace the example with an approved business photo when available.
- [x] Accept a typed Hero content prop with static-image or URL/dimensions input and locale-resolved alt/caption overrides for future content-service integration.
- [ ] Future Admin: upload/select the Hero image in the Media Library, manage localized alt text/captions, preview, publish, and revalidate all locale homepages without source-code edits. Storage/backend/Admin UI remain planned; see `dev_steps.md` for the replacement workflow.
- [x] Run TypeScript, ESLint, translation, production-build, and browser checks; see `dev_steps.md` for results and environment limitations.

Step 4.1 changed only the Hero. Step 4.2 below adds category cards; later homepage steps remain pending.

### Step 4.2 — Product Categories (`feature/home`)

- [x] Preserve Cakes, Cupcakes, and Custom Orders in the existing `CategorySection`.
- [x] Separate typed category records, stable slugs, descriptions, and image metadata into `src/config/categories.ts`. Accept a category-data prop for future Admin content-service integration.
- [x] Use `next/image` for real Cakes and Custom Orders photographs from the existing business flyer, with configurable CSS crops. Cupcakes uses the subsequently supplied photograph at `public/images/categories/screenshot_insta.png`; the placeholder remains available for future categories without an image.
- [x] Responsive cards: three columns at ≥1024px, two at 768–1023px, one below 768px. Keep centralized colors, radius, and transition tokens, readable descriptions, and keyboard focus states.
- [x] Locale-aware `/products?category=cakes`, `cupcakes`, and `custom-orders` links. The Products landing page recognises the selected category and displays its localized heading/description; no inventory/filtering/purchase workflow added.
- [x] Preserve the query when switching languages. Missing, unknown, or repeated category values fall back to the general Products page.
- [x] EN/FR/DE labels, descriptions, image alt text, and placeholder copy; no hardcoded translated content in React.
- [x] TypeScript, ESLint, translations, production build, and browser validation recorded in `dev_steps.md`.

Hero, navigation, and footer implementation are unchanged. Admin uploads remain future content work; no purchasing functionality is implemented. Step 4.2 added only category cards and matching landing headings; later steps are documented below.

### Step 4.3 — Featured Products (`feature/home`)

- [x] Add `FeaturedProducts.tsx` after Categories, with three configurable pictured creations, descriptive labels, short appearance-based descriptions, and localized category labels.
- [x] Separate typed records in `src/config/featured-products.ts`; support future server-provided records, uploaded image URLs/dimensions, and locale-resolved names/descriptions/alt text.
- [x] Use real cake photographs from the supplied business flyer and the supplied cupcake photograph through optimized, lazy-loaded `next/image`. No prices, inventory/availability claims, or invented official product names.
- [x] Support a clearly labelled placeholder for absent images and an example badge when a future record uses illustrative imagery.
- [x] Optional View Details is hidden for every current record because there are no product-detail pages. Only configure it after a published detail route exists; no nonfunctional links or new detail routes.
- [x] Explore All Products links to the localized existing `/products` catalog landing page.
- [x] Three columns at ≥1024px, two at 768–1023px, one below 768px. Use existing theme variables and preserve sidebar resizing.
- [x] EN/FR/DE text and alt descriptions; TypeScript, ESLint, message validation, production-build, and browser checks recorded in `dev_steps.md`.
- [x] Flatten source pictures from `Image/cak/` to `Image/`, preserve all six files, and remove the empty `cak` directory. Align served Hero/cupcake filenames/imports with the actual source names without changing their displayed images.

No purchasing, authentication, payment, or new backend functionality. Hero and Category presentation components, navigation, and footer remain unchanged. Step 4.3 added Featured Products and the requested image organization only; subsequent steps are recorded below.

### Step 4.4 — About Preview (`feature/home`)

- [x] Reusable `AboutPreview.tsx` below Featured Products, with an authentic supplied business creation photograph on the left and a heading/introduction/About Us action on the right when space allows.
- [x] Two-column desktop layout based on available content width; stacked tablet/mobile layout, preserving sidebar resizing.
- [x] Configurable `src/config/about-preview.ts` for text keys, image metadata/crop, and action destination. A typed content prop accepts future Admin-published copy and media; null image shows a translated placeholder.
- [x] Use optimized `next/image` for the white decorated cake from the existing business flyer. Do not depict invented bakery premises or staff.
- [x] EN/FR/DE text, alt description, caption, and localized `/abouts` navigation. Introduction covers only the existing cake/cupcake/personalized offering; no founder biography, history, qualifications, or achievements invented.
- [x] Existing theme tokens and inherited typography; no new dependencies, commerce functionality, or unrelated component changes.
- [x] TypeScript, lint, translations, build, and responsive browser checks recorded in `dev_steps.md`.

Scope stops after Step 4.4. Existing Hero, Categories, Featured Products, navigation, and footer remain unchanged.

### Completion Criteria

The homepage is responsive, functional and prepared for administrator-managed content.

---

## Phase 4 — Centralized Theme and Content System

|||**Status:** |||
|---|---|---|---|---|
|[x] Next  | [ ]ongoing  | [ ]complet  | [ ]verification  |  [ ]done |
|---|---|---|---|---|

Description: Planned

### Objective

Separate visual design and website content from reusable components.

### Theme Configuration

The theme system must support:

- Primary and secondary colors.
- Background and text colors.
- Typography.
- Font sizes.
- Spacing.
- Border radius.
- Shadows.
- Transparency.
- Blur effects.
- Animations.

### Content Configuration

The content system must support:

- Page titles.
- Descriptions.
- Business slogans.
- Images.
- Navigation labels.
- Contact information.
- Social media links.
- Product information.

### Tasks

- [ ] Define theme types.
- [ ] Create centralized design tokens.
- [ ] Connect design tokens to CSS variables.
- [ ] Define structured content models.
- [ ] Implement content retrieval.
- [ ] Provide default content and theme settings.
- [ ] Plan persistent configuration storage.

### Completion Criteria

Website content and visual settings can be changed without modifying reusable component code.

**Implementation Note:** Basic design tokens should be introduced during Phase 2 to avoid unnecessary refactoring.

---

## Phase 5 — Admin Authentication and Dashboard

|||**Status:** |||
|---|---|---|---|---|
|[x] Next  | [ ]ongoing  | [ ]complet  | [ ]verification  |  [ ]done |
|---|---|---|---|---|

Description: Planned

### Objective

Create a secure administration interface.

### Features

- Administrator login.
- Administrator logout.
- Protected admin routes.
- Dashboard navigation.
- Role-based permissions.
- Account settings.

### Dashboard Sections

- Content Editor.
- Media Library.
- Design Studio.
- Product Management.
- Business Settings.

### Tasks

- [ ] Select authentication provider.
- [ ] Implement administrator login.
- [ ] Protect administrative routes.
- [ ] Enforce permissions server-side.
- [ ] Create Admin Dashboard layout.
- [ ] Implement dashboard navigation.
- [ ] Add error handling.

### Completion Criteria

Only authorized administrators can access and modify administrative resources.

---

## Phase 6 — Media Library and Content Editor

|||**Status:** |||
|---|---|---|---|---|
|[x] Next  | [ ]ongoing  | [ ]complet  | [ ]verification  |  [ ]done |
|---|---|---|---|---|

Description: Planned

### Objective

Allow administrators to manage images, logos, icons and text without editing code.

### Media Library Features

- Upload images.
- Replace images.
- Delete unused images.
- Browse uploaded media.
- Assign images to website sections.
- Upload business logos.
- Replace compatible icons.
- Display file information.

### Proposed Supported Formats

| Media Type | Formats |
|---|---|
| Images | JPEG, PNG, WebP |
| Logos | PNG, WebP, validated SVG |
| Icons | PNG, WebP, validated SVG |
| Additional Images | AVIF, if supported |

All uploaded files must be validated for format, size and security.

### Content Editor Features

- Edit page headings.
- Edit descriptions.
- Edit business information.
- Edit contact information.
- Update social media links.
- Assign media to content.
- Save drafts.
- Publish content.

### Tasks

- [ ] Configure persistent media storage.
- [ ] Implement secure uploads.
- [ ] Create Media Library interface.
- [ ] Implement file validation.
- [ ] Create text-editing controls.
- [ ] Connect content to persistent storage.
- [ ] Implement draft and publish workflow.
- [ ] Test media and content management.

### Completion Criteria

Administrators can change and publish website text and images without modifying application source code.

---

## Phase 7 — Admin Design Studio

|||**Status:** |||
|---|---|---|---|---|
|[x] Next  | [ ]ongoing  | [ ]complet  | [ ]verification  |  [ ]done |
|---|---|---|---|---|

Description: Planned

### Objective

Provide a visual interface for managing website appearance.

### Theme Management

Administrators must be able to:

- Change website colors.
- Change typography.
- Adjust spacing.
- Modify border radius.
- Configure shadows.
- Configure blur and transparency.
- Adjust supported animations.
- Save theme configurations.

### Live Preview

- Preview changes before publishing.
- Preview desktop layouts.
- Preview tablet layouts.
- Preview mobile layouts.
- Compare draft and published settings.

### Publishing

- Save design drafts.
- Publish approved changes.
- Restore default settings.
- Support version history and rollback.

### Tasks

- [ ] Build theme-editing controls.
- [ ] Connect controls to design tokens.
- [ ] Implement responsive live preview.
- [ ] Store theme configurations.
- [ ] Implement publishing workflow.
- [ ] Add version history.
- [ ] Test visual consistency.

### Completion Criteria

Administrators can configure and publish the website's appearance without editing CSS or TypeScript.

---

## Phase 8 — Product Management

|||**Status:** |||
|---|---|---|---|---|
|[x] Next  | [ ]ongoing  | [ ]complet  | [ ]verification  |  [ ]done |
|---|---|---|---|---|

Description: Planned

### Objective

Create a manageable product catalog.

### Product Information

Each product may contain:

- Product name.
- Product category.
- Description.
- Product images.
- Price or price-on-request setting.
- Availability.
- Display order.
- Publication status.

### Initial Product Categories

- Cakes.
- Cupcakes.
- Desserts.
- Biscuits and cookies.
- Sweet and savory appetizers.
- Gift boxes.
- Fruit platters.

Categories must be editable by administrators.

### Tasks

- [ ] Define product data models.
- [ ] Define category data models.
- [ ] Create product management interface.
- [ ] Implement product creation.
- [ ] Implement product editing and deletion.
- [ ] Connect products to the Media Library.
- [ ] Implement product publishing.
- [ ] Create public product pages.
- [ ] Add filtering and responsive product cards.
- [ ] Test catalog management.

### Completion Criteria

Administrators can manage products and visitors can browse the published catalog.

**Future Features:** Online ordering, shopping carts, payments and order tracking require separate requirements.

---

## Phase 9 — Testing, Security and Deployment

|||**Status:** |||
|---|---|---|---|---|
|[x] Next  | [ ]ongoing  | [ ]complet  | [ ]verification  |  [ ]done |
|---|---|---|---|---|

Description: Planned

### Objective

Prepare the website for production.

### Functional Testing

- Navigation.
- Responsive layouts.
- Authentication.
- Administrator permissions.
- Media uploads.
- Content editing.
- Theme editing.
- Product management.
- Publishing workflows.

### Security and Quality

- Accessibility.
- Keyboard navigation.
- Input validation.
- File upload security.
- Server-side authorization.
- Performance optimization.
- SEO.
- Error handling.
- Environment variable security.

### Deployment Tasks

- [ ] Select hosting provider.
- [ ] Configure production environment.
- [ ] Configure database and storage.
- [ ] Connect domain.
- [ ] Configure HTTPS.
- [ ] Establish backup procedures.
- [ ] Configure error monitoring.
- [ ] Deploy website.
- [ ] Verify production functionality.

### Completion Criteria

The website is secure, responsive, functional and publicly accessible.

---

# 3. Development Workflow

Every development task follows this process:

1. **Plan:** Define requirements and expected behavior.
2. **Design:** Determine components and dependencies.
3. **Implement:** Develop the feature.
4. **Test:** Verify functionality.
5. **Review:** Check code quality and architecture.
6. **Commit:** Save changes in Git.
7. **Document:** Update `dev_steps.md`.

A phase is considered complete only after its completion criteria have been verified.

---

# 4. Development Progress

| Phase | Development Area | Status |
|---|---|---|
| 1 | Project Setup and Documentation | Completed — verification pending |
| 2 | Responsive Navigation System | Next |
| 3 | Homepage Layout and Components | Planned |
| 4 | Centralized Theme and Content System | Planned |
| 5 | Admin Authentication and Dashboard | Planned |
| 6 | Media Library and Content Editor | Planned |
| 7 | Admin Design Studio | Planned |
| 8 | Product Management | Planned |
| 9 | Testing, Security and Deployment | Planned |

---

# 5. Future Development

## Potential future features:

* [ ] Customer accounts.
* [ ] Favorites and wishlists.
* [ ] Shopping cart.
* [ ] Online ordering.
* [ ] Online payments.
* [ ] Order tracking.
* [ ] Customer notifications.
* [x] Multilingual existing public interface (English, French, German); future CMS-managed translations remain separate work.
* [ ] Mobile application.
* [ ] Advanced analytics.

## Navigation — Future Design Refinements

* [ ]	Make the active-page indicator appear physically attached to the top navigation bar, like a hanging tab.
* [ ]	Create seamless, rounded transitions between the top navigation bar and the active-page indicator.
* [ ]	Create seamless transitions between the top navigation bar and both sidebars.
* [ ]	Improve the active-page indicator’s positioning when either sidebar opens.
* [ ]	Add smooth animations using the centralized theme transition settings.
* [ ]	Verify the final appearance on desktop, tablet, and mobile.

Current status: Basic navigation functionality is implemented. Final visual refinements are postponed until the navigation design-polishing stage.
These features require separate requirements before implementation.


### Account and cart temporarily disabled

The top navigation retains visible, disabled account and cart buttons while these features are unfinished. Native disabled buttons prevent mouse and keyboard activation; the cart has no active link and the account sidebar cannot open. Existing account sidebar, handlers, cart page, and enabled cart link are retained. Reactivate independently by setting `accountEnabled` or `cartEnabled` to `true` in `application/web/src/config/features.ts`. This controls navigation availability only; it is not route authorization.
