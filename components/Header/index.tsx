import Link from "next/link"
import React, { FC, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import SideDrawer from "./Sidedrawer"
import { NAV_LINKS } from "../../constants"
import NavLinks from "./NavLinks"
import Container from "../Container"

interface IHeaderProps {}

const Header: FC<IHeaderProps> = ({}) => {
  const [openSidedrawer, setOpenSidedrawer] = useState<boolean>(false)
  return (
    <nav>
      <Container
        className="fixed top-0 left-0 w-[100vw] bg-very-light-blue !p-0 !px-6 h-20 border-b-4 border-main-blue z-40"
        innerClassName="w-full h-full grid grid-cols-12 items-center"
      >
        <div className="col-span-2 text-left text-4xl font-display">tb.</div>
        <NavLinks />
        <div className="col-span-2 flex justify-end md:hidden">
          {openSidedrawer ? (
            <FontAwesomeIcon
              icon={faClose}
              size="2xl"
              className="cursor-pointer"
              onClick={() => {
                setOpenSidedrawer(false)
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              size="2xl"
              className="cursor-pointer"
              onClick={() => {
                setOpenSidedrawer(true)
              }}
            />
          )}
        </div>
        {openSidedrawer && (
          <SideDrawer
            setClose={() => {
              setOpenSidedrawer(false)
            }}
          />
        )}
      </Container>
    </nav>
  )
}

export default Header
