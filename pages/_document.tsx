import { Html, Head, Main, NextScript } from "next/document"
import stamp from "../public/stamp.png"

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Tayler Burke - tb.</title>
        <meta property="og:title" content="Tayler Burke Portfolio Website" />
        <meta
          property="og:description"
          content="Welcome to my portfolio showcasing my 4+ years of experience as a React Expert."
        />
      </Head>
      <body>
        <Main />
        <div id="sidedrawer" />
        <div id="contact-modal" />
        <NextScript />
      </body>
    </Html>
  )
}
