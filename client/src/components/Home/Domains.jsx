import React, { useRef, useLayoutEffect } from 'react'
import { Separator } from '../ui/separator'
import Styles from '@/styles/domains.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../ui/button'

gsap.registerPlugin(ScrollTrigger)

const domains = [
    { style: Styles.cyberBackground, text: 'Cyber Security', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt tenetur error cumque hic natus dolores consequatur eaque aspernatur dolor!", link: "#" },
    { style: Styles.cgBackground, text: 'Computer Graphics', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt tenetur error cumque hic natus dolores consequatur eaque aspernatur dolor!", link: "#" },
    { style: Styles.ssBackground, text: 'System Software', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt tenetur error cumque hic natus dolores consequatur eaque aspernatur dolor!", link: "#" },
    { style: Styles.dsBackground, text: 'Distributed Systems', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt tenetur error cumque hic natus dolores consequatur eaque aspernatur dolor!", link: "#" },
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
            <div className="flex flex-wrap justify-around py-12 px-5 items-center ">
                {domains.map((domain, index) => (
                    <div key={index} className='relative w-56 h-24  mt-7'>

                        <div

                            ref={(ref) => (back.current[index] = ref)}
                            className={`w-56 h-24 overflow-hidden hover:h-[400px] absolute top-0 hover:top-[-200px] hover:z-30  rounded ${domain.style}`}
                        >
                            <div className="py-7 rounded md:w-fit mt-0 px-5 text-xl backdrop-blur-sm bg-black/30">
                                <h2 className=' h-12 w-44 mb-5 ' >
                                    {domain.text}
                                </h2>
                                <div className=' py-4 bg-gray-900/50 rounded ' >
                                    <p className=' text-base'>{domain.description}</p>
                                    <a href={domain.link}  >
                                        <Button className=' mt-4'>
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
