import { JetBrains_Mono, Roboto } from "next/font/google";
import type { ReactNode } from "react";

import "./global.css";

export const metadata = {
  title: "my-portfolio",
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
