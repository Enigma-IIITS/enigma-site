import Image from 'next/image'
import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

const person = {
    name: 'Leslie Alexander',
    role: 'CyberSecurity core',
    imageUrl: 'https://github.com/shadcn.png',
    description: 'Student at IIITS',
}

const SmallPerson = ({ name }) => {
    return (
        <div
            className={`flex items-center gap-x-6 m-auto w-fit bg-zinc-950 py-3 px-5 rounded-lg `}
        >
            <Image
                className="h-12 w-12 rounded-full"
                width={64}
                height={64}
                src={person.imageUrl}
                alt=""
            />
            <div className=" w-fit">
                <HoverCard>
                    <HoverCardTrigger>
                        <h3 className=" cursor-pointer text-base font-semibold leading-7 tracking-tight text-cyan-600">
                            {name}
                        </h3>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <h1>{person.description}</h1>
                        <a
                            href={`/people/${name}`}
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
    )
}

export default SmallPerson
