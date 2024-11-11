import { ReactNode } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { defaultMetadata } from "@/libs/Metadata";

import "@/styles/sass/global.scss";
import Header from "@/components/Header";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}