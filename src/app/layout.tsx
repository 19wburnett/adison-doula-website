import type { Metadata } from "next";
import { Inter, Yaldevi } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const yaldevi = Yaldevi({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-yaldevi",
});

export const metadata: Metadata = {
  title: "Adison - Professional Doula Services",
  description: "Supporting families through their most precious moments with care, compassion, and expertise. Professional doula services for your journey to parenthood.",
  keywords: ["doula", "birth support", "pregnancy", "postpartum", "family support"],
  authors: [{ name: "Adison" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Adison - Professional Doula Services",
    description: "Supporting families through their most precious moments with care, compassion, and expertise.",
    type: "website",
    images: [
      {
        url: "/work/pic1.jpg", // This will be your meta photo
        width: 1200,
        height: 630,
        alt: "Adison - Professional Doula Services",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${yaldevi.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
