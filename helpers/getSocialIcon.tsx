import Image from "next/image";
import { SOCIALS } from "../constants";
import linkedin from "../public/linkedin-in.svg";
import email from "../public/email.svg";
import github from "../public/github.svg";
import web from "../public/web-icon.svg";
export const getSocialIcon = (social: SOCIALS) => {
  switch (social) {
    case SOCIALS.LINKEDIN:
      return (
        <Image src={linkedin} alt="linkedin logo" width={32} height={32} />
      );
    case SOCIALS.EMAIL:
      return <Image src={email} alt="email logo" width={32} height={32} />;
    case SOCIALS.GITHUB:
      return <Image src={github} alt="linkedin logo" width={32} height={32} />;
    case SOCIALS.WEB:
      return <Image src={web} alt="web logo" width={32} height={32} />;
    default:
      return <div></div>;
  }
};
