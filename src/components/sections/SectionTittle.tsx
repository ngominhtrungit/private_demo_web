// create a section title component with tailwind css
import React from 'react';
import Image from "next/image";
import Countdown from "../ui/Countdown";
import Button from "../ui/Button";

const SectionTitle: React.FC = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    return (
        <div className="relative text-center pb-6">
            <div
                className="absolute -top-8 md:-top-16 left-4 md:left-40 w-full h-full bg-left bg-no-repeat hidden sm:block"
                style={{
                    backgroundImage: 'url(/hackathon-cloud.png)',
                    backgroundSize: '60% 60%',
                }}>
            </div>
            <div className="relative z-10 pt-12 md:pt-24 px-4 md:px-0">
                {/* Logo Section */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 mb-6 md:mb-4">
                    <Image
                        src="/vp-bank.png"
                        alt="VPBank logo"
                        width={120}
                        height={32}
                        className="w-[100px] h-[26px] sm:w-[120px] sm:h-[32px] md:w-[150px] md:h-[40px]"
                    />
                    <Image
                        src="/pue.png"
                        alt="AWS logo"
                        width={110}
                        height={32}
                        className="w-[90px] h-[26px] sm:w-[110px] sm:h-[32px] md:w-[130px] md:h-[38px]"
                    />
                </div>

                {/* Title Image */}
                <div className="flex justify-center items-center mb-4 md:mb-6">
                    <Image
                        src="/title1.png"
                        alt="Title"
                        width={600}
                        height={100}
                        className="w-[280px] h-[47px] sm:w-[400px] sm:h-[67px] md:w-[500px] md:h-[83px] lg:w-[600px] lg:h-[100px]"
                    />
                </div>

                {/* Description Image */}
                <div className="flex justify-center items-center mb-6 md:mb-8">
                    <Image
                        src="/desc1.png"
                        alt="Description"
                        width={600}
                        height={50}
                        className="w-[280px] h-[23px] sm:w-[400px] sm:h-[33px] md:w-[500px] md:h-[42px] lg:w-[600px] lg:h-[50px]"
                    />
                </div>

                {/* Countdown and Button */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-10">
                    <Countdown targetDate={targetDate}/>
                    <Button
                        hasZoomAnimation={true}
                        variant="secondary"
                        size="md"
                        className="bg-green-500 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg hover:bg-green-600 transition-colors"
                    >
                        Register Now!
                    </Button>
                </div>
            </div>
        </div>
    );
}


export default SectionTitle;