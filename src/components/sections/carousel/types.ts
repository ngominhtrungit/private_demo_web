export interface CarouselImage {
    src: string;
    alt: string;
}

export interface CarouselProps {
    images?: CarouselImage[];
    autoSlideInterval?: number;
}
