import Link from "next/link"
import React, { FC, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import SideDrawer from "./Sidedrawer"
import { NAV_LINKS } from "../../constants"
import NavLinks from "./NavLinks"
import Container from "../Container"
import { ActiveHoverWrapper } from "../MouseWrappers/ActiveHoverWrapper"
const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js

interface IHeaderProps {
  handleScrollToBottom: () => void
}

const Header: FC<IHeaderProps> = ({ handleScrollToBottom }) => {
  const [openSidedrawer, setOpenSidedrawer] = useState<boolean>(false)
  return (
    <nav>
      <Container
        className="fixed top-0 left-0 w-[100vw] bg-light-beige !p-0 !px-6 h-20 border-b-4 border-dark-blue z-40"
        innerClassName="w-full h-full grid grid-cols-12 items-center"
      >
        <div
          className="col-span-2 text-left text-4xl font-display"
          onClick={() => {
            if (isBrowser()) {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          }}
        >
          <ActiveHoverWrapper>tb.</ActiveHoverWrapper>
        </div>
        <NavLinks />
        <div className="col-span-2 flex justify-end items-center">
          <div
            onClick={handleScrollToBottom}
            className="mr-8 md:mr-0 font-bold uppercase text-dark-blue h-full cursor-pointer md:cursor-none"
          >
            <ActiveHoverWrapper>Contact</ActiveHoverWrapper>
          </div>
          <div className="md:hidden">
            {openSidedrawer ? (
              <FontAwesomeIcon
                icon={faClose}
                size="2xl"
                className="cursor-pointer lg:cursor-none"
                onClick={() => {
                  setOpenSidedrawer(false)
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                size="2xl"
                className="cursor-pointer lg:cursor-none"
                onClick={() => {
                  setOpenSidedrawer(true)
                }}
              />
            )}
          </div>
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
