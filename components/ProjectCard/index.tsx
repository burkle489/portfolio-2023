import { FC } from "react"
import { IProjectCard } from "../../pages/projects"
import Header from "../Header"
import Title from "../Title/Title"
import cx from 'classnames'
import Image from "next/image"
import SocialLink from "../SocialLink"
import { SOCIALS } from "../../constants"

interface IProjectCardProps extends IProjectCard {
    className: string
}

export const ProjectCard: FC<IProjectCardProps> = ({ className, name, logo, description, screenshot, id, tools, github, hostedLink }) => {
    return (
        <div className='bg-white absolute top-1/4 h-1/2 w-full border-2 border-black py-8 px-10 pt-20'>
            <div>
                <Title
                    variant="h2"
                    className={cx(
                        "absolute -top-2 -left-4 rounded-full bg-blue-300 border-2 border-black px-6 py-3 mb-0",

                    )}
                >
                    {name}
                </Title>
                <div className='flex gap-4 absolute top-8 right-10'>
                    <SocialLink social={SOCIALS.GITHUB} url={github} />
                    <SocialLink social={SOCIALS.WEB} url={hostedLink} />
                </div>
                <div className='flex justify-start items-end'>
                    <div
                        className={cx("flex flex-wrap gap-2 text-sm italic")}
                    >
                        {tools?.map((item) => (
                            <span className="rounded-full bg-yellow-200 px-3 py-0.5 whitespace-nowrap border border-black">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                <Image src={screenshot} alt='pokedex-screenshot' className='border-2 border-black relative mt-8' />
                <Image src={logo} alt='pokeball' className='absolute -bottom-20 -right-20 z-10 h-52 w-52' />
            </div>
        </div>
    )
}