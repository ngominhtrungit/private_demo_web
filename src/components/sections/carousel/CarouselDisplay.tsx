import React from 'react';
import CarouselCard from './CarouselCard';

interface CarouselImage {
    src: string;
    alt: string;
}

interface CarouselDisplayProps {
    images: CarouselImage[];
    currentSlide: number;
}

export default function CarouselDisplay({ images, currentSlide }: CarouselDisplayProps) {
    // Helper function to get image for side cards
    const getPrevImage = () => {
        return images[(currentSlide - 1 + images.length) % images.length];
    };

    const getNextImage = () => {
        return images[(currentSlide + 1) % images.length];
    };

    return (
        <div className="relative w-full max-w-6xl flex items-center justify-center">
            {/* Left Side Card (Behind) - Hidden on mobile */}
            <div className="hidden lg:block absolute left-8 lg:left-16 z-10 transform -rotate-12 scale-90 opacity-60">
                <CarouselCard
                    src={getPrevImage().src}
                    alt={getPrevImage().alt}
                    className="w-66 h-70"
                />
            </div>

            {/* Central Main Card */}
            <div className="relative z-20 mx-auto">
                <CarouselCard
                    src={images[currentSlide].src}
                    alt={images[currentSlide].alt}
                    className="w-72 sm:w-80 lg:w-96 h-80 sm:h-86 lg:h-[28rem] border-white/40 transition-all duration-700"
                />
            </div>

            {/* Right Side Card (Behind) - Hidden on mobile */}
            <div className="hidden lg:block absolute right-8 lg:right-16 z-10 transform rotate-12 scale-90 opacity-60">
                <CarouselCard
                    src={getNextImage().src}
                    alt={getNextImage().alt}
                    className="w-66 h-70"
                />
            </div>
        </div>
    );
}
