'use client';

import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 70; // Adjust this value based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false); // Close mobile menu after clicking
    };

    return (
        <header
            className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-2 md:py-3 flex"
            style={{
                background: 'linear-gradient(90deg, #1366B3 0%, #31B675 100%)'
            }}
        >
            <div className="max-w-7xl mx-auto flex md:justify-center justify-between w-full">
                {/* Logo Section */}
                <div className="flex items-center gap-2 md:gap-4 mr-12">
                    <Link href="/" className="cursor-pointer">
                        <Image
                            src="/vp-bank.png"
                            alt="VPBank logo"
                            width={80}
                            height={20}
                            className="md:w-[110px] md:h-[28px]"
                            priority
                        />
                    </Link>
                    <Image
                        src="/pue.png"
                        alt="AWS logo"
                        width={80}
                        height={20}
                        className="md:w-[110px] md:h-[28px]"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    <button onClick={() => scrollToSection('overview')}>
                        <span className="text-white font-medium hover:text-gray-200 transition-colors">Overview</span>
                    </button>
                    <button onClick={() => scrollToSection('highlights')}>
                        <span className="text-white font-medium hover:text-gray-200 transition-colors">Highlights</span>
                    </button>
                    <Button
                        hasZoomAnimation={true}
                        variant="primary"
                        size="md"
                        className="bg-white px-4 lg:px-5 py-2 text-[#31B675] hover:bg-gray-100 transition-colors"
                        onClick={() => scrollToSection('register')}
                    >
                        Register
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
                    <nav className="flex flex-col p-4 space-y-3">
                        <button
                            onClick={() => scrollToSection('overview')}
                            className="text-gray-800 font-medium py-2 text-left hover:text-[#31B675] transition-colors"
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => scrollToSection('highlights')}
                            className="text-gray-800 font-medium py-2 text-left hover:text-[#31B675] transition-colors"
                        >
                            Highlights
                        </button>
                        <Button
                            hasZoomAnimation={true}
                            variant="primary"
                            size="sm"
                            className="bg-white text-[#31B675] px-4 py-2 mt-2"
                            onClick={() => scrollToSection('register')}
                        >
                            Register
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}