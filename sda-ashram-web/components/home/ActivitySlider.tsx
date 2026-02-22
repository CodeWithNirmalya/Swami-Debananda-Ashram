"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight, Heart, GraduationCap, Eye } from "lucide-react";

const activities = [
    {
        title: "Eye Day Care",
        description: "Specialized eye care services for the community, ensuring vision for all.",
        image: "/assets/home/Eye day care.jpg",
        link: "/eye-day-care",
        icon: Eye,
    },
    {
        title: "S.D. Vidyamandir",
        description: "Empowering young minds through quality education and spiritual values.",
        image: "/assets/home/vidyamandir.jpg",
        link: "/school",
        icon: GraduationCap,
    },
    {
        title: "Social Welfare",
        description: "Supporting the elderly and needy through various humanitarian initiatives.",
        image: "/assets/home/Old age home.jpg",
        link: "/activities",
        icon: Heart,
    },
    {
        title: "Community Seva",
        description: "Spreading love and union through grassroot community involvement.",
        image: "/assets/home/Sathe Achi.jpg",
        link: "/activities",
        icon: Heart,
    },
];

export const ActivitySlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % activities.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-stone-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
                        Our <span className="text-saffron-600">Activities</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Exploring the various ways Swami Debananda Ashram serves the physical
                        and spiritual needs of society.
                    </p>
                </div>

                <div className="relative flex items-center justify-center">
                    <div className="flex gap-8 transition-transform duration-700 ease-in-out">
                        {activities.map((activity, index) => {
                            const isVisible = index === activeIndex;
                            return (
                                <motion.div
                                    key={activity.title}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{
                                        opacity: isVisible ? 1 : 0.3,
                                        scale: isVisible ? 1 : 0.9,
                                        display: isVisible ? "block" : "none"
                                    }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                                >
                                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={activity.image}
                                            alt={activity.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>

                                    <div className="space-y-6 text-left p-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-saffron-100 text-saffron-600 mb-2">
                                            <activity.icon size={28} />
                                        </div>
                                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                                            {activity.title}
                                        </h3>
                                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                                            {activity.description}
                                        </p>
                                        <Link
                                            href={activity.link}
                                            className="inline-flex items-center gap-2 text-saffron-600 font-serif text-lg font-bold group"
                                        >
                                            Explore More
                                            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {activities.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-saffron-600 w-10" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
