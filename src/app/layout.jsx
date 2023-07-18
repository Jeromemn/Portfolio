import Home from "./page";
import StyledComponentsRegistry from "./styles/registry";
import ArtistCover from "./components/artistCover"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    {/* <ArtistCover /> */}
        <Home>

        </Home>
      </body>
    </html>
  );
}
