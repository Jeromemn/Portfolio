import localFont from "next/font/local";

const youTubeDark = localFont({
  src: [
    {
      path: "./YouTubeSansDarkBlack.otf",
      variable: "--YTDark-Black",
      display: "swap",
      // weight: '900',
      // fallback: ['system-ui', 'arial']
      // style: 'normal',
    },
  ],
});

const youTubeSans = localFont({
  src: [
    {
      path: "/YouTubeSansBlack.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "/YouTubeSansBold.otf",
      weight: "400",
      style: "normal",
      variable: "--YTbold",
    },
  ],
});

const youTubeSansDarkBold = localFont({
  src: [
    {
      path: "/YouTubeSansDarkExtrabold.otf",
      // weight: "800",
      style: "normal",
    },
  ],
});

export { youTubeDark, youTubeSans, youTubeSansDarkBold };
