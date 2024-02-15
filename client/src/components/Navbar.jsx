'use client'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const [solidNav, SetsolidNav] = useState(false)

    const handleNavOpen = () => {
        if (isOpen) {
            setIsOpen(false)
            if (solidNav && window.scrollY < 200) {
                SetsolidNav(false)
            }
        } else {
            setIsOpen(true)
            if (!solidNav) {
                SetsolidNav(true)
            }
        }
    }

    const router = useRouter()

    const alternav = () => {
        if (window.scrollY >= 200) {
            SetsolidNav(true)
        } else {
            SetsolidNav(false)
        }
    }

    useEffect(() => {
        if (pathname === '/') {
            window.addEventListener('scroll', alternav)
        } else {
            SetsolidNav(true)
        }

        console.log(pathname)
    }, [pathname])

    return (
        <header
            className={`fixed z-10 text-xl transition duration-500 w-screen py-4 top-0 left-0 flex justify-center items-center ${solidNav ? 'backdrop-blur-sm bg-zinc-950/50' : ' bg-transparent'}   ${isOpen ? 'h-fit py-10' : 'h-16'}`}
        >
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div
                    className={`flex items-center justify-between ${isOpen ? 'flex-col' : 'md:flex md:items-center md:gap-12'}`}
                >
                    <div className={`flex-1 md:flex md:items-center md:gap-12 ${isOpen ? "absolute top-9 left-7 " : ""} `}>
                        <a className="block text-white " href="#">
                            <Image
                                src="https://github.com/Enigma-IIITS/enigma-site/assets/116871732/c72bc255-b90b-45f6-b980-b7b451d6465c"
                                alt="logo"
                                width={50}
                                height={50}
                            />
                        </a>
                    </div>

                    <div
                        className={`${isOpen ? 'w-full mt-4 flex flex-col items-center justify-between' : 'md:flex md:items-center md:gap-12'} md:min-w-[40%]`}
                    >
                        <nav
                            aria-label="Global"
                            className={`${isOpen ? 'block' : 'hidden md:block'} md:w-full`}
                        >
                            <ul
                                className={`${isOpen ? 'flex flex-col items-center gap-6 text-sm' : 'flex flex-row items-center gap-6 text-sm md:flex-row'} md:w-full md:flex md:justify-between`}
                            >
                                <li>
                                    <a
                                        className="text-gray-300 hover:text-gray-400/75 transition "
                                        href="#"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-300 hover:text-gray-400/75 transition "
                                        href="#"
                                    >
                                        Domain
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-300 hover:text-gray-400/75 transition "
                                        href="#"
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-300 hover:text-gray-400/75 transition "
                                        href="#"
                                    >
                                        Team
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-300 hover:text-gray-400/75 transition "
                                        href="#"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div
                            className={`flex items-center gap-4 w-fit ${isOpen ? 'absolute top-10 right-7 ' : ' '} md:hidden`}
                        >
                            <div className="block ">
                                <Button onClick={handleNavOpen}>
                                    <span className="material-symbols-outlined">
                                        {isOpen ? 'close' : 'menu'}
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
