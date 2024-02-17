import Image from 'next/image'
import React from 'react'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Mentor = () => {
    const container = useRef(null)
    const text = useRef(null)
    const text2 = useRef(null)

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
                tl.to(text2.current, { y: -250 }, 0)
            }
        })

        return () => context.revert()
    }, [])

    return (
        <div
            ref={container}
            className="bg-gray-950 py-8 w-screen my-10 text-gray-100 text-center flex md:flex-row flex-col justify-around items-center"
        >
            <h2
                ref={text}
                className="text-3xl md:relative top-[200px] font-bold tracking-tight text-cyan-500 sm:text-4xl max-w-[300px]"
            >
                Meet our Faculty Mentor
            </h2>
            <Image
                src={
                    'https://github.com/Enigma-IIITS/enigma-site/assets/116871732/9544921f-65ce-47e8-9234-d41ac6959d8b'
                }
                width={200}
                height={200}
                alt="mentor"
                className=" rounded-sm"
            />
            <p
                ref={text2}
                className=" md:text-left max-w-[300px] md:relative top-[200px] "
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat beatae odio illo ipsum modi odit, corrupti officiis
                voluptas ullam sequi?
            </p>
        </div>
    )
}

export default Mentor
