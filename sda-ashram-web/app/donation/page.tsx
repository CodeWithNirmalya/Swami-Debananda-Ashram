"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Heart, CreditCard, Building, HandHelping } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const purposes = [
    { id: "general", title: "General Fund", icon: Heart },
    { id: "education", title: "Education", icon: Building },
    { id: "healthcare", title: "Health Care", icon: HandHelping },
    { id: "annadan", title: "Annadan (Food)", icon: Heart },
];

const amounts = [500, 1000, 2500, 5000, 10000];

export default function DonationPage() {
    const [selectedPurpose, setSelectedPurpose] = useState("general");
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

    return (
        <>
            <PageHeader
                title="Support Our Mission"
                subtitle="Your contribution helps us serve humanity and sustain our spiritual activities."
                image="/assets/gallery/Ashram.jpg"
            />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto border border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Left Panel - Info */}
                            <div className="p-8 md:p-12 bg-saffron-600 text-white flex flex-col justify-between relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="font-serif text-3xl font-bold mb-6">Why Donate?</h3>
                                    <ul className="space-y-4 text-saffron-50 text-lg">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-white" />
                                            Support education for underprivileged children.
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-white" />
                                            Provide free medical care to the needy.
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-white" />
                                            Sustain daily ashram activities and maintenance.
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-white" />
                                            Contribute to disaster relief efforts.
                                        </li>
                                    </ul>
                                </div>

                                <div className="relative z-10 mt-12">
                                    <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                                        <p className="text-sm opacity-90 mb-2">Bank Details for Direct Transfer:</p>
                                        <p className="font-bold text-lg">Swami Debananda Ashram</p>
                                        <p>SBI, Krishnapur Branch</p>
                                        <p className="font-mono mt-2 bg-black/20 p-2 rounded inline-block text-sm">
                                            IFSC: SBIN0001234
                                        </p>
                                        <p className="font-mono mt-1 bg-black/20 p-2 rounded inline-block text-sm ml-2">
                                            A/C: 1234567890
                                        </p>
                                    </div>
                                </div>

                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10" />
                            </div>

                            {/* Right Panel - Form */}
                            <div className="p-8 md:p-12">
                                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8">
                                    Make a Donation
                                </h2>

                                {/* Purpose Selection */}
                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        I want to support
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {purposes.map((p) => (
                                            <button
                                                key={p.id}
                                                onClick={() => setSelectedPurpose(p.id)}
                                                className={clsx(
                                                    "flex items-center gap-3 p-3 rounded-lg border text-sm font-medium transition-all text-left",
                                                    selectedPurpose === p.id
                                                        ? "border-saffron-500 bg-saffron-50 text-saffron-700"
                                                        : "border-gray-200 hover:border-saffron-300 text-gray-600"
                                                )}
                                            >
                                                <p.icon size={16} />
                                                {p.title}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Amount Selection */}
                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Select Amount (INR)
                                    </label>
                                    <div className="grid grid-cols-3 gap-3 mb-4">
                                        {amounts.map((amt) => (
                                            <button
                                                key={amt}
                                                onClick={() => setSelectedAmount(amt)}
                                                className={clsx(
                                                    "py-3 rounded-lg border text-sm font-bold transition-all",
                                                    selectedAmount === amt
                                                        ? "border-saffron-500 bg-saffron-600 text-white"
                                                        : "border-gray-200 hover:border-saffron-300 text-gray-600"
                                                )}
                                            >
                                                ₹{amt}
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="Enter Custom Amount"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400"
                                        onChange={(e) => setSelectedAmount(Number(e.target.value))}
                                    />
                                </div>

                                <Button size="lg" className="w-full bg-saffron-600 hover:bg-saffron-700 py-6 text-lg shadow-lg shadow-saffron-200">
                                    <CreditCard className="mr-2 h-5 w-5" />
                                    Donate Now
                                </Button>

                                <p className="text-center text-xs text-gray-500 mt-4">
                                    All donations are tax-exempt under 80G. Secure payment powered by Razorpay.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
