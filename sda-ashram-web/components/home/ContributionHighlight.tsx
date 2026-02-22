"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const ContributionHighlight = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <span className="text-saffron-600 font-serif font-bold tracking-[0.2em] uppercase text-sm">
                                Empower Others
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
                                Your Contribution <br />
                                <span className="text-stone-500 italic font-serif">can change someone's life</span>
                            </h2>
                        </div>

                        <p className="text-lg text-stone-600 leading-relaxed font-light">
                            Swami Debananda Ashram is a volunteer-run organization and aims to bring
                            physical, mental, and spiritual well-being for everyone. Your support
                            and donation will help reach all those who are in need of these tools,
                            fostering a world of harmony and compassion.
                        </p>

                        <Link href="/donation">
                            <Button
                                size="lg"
                                className="rounded-full px-10 py-7 text-lg font-serif bg-saffron-600 hover:bg-saffron-700 text-white shadow-xl transition-all hover:scale-105"
                            >
                                Donate Now
                            </Button>
                        </Link>
                    </div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] group order-1 lg:order-2"
                    >
                        <Image
                            src="/assets/home/Sathe Achi.jpg"
                            alt="Contribution to SDA Ashram"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-stone-900/10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
