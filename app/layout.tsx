import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

const sans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "25salon｜守口・大日",
  description:
    "大阪府守口市・大日エリアの住宅地にある隠れ家トータルサロン。ジェルネイル（ハンド・フット）、フェイシャル、ボディケア、耳ツボなど。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${sans.variable} ${serif.variable} min-h-screen bg-neutral-50 text-neutral-900`}
      >
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-10 pb-24 md:pb-10">
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}