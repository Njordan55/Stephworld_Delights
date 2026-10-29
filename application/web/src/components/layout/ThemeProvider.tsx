import type { CSSProperties, ReactNode } from "react";
import { defaultTheme } from "@/config/theme-default";

type ThemeVariables = CSSProperties & Record<`--${string}`, string>;

export function getThemeVariables(): ThemeVariables {
  return {
    "--swd-primary": defaultTheme.colors.primary,
    "--swd-secondary": defaultTheme.colors.secondary,
    "--swd-background": defaultTheme.colors.background,
    "--swd-foreground": defaultTheme.colors.foreground,
    "--swd-surface": defaultTheme.colors.surface,
    "--swd-border": defaultTheme.colors.border,
    "--swd-font-base": defaultTheme.typography.fontFamily,
    "--swd-font-size-base": defaultTheme.typography.baseFontSize,
    "--swd-navigation-height": defaultTheme.spacing.navigationHeight,
    "--swd-sidebar-width": defaultTheme.spacing.sidebarWidth,
    "--swd-radius-default": defaultTheme.effects.borderRadius,
    "--swd-blur": defaultTheme.effects.blur,
    "--swd-quick-transition-duration": defaultTheme.effects.quickTransitionDuration,
    "--swd-medium-transition-duration": defaultTheme.effects.mediumTransitionDuration,
    "--swd-slow-transition-duration": defaultTheme.effects.slowTransitionDuration,
    "--swd-text-transition-duration": defaultTheme.effects.textTransitionDuration,
    "--swd-delay-transition-duration": defaultTheme.effects.delayTransitionDuration,
  };
}

export default function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <div style={getThemeVariables()}>{children}</div>;
}