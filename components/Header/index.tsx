import Link from "next/link";
import React, { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import SideDrawer from "./Sidedrawer";
import { NAV_LINKS } from "../../constants";
import NavLinks from "./NavLinks";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = ({}) => {
  const [openSidedrawer, setOpenSidedrawer] = useState<boolean>(false);
  return (
    <nav className="fixed top-0 left-0 w-[100vw] bg-[rgba(0,0,0,0.05)] grid grid-cols-12 px-6 items-center h-20">
      <div className="col-span-2 text-left text-4xl">tb.</div>
      <NavLinks />
      <div className="col-span-2 flex justify-end md:hidden">
        {openSidedrawer ? (
          <FontAwesomeIcon
            icon={faClose}
            size="2xl"
            className="cursor-pointer"
            onClick={() => {
              setOpenSidedrawer(false);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            size="2xl"
            className="cursor-pointer"
            onClick={() => {
              setOpenSidedrawer(true);
            }}
          />
        )}
      </div>
      {openSidedrawer && (
        <SideDrawer
          setClose={() => {
            setOpenSidedrawer(false);
          }}
        />
      )}
    </nav>
  );
};

export default Header;
