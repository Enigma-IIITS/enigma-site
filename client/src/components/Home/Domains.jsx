import React, { useRef, useLayoutEffect } from 'react'
import { Separator } from '../ui/separator'
import Styles from '@/styles/domains.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
            <div className="flex flex-wrap justify-around py-12 px-5 items-center">
                {[
                    { style: Styles.cyberBackground, text: 'Cyber Security' },
                    { style: Styles.cgBackground, text: 'Computer Graphics' },
                    { style: Styles.ssBackground, text: 'System Software' },
                    { style: Styles.dsBackground, text: 'Distributed Systems' },
                ].map((domain, index) => (
                    <div
                        key={index}
                        ref={(ref) => (back.current[index] = ref)}
                        className={`w-fit h-fit rounded ${domain.style} mt-7`}
                    >
                        <a href="#">
                            <div className="py-7 rounded md:w-fit mt-0 px-5 text-xl backdrop-blur-sm bg-black/30">
                                {domain.text}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Domains
