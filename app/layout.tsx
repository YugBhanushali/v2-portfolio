import type { Metadata } from "next";
import {
  Inter,
  Space_Mono,
  Space_Grotesk,
  Roboto_Mono,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700", "300", "500", "600"],
});

export const metadata: Metadata = {
  title: "Yug Bhanushali",
  description: "Building.....",
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
          // defaultTheme="system"
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
