import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "隠れ家トータルサロン｜守口・大日",
  description:
    "大阪府守口市・大日エリアの住宅地にある隠れ家���ータルサロン。ジェルネイル（ハンド・フット）、フェイシャル、ボディケア、耳ツボなど。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-neutral-50 text-neutral-900">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}