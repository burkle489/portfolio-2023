import Link from "next/link"
import { FC } from "react"
import { NAV_LINKS } from "../../constants"
import cx from "classnames"
import { HoverWrapper } from "../HoverWrapper"

const NavLinks: FC<{ isMobile?: boolean; closeDrawer?: () => void }> = ({
  isMobile = false,
  closeDrawer,
}) => {
  return (
    <ul
      className={cx(
        "col-span-8 justify-center items-center flex text-main-blue",
        {
          "flex-col": isMobile,
        }
      )}
    >
      {NAV_LINKS.map((nLink, index) => (
        <li
          className={cx("px-8 uppercase font-bold", {
            "hidden md:flex": !isMobile,
            "flex md:hidden py-12 w-full": isMobile,
          })}
          onClick={closeDrawer}
        >
          <HoverWrapper>
            <Link
              href={nLink.value}
              className={cx("lg:cursor-none text-lg", {
                "!text-5xl xs:!text-6xl": isMobile,
              })}
            >
              {nLink.label}
            </Link>
            {isMobile && (
              <span className="mr-1 font-semibold">{`0${index + 1}`}</span>
            )}
          </HoverWrapper>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
