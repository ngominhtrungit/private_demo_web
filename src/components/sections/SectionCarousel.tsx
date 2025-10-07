'use client';

import React, { useState, useEffect } from 'react';

export default function SectionCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Sample images for carousel - you can replace with your actual images
    const carouselImages = [
        { src: '/f329.png', alt: 'VPBank Technology' },
        { src: '/f332.jpg', alt: 'PUE Partnership' },
        { src: '/f335.jpg', alt: 'Hackathon Cloud' },
        { src: '/f335.jpg', alt: 'Hackathon Cloud' },
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [carouselImages.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    // Helper function to get image for side cards
    const getPrevImage = () => {
        return carouselImages[(currentSlide - 1 + carouselImages.length) % carouselImages.length];
    };

    const getNextImage = () => {
        return carouselImages[(currentSlide + 1) % carouselImages.length];
    };

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Neon glow effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-2xl"></div>
            </div>

            <div className="bg-gradient-to-r py-2 text-center">
                <h1 className="font-orbitron text-outline text-shadow-outline text-[48px] font-bold text-green-50">
                    VPBank Technology Hackathon<br />
                    2025 Highlights
                </h1>
            </div>

            {/* Modern Carousel Section */}
            <div className="relative z-10 flex items-center justify-center px-8 pt-8 pb-4">
                <div className="relative w-full max-w-6xl flex items-center justify-center">

                    {/* Left Side Card (Behind) */}
                    <div className="absolute left-8 lg:left-16 z-10 transform -rotate-12 scale-90 opacity-60">
                        <div className="w-66 h-70 bg-gradient-to-br from-gray-100 to-gray-200 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
                            <img
                                src={getPrevImage().src}
                                alt={getPrevImage().alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Central Main Card */}
                    <div className="relative z-20 mx-auto">
                        <div className="w-80 lg:w-96 h-86 lg:h-[28rem] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl border border-white/40 overflow-hidden transition-all duration-700">
                            <img
                                src={carouselImages[currentSlide].src}
                                alt={carouselImages[currentSlide].alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side Card (Behind) */}
                    <div className="absolute right-8 lg:right-16 z-10 transform rotate-12 scale-90 opacity-60">
                        <div className="w-66 h-70 bg-gradient-to-br from-gray-100 to-gray-200 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
                            <img
                                src={getNextImage().src}
                                alt={getNextImage().alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="relative z-30 flex justify-center pb-8">
                <div className="flex space-x-3 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 shadow-xl">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === currentSlide
                                    ? 'w-8 h-3 bg-white shadow-lg'
                                    : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* YouTube Video Section */}
            <div className="relative z-10 flex justify-center pb-16">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-2 border border-white/20 shadow-2xl">
                    <iframe
                        width="600"
                        height="400"
                        src="https://www.youtube.com/embed/H7zyhAGILos?list=RDH7zyhAGILos"
                        title="Bản Tình Ca Cô Đơn - Lâm Chí Huyền (Guitar Solo)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-2xl shadow-xl">
                    </iframe>
                </div>
            </div>
        </div>
    );
}
