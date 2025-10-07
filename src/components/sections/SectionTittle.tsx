// create a section title component with tailwind css
import React from 'react';
import Image from "next/image";
import Countdown from "../ui/Countdown";
import Button from "../ui/Button";

const SectionTitle: React.FC = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    return (
        <div className="relative text-center py-16">
            <div className="absolute top-0 left-40 w-full h-full bg-left bg-no-repeat opacity-30"
                 style={{
                     backgroundImage: 'url(/hackathon-cloud.png)',
                     backgroundSize: '50%'
                 }}>
            </div>
            <div className="relative z-10 top-14">
                {/*<div className="flex justify-center items-center gap-8 mb-8 bg-blue-500">*/}
                <div className="flex justify-center items-center gap-8 mb-4 mr-20">
                    <Image
                        src="/vp-bank.png"
                        alt="VPBank logo"
                        width={150}
                        height={40}
                        className="mr-50"
                    />
                    <Image
                        src="/pue.png"
                        alt="AWS logo"
                        width={130}
                        height={38}
                    />
                </div>
                <div className="flex justify-center items-center mr-20">
                    <Image
                        src="/title1.png"
                        alt="Title"
                        width={600}
                        height={100}
                    />
                </div>

                <div className="flex justify-center items-center mr-20">
                    <Image
                        src="/desc1.png"
                        alt="Description"
                        width={600}
                        height={50}
                    />
                </div>

                <div className="flex items-end justify-center mt-6">
                    <Countdown targetDate={targetDate}/>
                    <Button
                        hasZoomAnimation={true}
                        variant="secondary"
                        size="md"
                        className="bg-green-500 text-white px-8 py-2 text-lg mb-8 ml-10"
                    >
                        Register Now!
                    </Button>

                </div>

            </div>
        </div>
    );
}


export default SectionTitle;