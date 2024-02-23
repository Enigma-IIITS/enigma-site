import React, { useRef, useLayoutEffect } from 'react'
import { Separator } from '../ui/separator'
import Styles from '@/styles/domains.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../ui/button'

gsap.registerPlugin(ScrollTrigger)

const domains = [
    {
        style: Styles.cyberBackground,
        text: 'Cyber Security',
        description:
            'This domain is a multifaceted discipline that adapts to the evolving digital landscape. It combines advanced technologies and comprehensive strategies. Exploring and protecting your digital world is its vision.',
        link: '/domain',
    },
    {
        style: Styles.cgBackground,
        text: 'Computer Graphics',
        description:
            'Computer Graphics is a fascinating and dynamic field that encompasses a wide range of cross domain projects and applications. This multidisciplinary field leverages GPU acceleration using many advanced techniques.',
        link: '/domain',
    },
    {
        style: Styles.ssBackground,
        text: 'System Software',
        description:
            'System software being the backbone of modern computing,inspires the tech enthusiasts to explore and have hands on experience on developing and optimizing the computer systems like operating systems,utility programs etc.',
        link: '/domain',
    },
    {
        style: Styles.dsBackground,
        text: 'Distributed Systems',
        description:
            'With the advancement in technology becoming more distributed and interconnected,this domain has become crucial. It delves into cloud computing ,network protocols,and blockchain to build more scalable and efficient systems.',
        link: '/domain',
    },
]

const Domains = () => {
    const container = useRef(null)
    const back = useRef([])

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top center',
                    stop: 'top top',
                    scrub: true,
                },
            })

            back.current.forEach((ref) => {
                tl.to(
                    ref,
                    {
                        backgroundPositionY: +0.5,
                        duration: 2,
                        ease: 'Power2.out',
                    },
                    0
                )
            })
        })

        return () => context.revert()
    }, [])

    return (
        <div
            ref={container}
            className="bg-gray-950 py-8 w-screen my-10 text-gray-100 text-center"
        >
            <h1 className="text-3xl my-5">Domains</h1>
            <Separator className="my-5 bg-white/60" />
            <div className="flex flex-wrap justify-around py-12 px-5 items-center max-w-[90%] m-auto min-h-[350px] ">
                {domains.map((domain, index) => (
                    <div
                        key={index}
                        className="relative  h-24 w-[300px] sm:w-[400px] mt-7"
                    >
                        <div
                            ref={(ref) => (back.current[index] = ref)}
                            className={`w-[300px]  sm:w-[400px] flex flex-col items-center h-[100px] overflow-hidden hover:h-[430px] hover:top-[-215px] sm:hover:h-[350px] sm:hover:top-[-175px] absolute top-0 hover:z-30  rounded ${domain.style}`}
                        >
                            <div className="py-7 rounded md:w-fit mt-0 px-5 text-xl backdrop-blur-sm bg-black/30">
                                <h2 className=" h-12 w-44 mb-5  m-auto">
                                    {domain.text}
                                </h2>
                                <div className=" py-4 bg-gray-900/50 rounded ">
                                    <p className=" text-base">
                                        {domain.description}
                                    </p>
                                    <a href={domain.link}>
                                        <Button className=" mt-4">
                                            Know more
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Domains
