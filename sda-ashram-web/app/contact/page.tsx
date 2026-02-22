"use client";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";

type ContactFormInputs = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormInputs>();

    const onSubmit = (data: ContactFormInputs) => {
        console.log(data);
        // Handle form submission logic here
        alert("Message sent successfully!");
    };

    return (
        <>
            <PageHeader
                title="Contact Us"
                subtitle="We are here to answer your questions and welcome you to the Ashram."
                image="/assets/gallery/Ashram4.jpg"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-600 leading-relaxed max-w-md">
                                    Whether you have a query about our activities, want to visit the
                                    ashram, or simply seek spiritual guidance, feel free to reach out.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-saffron-50 flex items-center justify-center text-saffron-600 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-bold text-gray-900 mb-1">
                                            Visit Us
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Swami Debananda Ashram
                                            <br />
                                            Krishnapur, Purba Bardhaman
                                            <br />
                                            West Bengal – 713101
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-saffron-50 flex items-center justify-center text-saffron-600 shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-bold text-gray-900 mb-1">
                                            Call Us
                                        </h3>
                                        <p className="text-gray-600 text-sm">+91 94746 38702</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-saffron-50 flex items-center justify-center text-saffron-600 shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-bold text-gray-900 mb-1">
                                            Email Us
                                        </h3>
                                        <p className="text-gray-600 text-sm">info@sdashram.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-2xl border border-white/40"
                        >
                            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
                                Send a Message
                            </h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-800">
                                            Full Name
                                        </label>
                                        <input
                                            {...register("name", { required: true })}
                                            className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 shadow-sm"
                                            placeholder="John Doe"
                                        />
                                        {errors.name && (
                                            <span className="text-xs text-red-500 font-medium">Required</span>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-800">
                                            Phone
                                        </label>
                                        <input
                                            {...register("phone")}
                                            className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 shadow-sm"
                                            placeholder="+91..."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">
                                        Email Address
                                    </label>
                                    <input
                                        {...register("email", { required: true })}
                                        className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 shadow-sm"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && (
                                        <span className="text-xs text-red-500 font-medium">Required</span>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">
                                        Message
                                    </label>
                                    <textarea
                                        {...register("message", { required: true })}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all resize-none text-gray-900 placeholder:text-gray-400 shadow-sm"
                                        placeholder="How can we help you?"
                                    />
                                    {errors.message && (
                                        <span className="text-xs text-red-500 font-medium">Required</span>
                                    )}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: "#d97706" }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-saffron-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-saffron-200 transition-all flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
