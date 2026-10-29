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