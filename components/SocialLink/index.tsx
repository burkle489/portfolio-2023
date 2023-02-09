import { FC } from "react";
import { SOCIALS } from "../../constants";
import cx from "classnames";
import { getSocialIcon } from "../../helpers/getSocialIcon";

interface ISocialLinkProps {
  social: SOCIALS;
}

const SocialLink: FC<ISocialLinkProps> = ({ social }) => {
  const getSocialColour = () => {
    switch (social) {
      case SOCIALS.LINKEDIN:
        return "hover:bg-blue-500";
      case SOCIALS.GITHUB:
        return "hover:bg-slate-500";
      case SOCIALS.EMAIL:
        return "hover:bg-red-500";
      default:
        return "hover:bg-primary-blue-300";
    }
  };
  return (
    <div
      className={cx(
        "cursor-pointer border-2 h-16 w-16 border-black flex justify-center items-center p-2 bg-white rounded-sm transition-all duration-300",
        getSocialColour()
      )}
    >
      {getSocialIcon(social)}
    </div>
  );
};

export default SocialLink;
