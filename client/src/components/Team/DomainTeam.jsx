import Image from 'next/image'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PersonCard from '../PersonCard'
gsap.registerPlugin(ScrollTrigger)

const people = [

    {
        name: 'Leslie Alexander',
        role: 'Domain core',
        imageUrl: 'https://github.com/shadcn.png',
        description: 'Student at IIITS',
        profileLink: '#',
    },
    {
        name: 'Leslie Alexander',
        role: 'Domain core',
        imageUrl: 'https://github.com/shadcn.png',
        description: 'Student at IIITS',
        profileLink: '#',
    },
    {
        name: 'Leslie Alexander',
        role: 'Domain core',
        imageUrl: 'https://github.com/shadcn.png',
        description: 'Student at IIITS',
        profileLink: '#',
    },
    {
        name: 'Leslie Alexander',
        role: 'Domain core',
        imageUrl: 'https://github.com/shadcn.png',
        description: 'Student at IIITS',
        profileLink: '#',
    },
]

export default function DomainTeam({ left, DomainName }) {
    const container = useRef(null)
    const text = useRef(null)

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    stop: 'top top',
                    scrub: true,
                },
            })

            if (window.innerWidth >= 768) {
                tl.to(text.current, { y: -250 }, 0)
            }
        })

        return () => context.revert()
    }, [])

    return (
        <div className="my-10 bg-zinc-950 py-20" ref={container}>

            <h1 className="text-2xl font-bold text-center capitalize mb-20 tracking-tight text-cyan-500 sm:text-5xl ">{DomainName}</h1>

            <div className={`mx-auto  max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8  flex flex-col-reverse   ${left ? "md:flex-row-reverse" : "md:flex-row"} justify-around`}>
                <ul
                    role="list"
                    className=" grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 "
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <div
                                className={`flex items-center gap-x-6 m-auto w-fit `}
                            >
                                <Image
                                    className="h-16 w-16 rounded-full"
                                    width={64}
                                    height={64}
                                    src={person.imageUrl}
                                    alt=""
                                />
                                <div className=" w-fit">
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <h3 className=" cursor-pointer text-base font-semibold leading-7 tracking-tight text-cyan-600">
                                                {person.name}
                                            </h3>
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            <h1>{person.description}</h1>
                                            <a
                                                href={person.profileLink}
                                                className=" text-sm text-indigo-600"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Learn more.
                                            </a>
                                        </HoverCardContent>
                                    </HoverCard>
                                    <p className="text-sm font-semibold leading-6 text-indigo-500">
                                        {person.role}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div
                    className="max-w-2xl md:relative top-[125px] lg:h-full flex items-center justify-center "
                    ref={text}
                >
                    <div className=" text-center xl:text-left">
                        <PersonCard imgSrc={'https://github.com/shadcn.png'} name={'Person'} role={'Domain lead'} />

                    </div>
                </div>
            </div>
        </div>
    )
}
