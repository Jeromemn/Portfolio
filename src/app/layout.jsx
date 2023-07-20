// import Home from "./page";
import React from "react";
import StyledComponentsRegistry from "./styles/registry";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
