import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Jovanka Wilyam | Portfolio",
  description:
    "Portfolio of Jovanka Wilyam Muzaki — Frontend Developer, Data Analyst, and Creative Leader from IBIK Bogor.",
  icons: {
    icon: "/image/logoo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://www.gogletagmanager.com/gtag/js?id=G-ZWXX4977KH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZWXX4977KH');
        `}
      </Script>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;900&family=Exo+2:wght@300;400;500;600;700&family=Audiowide&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
