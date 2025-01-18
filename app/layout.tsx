import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Calendly } from "@/components/calendly/calendly";
import { CalendlyProvider } from '@/lib/features/calendly/context/CalendlyContext';
import { CalendlyDialog } from '@/lib/features/calendly/components/CalendlyDialog';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Try My Style - GenAI Smart Mirror for Fashion & Beauty",
  description: "Leveraging GenAI to provide personalized and highly realistic Virtual Try-on solutions with our Smart Mirror for experiential brands in Fashion & Beauty.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Remove the manual favicon link since it's handled by metadata */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} id="root"
      >
        <CalendlyProvider>
          {children}
          <CalendlyDialog />
        </CalendlyProvider>
      </body>
    </html>
  );
}
