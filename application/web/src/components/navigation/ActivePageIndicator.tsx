"use client";

import {usePathname} from "@/i18n/navigation";
import {useTranslations} from "next-intl";

type ActivePageIndicatorProps = {
    isMenuOpen: boolean;
    isAccountMenuOpen: boolean;
};

const pageNames = {
    "/": "home", "/home": "home", "/products": "products",
    "/abouts": "abouts", "/contact": "contact", "/login": "signIn", "/register": "register",
} as const;

export default function ActivePageIndicator({
    isMenuOpen,
    isAccountMenuOpen,
}: ActivePageIndicatorProps) {
    const pathname = usePathname();
    const t = useTranslations("Navigation");
    const indicator = useTranslations("PageIndicator");
    const key = pageNames[pathname as keyof typeof pageNames];
    const pageName = key ? t(key) : indicator("fallback");
    const position = isMenuOpen
        ? "right-85"
        : isAccountMenuOpen
            ? "left-85"
            : "left-1/2 -translate-x-1/2";
            
    return (
        <div
            aria-label={indicator("current", {page: pageName})}
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