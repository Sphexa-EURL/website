import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

// Fonts
const inter = Inter({ subsets: ["latin"] });

// Metadata
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  icons: siteConfig.icons,
};

// Types
interface RootLayoutProps {
  children: React.ReactNode;
}

// Layout
export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background",
          inter.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
