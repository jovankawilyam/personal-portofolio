import "./globals.css";


export const metadata = {
  title: "Portfolio Jovanka",
  description:
    "Portfolio of Jovanka Wilyam Muzaki — Frontend Developer, Data Analyst, and Creative Leader from IBIK Bogor.",
  icons: {
    icon: "/image/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
