'use client';

import {useRouter} from 'next/navigation';
import React from 'react';
import SectionTitle from "../components/sections/SectionTittle";
import SectionCarousel from "../components/sections/SectionCarousel";
import SectionRegister from "../components/sections/SectionRegister";

export default function HomePage() {
    const router = useRouter();

    async function handleClick() {
        // call api route
        const response = await fetch('/api/route', {
            method: 'GET',
        });
        const data = await response.json();
        console.log('API Response:', data);
        router.push(`/detail?id=${data}`);
    }

    return (
        <main className="pt-[70px]" style={{
            background: 'linear-gradient(150deg, #45e083 0%,#2586c3 40%, #329854 70%, #329854 100%)'
        }}>
            {/*<h1>Homepage</h1>*/}
            {/*<button onClick={handleClick}>Go to Detail Page</button>*/}

            <div id="overview">
                <SectionTitle />
            </div>
            <div id="highlights">
                <SectionCarousel />
            </div>
            <div id="register">
                <SectionRegister />
            </div>
        </main>
    );
}