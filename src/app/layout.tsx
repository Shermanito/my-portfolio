import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

const HERO_IMAGE_URL =
  "https://sherm.online/sherman-roberts-web-developer-marketing-automation.jpg";
const HERO_IMAGE_ALT =
  "Sherman Roberts - Web Developer & Marketing Automation Specialist";
const PAGE_TITLE =
  "Sherman Roberts | Web Developer & Marketing Automation Specialist";
const PAGE_DESCRIPTION =
  "Sherman Roberts is a Web Developer & Marketing Automation Specialist turning website traffic into booked leads with custom web design, local SEO dominance, and automated client acquisition.";
const OG_DESCRIPTION =
  "Turning website traffic into booked leads with high-performing web design, local SEO dominance, and automated client acquisition.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sherm.online"),
  title: {
    default: PAGE_TITLE,
    template: "%s | Sherman Roberts",
  },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Sherman Roberts",
    "Web Developer",
    "Marketing Automation Specialist",
    "Local SEO Dominance",
    "Client Acquisition",
    "High-Performing Web Design",
    "GHL Automation",
    "sherm.online",
  ],
  authors: [{ name: "Sherman Roberts", url: "https://sherm.online" }],
  creator: "Sherman Roberts",
  publisher: "Sherman Roberts",
  alternates: {
    canonical: "https://sherm.online/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://sherm.online/",
    siteName: "sherm.online",
    title: PAGE_TITLE,
    description: OG_DESCRIPTION,
    firstName: "Sherman",
    lastName: "Roberts",
    username: "sherman-roberts",
    gender: "male",
    images: [
      {
        url: HERO_IMAGE_URL,
        width: 1200,
        height: 900,
        alt: HERO_IMAGE_ALT,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: HERO_IMAGE_URL,
        alt: HERO_IMAGE_ALT,
      },
    ],
    creator: "@shermanroberts",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/sherm-online.png",
    apple: "/sherm-online.png",
  },
};

// JSON-LD @graph for SEO/AEO/GEO
// Connects WebSite + ProfilePage + Person + ProfessionalService into a single structured graph
const graphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://sherm.online/#website",
      url: "https://sherm.online",
      name: "sherm.online",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://sherm.online/#profilepage",
      url: "https://sherm.online",
      name: PAGE_TITLE,
      isPartOf: { "@id": "https://sherm.online/#website" },
      mainEntity: { "@id": "https://sherm.online/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://sherm.online/#person",
      name: "Sherman Roberts",
      url: "https://sherm.online",
      image: HERO_IMAGE_URL,
      jobTitle: "Web Developer & Marketing Automation Specialist",
      description:
        "Sherman Roberts is a Web Developer & Marketing Automation Specialist specializing in high-performing web design, local SEO dominance, and automated client acquisition systems.",
      knowsAbout: [
        "Web Development",
        "Marketing Automation",
        "Local SEO Dominance",
        "Client Acquisition",
        "HighLevel Automation",
        "Google Business Profile Optimization",
        "Review & Reputation Automation",
      ],
      sameAs: [
        "https://www.linkedin.com/in/sherman-roberts/",
        "https://github.com/Shermanito",
        "https://dribbble.com/ShermanR",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://sherm.online/#service",
      name: "Sherman Roberts Digital Solutions",
      url: "https://sherm.online",
      founder: { "@id": "https://sherm.online/#person" },
      areaServed: "Global",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Growth Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "High-Performing Web Design",
              description:
                "Custom web application and site development designed to convert visitors into booked leads.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Local SEO Dominance",
              description:
                "Search engine optimization and Google Business Profile management to rank local businesses at the top of organic search.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automated Client Acquisition",
              description:
                "End-to-end sales funnel automation, review generation, and client messaging pipelines using HighLevel.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-80Y4PH967K" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-80Y4PH967K');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem("theme");
                  if (!theme) {
                    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                  }
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* JSON-LD @graph for SEO/AEO/GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(graphJsonLd),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      ><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
