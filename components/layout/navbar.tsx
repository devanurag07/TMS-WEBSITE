'use client'

import Link from "next/link"
import { useState } from "react"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1400px] z-[2000]">
            <div className="rounded-2xl border border-white/20 shadow-lg shadow-black/10 bg-teal-950">
                <div className="container mx-auto px-4 md:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Link href="/">
                                <div className="text-2xl font-bold text-white">
                                    TryMyStyle
                                </div>
                            </Link>
                        </div>

                        <button
                            className="md:hidden text-white p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>

                        <div className="hidden md:flex items-center space-x-8">
                            <a
                                href="/aboutus"
                                className="text-white/80 hover:text-white transition-colors relative group"
                            >
                                About us
                                <span className="absolute inset-x-0 bottom-[-4px] h-[2px] bg-[#00A5A5] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                            </a>
                            <a
                                href="/smart-mirror"
                                className="text-white/80 hover:text-white transition-colors relative group"
                            >
                                Smart Mirror
                                <span className="absolute inset-x-0 bottom-[-4px] h-[2px] bg-[#00A5A5] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                            </a>
                            <a
                                href="#partners"
                                className="text-white/80 hover:text-white transition-colors relative group"
                            >
                                Partners
                                <span className="absolute inset-x-0 bottom-[-4px] h-[2px] bg-[#00A5A5] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                            </a>
                            <a
                                href="#faq"
                                className="text-white/80 hover:text-white transition-colors relative group"
                            >
                                FAQ
                                <span className="absolute inset-x-0 bottom-[-4px] h-[2px] bg-[#00A5A5] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                            </a>
                            <a
                                href="#contact"
                                className="text-white/80 hover:text-white transition-colors relative group"
                            >
                                Contact Us
                                <span className="absolute inset-x-0 bottom-[-4px] h-[2px] bg-[#00A5A5] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                            </a>
                            <a
                                href="#get-started"
                                className="bg-white border-2 border-teal-950 text-teal-950 px-6 py-2.5 rounded-full hover:bg-teal-950 hover:text-white transition-all duration-300 shadow-lg shadow-[#00A5A5]/20 hover:shadow-[#00A5A5]/40 hover:scale-105"
                            >
                                Try On
                            </a>
                        </div>

                        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 mt-2 flex-col space-y-4 bg-teal-950  rounded-2xl border border-white/20 p-4`}>
                            <a href="/aboutus" className="text-white/80 hover:text-white transition-colors">About us</a>
                            <a href="/smart-mirror" className="text-white/80 hover:text-white transition-colors">Smart Mirror</a>
                            <a href="#partners" className="text-white/80 hover:text-white transition-colors">Partners</a>
                            <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
                            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact Us</a>
                            <a href="#get-started" className="bg-white text-teal-950 px-6 py-2.5 rounded-full text-center hover:bg-teal-950 hover:text-white transition-all duration-300">
                                Try On
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}