import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding Invitation | Lin Lin Thu & Khine Sabal Tun",
  description:
    "We joyfully invite you to celebrate the wedding of Lin Lin Thu & Khine Sabal Tun on Sunday, 15 November 2026 in Mawlamyine.",
  openGraph: {
    title: "Wedding Invitation | Lin Lin Thu & Khine Sabal Tun",
    description:
      "Join us to celebrate our wedding on Sunday, 15 November 2026 • No(246), KyarInn, Mawlamyine.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-slateBlue-100 selection:text-navy-900">
        {children}
      </body>
    </html>
  );
}
