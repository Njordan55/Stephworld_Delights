import "./globals.css";
import { getThemeVariables } from "@/components/layout/ThemeProvider";
import AppShell from "@/components/layout/AppShell";

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