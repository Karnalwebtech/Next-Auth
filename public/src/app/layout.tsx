//src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/authProvider";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/modules/layout/header/Header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL!),
  title: {
    default: "Home Secure User Authentication with NextAuth.js in Next.js",
    template: "%s | Karnal Web Tech",
  },
  description:
    "Learn how to implement secure user authentication in Next.js using NextAuth.js. This step-by-step guide covers OAuth providers, JWT authentication, session management, and database integration, ensuring a seamless login experience. Boost your website's security and SEO with optimized authentication techniques.",
  keywords: [
    "NextAuth.js authentication",
    "Next.js sign-in sign-up",
    "OTP verification Next.js",
    "Secure login NextAuth",
    "Password reset Next.js",
    "Logout functionality NextAuth",
    "Two-factor authentication Next.js",
    "Social login NextAuth",
    "Email verification Next.js",
    "User authentication Next.js",
  ],
  openGraph: {
    title: "Secure User Authentication with NextAuth.js in Next.js",
    description:
      "Learn how to implement secure user authentication in Next.js using NextAuth.js. This step-by-step guide covers OAuth providers, JWT authentication, session management, and database integration, ensuring a seamless login experience. Boost your website's security and SEO with optimized authentication techniques.",
    url: process.env.BASE_URL!,
    siteName: "Karnal web tech",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 600,
        alt: "Karnal web tech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KarnalWebTech",
    title: "Secure User Authentication with NextAuth.js in Next.js",
    description:
      "Learn how to implement secure user authentication in Next.js using NextAuth.js. This step-by-step guide covers OAuth providers, JWT authentication, session management, and database integration, ensuring a seamless login experience. Boost your website's security and SEO with optimized authentication techniques.",
    images: ["/logo.webp"],
  },
  robots: "index, follow",
  alternates: {
    canonical: process.env.BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Header/>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
