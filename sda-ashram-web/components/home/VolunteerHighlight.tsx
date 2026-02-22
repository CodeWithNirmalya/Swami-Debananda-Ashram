"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const VolunteerHighlight = () => {
    return (
        <section className="py-24 bg-[#FDF8F3]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] group"
                    >
                        <Image
                            src="/assets/home/Blood Donation camp.jpg"
                            alt="Volunteering at SDA Ashram"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-stone-900/10" />
                    </motion.div>

                    {/* Right: Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-saffron-600 font-serif font-bold tracking-[0.2em] uppercase text-sm">
                                Be the Change
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
                                Volunteering <br />
                                <span className="text-stone-500 italic font-serif">is a way of giving back</span>
                            </h2>
                        </div>

                        <p className="text-lg text-stone-600 leading-relaxed font-light">
                            In every aspect of life, Sadguru explains, we can be a volunteer just by
                            living willingly. Through this willingness, life becomes full of joy and
                            fulfillment. Join our dedicated volunteer base and contribute to the
                            spiritual and social upliftment of humanity.
                        </p>

                        <Link href="/volunteer">
                            <Button
                                size="lg"
                                className="rounded-full px-10 py-7 text-lg font-serif bg-stone-900 hover:bg-stone-800 text-white shadow-xl transition-all hover:scale-105"
                            >
                                Join as Volunteer
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
