"use client";

import { usePathname } from "next/navigation";

type ActivePageIndicatorProps = {
    isMenuOpen: boolean;
    isAccountMenuOpen: boolean;
};

const pageNames: Record<string, string> = {
    "/": "Home",
    "/products": "Products",
    "/about": "About Us",
    "/contact": "Contact",
    "/login": "Sign In",
    "/register": "Create Account",
};

export default function ActivePageIndicator({
    isMenuOpen,
    isAccountMenuOpen,
}: ActivePageIndicatorProps) {
    const pathname = usePathname();
    const pageName = pageNames[pathname] ?? "page";
    const position = isMenuOpen
        ? "right-85"
        : isAccountMenuOpen
            ? "left-85"
            : "left-1/2 -translate-x-1/2";
            
    return (
        <div
            aria-label={`Current page: ${pageName}`}
            className={`pointer-events-none fixed z-50 flex h-10 items-center justify-center border border-t-0 px-6 text-sm font-medium shadow-sm ${position}`}
            style={{
                top: "var(--swd-navigation-height)",
                backgroundColor: "var(--swd-surface)",
                borderColor: "var(--swd-border)",
                color: "var(--swd-foreground)",
                borderRadius: "var(--swd-border-radius)",
                transitionDuration: "var(--swd-slow-transition-duration)",
            }}
        >
            {pageName}
        </div>
    );
}