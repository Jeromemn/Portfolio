// import Home from "./page";
import React from "react";
// import localFont from 'next/font/local'
import StyledComponentsRegistry from "./styles/registry";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import { youTubeDark, youTubeSans } from "./styles/setFonts";
import { Roboto } from "next/font/google"

export const roboto = Roboto({
  subsets: ['latin-ext'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto-mono',
})

export const metadata = {
  title: "Home",
  description: "Home page",
  keywords: "home, page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={roboto.className}>
        <StyledComponentsRegistry className={roboto.className}>{children}
        <SideBar />
        <Search />
        <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
