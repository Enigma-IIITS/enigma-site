'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import styles from '@/styles/home.module.css'
import { Separator } from '@/components/ui/separator'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Leads from '@/components/Home/Leads'
import MyTimeline from '@/components/Home/MyTimeline'
import Domains from '@/components/Home/Domains'
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    target: ref1.current,
                    start: 'top 10%',
                    stop: 'bottom top',
                    scrub: true,
                },
            })

            tl.to(ref2.current, { y: 250 }, 0)

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ref3.current,
                    start: 'top center',
                    stop: 'top top',
                    scrub: true,
                },
            })

            if (window.innerWidth >= 768) {
                tl2.to(ref4.current, { y: -200 }, 0)
            }
        })

        return () => context.revert()
    }, [])

    return (
        <main className="md:flex min-h-screen flex-col items-center justify-evenly ">
            <div className={styles.welcome}>
                <div
                    ref={ref1}
                    className="  bg-grey/5 w-screen h-screen flex justify-center items-center"
                >
                    <div className="mx-auto max-w-2xl ">
                        <div
                            ref={ref2}
                            className="text-center backdrop-blur-sm bg-white/30  py-5 rounded"
                        >
                            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                                Unravel the field of Computer science with
                                ENIGMA
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-950  ">
                                We are a team of tech enthusiasts
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                ref={ref3}
                className=" w-full min-h-[400px] text-center flex flex-col justify-around my-10 bg-zinc-950 "
            >
                <h1 className=" text-3xl  my-5">About</h1>
                <Separator className="  my-5 bg-white/60 " />
                <div className="flex justify-around items-center flex-wrap-reverse mx-10  my-5">
                    <p className=" md:text-left my-5 md:w-2/4">
                        "ENIGMA" stands as the preeminent technical club at the
                        esteemed Indian Institute of Information Technology
                        (IIIT), committed to advancing technology through
                        tangible, hands-on projects. Within ENIGMA, we believe
                        in the transformative potential of practical
                        application, focusing on Computer Graphics,
                        Cybersecurity, Distributed Systems, and System Software.
                        ENIGMA's core philosophy centers on the synergy of
                        theoretical understanding and hands-on innovation for
                        genuine technological progress. As a nurturing ground
                        for expertise, we cultivate a culture deeply rooted in
                        continuous exploration. Our pursuits span various
                        technological dimensions, addressing visual
                        representation, cybersecurity, and overcoming challenges
                        in distributed systems. Additionally, we dedicate
                        ourselves to the meticulous refinement of system
                        software.
                    </p>

                    <Image
                        src={
                            'https://github.com/Enigma-IIITS/enigma-site/assets/116871732/c2735b9c-157e-42b5-8c5d-6acb3acebe80'
                        }
                        alt="abt"
                        width={350}
                        height={350}
                        className="rounded md:relative top-[100px]"
                        ref={ref4}
                    />
                </div>
            </div>
            <MyTimeline />
            <Domains />

            <Leads />
        </main>
    )
}
