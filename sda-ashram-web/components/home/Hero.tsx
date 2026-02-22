"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={ref} className="relative h-screen w-full overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 h-[120%] w-full"
            >
                <Image
                    src="/assets/home/Cover Photo.jpg"
                    alt="Swami Debananda Ashram Cover"
                    fill
                    priority
                    className="object-cover brightness-[0.70]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
            </motion.div>

            {/* Hero Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="text-saffron-300 font-serif tracking-[0.2em] text-sm md:text-base uppercase mb-4"
                >
                    Welcome to
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg"
                >
                    Swami Debananda Ashram
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed mb-8 drop-shadow-md"
                >
                    A sanctuary for peace, self-realization, and selfless service to humanity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link href="/activities">
                        <Button
                            size="lg"
                            variant="premium"
                            className="rounded-full px-8 text-base font-serif tracking-wide w-full sm:w-auto"
                        >
                            Explore Activities
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full px-8 text-base font-serif tracking-wide border-white text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm w-full sm:w-auto"
                        >
                            Contact Us
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1"
                >
                    <div className="w-1 h-2 bg-white rounded-full bg-saffron-300" />
                </motion.div>
            </motion.div>
        </div>
    );
};
