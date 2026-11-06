import "./globals.css";
import { getThemeVariables } from "@/components/layout/ThemeProvider";
import AppShell from "@/components/layout/AppShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stephworld Delights",
  description: "Made with Love",
  icons: {
    icon: {
      url: "/images/logo/logo.jpeg",
      type: "image/jpeg",
    },
    shortcut: "/images/logo/logo.jpeg",
    apple: "/images/logo/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={getThemeVariables()}>
        <body>
            <AppShell>
                {children}
            </AppShell> 
        </body>
    </html>
  );
}