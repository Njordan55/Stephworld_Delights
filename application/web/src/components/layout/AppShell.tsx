"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import TopNavigation from "@/components/navigation/TopNavigation";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Effect to handle screen size changes and set the initial state
useEffect(() => {
  const mediaQuery = window.matchMedia("(min-width: 1024px)");

  function updateScreenSize() {
    const desktop = mediaQuery.matches;
    setIsDesktop(desktop);
    setIsMenuOpen(desktop);
  }

  updateScreenSize();

  mediaQuery.addEventListener("change", updateScreenSize);

  return () => {
    mediaQuery.removeEventListener("change", updateScreenSize);
  };
}, []);

  // Effect to handle Escape key press for closing sidebars
useEffect(() => {
  if (!isMenuOpen && !isAccountOpen) return;

  function handleEscape(event: KeyboardEvent) {
    if (event.key !== "Escape") return;

    setIsAccountOpen(false);

    // Only close the left sidebar with Escape on
    // tablet and smartphone.
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      setIsMenuOpen(false);
    }
  }

  window.addEventListener("keydown", handleEscape);

  return () => {
    window.removeEventListener("keydown", handleEscape);
  };
}, [isMenuOpen, isAccountOpen]);

// Effect to prevent body scrolling when sidebars are open
useEffect(() => {
  if (isDesktop || (!isMenuOpen && !isAccountOpen)) {
    return;
  }

  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = previousOverflow;
  };
}, [isDesktop, isMenuOpen, isAccountOpen]);

// Functions to toggle the menu and account sidebars
function toggleMenu() {
  // The hamburger only opens the sidebar.
  setIsMenuOpen(true);
  setIsAccountOpen(false);
}

  // Function to toggle the account sidebar
function toggleAccount() {
  setIsAccountOpen((previous) => !previous);

  // Preserve the persistent sidebar on desktop.
  if (!isDesktop) {
    setIsMenuOpen(false);
  }
}

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--swd-background)",
        color: "var(--swd-foreground)",
      }}
    >
      <TopNavigation
        isMenuOpen={isMenuOpen}
        isAccountOpen={isAccountOpen}
        isDesktop={isDesktop}
        onMenuToggle={toggleMenu}
        onAccountToggle={toggleAccount}
        onMenuClose={() => setIsMenuOpen(false)}
        onAccountClose={() => setIsAccountOpen(false)}
      />

      <div
        id="app-content"
        className="min-w-0 transition-[margin-left]"
        style={{
          marginLeft:
            isDesktop && isMenuOpen
              ? "var(--swd-sidebar-width)"
              : "0px",
          transitionDuration:
            "var(--swd-medium-transition-duration)",
        }}
      >
        {children}
      </div>
    </div>
  );
}