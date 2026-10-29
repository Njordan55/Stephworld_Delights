"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LeftSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navigationLinks = [
  { label: "Home", href: "/home" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/abouts" },
  { label: "Contact", href: "/contact" },
];

export default function LeftSidebar({
  isOpen,
  onClose,
}: LeftSidebarProps) {
    const pathname = usePathname();
  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => {
            if (!window.matchMedia("(min-width: 1024px)").matches) {
            onClose();
          }
        }}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        id="left-navigation"
        aria-label="Main navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed bottom-0 left-0 top-[var(--swd-navigation-height)] z-40 overflow-y-auto border-r shadow-xl transition-transform lg:top-0 lg:shadow-none ${
            isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          top: "0px",
          width: "min(var(--swd-sidebar-width), 85vw)",
          backgroundColor: "var(--swd-surface)",
          borderColor: "var(--swd-border)",
          color: "var(--swd-foreground)",
          transitionDuration: "var(--swd-medium-transition-duration)",
        }}
      >
        <div className="flex justify-end px-4 pt-2">
  <button
    type="button"
    aria-label="Close navigation menu"
    onClick={onClose}
    className="absolute right-3 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-md text-lg hover:opacity-60"
    style={{
      color: "var(--swd-foreground)",
    }}
  >
    ×
  </button>
</div>
<nav
  aria-label="Primary"
  className="flex flex-col gap-1 px-4 pb-4 pt-2"
>
  {navigationLinks.map((link) => {
    const isActive =
      link.href === "/"
        ? pathname === "/"
        : pathname === link.href ||
          pathname.startsWith(`${link.href}/`);

    return (
      <Link
        key={link.href}
        href={link.href}
        onClick={() => {
          if (!window.matchMedia("(min-width: 1024px)").matches) {
            onClose();
          }
        }}
        aria-current={isActive ? "page" : undefined}
        className="flex min-h-12 items-center rounded-lg border-l-4 px-4 py-3 font-medium transition-[background-color,opacity,transform] hover:opacity-75 active:scale-[0.98]"
        style={{
          backgroundColor: isActive
            ? "var(--swd-secondary)"
            : "transparent",
          borderLeftColor: isActive
            ? "var(--swd-primary)"
            : "transparent",
          color: "var(--swd-foreground)",
          transitionDuration: "var(--swd-quick-transition-duration)",
        }}
      >
        {link.label}
      </Link>
    );
  })}
</nav>
      </aside>
    </>
  );
}