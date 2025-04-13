import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "envai - Dijital Dünyada İşletmenizi Büyütün",
  description: "Google Business Profile, web sitesi, sosyal medya yönetimi ve dijital reklam hizmetleriyle yerel işletmenizi büyütün.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="bg-white">
      <body className={`${inter.className} min-h-screen bg-white`}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
