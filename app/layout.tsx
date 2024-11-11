import {
  Inter,
  Space_Grotesk,
  Roboto_Mono,
  JetBrains_Mono,
  Work_Sans,
  Source_Code_Pro,
  Inconsolata,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font";
import Script from "next/script";

const inter = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700", "300", "500", "600"],
});

export const metadata: Metadata = {
  title: "Yug Bhanushali",
  description: "Building stuff people want.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "Yug Bhanushali",
    description: "Building stuff people want.",
    url: "https://yugbhanushali.com",
    images: "https://yugbhanushali.com/api/og",
    siteName: "Yug Bhanushali",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yug Bhanushali",
    description: "Building stuff people want..",
    site: "@TheYug03",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistMono.className}>
        <Script
          defer
          src={process.env.ANALYTICS_URL}
          data-website-id={process.env.ANALYTICS}
        ></Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className={`flex flex-col p-5`}>
            <div className="flex justify-center items-center mb-14">
              <Header />
            </div>
            <div className="flex justify-center items-center">{children}</div>
            <div className="mt-10">
              <Footer />
            </div>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
