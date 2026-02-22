"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
    targetDate: string;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            let timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }

            return timeLeft;
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex gap-4 md:gap-8 justify-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-2 shadow-lg">
                        <span className="text-2xl md:text-4xl font-bold font-serif text-white">
                            {value < 10 ? `0${value}` : value}
                        </span>
                    </div>
                    <span className="text-saffron-100 text-xs md:text-sm uppercase tracking-widest">
                        {unit}
                    </span>
                </div>
            ))}
        </div>
    );
};
