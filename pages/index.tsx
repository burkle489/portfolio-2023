import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { NextPage } from "next"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { Featured } from "../components/Featured"
import { PageHeading } from "../components/PageHeading"
import { Stamp } from "../components/Stamp"
import { ABOUT_TIMELINE, PROJECT_CARDS } from "../constants"
import { AppDispatch } from "../store"
import { setMouseHover } from "../store/mouseHoverSlice"

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)
const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js
const useAppDispatch: () => AppDispatch = useDispatch

const Home: NextPage = ({}) => {
  //reset mouse hover state on page change/load
  const dispatch = useAppDispatch()
  dispatch(setMouseHover("standard"))

  const headerRef = useRef(null)

  useEffect(() => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    if (headerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(headerRef.current, { y: -3000 }, { y: 0, duration: 1 })
      }, headerRef)
      return () => ctx.revert()
    }
  }, [])

  return (
    <div className="z-10 relative min-h-[100vh] w-[100vw] flex flex-col justify-center align-center bg-light-beige pb-20">
      <div className="min-h-screen w-full  flex flex-col justify-between md:justify-start">
        <PageHeading
          titleTag="01"
          title="Tayler Burke"
          description="Front-End Developer with 4+ years of industry experience, specialising in React and React-based Frameworks"
        />
        <Stamp />
      </div>
      <div className="flex flex-col gap-40 pb-20">
        <Featured
          {...{
            title: "Featured Project",
            itemName: PROJECT_CARDS[0].name,
            tools: PROJECT_CARDS[0].tools,
            description: PROJECT_CARDS[0].description,
          }}
        />

        <Featured
          {...{
            title: "Current Role",
            titleTag: ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].date,
            itemName: ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].title,
            itemNameSubTitle:
              ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].subtitle,
            tools: ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].tech,
            description: ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].description,
          }}
        />
      </div>
    </div>
  )
}

export default Home
