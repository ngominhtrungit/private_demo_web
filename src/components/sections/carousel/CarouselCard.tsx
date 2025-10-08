import React from 'react';

interface CarouselCardProps {
    src: string;
    alt: string;
    className?: string;
}

export default function CarouselCard({ src, alt, className = "" }: CarouselCardProps) {
    return (
        <div className={`bg-gradient-to-br from-gray-100 to-gray-200 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 overflow-hidden ${className}`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
}
