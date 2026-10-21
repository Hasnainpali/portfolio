
import "./globals.css";
import { siteConfig } from "../lib/site-config";

const siteUrl = siteConfig.url;
const siteTitle = "Hasnain Iqbal | React Frontend Developer";
const siteDescription =
  "Explore the portfolio of Hasnain Iqbal, a React Frontend Developer focused on responsive interfaces, reusable components, REST API integration, and modern web applications.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Hasnain Iqbal",
  },
  description: siteDescription,
  applicationName: "Hasnain Iqbal Portfolio",
  keywords: [
    "Hasnain Iqbal",
    "Hasnain Pali",
    "React Frontend Developer",
    "Frontend Developer in Pakistan",
    "React.js Developer Portfolio",
    "Next.js Developer",
    "JavaScript Developer",
    "Redux Toolkit",
    "Responsive Web Development",
    "REST API Integration",
  ],
  authors: [{ name: "Hasnain Iqbal", url: siteUrl }],
  creator: "Hasnain Iqbal",
  publisher: "Hasnain Iqbal",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Hasnain Iqbal Portfolio",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/icon/favicon.png",
        width: 512,
        height: 512,
        alt: "Hasnain Iqbal — React Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/icon/favicon.png"],
  },
  icons: {
    icon: [{ url: "/icon/favicon.png", type: "image/png" }],
    shortcut: "/icon/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hasnain Iqbal",
  alternateName: "Hasnain Pali",
  url: siteUrl,
  jobTitle: "React Frontend Developer",
  description: siteDescription,
  knowsAbout: [
    "React",
    "Next.js",
    "JavaScript",
    "Redux Toolkit",
    "Responsive Web Design",
    "REST API Integration",
  ],
  sameAs: [
    "https://linkedin.com/in/hasnain-frontend-developer/",
    "https://github.com/Hasnainpali",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hasnain Iqbal Portfolio",
  url: siteUrl,
  description: siteDescription,
  inLanguage: "en",
  author: { "@type": "Person", name: "Hasnain Iqbal", url: siteUrl },
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
