import type { Metadata } from "next";
import { Bungee, Cascadia_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header/header";

const CascadiaCode = Cascadia_Code({
  variable: "--font-body",
  subsets: ["latin"],
});

const BungeeFont = Bungee({
  weight: "400",
  variable: "--font-title",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PTechRoom | Portfolio",
  description: "Portfolio of Pratim Bera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${CascadiaCode.variable} ${BungeeFont.variable} antialiased`}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
