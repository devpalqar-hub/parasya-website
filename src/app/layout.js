import { DM_Sans, Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import LoaderWrapper from "@/components/ui/LoaderWrapper";
import FloatingCTA from "@/components/ui/FloatingCTA/FloatingCTA";
import FloatingContact from "@/components/ui/FloatingContact/FloatingContact";
import Script from "next/script";
import { buildMetadata, SITE_URL } from "@/lib/seo";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Palqar",
    template: "%s",
  },
  applicationName: "Palqar",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  ...buildMetadata({
    title: "Palqar",
    description:
      "Palqar builds growth-focused digital experiences through web development, branding, marketing, automation, and business strategy.",
    path: "/",
    keywords: [
      "Palqar",
      "web development",
      "branding",
      "performance marketing",
      "business consulting",
      "digital agency",
    ],
  }),
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${raleway.variable} ${inter.variable}`}
      >
        <LoaderWrapper>
          <Header />
          {children}
          <Footer />
          <FloatingCTA />
          <FloatingContact />
        </LoaderWrapper>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NVTL72KW7M"
          strategy="lazyOnload"
        />
        <Script id="ga-init" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-NVTL72KW7M');`}
        </Script>
      </body>
    </html>
  );
}
