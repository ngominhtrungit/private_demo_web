'use client';

import React, { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: Date;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown({ targetDate }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +targetDate - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-white text-lg md:text-xl font-bold mb-2 md:mb-4">COUNTDOWN</h3>
            <div className="flex items-center gap-2 md:gap-4">
                <div className="bg-teal-400 text-white text-center p-2 md:p-3 rounded-lg min-w-[60px] md:min-w-[80px]">
                    <div className="text-xl md:text-3xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                    <div className="text-xs md:text-sm">Day(s)</div>
                </div>
                <div className="bg-teal-400 text-white text-center p-2 md:p-3 rounded-lg min-w-[60px] md:min-w-[80px]">
                    <div className="text-xl md:text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs md:text-sm">Hour(s)</div>
                </div>
                <div className="bg-teal-400 text-white text-center p-2 md:p-3 rounded-lg min-w-[60px] md:min-w-[80px]">
                    <div className="text-xl md:text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-xs md:text-sm">Minute(s)</div>
                </div>
                <div className="bg-teal-400 text-white text-center p-2 md:p-3 rounded-lg min-w-[60px] md:min-w-[80px]">
                    <div className="text-xl md:text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-xs md:text-sm">Second(s)</div>
                </div>
            </div>
        </div>
    );
}
