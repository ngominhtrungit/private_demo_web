import React from 'react';

interface CarouselNavigationProps {
    currentSlide: number;
    totalSlides: number;
    onGoToSlide: (index: number) => void;
    onGoToPrevious: () => void;
    onGoToNext: () => void;
}

export default function CarouselNavigation({
    currentSlide,
    totalSlides,
    onGoToSlide,
    onGoToPrevious,
    onGoToNext
}: CarouselNavigationProps) {
    return (
        <>
            {/* Mobile Navigation Arrows */}
            <button
                onClick={onGoToPrevious}
                className="lg:hidden absolute left-2 z-30 bg-white/20 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={onGoToNext}
                className="lg:hidden absolute right-2 z-30 bg-white/20 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Navigation Dots */}
            <div className="relative z-30 flex justify-center pb-8 pt-4">
                <div className="flex space-x-3 bg-white/10 backdrop-blur-lg rounded-full px-4 md:px-6 py-2 md:py-3 border border-white/20 shadow-xl">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => onGoToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === currentSlide
                                    ? 'w-6 md:w-8 h-2 md:h-3 bg-white shadow-lg'
                                    : 'w-2 md:w-3 h-2 md:h-3 bg-white/40 hover:bg-white/60'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
