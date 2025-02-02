import { LoginForm } from "@/modules/components/auth/login-form";
import { Logo } from "@/modules/layout/header/logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL!),
  title: {
    default: "SignIn Secure User Authentication with NextAuth.js in Next.js",
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

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center justify-center w-full">
          <Logo />
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
