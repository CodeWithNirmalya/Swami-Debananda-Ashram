"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";

export const MeetMaharajSection = () => {
    return (
        <section className="py-24 bg-stone-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-left mb-16 space-y-4">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
                        Meet <span className="text-saffron-600 italic">Maharaj</span>
                    </h2>
                </div>

                <div className="max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl overflow-hidden shadow-xl border border-stone-100 group"
                    >
                        <div className="relative aspect-square overflow-hidden">
                            <Image
                                src="/assets/gallery/Maharaj1.jpg"
                                alt="Swami Debananda Maharaj"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                                <Button className="w-full rounded-full bg-saffron-600 hover:bg-saffron-700">
                                    Register Now
                                </Button>
                            </div>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="bg-saffron-100 inline-block px-4 py-1 rounded-full text-saffron-700 text-sm font-bold">
                                Satsang with Maharaj
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-gray-900">
                                Divine Discourse & Darshan
                            </h3>
                            <div className="flex flex-col gap-2 text-gray-500 text-sm">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span>24 March 2026, 5:00 PM</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} />
                                    <span>Central Ashram, Bardhaman</span>
                                </div>
                            </div>
                            <Button className="w-full rounded-full bg-stone-900 hover:bg-stone-800 text-white lg:hidden">
                                Register Now
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
