import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Space_Grotesk } from "@next/font/google";
config.autoAddCss = false;
// pages/_app.js

// If loading a variable font, you don't need to specify the font weight
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${spaceGrotesk.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
