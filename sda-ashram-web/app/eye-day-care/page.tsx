"use client";

import { motion } from "framer-motion";
import { Eye, Stethoscope, Users, Heart, Clock, DollarSign } from "lucide-react";
import { useForm } from "react-hook-form";
import { PageHeader } from "@/components/layout/PageHeader";
import Image from "next/image";

const eyeCareImages = [
    { src: "/assets/eye-care/eye-day-care-banner.jpg", alt: "Advanced Eye Care Center" },
    { src: "/assets/eye-care/Eye care.jpg", alt: "Patient Consultation" },
    { src: "/assets/eye-care/Eye care 2.jpg", alt: "Vision Diagnostics" },
    { src: "/assets/eye-care/Eye care 3.jpg", alt: "Surgical Suite" },
    { src: "/assets/eye-care/Eye care 4.jpg", alt: "Specialized Treatment" },
    { src: "/assets/eye-care/Eye care 5.jpg", alt: "Caring Support" },
    { src: "/assets/eye-care/Eye care 6.jpg", alt: "Community Outreach" },
];

export default function EyeCarePage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log("Patient registration:", data);
        alert("Registration submitted successfully!");
    };

    const doctors = [
        { name: "Dr. Amit Kumar", specialty: "Ophthalmologist", experience: "15 years" },
        { name: "Dr. Priya Sharma", specialty: "Eye Surgeon", experience: "12 years" },
        { name: "Dr. Rajesh Gupta", specialty: "Retina Specialist", experience: "10 years" },
    ];

    const fees = [
        { service: "General OPD Consultation", fee: "₹200" },
        { service: "Cataract Surgery", fee: "₹5,000 - ₹15,000" },
        { service: "Retina Check-up", fee: "₹500" },
        { service: "Glaucoma Treatment", fee: "₹1,000" },
    ];

    const facilities = [
        { icon: Eye, title: "Advanced Diagnostics", description: "State-of-the-art eye testing equipment" },
        { icon: Stethoscope, title: "Expert Care", description: "Experienced ophthalmologists and surgeons" },
        { icon: Users, title: "Patient-Centered", description: "Compassionate and personalized care" },
        { icon: Heart, title: "Affordable Treatment", description: "Quality healthcare at reasonable costs" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-saffron-50/30">
            <PageHeader
                title="Eye Day Care Center"
                subtitle="Vision Care with Compassion - Advanced Diagnostics and Expert Surgery"
                image="/assets/eye-care/eye-day-care-banner.jpg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Facilities */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-4xl text-center mb-12 text-gray-900">Our Facilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {facilities.map((facility, index) => (
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
                                    <facility.icon className="w-8 h-8 text-saffron-600" />
                                </div>
                                <h3 className="font-serif text-xl mb-2 text-gray-900">{facility.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Doctors */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-4xl text-center mb-12 text-gray-900">Our Doctors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {doctors.map((doctor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-saffron-50"
                            >
                                <div className="h-48 bg-gradient-to-br from-saffron-400 to-saffron-600 flex items-center justify-center">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                                        <Users className="w-12 h-12 text-saffron-600" />
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="font-serif text-xl mb-2 text-gray-900">{doctor.name}</h3>
                                    <p className="text-saffron-600 font-medium mb-1">{doctor.specialty}</p>
                                    <p className="text-sm text-gray-500">{doctor.experience} of experience</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Fee Structure */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-4xl text-center mb-12 text-gray-900">Fee Structure</h2>
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-saffron-100">
                        <div className="bg-gradient-to-r from-saffron-600 to-saffron-700 text-white p-6 text-center">
                            <div className="flex items-center justify-center gap-2">
                                <DollarSign className="w-6 h-6" />
                                <h3 className="font-serif text-2xl tracking-wide">Treatment Fees</h3>
                            </div>
                        </div>
                        <div className="divide-y divide-saffron-50">
                            {fees.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex justify-between items-center p-6 hover:bg-saffron-50 transition-colors"
                                >
                                    <span className="text-gray-700 font-medium">{item.service}</span>
                                    <span className="text-saffron-600 font-bold">{item.fee}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Patient Registration Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-4xl text-center mb-12 text-gray-900 font-bold">Patient Registration</h2>
                    <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/40">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">First Name *</label>
                                    <input
                                        {...register("firstName", { required: true })}
                                        className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-sm text-gray-900 placeholder:text-gray-400"
                                    />
                                    {errors.firstName && <span className="text-red-500 text-xs mt-1 block font-medium">First name is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">Last Name *</label>
                                    <input
                                        {...register("lastName", { required: true })}
                                        className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-sm text-gray-900 placeholder:text-gray-400"
                                    />
                                    {errors.lastName && <span className="text-red-500 text-xs mt-1 block font-medium">Last name is required</span>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">Age *</label>
                                    <input
                                        type="number"
                                        {...register("age", { required: true })}
                                        className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-sm text-gray-900 placeholder:text-gray-400"
                                    />
                                    {errors.age && <span className="text-red-500 text-xs mt-1 block font-medium">Age is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">Mobile *</label>
                                    <input
                                        type="tel"
                                        {...register("mobile", { required: true })}
                                        className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-sm text-gray-900 placeholder:text-gray-400"
                                    />
                                    {errors.mobile && <span className="text-red-500 text-xs mt-1 block font-medium">Mobile number is required</span>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-800">Address *</label>
                                <textarea
                                    {...register("address", { required: true })}
                                    rows={3}
                                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-sm resize-none text-gray-900 placeholder:text-gray-400"
                                />
                                {errors.address && <span className="text-red-500 text-xs mt-1 block font-medium">Address is required</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-800">Issue/Complaint</label>
                                <textarea
                                    {...register("issue")}
                                    rows={3}
                                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all shadow-sm resize-none text-gray-900 placeholder:text-gray-400"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "#d97706" }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-saffron-600 text-white py-4 rounded-lg font-bold shadow-lg shadow-saffron-200 transition-colors"
                            >
                                Submit Registration
                            </motion.button>
                        </form>
                    </div>
                </motion.div>

                {/* Photo Gallery Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-4xl text-center mb-12 text-gray-900">Photo Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {eyeCareImages.map((image, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white text-xs font-medium">{image.alt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Emergency Contact */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-red-600 text-white rounded-3xl p-10 text-center shadow-xl shadow-red-200"
                >
                    <h3 className="font-serif text-3xl mb-6">Emergency Contact</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex items-center gap-3">
                            <Clock className="w-8 h-8" />
                            <div className="text-left">
                                <p className="text-xs uppercase tracking-widest text-red-100">Availability</p>
                                <p className="text-xl font-bold">24/7 Available</p>
                            </div>
                        </div>
                        <div className="h-px w-12 bg-white/20 hidden md:block" />
                        <div className="text-center">
                            <p className="text-xs uppercase tracking-widest text-red-100 mb-1">Direct Helpline</p>
                            <p className="text-4xl md:text-5xl font-mono font-bold tracking-tighter">
                                +91 XXXXX XXXXX
                            </p>
                        </div>
                    </div>
                    <p className="mt-8 text-red-100 italic">For urgent eye care needs and accidental emergencies</p>
                </motion.div>
            </div>
        </div>
    );
}
