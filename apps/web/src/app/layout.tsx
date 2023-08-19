"use client";

import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head />
      <body className="h-full bg-black">
        <Navbar />
        <Provider>
          <>{children}</>
        </Provider>
      </body>
    </html>
  );
}
