
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
| 02 | Internationalization | `feature/i18n` | Completed | [x] | [] |
| 03 | Global Footer | `feature/global-footer` | Completed | [x] | [] |
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
## Phase 3 — Shared Utilities

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
## Phase 4 — Pages Layout and Components
### 4.1 Homepage

| Next | Ongoing | Complete | Verification | Done |
|---|---|---|---|---|
| [ ] | [ ] | [ ] | [x] | [ ] |---|

Description: Implemented; verification pending. Standard production build and WebKit refresh-error assessment remain merge gates. See Step 4.7 in `dev_steps.md`.

#### Objective

Develop the public homepage.

#### Features

- Hero section.
- Featured products.
- Product categories.
- Gallery preview.
- Business introduction.
- Contact section.
- Social media links.
- Footer.

#### Tasks

- [x] Create reusable homepage sections.
- [x] Implement responsive layouts.
- [x] Integrate initial images and logo.
- [x] Add placeholder or initial business content.
- [x] Prepare content for future admin editing.
- [x] Optimize images.
- [ ] Add SEO metadata.
- [x] Test desktop and mobile layouts.

#### Completion Criteria

The homepage is responsive, functional and prepared for administrator-managed content.

---

### 4.2 Products Page

| Next | Ongoing | Complete | Verification | Done |
|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] |

Description: Planned — reserved for future implementation. Confirm detailed scope before development.

#### Objective

Develop the public product catalog for the Digital Flyer & Portfolio stage.

#### Features

- Cakes, Cupcakes, and Custom Orders categories.
- Approved photographs, product names, descriptions, and alternative text.
- Working category destinations and optional published product-detail pages.
- No purchasing, checkout, payments, or invented availability.

#### Tasks

- [ ] Inspect the existing page, routes, configuration, and translations.
- [ ] Confirm approved content and layout before implementation.
- [ ] Keep page data separate from presentation for future Admin integration.
- [ ] Reuse global navigation, footer, and centralized theme tokens.
- [ ] Support English, French, and German with localized links.
- [ ] Verify accessibility and layouts at 390px, 768px, 1024px, and 1440px.
- [ ] Run TypeScript, ESLint, translation validation, and production build checks.
- [ ] Record implementation and validation in requirements and development notes.

#### Completion Criteria

The catalog is responsive, accessible, translated, and configurable. All category links and any published detail links work.

---

### 4.3 About Us Page

| Next | Ongoing | Complete | Verification | Done |
|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] |

Description: Planned — reserved for future implementation. Confirm detailed scope before development.

#### Objective

Introduce Stephworld Delights using approved business information.

#### Features

- Business introduction and offering.
- Authentic photographs when available.
- Business story only after approved details are provided.
- Links to Products and Contact.

#### Tasks

- [ ] Inspect the existing page, routes, configuration, and translations.
- [ ] Confirm approved content and layout before implementation.
- [ ] Keep page data separate from presentation for future Admin integration.
- [ ] Reuse global navigation, footer, and centralized theme tokens.
- [ ] Support English, French, and German with localized links.
- [ ] Verify accessibility and layouts at 390px, 768px, 1024px, and 1440px.
- [ ] Run TypeScript, ESLint, translation validation, and production build checks.
- [ ] Record implementation and validation in requirements and development notes.

#### Completion Criteria

The page presents approved business information across all three languages and screen sizes, without inventing biographies, history, qualifications, or achievements.

---

### 4.4 Contact Page

| Next | Ongoing | Complete | Verification | Done |
|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] |

Description: Planned — reserved for future implementation. Confirm detailed scope before development.

#### Objective

Provide approved contact channels and guidance for custom-order inquiries.

#### Features

- Contact channels only when configured with approved information.
- Guidance for sharing occasion, design, size, and preferred date.
- Business hours and location only when approved.
- A contact form reserved for a separately approved scope.

#### Tasks

- [ ] Inspect the existing page, routes, configuration, and translations.
- [ ] Confirm approved content and layout before implementation.
- [ ] Keep page data separate from presentation for future Admin integration.
- [ ] Reuse global navigation, footer, and centralized theme tokens.
- [ ] Support English, French, and German with localized links.
- [ ] Verify accessibility and layouts at 390px, 768px, 1024px, and 1440px.
- [ ] Run TypeScript, ESLint, translation validation, and production build checks.
- [ ] Record implementation and validation in requirements and development notes.

#### Completion Criteria

Contact links work, inquiry guidance is clear and translated, and no invented contact details or automatic order acceptance is implied.

---

### 4.5 Additional Public Pages — Reserved

Description: Planned. Use the same Status, Objective, Features, Tasks, and Completion Criteria template when each page is approved.

- Imprint — requires approved business/legal details.
- Privacy Policy — requires approved content reflecting the actual services used.
- FAQ — requires approved questions and answers.
- Dedicated Creations/Gallery page — optional future destination.
- Terms & Conditions — future scope with approved content.

Do not publish placeholder legal text or enable links to pages that do not exist. Authentication, cart, checkout, and Admin pages remain separately scoped.

---

## Phase 5 — Centralized Theme and Content System

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

## Phase 6 — Admin Authentication and Dashboard

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

## Phase 7 — Media Library and Content Editor

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

## Phase 8 — Admin Design Studio

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

## Phase 9 — Product Management

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

## Phase 10 — Testing, Security and Deployment

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
| 3 | Shared Utilities | Internationalization and footer: Testing |
| 4 | Pages Layout and Components | Homepage: Testing; other pages: Planned |
| 5 | Centralized Theme and Content System | Planned |
| 6 | Admin Authentication and Dashboard | Planned |
| 7 | Media Library and Content Editor | Planned |
| 8 | Admin Design Studio | Planned |
| 9 | Product Management | Planned |
| 10 | Testing, Security and Deployment | Planned |

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
