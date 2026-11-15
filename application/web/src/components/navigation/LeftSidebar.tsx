"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Package, Info, Mail, PanelLeftClose, PanelLeftOpen } from "lucide-react";

type LeftSidebarProps = {
  isOpen: boolean;
  isCollapsed: boolean;
  onCollapseToggle: () => void;
  onClose: () => void;
};

const navigationLinks = [
  { label: "Home", href: "/home", icon: House },
  { label: "Products", href: "/products", icon: Package },
  { label: "About Us", href: "/abouts", icon: Info },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function LeftSidebar({
  isOpen,
  isCollapsed,
  onCollapseToggle,
  onClose,
}: LeftSidebarProps) {
  const pathname = usePathname();
  const collapseLabel = isCollapsed ? "Expand sidebar" : "Collapse sidebar";
  const CollapseIcon = isCollapsed ? PanelLeftOpen : PanelLeftClose;

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={onClose}
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: "var(--swd-overlay)" }}
        />
      )}

      <aside
        id="left-navigation"
        aria-label="Main navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed bottom-0 left-0 z-40 overflow-y-auto border-r transition-[width,transform,translate] md:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          boxShadow: "var(--swd-sidebar-shadow)",
          top: "var(--swd-navigation-height)",
          width: isCollapsed
            ? "min(var(--swd-sidebar-collapsed-width), 85vw)"
            : "min(var(--swd-sidebar-width), 85vw)",
          backgroundColor: "var(--swd-surface)",
          borderColor: "var(--swd-border)",
          color: "var(--swd-foreground)",
          transitionDuration: "var(--swd-medium-transition-duration)",
        }}
      >
        <div className={`hidden pt-2 md:flex ${isCollapsed ? "justify-center" : "justify-end px-4"}`}>
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
          aria-label="Primary"
          className={`flex flex-col gap-1 pb-4 pt-2 ${isCollapsed ? "px-1" : "px-4"}`}
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
                aria-label={label}
                title={isCollapsed ? label : undefined}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-12 items-center gap-3 border-l-4 py-3 text-sm font-medium transition-[background-color,opacity,transform] hover:opacity-75 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--swd-primary)] ${
                  isCollapsed ? "justify-center pr-1" : "px-4"
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
                {!isCollapsed && <span className="whitespace-nowrap">{label}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
