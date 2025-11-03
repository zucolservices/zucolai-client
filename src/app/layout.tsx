import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interDisplay = localFont({
  src: [
    { path: "../../public/fonts/Inter/InterDisplay-Thin.ttf", weight: "100", style: "normal" },
    { path: "../../public/fonts/Inter/InterDisplay-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "../../public/fonts/Inter/InterDisplay-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../../public/fonts/Inter/InterDisplay-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "../../public/fonts/Inter/InterDisplay-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Inter/InterDisplay-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../../public/fonts/Inter/InterDisplay-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Inter/InterDisplay-Italic.ttf", weight: "400", style: "italic" },
    { path: "../../public/fonts/Inter/InterDisplay-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Inter/InterDisplay-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../../public/fonts/Inter/InterDisplay-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Inter/InterDisplay-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../../public/fonts/Inter/InterDisplay-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Inter/InterDisplay-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../../public/fonts/Inter/InterDisplay-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../../public/fonts/Inter/InterDisplay-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "../../public/fonts/Inter/InterDisplay-Black.ttf", weight: "900", style: "normal" },
    { path: "../../public/fonts/Inter/InterDisplay-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zucol.ai"),
  title: {
    default: "Zucol AI",
    template: "%s • Zucol AI",
  },
  description:
    "Zucol AI builds production-ready AI solutions: conversational agents, RAG, predictive analytics, and secure deployments designed for adoption.",
  keywords: [
    "Zucol AI",
    "AI services",
    "LLM",
    "RAG",
    "conversational AI",
    "chatbots",
    "computer vision",
    "personalization",
  ],
  applicationName: "Zucol AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://zucol.ai/",
    siteName: "Zucol AI",
    title: "Zucol AI",
    description:
      "AI solutions designed for adoption: voice agents, chatbots, RAG, and predictive analytics.",
    images: [
      { url: "/logos/zucolLogo.png", width: 1200, height: 630, alt: "Zucol AI" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zucolai",
    creator: "@zucolai",
    title: "Zucol AI",
    description:
      "AI solutions designed for adoption: voice agents, chatbots, RAG, and predictive analytics.",
    images: ["/logos/zucolLogo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
