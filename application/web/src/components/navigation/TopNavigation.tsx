"use client";

import Link from "next/link";
import Image from "next/image";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { ShoppingCart, UserRound } from "lucide-react";

type TopNavigationProps = {
  isMenuOpen: boolean;
  isAccountOpen: boolean;
  onMenuToggle: () => void;
  onAccountToggle: () => void;
  onMenuClose: () => void;
  onAccountClose: () => void;
};

export default function TopNavigation({
  isMenuOpen,
  isAccountOpen,
  onMenuToggle,
  onAccountToggle,
  onMenuClose,
  onAccountClose,
}: TopNavigationProps) {
  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 flex items-center border-b px-4 sm:px-6"
        style={{
          height: "var(--swd-navigation-height)",
          backgroundColor: "var(--swd-surface)",
          borderColor: "var(--swd-border)",
          color: "var(--swd-foreground)",
        }}
      >
        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="left-navigation"
          onClick={isMenuOpen ? onMenuClose : onMenuToggle}
          className="flex h-10 w-10 shrink-0 items-center justify-center border transition-[background-color,opacity,transform] hover:opacity-75 active:scale-95"
          style={{
            backgroundColor: "var(--swd-background)",
            borderColor: "var(--swd-border)",
            color: "var(--swd-foreground)",
            borderRadius: "var(--swd-radius-default)",
            transitionDuration: "var(--swd-quick-transition-duration)",
          }}
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>

        <Link
          href="/home"
          className="ml-3 flex min-w-0 flex-1 items-center gap-3"
        >
          {/* Reserved logo area */}
          <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
            <Image
              src="/images/logo/logo.jpeg"
              alt="Stephworld Delights logo"
              fill
              sizes="(min-width: 640px) 56px, 48px"
              className="object-contain"
            />
          </div>

          {/* Brand name and slogan */}
          <div className="flex min-w-0 flex-col justify-center">
            <span className="truncate text-base font-semibold sm:text-xl">
              Stephworld Delights
            </span>

            <span
              className="mt-1 text-xs italic sm:text-sm"
              style={{ color: "var(--swd-secondary)" }}
            >
              Made with Love
            </span>
          </div>
        </Link>

        {/* Right-side buttons for user actions (Account) */}
        <button
          type="button"
          aria-label={
            isAccountOpen ? "Close account menu" : "Open account menu"
          }
          aria-expanded={isAccountOpen}
          aria-controls="right-navigation"
          onClick={isAccountOpen ? onAccountClose : onAccountToggle}
          className="flex h-10 w-10 shrink-0 items-center justify-center border transition-[background-color,opacity,transform] hover:opacity-75 active:scale-95"
          style={{
            backgroundColor: "var(--swd-background)",
            borderColor: "var(--swd-border)",
            color: "var(--swd-foreground)",
            borderRadius: "var(--swd-radius-default)",
            transitionDuration: "var(--swd-quick-transition-duration)",
          }}
        >

          {isAccountOpen ? (
            <span aria-hidden="true" className="text-2xl leading-none">
              ×
            </span>
          ) : (
            <UserRound size={24} strokeWidth={1.8} aria-hidden="true" />
          )}
        </button>

        {/* Right-side buttons for user actions (Shopping Cart) */}
        <Link
          href="/cart"
          onClick={onAccountClose}
          aria-label="View shopping cart"
          className="flex h-10 w-10 shrink-0 items-center justify-center border transition-[background-color,opacity,transform] hover:opacity-75 active:scale-95"
          style={{
            backgroundColor: "var(--swd-background)",
            borderColor: "var(--swd-border)",
            color: "var(--swd-foreground)",
            borderRadius: "var(--swd-radius-default)",
            transitionDuration: "var(--swd-quick-transition-duration)",
          }}
        >
          <ShoppingCart size={22} strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </header>

      <LeftSidebar isOpen={isMenuOpen} onClose={onMenuClose} />
      <RightSidebar isOpen={isAccountOpen} onClose={onAccountClose} />
    </>
  );
}