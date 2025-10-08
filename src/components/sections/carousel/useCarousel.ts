import { useState, useEffect } from 'react';
import { CarouselImage } from './types';

interface UseCarouselProps {
    images: CarouselImage[];
    autoSlideInterval?: number;
}

export function useCarousel({ images, autoSlideInterval = 4000 }: UseCarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, autoSlideInterval);

        return () => clearInterval(interval);
    }, [images.length, autoSlideInterval]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    return {
        currentSlide,
        goToSlide,
        goToPrevious,
        goToNext
    };
}
