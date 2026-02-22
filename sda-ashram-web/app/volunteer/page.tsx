"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { Heart, Users, BookOpen, Utensils } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";

export default function VolunteerPage() {
    const { t } = useTranslation("common");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log("Volunteer registration:", data);
        alert("Thank you for registering as a volunteer!");
    };

    const sevaTypes = [
        { icon: Heart, title: "Social Service", description: "Help in community welfare programs" },
        { icon: Users, title: "Event Management", description: "Organize and manage ashram events" },
        { icon: BookOpen, title: "Teaching", description: "Share knowledge and teach students" },
        { icon: Utensils, title: "Kitchen Seva", description: "Assist in langar and food distribution" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-saffron-50/30">
            <PageHeader
                title="Join Our Volunteer Program"
                subtitle="Serve with love and devotion. Be a part of our spiritual community and contribute to society."
                image="/assets/gallery/Ashram2.jpg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Seva Types */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {sevaTypes.map((seva, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-6 rounded-2xl shadow-lg text-center border border-saffron-100"
                        >
                            <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <seva.icon className="w-8 h-8 text-saffron-600" />
                            </div>
                            <h3 className="font-serif text-xl mb-2 text-gray-900">{seva.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{seva.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Registration Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/40"
                >
                    <h2 className="font-serif text-3xl text-center mb-8 text-gray-900 font-bold">Volunteer Registration</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-800">{t("form.firstName")} *</label>
                                <input
                                    {...register("firstName", { required: true })}
                                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-sm text-gray-900 placeholder:text-gray-400"
                                />
                                {errors.firstName && <span className="text-red-500 text-xs mt-1 block font-medium">Required</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-800">{t("form.lastName")} *</label>
                                <input
                                    {...register("lastName", { required: true })}
                                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-sm text-gray-900 placeholder:text-gray-400"
                                />
                                {errors.lastName && <span className="text-red-500 text-xs mt-1 block font-medium">Required</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-800">{t("form.dob")} *</label>
                                <input
                                    type="date"
                                    {...register("dob", { required: true })}
                                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-sm text-gray-900"
                                />
                                {errors.dob && <span className="text-red-500 text-xs mt-1 block font-medium">Required</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-800">{t("form.mobile")} *</label>
                                <input
                                    type="tel"
                                    {...register("mobile", { required: true })}
                                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-sm text-gray-900 placeholder:text-gray-400"
                                />
                                {errors.mobile && <span className="text-red-500 text-xs mt-1 block font-medium">Required</span>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-800">{t("form.address")} *</label>
                            <textarea
                                {...register("address", { required: true })}
                                rows={3}
                                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-sm resize-none text-gray-900 placeholder:text-gray-400"
                            />
                            {errors.address && <span className="text-red-500 text-xs mt-1 block font-medium">Required</span>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-800">{t("form.email")}</label>
                                <input
                                    type="email"
                                    {...register("email")}
                                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-sm text-gray-900 placeholder:text-gray-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-800">{t("form.pincode")} *</label>
                                <input
                                    {...register("pincode", { required: true })}
                                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-sm text-gray-900 placeholder:text-gray-400"
                                />
                                {errors.pincode && <span className="text-red-500 text-xs mt-1 block font-medium">Required</span>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-800">{t("form.sevaInterest")} *</label>
                            <select
                                {...register("sevaInterest", { required: true })}
                                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-sm bg-white/80 text-gray-900"
                            >
                                <option value="" className="text-gray-500">Select seva type</option>
                                <option value="social" className="text-gray-900">কর সেবা</option>
                                <option value="events" className="text-gray-900">পাকশালা</option>
                                <option value="teaching" className="text-gray-900">গোশালা</option>
                                <option value="kitchen" className="text-gray-900">পাশে-আছি</option>
                                <option value="other" className="text-gray-900">অন্যান্য</option>
                            </select>
                            {errors.sevaInterest && <span className="text-red-500 text-xs mt-1 block font-medium">Required</span>}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: "#d97706" }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-saffron-600 text-white py-4 rounded-lg font-bold shadow-lg shadow-saffron-200 transition-colors text-lg"
                        >
                            {t("form.submit")}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
