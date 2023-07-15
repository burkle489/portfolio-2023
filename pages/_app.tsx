import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { MouseCursor } from "../components/MouseCursor"
import Providers from "../components/Provider"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { MutableRefObject, useRef } from "react"

config.autoAddCss = false
// pages/_app.js

function MyApp({ Component, pageProps }: AppProps) {
  const scrollRef: MutableRefObject<any> = useRef(null)
  const handleScroll = () => {
    if (scrollRef && scrollRef.current) {
      window.scrollTo({
        top: scrollRef.current.clientHeight,
        behavior: "smooth",
      })
    }
  }
  return (
    <Providers>
      <main
        ref={scrollRef}
        className={`bg-light-beige font-sans text-dark-blue relative lg:!cursor-none mb-[602px] md:mb-[500px]`}
      >
        <Header handleScrollToBottom={handleScroll} />
        <MouseCursor />
        <Component {...pageProps} />
        <Footer />
      </main>
    </Providers>
  )
}

export default MyApp
