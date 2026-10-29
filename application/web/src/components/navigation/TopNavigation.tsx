"use client";

import Link from "next/link";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

type TopNavigationProps = {
  isMenuOpen: boolean;
  isAccountOpen: boolean;
  isDesktop: boolean;
  onMenuToggle: () => void;
  onAccountToggle: () => void;
  onMenuClose: () => void;
  onAccountClose: () => void;
};

export default function TopNavigation({
  isMenuOpen,
  isAccountOpen,
  isDesktop,
  onMenuToggle,
  onAccountToggle,
  onMenuClose,
  onAccountClose,
}: TopNavigationProps) {
  return (
    <>
    <header
    className="fixed top-0 right-0 z-50 flex items-center border-b px-4 transition-[left] sm:px-6"
        style={{
        left:
        isDesktop && isMenuOpen
            ? "var(--swd-sidebar-width)"
            : "0px",
    height: "var(--swd-navigation-height)",
    backgroundColor: "var(--swd-surface)",
    borderColor: "var(--swd-border)",
    color: "var(--swd-foreground)",
    transitionDuration: "var(--swd-medium-transition-duration)",
  }}
>
{!isMenuOpen && (
  <button
    type="button"
    aria-label="Open navigation menu"
    aria-expanded={false}
    aria-controls="left-navigation"
    onClick={onMenuToggle}
    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-opacity hover:opacity-75"
    style={{
      backgroundColor: "var(--swd-background)",
      borderColor: "var(--swd-border)",
    }}
  >
    <span aria-hidden="true" className="text-2xl">
      ☰
    </span>
  </button>
)}

        <Link
            href="/"
            className="ml-3 flex min-w-0 flex-1 flex-col justify-center"
        >
            <span className="truncate text-base font-semibold sm:text-xl">
                Stephworld Delights
            </span>

            <span
                className="mt-1 text-xs italic sm:text-sm"
                style={{ color: "var(--swd-secondary)" }}
            >
                Made with Love
            </span>
        </Link>

        <button
          type="button"
          aria-label={
            isAccountOpen ? "Close account menu" : "Open account menu"
          }
          aria-expanded={isAccountOpen}
          aria-controls="right-navigation"
          onClick={onAccountToggle}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-[background-color,opacity,transform] hover:opacity-75 active:scale-95"
          style={{
            backgroundColor: "var(--swd-background)",
            borderColor: "var(--swd-border)",
          }}
        >
          <span aria-hidden="true" className="text-2xl">
            ♙
          </span>
        </button>
      </header>

      <LeftSidebar isOpen={isMenuOpen} onClose={onMenuClose} />
      <RightSidebar isOpen={isAccountOpen} onClose={onAccountClose} />
    </>
  );
}