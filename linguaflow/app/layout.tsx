import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HeartsProvider } from "@/lib/hearts-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinguaFlow",
  description: "Dil öğrenme uygulaması",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider>
          <HeartsProvider>
            {children}
          </HeartsProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}