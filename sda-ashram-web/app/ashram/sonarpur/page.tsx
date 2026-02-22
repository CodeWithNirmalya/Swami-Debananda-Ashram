"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SonarpurAshramPage() {
    return (
        <main className="min-h-screen bg-stone-50 pb-20">
            <PageHeader
                title="Swami Debananda Ashram, Sonarpur"
                subtitle="Bringing the message of Maharaj to the growing community of Rajpur Sonarpur."
                image="/assets/gallery/Ashram3.jpg"
            />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="font-serif text-4xl font-bold text-gray-900 italic">Suburban Spiritual Oasis</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Located in Rajpur Sonarpur, this branch serves as a vital spiritual link for the suburban population.
                                It hosts regular events that bring together people from all walks of life.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                The ashram emphasizes practical spirituality, showing how the teachings of Swami Debananda Maharaj
                                can be applied to meet the challenges of everyday career and family life.
                            </p>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-saffron-100">
                                <h3 className="font-bold text-saffron-800 mb-2">Offerings:</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Evening Satsangs</li>
                                    <li>Youth Guidance Programs</li>
                                    <li>Value-based Education Workshops</li>
                                    <li>Community Support Seva</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/assets/gallery/Ashram4.jpg"
                                alt="Sonarpur Ashram"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
