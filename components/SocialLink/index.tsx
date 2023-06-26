import { FC } from "react"
import { SOCIALS } from "../../constants"
import cx from "classnames"
import { getSocialIcon } from "../../helpers/getSocialIcon"

interface ISocialLinkProps {
  social: SOCIALS
}

const SocialLink: FC<ISocialLinkProps> = ({ social }) => {
  const getSocialColour = () => {
    switch (social) {
      case SOCIALS.LINKEDIN:
        return "hover:bg-blue-500"
      case SOCIALS.GITHUB:
        return "hover:bg-slate-500"
      case SOCIALS.EMAIL:
        return "hover:bg-red-500"
      case SOCIALS.WEB:
        return "hover:bg-blue-300"
      default:
        return "hover:bg-blue-300"
    }
  }
  const getSocialLink = () => {
    switch (social) {
      case SOCIALS.LINKEDIN:
        return "https://www.linkedin.com/in/tayler-burke"
      case SOCIALS.GITHUB:
        return "https://github.com/burkle489?tab=repositories"
      default:
        return undefined
    }
  }

  return (
    <div
      className={cx(
        "cursor-pointer lg:cursor-none border-2 h-16 w-16 border-black flex justify-center items-center bg-white rounded-sm transition-all duration-300",
        getSocialColour()
      )}
    >
      <a
        href={getSocialLink()}
        target="_blank"
        className="w-full h-full flex justify-center items-center p-2"
      >
        {getSocialIcon(social)}
      </a>
    </div>
  )
}

export default SocialLink
