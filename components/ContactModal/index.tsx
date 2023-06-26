import { FC } from "react"
import ClientOnlyPortal from "../ClientOnlyPortal"

interface IContactModalProps {
  setClose: () => void
}

const ContactModal: FC<IContactModalProps> = ({ setClose }) => {
  return (
    <ClientOnlyPortal selector="#contact-modal">
      <div
        className={`absolute top-0 left-0 w-screen h-screen flex justify-center items-center font-sans`}
      >
        <div
          className="bg-black opacity-50 absolute top-0 left-0 w-screen h-screen z-10"
          onClick={() => {
            setClose()
          }}
        />
        <div className=" z-20 bg-white max-w-[500px] w-4/5 border-4 border-black p-8">
          <form
            action="https://getform.io/f/12632ee0-cc16-47b0-9051-ea09c6034c33"
            method="POST"
            className="w-full h-full flex flex-col"
          >
            <input
              className="border-2 border-black py-3 px-4 mb-4"
              type="text"
              name="name"
              placeholder="Name..."
            />
            <textarea
              className="border-2 border-black py-3 px-4 resize-none h-40 mb-6"
              name="message"
              placeholder="Message..."
            />
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="border-2 border-black py-2 px-4 w-40 hover:bg-blue-300 transition-all duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </ClientOnlyPortal>
  )
}

export default ContactModal
