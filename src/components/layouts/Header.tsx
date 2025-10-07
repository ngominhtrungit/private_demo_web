'use client';

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

export default function Header() {
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
    };

    return (
        <header
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-center px-8 py-2 bg-gradient-to-r from-blue-600 to-green-600"
            style={{
                background: 'linear-gradient(90deg, #1366B3 0%, #31B675 100%)'
            }}
        >
            <div className="flex items-center gap-2 mr-12">
                <Link href="/" className="cursor-pointer">
                    <Image
                        src="/vp-bank.png"
                        alt="VPBank logo"
                        width={110}
                        height={28}
                        priority
                    />
                </Link>
                <Image
                    src="/pue.png"
                    alt="AWS logo"
                    width={110}
                    height={28}

                />
            </div>
            <nav className="flex items-center gap-8">
                <button onClick={() => scrollToSection('overview')}>
                    <span className="text-white font-medium">Overview</span>
                </button>
                <button onClick={() => scrollToSection('highlights')}>
                    <span className="text-white font-medium">Highlights</span>
                </button>
                <Button
                    hasZoomAnimation={true}
                    variant="primary"
                    size="md"
                    className="bg-white px-5 py-2 text-[#31B675]"
                    onClick={() => scrollToSection('register')}
                >
                    Register
                </Button>
            </nav>
        </header>
    );
}