import {
  Inter,
  Space_Mono,
  Space_Grotesk,
  Roboto_Mono,
  JetBrains_Mono,
  Work_Sans,
  Source_Code_Pro,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const inter = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700", "300", "500", "600"],
});

export const metadata: Metadata = {
  title: "Yug Bhanushali",
  description: "Building stuff people want.",
  openGraph: {
    title: "Yug Bhanushali",
    description: "Building stuff people want.",
    url: "https://yugbhanushali.com",
    siteName: "Yug Bhanushali",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yug Bhanushali",
    description:
      "Building innovative solutions and exploring new technologies.",
    site: "@yourtwitterhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className={`flex flex-col p-5 ${inter.className}`}>
            <div className="flex justify-center items-center mb-14">
              <Header />
            </div>
            <div className="flex justify-center items-center">{children}</div>
            <div className="mt-10">
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
