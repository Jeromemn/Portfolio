// import Home from "./page";
'use client';
import React from "react";
import StyledComponentsRegistry from "./styles/registry";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}
        <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
