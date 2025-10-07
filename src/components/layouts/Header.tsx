'use client';

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

export default function Header() {
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
                <Link href="/overview">
                    <span className="text-white font-medium">Overview</span>
                </Link>
                <Link href="/timeline">
                    <span className="text-white font-medium">Timeline</span>
                </Link>
                <Link href="/mentors">
                    <span className="text-white font-medium">Mentors</span>
                </Link>
                <Link href="/register">
                    <Button
                        hasZoomAnimation={true}
                        variant="primary"
                        size="md"
                        className="bg-white px-5 py-2 text-[#31B675]"
                    >
                        Register
                    </Button>
                </Link>
            </nav>
        </header>
    );
}