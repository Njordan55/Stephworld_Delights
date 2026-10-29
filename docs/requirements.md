
# Stephworld Delights — Requirements & Development Plan

## 1. Project Overview

**Project:** Stephworld Delights  
**Application:** Bakery and cake business website  
**Architecture:** Modular, responsive, theme-independent  
**Current Stage:** Phase 2 — Responsive Navigation System

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
|[0] Next  | [x]ongoing  | [ ]complet  | [ ]verification  |  [ ]done |
|---|---|---|---|---|

Description: Next

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
- [ ] Refine sidebar and top-bar visual integration.

Design reference: Collapsible dashboard-style navigation with a persistent active-page highlight and adaptive content width.

- [x] Test navigation on desktop, tablet, and mobile.
- [ ] Implement sidebar interactions.
- [ ] Integrate Next.js routing.
- [ ] Add keyboard accessibility.
- [ ] Implement responsive layouts.
- [ ] Connect styling to design tokens.
- [ ] Test desktop, tablet and mobile behavior.

### Completion Criteria

All navigation components work correctly and use configurable styling instead of hardcoded brand colors.

---

## Phase 3 — Homepage Layout and Components

|||**Status:** |||
|---|---|---|---|---|
|[x] Next  | [ ]ongoing  | [ ]complet  | [ ]verification  |  [ ]done |
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
* [ ] Multilingual website content.
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
