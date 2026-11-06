export const defaultTheme = {
  colors: {
    primary: "#525252",
    secondary: "#a3a3a3",
    background: "#ffffff",
    foreground: "#171717",
    surface: "#f5f5f5",
    border: "#e5e5e5",
    overlay: "rgba(0, 0, 0, 0.4)",
    hover: "rgba(0, 0, 0, 0.08)",
    activeNavigation: "#a3a3a3",
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
    sidebarShadow: "0 4px 20px rgba(0, 0, 0, 0.12)",
    borderRadius: "12px",
    blur: "16px",
    quickTransitionDuration: "250ms",
    mediumTransitionDuration: "500ms",
    slowTransitionDuration: "1000ms",
    textTransitionDuration: "250ms",
    delayTransitionDuration: "25ms",
  },

/*   // color test: temporary color palette for testing purposes
  colors: {
    primary: "#B76E79",
    secondary: "#A58A72",
    background: "#FFF8F2",
    foreground: "#3D2B2B",
    surface: "#FCE8E6",
    border: "#D9A7A0",
    overlay: "rgba(61, 43, 43, 0.45)",
    hover: "rgba(183, 110, 121, 0.15)",
    activeNavigation: "#E8B4B8",
},

// spacing: temporary spacing values for testing purposes
spacing: {
  navigationHeight: "112px",
  sidebarWidth: "320px",
},

// effects: temporary effect values for testing purposes
effects: {
  sidebarShadow: "0 4px 20px rgba(0, 0, 0, 0.12)",
  borderRadius: "24px",
  blur: "16px",
  quickTransitionDuration: "250ms",
  mediumTransitionDuration: "800ms",
  slowTransitionDuration: "1000ms",
  textTransitionDuration: "250ms",
  delayTransitionDuration: "25ms",
  }, */

} as const;

export type Theme = typeof defaultTheme;