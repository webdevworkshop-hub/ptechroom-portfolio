import type { Metadata } from "next";
import { Bungee, Cascadia_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header/header";
import AnoAI from "@/components/animated-shader-background";
import SoftBackdrop from "@/components/ui/soft-backdrop";

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
        <div className="absolute top-0 left-0 w-full h-full">
          {" "}
          <AnoAI />
          <SoftBackdrop />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
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
