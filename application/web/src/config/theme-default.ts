export const defaultTheme = {
  colors: {
    primary: "#525252",
    secondary: "#a3a3a3",
    background: "#ffffff",
    foreground: "#171717",
    surface: "#f5f5f5",
    border: "#e5e5e5",
  },

  typography: {
    fontFamily: "Arial, sans-serif",
    baseFontSize: "16px",
  },

  spacing: {
    navigationHeight: "96px",
    sidebarWidth: "280px",
  },

  effects: {
    borderRadius: "12px",
    blur: "16px",
    quickTransitionDuration: "250ms",
    mediumTransitionDuration: "500ms",
    slowTransitionDuration: "1000ms",
    textTransitionDuration: "250ms",
    delayTransitionDuration: "25ms",
  },
} as const;

export type Theme = typeof defaultTheme;