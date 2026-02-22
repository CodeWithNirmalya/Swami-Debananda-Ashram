"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GangasagarAshramPage() {
    return (
        <main className="min-h-screen bg-stone-50 pb-20">
            <PageHeader
                title="Swami Debananda Ashram, Gangasagar"
                subtitle="A spiritual sanctuary at the sacred confluence of the Ganges and the Bay of Bengal."
                image="/assets/gallery/Ashram100.jpg"
            />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="font-serif text-4xl font-bold text-gray-900 italic">Divine Presence at the Confluence</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our Gangasagar ashram serves as a beacon of spirituality for pilgrims visiting the holy Teertha.
                                Established with the blessings of Swami Debananda Maharaj, it provides a peaceful environment
                                for meditation, prayer, and selfless service.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                The ashram actively participates in social welfare during the annual Gangasagar Mela,
                                providing food, shelter, and medical assistance to thousands of devotees.
                            </p>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-saffron-100">
                                <h3 className="font-bold text-saffron-800 mb-2">Activities at this branch:</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Daily Aarti and Prayers</li>
                                    <li>Spiritual Discourse (Satsang)</li>
                                    <li>Pilgrim Assistance & Seva</li>
                                    <li>Charitable Distribution</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/assets/gallery/Ashram.jpg"
                                alt="Gangasagar Ashram"
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
