"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PatuliAshramPage() {
    return (
        <main className="min-h-screen bg-stone-50 pb-20">
            <PageHeader
                title="Swami Debananda Ashram, Patuli"
                subtitle="Sharing the divine grace of Sadguru in the urban heart of Patuli."
                image="/assets/gallery/Ashram5.jpg"
            />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="font-serif text-4xl font-bold text-gray-900 italic">Spreading Peace in the City</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our Patuli branch provides an urban sanctuary for seekers in Kolkata.
                                It is a vibrant center for devotional music, spiritual discourse, and charitable activities.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Under the guidance of Swami Debananda Maharaj, this ashram has become a hub for
                                city-dwellers looking for spiritual depth and meaningful community service.
                            </p>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-saffron-100">
                                <h3 className="font-bold text-saffron-800 mb-2">Major Activities:</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Ma Divyabani Discourses</li>
                                    <li>Free Medical Consultancy</li>
                                    <li>Educational Support for Needy</li>
                                    <li>Annual Spiritual Festivals</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/assets/gallery/Ashram6.jpg"
                                alt="Patuli Ashram"
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
