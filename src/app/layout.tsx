import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Geist } from "next/font/google"; // New fonts
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Configure new fonts
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "NeuroTech @ UVA — Engineering the Future of the Mind",
    template: "%s | NeuroTech @ UVA",
  },
  description:
    "NeuroTech @ UVA is a research-forward student club at the intersection of neuroscience and engineering at the University of Virginia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(plusJakarta.variable, inter.variable, "font-sans", geist.variable)}>
      <head>
        {/* Removed manual Google Fonts link since we are using next/font/google */}
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
