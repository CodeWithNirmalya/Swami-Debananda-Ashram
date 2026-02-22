"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const MaharajSection = () => {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/home/Maharaj Cover.jpg"
                                alt="Swami Debananda Maharaj"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
                        </div>
                        {/* Decor elements */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-saffron-300 rounded-tl-3xl -z-10" />
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-saffron-300 rounded-br-3xl -z-10" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <span className="text-saffron-600 font-serif font-bold tracking-wider uppercase text-sm">
                            Our Inspiration
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Swami Debananda <br />
                            <span className="text-saffron-600">Maharaj</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Sadguru Swami Debananda Maharaj, a saint, seer and philosopher, had arrived in human society for the spiritual evolvement of mankind after spending years as an itinerant Naga sanyasin.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Initiated at the age of six by His revered Gurudev, Swami Gyanananda Maharaj, His Holiness had renounced His comfortable life in the heart of Kolkata with a faith that a life that is selfishly confined to a few people is not a life at all.
                        </p>
                        <div className="pt-4">
                            <Link href="/about#maharaj">
                                <Button size="lg" className="rounded-full px-8 font-serif">
                                    Read Biography
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
