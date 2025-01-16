'use client'

import { useCalendly } from "@/lib/features/calendly/context/CalendlyContext"
import Link from "next/link"
import { useState } from "react"
import TryMyStyleLogo from "@/assets/trymystyle_logo_white_long.png"
import Image from "next/image"
import TryMyStyleLogoWhite from "@/assets/tms.png";
import TryMyStyleOldLogoWhite from "@/assets/tms-white-old-logo.png";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
    const { openCalendly } = useCalendly();

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1400px] z-[2000]">
            <div className="rounded-2xl border border-white/20 shadow-lg shadow-black/10 bg-teal-950">
                <div className="container mx-auto px-4 md:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Link href="/">
                                <div className="text-2xl font-bold text-white">
                                    <Image src={TryMyStyleLogo} alt="Try My Style Logo" width={200} height={100}
                                        className="w-[140px] md:w-[200px]"
                                    />
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
                            <div className="relative group">
                                <button
                                    className="text-white/80 hover:text-white transition-colors relative group flex items-center gap-1"
                                    onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                                    onMouseEnter={() => setIsProductsDropdownOpen(true)}
                                >
                                    Products
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span className="absolute inset-x-0 bottom-[-4px] h-[2px] bg-[#00A5A5] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                                </button>

                                {isProductsDropdownOpen && (
                                    <div
                                        className="absolute top-full left-0 mt-2 w-96 bg-teal-950 rounded-lg border border-white/20 shadow-lg"
                                        onMouseLeave={() => setIsProductsDropdownOpen(false)}
                                    >
                                        <a href="/smart-mirror" className="block px-6 py-3.5 text-white/80 hover:text-white hover:bg-teal-900 rounded-t-lg">
                                            <div className="flex gap-2">

                                                <div className="link flex items-center justify-center">
                                                    Smart Mirror For Hair Salons
                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <Image src={TryMyStyleOldLogoWhite} alt="Try My Style Logo" width={32} height={32}
                                                        className="w-[32px] md:w-[32px]"
                                                    />
                                                </div>
                                            </div>

                                        </a>
                                        <a href="/#" className="block px-6 py-3.5 text-white/80 hover:text-white hover:bg-teal-900">
                                            Try-on for Jewellery Stores <span className="text-white/60 text-sm">(Coming Soon)</span>
                                        </a>
                                        <a href="/#" className="block px-6 py-3.5 text-white/80 hover:text-white hover:bg-teal-900 rounded-b-lg">
                                            Apparel Try-on <span className="text-white/60 text-sm">(Coming Soon)</span>
                                        </a>
                                    </div>
                                )}
                            </div>
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
                                onClick={() => openCalendly?.()}
                            >

                                Try On
                            </a>
                        </div>

                        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 mt-2 flex-col space-y-4 bg-teal-950 rounded-2xl border border-white/20 p-4`}>
                            <a href="/aboutus" className="text-white/80 hover:text-white transition-colors">About us</a>
                            <div className="space-y-2">
                                <button
                                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                                    className="text-white/80 hover:text-white transition-colors w-full text-left flex items-center justify-between"
                                >
                                    Products
                                    <svg className={`w-4 h-4 transform transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`${isMobileProductsOpen ? 'flex flex-col space-y-2 pl-4' : 'hidden'}`}>
                                    <a href="/smart-mirror" className="text-white/80 hover:text-white transition-colors block">
                                        Smart Mirror for Hair Salons
                                    </a>
                                    <a href="#" className="text-white/80 hover:text-white transition-colors block">
                                        Try-on for Jewellery Stores <span className="text-white/60 text-sm">(Coming Soon)</span>
                                    </a>
                                    <a href="#" className="text-white/80 hover:text-white transition-colors block">
                                        Apparel Try-on <span className="text-white/60 text-sm">(Coming Soon)</span>
                                    </a>
                                </div>
                            </div>
                            <a href="#faqpos" className="text-white/80 hover:text-white transition-colors">FAQ</a>
                            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact Us</a>
                            <a onClick={() => openCalendly?.()} href="#get-started" className="bg-white text-teal-950 px-6 py-2.5 rounded-full text-center hover:bg-teal-950 hover:text-white transition-all duration-300">
                                Try On
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}