"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { features } from "@/config/features";
import TopNavigation from "@/components/navigation/TopNavigation";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isPersistentNavigation, setIsPersistentNavigation] = useState(false);

  // Apply defaults only when entering a different responsive mode.
useEffect(() => {
  const tabletQuery = window.matchMedia("(min-width: 768px)");
  const desktopQuery = window.matchMedia("(min-width: 1024px)");

  function updateScreenSize() {
    setIsPersistentNavigation(tabletQuery.matches);
    setIsMenuOpen(tabletQuery.matches);
    setIsSidebarCollapsed(tabletQuery.matches && !desktopQuery.matches);
  }

  updateScreenSize();
  tabletQuery.addEventListener("change", updateScreenSize);
  desktopQuery.addEventListener("change", updateScreenSize);

  return () => {
    tabletQuery.removeEventListener("change", updateScreenSize);
    desktopQuery.removeEventListener("change", updateScreenSize);
  };
}, []);

  // Effect to handle Escape key press for closing sidebars
useEffect(() => {
  if (!isMenuOpen && !isAccountOpen) return;

  function handleEscape(event: KeyboardEvent) {
    if (event.key !== "Escape") return;

    setIsAccountOpen(false);

    // Persistent tablet/desktop navigation closes only with its menu button.
    if (!window.matchMedia("(min-width: 768px)").matches) {
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
  if (isPersistentNavigation || (!isMenuOpen && !isAccountOpen)) {
    return;
  }

  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = previousOverflow;
  };
}, [isPersistentNavigation, isMenuOpen, isAccountOpen]);

// Functions to toggle the menu and account sidebars
function toggleMenu() {
  setIsMenuOpen((previous) => !previous);
  setIsAccountOpen(false);
}

  // Function to toggle the account sidebar
function toggleAccount() {
  if (!features.accountEnabled) return;
  setIsAccountOpen((previous) => !previous);

  // Preserve the persistent sidebar on tablet and desktop.
  if (!isPersistentNavigation) {
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
        isSidebarCollapsed={isSidebarCollapsed}
        onSidebarCollapseToggle={() => setIsSidebarCollapsed((previous) => !previous)}
        isAccountOpen={isAccountOpen}
        onMenuToggle={toggleMenu}
        onAccountToggle={toggleAccount}
        onMenuClose={() => {setIsMenuOpen(false); setIsAccountOpen(false);}}
        onAccountClose={() => setIsAccountOpen(false)}
      />

      <div
        id="app-content"
        className="min-w-0 transition-[margin-left]"
        style={{
          marginLeft:
            isPersistentNavigation && isMenuOpen
              ? (isSidebarCollapsed
                  ? "var(--swd-sidebar-collapsed-width)"
                  : "var(--swd-sidebar-width)")
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