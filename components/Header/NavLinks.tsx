import Link from "next/link"
import { FC } from "react"
import { NAV_LINKS } from "../../constants"
import cx from "classnames"
import { HoverWrapper } from "../HoverWrapper"

const NavLinks: FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  return (
    <ul
      className={cx("col-span-8 justify-center items-center flex", {
        "flex-col": isMobile,
      })}
    >
      {NAV_LINKS.map((nLink) => (
        <li
          className={cx("px-8 uppercase font-bold", {
            "hidden md:flex": !isMobile,
            "flex md:hidden": isMobile,
          })}
        >
          <HoverWrapper>
            <Link href={nLink.value} className="text-lg">
              {nLink.label}
            </Link>
          </HoverWrapper>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
