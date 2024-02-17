import Image from "next/image"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const people = [
    {
        name: 'Leslie Alexander',
        role: 'Lead',
        imageUrl:
            'https://github.com/shadcn.png',
        description: "Student at IIITS",
        profileLink: "#",
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Lead',
        imageUrl:
            'https://github.com/shadcn.png',
        description: "Student at IIITS",
        profileLink: "#",
    },
    {
        name: 'Leslie Alexander',
        role: 'Domain lead',
        imageUrl:
            'https://github.com/shadcn.png',
        description: "Student at IIITS",
        profileLink: "#",
    },
    {
        name: 'Leslie Alexander',
        role: 'Domain lead',
        imageUrl:
            'https://github.com/shadcn.png',
        description: "Student at IIITS",
        profileLink: "#",
    },
    {
        name: 'Leslie Alexander',
        role: 'Domain lead',
        imageUrl:
            'https://github.com/shadcn.png',
        description: "Student at IIITS",
        profileLink: "#",
    },
    {
        name: 'Leslie Alexander',
        role: 'Domain lead',
        imageUrl:
            'https://github.com/shadcn.png',
        description: "Student at IIITS",
        profileLink: "#",
    },

]

export default function Leads() {
    const container = useRef(null)
    const text = useRef(null)

    useLayoutEffect(() => {

        const context = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    stop: "top top",
                    scrub: true
                }
            })

            if (window.innerWidth >= 768) {

                tl.to(text.current, { y: -250 }, 0)
            }

        })


        return () => context.revert();
    }, [])

    return (
        <div className="my-10 bg-zinc-950 py-24 sm:py-32" ref={container} >
            <div className="mx-auto md:grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 flex flex-col-reverse">
                <ul role="list" className=" grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 ">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className={`flex items-center gap-x-6 m-auto w-fit ${(person.role === "Lead" || person.role === "Co-Lead") ? " rounded pb-4 pr-2 border-e-2 border-b-2 border-gray-500" : " "}`}>

                                <Image className="h-16 w-16 rounded-full" width={64} height={64} src={person.imageUrl} alt="" />
                                <div className=" w-fit" >
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <h3 className=" cursor-pointer text-base font-semibold leading-7 tracking-tight text-cyan-600">{person.name}</h3>
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            <h1>{person.description}</h1>
                                            <a href={person.profileLink} className=" text-sm text-indigo-600" target="_blank" rel="noopener noreferrer">Learn more.</a>
                                        </HoverCardContent>
                                    </HoverCard>
                                    <p className="text-sm font-semibold leading-6 text-indigo-500">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="max-w-2xl md:relative top-[125px] lg:h-full flex items-center justify-center " ref={text} >
                    <div className=" text-center xl:text-left" >

                        <h2 className="text-3xl font-bold tracking-tight text-cyan-500 sm:text-4xl">Meet our leadership</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                            suspendisse.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
