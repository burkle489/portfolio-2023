import { Formik } from "formik"
import { FC, useEffect, useRef } from "react"
import ReactTextareaAutosize from "react-textarea-autosize"
import { ActiveHoverWrapper } from "../MouseWrappers/ActiveHoverWrapper"
import gsap from "gsap"
import { useForm } from "@formspree/react"

const Footer: FC = () => {
  const footerRef = useRef(null)
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM as any)

  useEffect(() => {
    if (!footerRef || !footerRef.current) return
    const ctx = gsap.context(() => {
      gsap.timeline().to(footerRef.current, {
        yPercent: 100,
        opacity: 1,
        // duration: 1,
        scrollTrigger: {
          trigger: "html",
          pin: true,
          scrub: 1.5,
          start: "bottom bottom",
          //   end: "+=500",
          invalidateOnRefresh: true,
        },
      })
    }, footerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={footerRef}
      className="h-[602px] md:h-[500px] z-0 fixed bottom-0 -translate-y-[602px] md:-translate-y-[500px] opacity-0  py-12 px-6 md:px-12 border-dark-blue border-t-2 w-full bg-main-blue "
    >
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full bottom-0 flex items-center gap-12 md:gap-32 flex-col-reverse md:flex-row ">
          <div className="flex-1 w-full md:w-auto">
            <Formik
              initialValues={{ name: "", message: "" }}
              validate={(values) => {
                const errors: any = {}
                if (!values.name) {
                  errors.name = "Required"
                }
                if (!values.message) {
                  errors.message = "Required"
                }

                return errors
              }}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 text-light-beige"
                >
                  <ActiveHoverWrapper>
                    <div className="relative flex flex-col mb-4">
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder="Name"
                        className="md:cursor-none outline-none text-light-beige py-3 px-1 text-xl bg-transparent border-b-2 border-light-beige placeholder:text-light-beige placeholder:opacity-50"
                      />
                      <span className="absolute top-full mt-0.5 right-0 text-red-500 font-bold">
                        {errors.name && touched.name && errors.name}
                      </span>
                    </div>
                  </ActiveHoverWrapper>
                  <ActiveHoverWrapper>
                    <div className="relative flex flex-col mb-4">
                      <ReactTextareaAutosize
                        maxRows={8}
                        rows={1}
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        placeholder="Message"
                        className="md:cursor-none outline-none text-light-beige py-3 px-1 text-xl bg-transparent border-b-2 border-light-beige placeholder:text-light-beige placeholder:opacity-50"
                      />
                      <span className="absolute top-full mt-0.5 right-0 text-red-500 font-bold">
                        {errors.message && touched.message && errors.message}
                      </span>
                    </div>
                  </ActiveHoverWrapper>
                  <ActiveHoverWrapper className="w-fit">
                    <button
                      className="bg-light-beige hover:bg-beige hover:text-main-blue transition-all duration-300 mt-6 py-3 px-8 w-fit text-dark-blue uppercase font-bold text-lg md:cursor-none"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </ActiveHoverWrapper>
                  {state.succeeded && (
                    <p className="text-light-beige">
                      Thanks for getting in touch, I will reply as soon as I
                      can!
                    </p>
                  )}
                </form>
              )}
            </Formik>
          </div>

          <div className="md:flex-1 h-full text-light-beige items-center justify-center">
            <div className="w-full h-full flex justify-center flex-col items-center gap-8 md:gap-0">
              <div className="md:mt-16 h-1/2 w-full text-5xl text-light-beige flex items-center justify-center">
                tb.
              </div>
              <div className="h-1/2 w-full flex gap-2 flex-col items-center md:items-end justify-end">
                <div className="flex gap-4">
                  <a
                    href={"https://github.com/burkle489"}
                    className="uppercase underline underline-offset-4 font-bold lg:cursor-none hover:scale-[1.15] transition-all duration-300"
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    <ActiveHoverWrapper>github</ActiveHoverWrapper>
                  </a>
                  <a
                    href={"https://www.linkedin.com/in/tayler-burke/"}
                    className="uppercase underline underline-offset-4 font-bold lg:cursor-none hover:scale-[1.15] transition-all duration-300"
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    <ActiveHoverWrapper>Linkedin</ActiveHoverWrapper>
                  </a>
                </div>
                <a
                  href="mailto:tayler@tburke.dev"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="underline"
                >
                  tayler@tburke.dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
