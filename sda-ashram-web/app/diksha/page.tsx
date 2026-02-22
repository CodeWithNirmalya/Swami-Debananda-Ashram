"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { CheckCircle2, Send, Phone, MapPin, Mail, User, Info } from "lucide-react";

export default function DikshaRegistrationPage() {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputClasses = "w-full h-14 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 bg-white/50";
    const labelClasses = "text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-gray-900";

    if (submitted) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center bg-saffron-50/30">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full mx-4 p-12 bg-white rounded-3xl shadow-xl border border-saffron-100 text-center space-y-6"
                >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={48} />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-gray-900">Registration Successful</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Thank you for your interest in Diksha. Someone from our Ashram will contact you shortly to guide you through the process.
                    </p>
                    <Button
                        onClick={() => setSubmitted(false)}
                        className="rounded-full px-8 bg-saffron-600 hover:bg-saffron-700"
                    >
                        Back to Home
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-stone-50/50 pb-20">
            <PageHeader
                title="Diksha Registration"
                subtitle="Begin your sacred spiritual journey under the guidance of Sadguru."
                image="/assets/gallery/Maharaj101.jpg"
            />

            <div className="container mx-auto px-4 -mt-20 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* First Name */}
                                <div className="space-y-2">
                                    <label className={labelClasses}>
                                        <User size={16} className="text-saffron-600" />
                                        First Name
                                    </label>
                                    <input
                                        required
                                        placeholder="Enter your first name"
                                        className={inputClasses}
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="space-y-2">
                                    <label className={labelClasses}>
                                        <User size={16} className="text-saffron-600" />
                                        Last Name
                                    </label>
                                    <input
                                        required
                                        placeholder="Enter your last name"
                                        className={inputClasses}
                                    />
                                </div>

                                {/* Mobile & ISD */}
                                <div className="space-y-2">
                                    <label className={labelClasses}>
                                        <Phone size={16} className="text-saffron-600" />
                                        Mobile Number
                                    </label>
                                    <div className="flex gap-2">
                                        <select className="w-24 h-14 rounded-xl border border-gray-200 bg-white/50 px-3 outline-none focus:border-saffron-400 text-gray-900 font-medium">
                                            <option value="+91">+91 (IN)</option>
                                            <option value="+1">+1 (US)</option>
                                            <option value="+44">+44 (UK)</option>
                                        </select>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="Mobile Number"
                                            className={inputClasses}
                                        />
                                    </div>
                                </div>

                                {/* Pincode */}
                                <div className="space-y-2">
                                    <label className={labelClasses}>
                                        <MapPin size={16} className="text-saffron-600" />
                                        Pincode
                                    </label>
                                    <input
                                        required
                                        placeholder="Postal Code"
                                        className={inputClasses}
                                    />
                                </div>
                            </div>

                            {/* Address */}
                            <div className="space-y-2">
                                <label className={labelClasses}>
                                    <MapPin size={16} className="text-saffron-600" />
                                    Full Address
                                </label>
                                <textarea
                                    required
                                    placeholder="Enter your full residential address"
                                    className={`${inputClasses} min-h-[120px] py-4 resize-none`}
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className={labelClasses}>
                                    <Mail size={16} className="text-saffron-600" />
                                    Email Address (Optional)
                                </label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className={inputClasses}
                                />
                            </div>

                            {/* How you know us */}
                            <div className="space-y-2">
                                <label className={labelClasses}>
                                    <Info size={16} className="text-saffron-600" />
                                    How did you hear about us?
                                </label>
                                <select className={`${inputClasses} font-medium`}>
                                    <option value="">Select an option</option>
                                    <option value="friends">Friends or Family</option>
                                    <option value="social">Social Media</option>
                                    <option value="events">Ashram Events</option>
                                    <option value="search">Online Search</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full h-16 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-lg font-bold shadow-lg shadow-saffron-200 transition-all hover:-translate-y-1 gap-2"
                            >
                                <Send size={20} />
                                Submit Registration
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
