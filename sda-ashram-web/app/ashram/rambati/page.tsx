"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RambatiAshramPage() {
    return (
        <main className="min-h-screen bg-stone-50 pb-20">
            <PageHeader
                title="Swami Debananda Ashram, Rambati"
                subtitle="Fostering harmony and devotion in the serene surroundings of Rambati."
                image="/assets/gallery/Ashram103.jpg"
            />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="font-serif text-4xl font-bold text-gray-900 italic">Spirituality in Serenity</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                The Rambati ashram is a place of profound peace. It was established to provide devotees
                                with a space away from the hustle of modern life, where they can connect with their inner selves.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our Rambati branch focuses on environmental seva alongside spiritual activities,
                                encouraging devotees to respect and nurture nature as a form of worship.
                            </p>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-saffron-100">
                                <h3 className="font-bold text-saffron-800 mb-2">Focus Areas:</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Meditation Retreats</li>
                                    <li>Environmental Conservation</li>
                                    <li>Spiritual Library</li>
                                    <li>Health Camps for Villagers</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/assets/gallery/Ashram2.jpg"
                                alt="Rambati Ashram"
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
