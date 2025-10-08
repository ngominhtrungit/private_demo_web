'use client';

import React from 'react';
import CarouselHeader from './carousel/CarouselHeader';
import CarouselBackground from './carousel/CarouselBackground';
import CarouselDisplay from './carousel/CarouselDisplay';
import CarouselNavigation from './carousel/CarouselNavigation';
import VideoSection from './carousel/VideoSection';
import { useCarousel } from './carousel/useCarousel';
import { CarouselImage } from './carousel/types';

export default function SectionCarousel() {
    // Sample images for carousel - you can replace with your actual images
    const carouselImages: CarouselImage[] = [
        { src: '/f329.png', alt: 'VPBank Technology' },
        { src: '/f332.jpg', alt: 'PUE Partnership' },
        { src: '/f335.jpg', alt: 'Hackathon Cloud' },
        { src: '/f335.jpg', alt: 'Hackathon Cloud' },
    ];

    const { currentSlide, goToSlide, goToPrevious, goToNext } = useCarousel({
        images: carouselImages,
        autoSlideInterval: 4000
    });

    return (
        <div className="overflow-hidden">
            {/* Neon glow effects */}
            <CarouselBackground />

            <CarouselHeader />

            {/* Modern Carousel Section */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8 pt-8 pb-4">
                <CarouselDisplay images={carouselImages} currentSlide={currentSlide} />

                <CarouselNavigation
                    currentSlide={currentSlide}
                    totalSlides={carouselImages.length}
                    onGoToSlide={goToSlide}
                    onGoToPrevious={goToPrevious}
                    onGoToNext={goToNext}
                />
            </div>

            {/* YouTube Video Section */}
            <VideoSection />
        </div>
    );
}
