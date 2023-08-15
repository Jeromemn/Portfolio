// import Home from "./page";
// 'use client';
import React from "react";
import StyledComponentsRegistry from "./styles/registry";
import Footer from "./components/Footer";
import Search from "./components/Search";
import SideBar from "./components/SideBar";
// import globals from "./styles/globals";

export const metadata = {
  title: "Home",
  description: "Home page",
  keywords: "home, page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}
        <SideBar />
        <Search />
        <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
