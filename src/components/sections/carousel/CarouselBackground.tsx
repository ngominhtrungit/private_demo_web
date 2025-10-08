import React from 'react';

export default function CarouselBackground() {
    return (
        <div className="absolute inset-0">
            <div className="absolute top-20 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-72 md:h-72 bg-indigo-500/10 rounded-full blur-2xl"></div>
        </div>
    );
}
