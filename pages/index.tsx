import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { CopyToClipboardBtn } from "../components/CopyToClipboardBtn"
import Header from "../components/Header"
import cx from "classnames"
import HomePageLink from "../components/HomePageLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faL } from "@fortawesome/free-solid-svg-icons"
import linkedin from "../public/linkedin-in.svg"
import { SOCIALS } from "../constants"
import SocialLink from "../components/SocialLink"
import ContactModal from "../components/ContactModal"

const firstName = ["T", "A", "Y", "L", "E", "R"]
const lastName = ["B", "U", "R", "K", "E"]

const Home: NextPage = () => {
  const [isHoveringMiddle, setIsHoveringMiddle] = useState<boolean>(false)
  const [isHoveringProjects, setIsHoveringProjects] = useState<boolean>(false)
  const [isHoveringAbout, setIsHoveringAbout] = useState<boolean>(false)
  const [isHoveringContact, setIsHoveringContact] = useState<boolean>(false)
  const [isHoveringSocials, setIsHoveringSocials] = useState<boolean>(false)
  const [openContact, setOpenContact] = useState<boolean>(false)

  return (
    <div
      className={cx(
        "flex min-h-screen flex-col items-center justify-center bg-white transition-colors duration-500 ",
        { "bg-blue-300": isHoveringSocials }
      )}
    >
      <Head>
        <title>tburke.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={cx(
          "flex justify-center items-center flex-col h-[100vh] w-[100vw] p-[10%]"
        )}
      >
        <HomePageLink
          text="projects"
          pageHref="/projects"
          setIsHovering={setIsHoveringProjects}
          className={cx(
            "absolute top-[10%] border-collapse hover:top-0 hover:left-0 hover:bg-yellow-300 hover:w-[calc(20%+(80%/1.5))] hover:h-[calc(20%+(80%/3))] transition-all duration-500 left-[10%] w-[calc(80%/1.5)] h-[calc(80%/3)]  border-4 border-b-black border-r-0 border-t-0 border-l-0 flex justify-center items-center",
            {
              "!h-[20%] !w-[60%]": isHoveringMiddle,
              "!h-[calc(((80%/1.5)-10%)-(80%/3))] !left-0 !w-[calc(20%+(80%/1.5))]":
                isHoveringAbout,
              "!w-[calc((80%/3)+20%)] !h-[calc(((80%/1.5)-10%)-(80%/3))] !top-[10%] !left-[calc(-20%+(80%/3))]":
                isHoveringContact,
              // "!left-[calc(-20%+(80%/3))] !w-[calc((80%/3)+20%)] !h-[calc((20%+(80%/1.5))-(80%/3))] !top-0":
              //   isHoveringSocials,
            }
          )}
        />
        <HomePageLink
          text="about"
          pageHref="/about"
          setIsHovering={setIsHoveringAbout}
          className={cx(
            "absolute top-[calc(10%+(80%/3))] left-[10%] w-[calc(80%/3)] h-[calc(80%/1.5)] hover:h-[calc(20%+(80%/1.5))] hover:w-[calc(20%+(80%/3))] hover:top-[calc(100%-(20%+(80%/1.5)))] hover:left-0 transition-all duration-500 border-4 border-t-0 border-r-black border-b-0 border-l-0 flex justify-center items-center hover:bg-orange-300",
            {
              "!w-[20%] top-[30%] !h-[60%]": isHoveringMiddle,
              "!left-0 !w-[calc(20%+(80%/3))] !top-[calc(20%+(80%/3))] h-[calc((80%/1.5)-10%)]":
                isHoveringProjects,
              "!left-[calc(-20%+(80%/3))] !h-[calc(20%+(80%/1.5))] !top-[calc(100%-(20%+(80%/1.5)))] w-[20%]":
                isHoveringContact,
              // "!h-[calc((80%/3)+20%)] !w-[calc(((80%/1.5)-10%)-(80%/3))] top-[calc((20%+(80%/1.5))-(80%/3))]":
              //   isHoveringSocials,
            }
          )}
        />
        <div
          className={cx(
            "absolute top-[calc(10%+(80%/3))] left-[calc(10%+(80%/3))] transition-all duration-500 border-0 flex flex-col justify-center items-center w-[calc(80%/3)] h-[calc(80%/3)] bg-black hover:bg-green-300",
            {
              "!w-[40%] !h-[40%] !top-[30%] !left-[30%]": isHoveringMiddle,
              "!left-[calc(20%+(80%/3))] !top-[calc(20%+(80%/3))]":
                isHoveringProjects,
              "!left-[calc(20%+(80%/3))] !top-[calc((80%/3))]": isHoveringAbout,
              "!left-[calc((80%/3))]  !top-[calc((80%/3))]": isHoveringContact,
              // "!left-[calc((80%/3))] !top-[calc(20%+(80%/3))]":
              //   isHoveringSocials,
            }
          )}
          onMouseEnter={() => {
            setIsHoveringMiddle(true)
          }}
          onMouseLeave={() => {
            setIsHoveringMiddle(false)
          }}
        >
          {isHoveringMiddle ? (
            <>
              <div className="h-[30%] grid grid-cols-6 w-full items-center">
                {firstName.map((letter) => (
                  <p className="col-span-1 text-9xl flex justify-center items-center">
                    {letter}
                  </p>
                ))}
              </div>
              <div className="rounded-full bg-black px-6 py-2 h-[15%] items-center w-[90%] justify-center grid grid-cols-7">
                <h3 className="text-3xl text-white col-start-3 flex justify-center items-center">
                  WEB
                </h3>
                <div className="bg-white h-3 w-3 rounded-full col-start-4 flex justify-self-center"></div>
                <h3 className="text-3xl text-white flex justify-center items-center">
                  DEV
                </h3>
              </div>
              <div className="h-[30%] grid grid-cols-5 w-full  items-center ">
                {lastName.map((letter) => (
                  <p className="col-span-1 text-9xl flex justify-center items-center">
                    {letter}
                  </p>
                ))}
              </div>
            </>
          ) : (
            <div className=" w-full h-full flex justify-center items-center">
              <p className={cx("text-white text-9xl", {})}>tb.</p>
            </div>
          )}
        </div>
        <HomePageLink
          setIsHovering={setIsHoveringSocials}
          className={cx(
            "absolute bottom-[calc(10%+(80%/3))] right-[10%] w-[calc(80%/3)] h-[calc(80%/1.5)] transition-all duration-500 border-4 border-b-0  border-l-black border-t-0 border-r-0 flex flex-col justify-center items-center",
            {
              "!w-[20%] bottom-[30%] !h-[60%]": isHoveringMiddle,
              "!right-[calc(-20%+(80%/3))] !h-[calc(20%+(80%/1.5))] !bottom-[calc(100%-(20%+(80%/1.5)))] w-[20%]":
                isHoveringProjects,
              "!h-[calc((80%/3)+20%)] !w-[calc(((80%/1.5)-10%)-(80%/3))] bottom-[calc((20%+(80%/1.5))-(80%/3))]":
                isHoveringAbout,
              "!right-0 !w-[calc(20%+(80%/3))] !bottom-[calc(20%+(80%/3))] h-[calc((80%/1.5)-10%)]":
                isHoveringContact,
              // "": isHoveringSocials,
            }
          )}
          innerClassName="gap-6"
        >
          <SocialLink social={SOCIALS.LINKEDIN} />
          <SocialLink social={SOCIALS.GITHUB} />
        </HomePageLink>
        <div
          onClick={() => {
            setOpenContact(true)
          }}
          onMouseEnter={() => {
            setIsHoveringContact(true)
          }}
          onMouseLeave={() => {
            setIsHoveringContact(false)
          }}
          className={cx(
            "cursor-pointer absolute bottom-[10%] right-[10%] w-[calc(80%/1.5)] h-[calc(80%/3)] hover:w-[calc(20%+(80%/1.5))] hover:h-[calc(20%+(80%/3))] hover:bottom-0 hover:right-0 border-4 transition-all duration-500 border-t-black border-l-0 border-b-0 border-r-0 flex justify-center items-center hover:bg-red-300",
            {
              "!h-[20%] !w-[60%]": isHoveringMiddle,
              "!w-[calc((80%/3)+20%)] !h-[calc(((80%/1.5)-10%)-(80%/3))] !bottom-[10%] !right-[calc(-20%+(80%/3))]":
                isHoveringProjects,
              "!right-[calc(-20%+(80%/3))] !w-[calc((80%/3)+20%)] !h-[calc((20%+(80%/1.5))-(80%/3))] !bottom-0":
                isHoveringAbout,
              // "!h-[calc(((80%/1.5)-10%)-(80%/3))] !right-0 !w-[calc(20%+(80%/1.5))]":
              //   isHoveringSocials,
            }
          )}
        >
          <h2 className="text-3xl">CONTACT</h2>
        </div>
        {openContact && (
          <ContactModal
            setClose={() => {
              setOpenContact(false)
            }}
          />
        )}
      </main>
    </div>
  )
}

export default Home
