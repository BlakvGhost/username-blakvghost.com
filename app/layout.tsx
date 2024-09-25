import "@/app/styles/globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { incognito } from "./assets/font/font";
import { gitlabmono } from "./assets/font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Kabirou ALASSANE | Software Developer",
  description:
    "Kabirou ALASSANE is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open source communities",
  url: "https://victoreke.com",
  ogImage:
    "https://lh3.googleusercontent.com/pw/AP1GczNzFIPF4cw7n_15CgUvPDE1Qz13r3-2s0Evdv1Q9CnRvik0GzYPziW4wlPnkdjD5UK16cNEMevncIoQgI1JhnZWen5mHV2bKTWAyje5QVzsK4HZ8Jgtb1jbqiqzHZ0ljCzxcvCHUrx-Ikp2vgw_OsE0WQ=w270-h599-s-no-gm",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "victoreke.com",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  other: {
    "google-site-verification": "IzcWMgn5Qjf-LCtA337KTGjivsf9bmod_1pZ-jxYQh8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
    </html>
  );
}
