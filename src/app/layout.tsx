import "./globals.css"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zeta-26 Core Router",
  description: "Relic Ring Protocol Multi-Hop Optimization Routing System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <head>
        {/* NUCLEAR OPTION: Forces Tailwind to load regardless of local config */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>

      <body>{children}</body>
    </html>
  );
}