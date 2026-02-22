"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const bgImages = [
    "/assets/home/Cover Photo.jpg",
    "/assets/home/Blood Donation camp.jpg",
    "/assets/home/Eye day care.jpg",
    "/assets/home/Old age home.jpg",
    "/assets/home/Sathe Achi.jpg",
    "/assets/home/vidyamandir.jpg",
];

export const HomeHero = () => {
    const { t } = useTranslation("common");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={bgImages[currentIndex]}
                            alt="SDA Ashram Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40" /> {/* Dark Overlay */}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content Area */}
            <div className="container relative z-10 px-4 md:px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                        {t("home.hero_title", "Compassion in Action, ")} <br />
                        <span className="text-saffron-400">{t("home.hero_subtitle", "Light in Every Soul")}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
                        {t("home.hero_description", "Dedicated to serving humanity through selfless spiritual guidance, quality education, and compassionate healthcare.")}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                        <Link href="/volunteer" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto rounded-full px-10 py-7 text-lg font-serif bg-saffron-600 hover:bg-saffron-700 text-white border-none shadow-xl transition-all hover:scale-105"
                            >
                                {t("home.volunteer_now", "Volunteer Now")}
                            </Button>
                        </Link>
                        <Link href="/donation" className="w-full sm:w-auto">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto rounded-full px-10 py-7 text-lg font-serif border-2 border-white text-white hover:bg-white hover:text-saffron-900 bg-transparent backdrop-blur-md transition-all hover:scale-105"
                            >
                                {t("home.donate_now", "Donate Now")}
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {bgImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-12 h-1 rounded-full transition-all duration-500 ${currentIndex === index ? "bg-saffron-500 w-16" : "bg-white/30 hover:bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};
