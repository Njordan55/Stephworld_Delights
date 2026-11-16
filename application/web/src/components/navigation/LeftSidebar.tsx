"use client";

import {Link, usePathname} from "@/i18n/navigation";
import {useTranslations} from "next-intl";
import { House, Package, Info, Mail, PanelLeftClose, PanelLeftOpen } from "lucide-react";

type LeftSidebarProps = {
  isViewportReady: boolean;
  isOpen: boolean;
  isCollapsed: boolean;
  onCollapseToggle: () => void;
  onClose: () => void;
};

const navigationLinks = [
  { label: "home", href: "/home", icon: House },
  { label: "products", href: "/products", icon: Package },
  { label: "abouts", href: "/abouts", icon: Info },
  { label: "contact", href: "/contact", icon: Mail },
] as const;

export default function LeftSidebar({
  isViewportReady,
  isOpen,
  isCollapsed,
  onCollapseToggle,
  onClose,
}: LeftSidebarProps) {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const collapseLabel = isCollapsed ? t("expand") : t("collapse");
  const CollapseIcon = isCollapsed ? PanelLeftOpen : PanelLeftClose;

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label={t("closeMenu")}
          onClick={onClose}
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: "var(--swd-overlay)" }}
        />
      )}

      <aside
        id="left-navigation"
        aria-label={t("main")}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed bottom-0 left-0 z-40 w-[min(var(--swd-sidebar-width),85vw)] overflow-y-auto border-r md:w-[var(--swd-sidebar-collapsed-width)] lg:w-[var(--swd-sidebar-width)] transition-[width,transform,translate] md:shadow-none ${
          isOpen ? "translate-x-0" : isViewportReady ? "-translate-x-full" : "-translate-x-full md:translate-x-0"
        }`}
        style={{
          boxShadow: "var(--swd-sidebar-shadow)",
          top: "var(--swd-navigation-height)",
          width: !isViewportReady ? undefined : isCollapsed
            ? "min(var(--swd-sidebar-collapsed-width), 85vw)"
            : "min(var(--swd-sidebar-width), 85vw)",
          backgroundColor: "var(--swd-surface)",
          borderColor: "var(--swd-border)",
          color: "var(--swd-foreground)",
          transitionDuration: "var(--swd-medium-transition-duration)",
        }}
      >
        <div className={`hidden pt-2 md:flex ${!isViewportReady ? "justify-center lg:justify-end lg:px-4" : isCollapsed ? "justify-center" : "justify-end px-4"}`}>
          <button
            type="button"
            aria-label={collapseLabel}
            title={collapseLabel}
            aria-expanded={!isCollapsed}
            aria-controls="primary-navigation"
            onClick={onCollapseToggle}
            className="flex h-9 w-9 shrink-0 items-center justify-center border transition-[background-color,opacity] hover:bg-[var(--swd-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--swd-primary)]"
            style={{
              borderColor: "var(--swd-border)",
              borderRadius: "var(--swd-radius-default)",
              transitionDuration: "var(--swd-quick-transition-duration)",
            }}
          >
            <CollapseIcon size={20} aria-hidden="true" />
          </button>
        </div>
        <nav
          id="primary-navigation"
          aria-label={t("primary")}
          className={`flex flex-col gap-1 pb-4 pt-2 ${!isViewportReady ? "px-1 lg:px-4" : isCollapsed ? "px-1" : "px-4"}`}
        >
          {navigationLinks.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                onClick={() => {
                  if (!window.matchMedia("(min-width: 768px)").matches) {
                    onClose();
                  }
                }}
                aria-label={t(label)}
                title={isCollapsed ? t(label) : undefined}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-12 items-center gap-3 border-l-4 py-3 text-sm font-medium transition-[background-color,opacity,transform] hover:opacity-75 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--swd-primary)] ${
                  !isViewportReady ? "justify-center pr-1 lg:justify-start lg:px-4" : isCollapsed ? "justify-center pr-1" : "px-4"
                }`}
                style={{
                  borderRadius: "var(--swd-radius-default)",
                  backgroundColor: isActive ? "var(--swd-active-navigation)" : "transparent",
                  borderLeftColor: isActive ? "var(--swd-primary)" : "transparent",
                  color: "var(--swd-foreground)",
                  transitionDuration: "var(--swd-quick-transition-duration)",
                }}
              >
                <Icon size={20} className="shrink-0" aria-hidden="true" />
                {!isCollapsed && <span className={`whitespace-nowrap ${!isViewportReady ? "hidden lg:inline" : ""}`}>{t(label)}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
