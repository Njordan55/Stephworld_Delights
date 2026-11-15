"use client";

import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";
import LanguageSelector from "./LanguageSelector";
import Image from "next/image";
import { features } from "@/config/features";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { ShoppingCart, UserRound } from "lucide-react";

type TopNavigationProps = {
  isMenuOpen: boolean;
  isSidebarCollapsed: boolean;
  onSidebarCollapseToggle: () => void;
  isAccountOpen: boolean;
  onMenuToggle: () => void;
  onAccountToggle: () => void;
  onMenuClose: () => void;
  onAccountClose: () => void;
};

export default function TopNavigation({
  isMenuOpen,
  isSidebarCollapsed,
  onSidebarCollapseToggle,
  isAccountOpen,
  onMenuToggle,
  onAccountToggle,
  onMenuClose,
  onAccountClose,
}: TopNavigationProps) {
  const t = useTranslations("Navigation");
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
            isMenuOpen ? t("closeMenu") : t("openMenu")
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
          aria-label="Stephworld Delights"
          className="ml-3 flex min-w-0 flex-1 items-center gap-3"
        >
          {/* Reserved logo area */}
          <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
            <Image
              src="/images/logo/logo.jpeg"
              alt={t("logoAlt")}
              fill
              sizes="(min-width: 640px) 56px, 48px"
              className="object-contain"
            />
          </div>

          {/* Brand name and slogan */}
          <div className="hidden min-w-0 flex-col justify-center sm:flex">
            <span className="truncate text-base font-semibold sm:text-xl">
              Stephworld Delights
            </span>

            <span
              className="mt-1 text-xs italic sm:text-sm"
              style={{ color: "var(--swd-secondary)" }}
            >
              {t("slogan")}
            </span>
          </div>
        </Link>

        <LanguageSelector />

        {/* Right-side buttons for user actions (Account) */}
        <button
          type="button"
          aria-label={
            isAccountOpen ? t("closeAccount") : t("openAccount")
          }
          disabled={!features.accountEnabled}
          title={!features.accountEnabled ? t("accountSoon") : undefined}
          aria-expanded={isAccountOpen}
          aria-controls="right-navigation"
          onClick={isAccountOpen ? onAccountClose : onAccountToggle}
          className="flex h-10 w-10 shrink-0 items-center justify-center border transition-[background-color,opacity,transform] enabled:hover:opacity-75 enabled:active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
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
        {features.cartEnabled ? (
        <Link
          href="/cart"
          onClick={onAccountClose}
          aria-label={t("viewCart")}
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
        ) : (
          <button
            type="button"
            disabled
            aria-label={t("cart")}
            title={t("cartSoon")}
            className="flex h-10 w-10 shrink-0 cursor-not-allowed items-center justify-center border opacity-40"
            style={{
              backgroundColor: "var(--swd-background)",
              borderColor: "var(--swd-border)",
              color: "var(--swd-foreground)",
              borderRadius: "var(--swd-radius-default)",
            }}
          >
            <ShoppingCart size={22} strokeWidth={1.8} aria-hidden="true" />
          </button>
        )}
      </header>

      <LeftSidebar
        isOpen={isMenuOpen}
        isCollapsed={isSidebarCollapsed}
        onCollapseToggle={onSidebarCollapseToggle}
        onClose={onMenuClose}
      />
      {features.accountEnabled && <RightSidebar isOpen={isAccountOpen} onClose={onAccountClose} />}
    </>
  );
}
