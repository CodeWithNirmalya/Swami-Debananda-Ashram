"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";

export default function KenjraAshramPage() {
    return (
        <main className="min-h-screen bg-stone-50 pb-20">
            <PageHeader
                title="Swami Debananda Ashram, Kenjra"
                subtitle="Spreading the light of spirituality in the heart of Kenjra."
                image="/assets/gallery/Ashram101.jpg"
            />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="font-serif text-4xl font-bold text-gray-900 italic">A Center for Spiritual Evolution</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                The Kenjra branch of Swami Debananda Ashram is dedicated to the spiritual upliftment of the local community.
                                Founded on the principles of love and union, it serves as a gathering place for devotees.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Regular satsangs and devotional songs (Bhajans) are held here, drawing inspiration
                                from the life and teachings of Sadguru Swami Debananda Maharaj.
                            </p>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-saffron-100">
                                <h3 className="font-bold text-saffron-800 mb-2">Key Highlights:</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Weekly Bhajans and Kirtans</li>
                                    <li>Community Kitchen (Annadan)</li>
                                    <li>Spiritual Guidance Classes</li>
                                    <li>Women Empowerment Initiatives</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/assets/gallery/Ashram102.jpg"
                                alt="Kenjra Ashram"
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
