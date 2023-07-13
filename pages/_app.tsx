import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { MouseCursor } from "../components/MouseCursor"
import Providers from "../components/Provider"
import Header from "../components/Header"

config.autoAddCss = false
// pages/_app.js

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <main
        className={`font-sans text-dark-blue bg-light-beige relative lg:!cursor-none`}
      >
        <Header />

        <MouseCursor />
        <Component {...pageProps} />
      </main>
    </Providers>
  )
}

export default MyApp
