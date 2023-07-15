import { FC, ReactNode } from "react"
import Footer from "../Footer"
import Header from "../Header"
import { MouseCursor } from "../MouseCursor"
import Providers from "../Provider"

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <Providers>
      <main
        className={`font-sans text-dark-blue bg-light-beige relative lg:!cursor-none`}
      >
        <Header />
        <MouseCursor />
        {children}
        <Footer />
      </main>
    </Providers>
  )
}

export default Layout
