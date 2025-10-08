import React from 'react';

export default function VideoSection() {
    return (
        <div className="relative z-10 flex justify-center pb-8 px-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-2 border border-white/20 shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-none xl:w-auto">
                <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/H7zyhAGILos?list=RDH7zyhAGILos"
                    title="Bản Tình Ca Cô Đơn - Lâm Chí Huyền (Guitar Solo)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-2xl shadow-xl w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:w-[600px] xl:h-[400px]">
                </iframe>
            </div>
        </div>
    );
}
