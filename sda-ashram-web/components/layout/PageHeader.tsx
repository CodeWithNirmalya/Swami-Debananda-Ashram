"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    image?: string;
    contain?: boolean;
    bgColor?: string;
}

export const PageHeader = ({ title, subtitle, image, contain, bgColor = "bg-saffron-900" }: PageHeaderProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div
            ref={ref}
            className={`relative ${contain ? "h-[50vh] md:h-[60vh]" : "h-[60vh] md:h-[70vh]"} w-full overflow-hidden flex items-center justify-center`}
        >
            <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] w-full">
                <div
                    className={clsx(
                        "w-full h-full bg-center transition-all duration-700",
                        contain ? "bg-contain bg-no-repeat" : "bg-cover",
                        bgColor?.startsWith("bg-") && bgColor
                    )}
                    style={{
                        backgroundImage: image ? `url(${image})` : undefined,
                        backgroundColor: bgColor?.startsWith("bg-") ? undefined : bgColor
                    }}
                />
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 py-12"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-xl"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-white/90 text-lg md:text-xl max-w-2xl drop-shadow-lg font-medium"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </motion.div>
        </div>
    );
};
