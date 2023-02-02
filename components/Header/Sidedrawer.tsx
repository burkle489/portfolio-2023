import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import ClientOnlyPortal from "../ClientOnlyPortal";
import NavLinks from "./NavLinks";

interface ISideDrawerProps {
  setClose: () => void;
}

const SideDrawer: FC<ISideDrawerProps> = ({ setClose }) => {
  const autoClose = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (autoClose) {
      setClose();
    }
  }, [autoClose]);
  return (
    <ClientOnlyPortal selector="#sidedrawer">
      <div className="w-[100vw] absolute top-0 left-0 h-[100vh] bg-slate-300 flex flex-col">
        <div className="w-full h-20 flex justify-end items-center px-6">
          <FontAwesomeIcon
            icon={faClose}
            size="2xl"
            className="cursor-pointer"
            onClick={setClose}
          />
        </div>
        <div className="w-full">
          <NavLinks isMobile />
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default SideDrawer;
