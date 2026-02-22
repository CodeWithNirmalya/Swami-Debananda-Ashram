"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Download, Phone, Mail, Award, BookOpen, Users, Star, Quote } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const notices = [
    {
        id: 1,
        title: "Annual Sports Day Notification",
        date: "January 15, 2026",
        urgent: true,
    },
    {
        id: 2,
        title: "Admission Open for Session 2025-26",
        date: "December 24, 2025",
        urgent: false,
    },
    {
        id: 3,
        title: "Annual Examination Schedule",
        date: "December 05, 2025",
        urgent: false,
    },
];

const features = [
    { icon: Award, title: "Excellence", description: "Consistently high academic standards and results." },
    { icon: BookOpen, title: "Holistic", description: "Balanced focus on academics, sports, and spirituality." },
    { icon: Users, title: "Community", description: "Strong parent-teacher partnership for child development." },
];

const schoolImages = [
    { src: "/assets/school/School1.jpg", alt: "Students in classroom" },
    { src: "/assets/school/School2.jpg", alt: "School building" },
    { src: "/assets/school/School3.jpg", alt: "Science lab" },
    { src: "/assets/school/School4.jpg", alt: "Sports ground" },
    { src: "/assets/school/School5.jpg", alt: "Library" },
    { src: "/assets/school/School6.jpg", alt: "Cultural event" },
    { src: "/assets/school/School9.jpg", alt: "Prayer hall" },
    { src: "/assets/school/School10.jpg", alt: "Annual day" },
    { src: "/assets/school/school100.jpg", alt: "Result Day" },
];

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Parent",
        content: "The environment at Swami Debananda Vidysthan is truly transformative. My daughter has grown both academically and spiritually.",
        rating: 5
    },
    {
        name: "Priya Das",
        role: "Parent",
        content: "Excellent teachers and great facilities. The focus on values along with academics is what sets this school apart.",
        rating: 5
    },
    {
        name: "Amit Kumar",
        role: "Parent",
        content: "Highly impressed with the infrastructure and the disciplined approach to education.",
        rating: 4
    }
];

export default function SchoolPage() {
    return (
        <>
            <PageHeader
                title="Swami Debananda Vidymandir"
                subtitle="Nurturing minds with knowledge and hearts with values."
                image="/assets/school/School10.jpg"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* About School */}
                            <section>
                                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                                    About Our School
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Swami Debananda Vidyamandir is a premier educational institution dedicated
                                    to providing quality education with a strong emphasis on moral and
                                    spiritual values. Our curriculum is designed to foster critical thinking,
                                    creativity, and character building.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                    {features.map((feature, idx) => (
                                        <div key={idx} className="p-6 bg-saffron-50 rounded-xl text-center">
                                            <feature.icon className="w-10 h-10 text-saffron-600 mx-auto mb-4" />
                                            <h3 className="font-serif font-bold text-gray-900 mb-2">{feature.title}</h3>
                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Admission */}
                            <section id="admission" className="scroll-mt-24">
                                <div className="bg-saffron-600 text-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h2 className="font-serif text-3xl font-bold mb-4">Admissions Open</h2>
                                        <p className="text-saffron-100 text-lg mb-8 max-w-xl">
                                            Enroll your child in an environment that shapes character and
                                            intellect. Admissions available for classes Nursery to VIII.
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            <Button size="lg" className="bg-white text-saffron-700 hover:bg-saffron-50">
                                                Download Prospectus
                                            </Button>
                                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                                Contact Office
                                            </Button>
                                        </div>
                                    </div>
                                    {/* Decor */}
                                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-black/10 rounded-full blur-2xl" />
                                </div>
                            </section>

                            {/* Photo Gallery Section */}
                            <section id="gallery" className="scroll-mt-24">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                                            Photo Gallery
                                        </h2>
                                        <p className="text-gray-600">Glimpses of life at Swami Debananda Vidysthan</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {schoolImages.map((image, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-4 left-4">
                                                    <p className="text-white text-sm font-medium">{image.alt}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Notice Board */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                                    <Calendar className="text-saffron-600" />
                                    <h3 className="font-serif text-xl font-bold text-gray-900">Notice Board</h3>
                                </div>
                                <div className="space-y-4">
                                    {notices.map((notice) => (
                                        <div key={notice.id} className="group cursor-pointer">
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className="font-medium text-gray-800 group-hover:text-saffron-600 transition-colors line-clamp-2">
                                                    {notice.title}
                                                </h4>
                                                {notice.urgent && (
                                                    <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                                                        New
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-xs text-gray-500">{notice.date}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="outline" className="w-full mt-6 text-sm">
                                    View All Notices
                                </Button>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">School Office</h3>
                                <ul className="space-y-4 text-sm text-gray-600">
                                    <li className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-saffron-600" />
                                        <span>+91 94746 38702</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Mail className="w-4 h-4 text-saffron-600" />
                                        <span>school@sdashram.org</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-4 h-4 text-saffron-600 mt-0.5">📍</div>
                                        <span>Ashram Campus, Krishnapur</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Downloads */}
                            <div className="bg-saffron-50 rounded-xl p-6">
                                <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">Downloads</h3>
                                <div className="space-y-3">
                                    {['Academic Calendar', 'Book List 2024', 'Holiday List'].map((item) => (
                                        <button key={item} className="flex items-center gap-3 w-full p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-left">
                                            <Download className="w-4 h-4 text-saffron-600" />
                                            <span className="text-sm font-medium text-gray-700">{item}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews & Rating Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
                        <div className="w-24 h-1 bg-saffron-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {testimonials.map((testimonial, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
                            >
                                <Quote className="absolute top-6 right-8 text-saffron-100 w-12 h-12" />
                                <div className="flex gap-1 mb-4 text-saffron-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < testimonial.rating ? "fill-current" : "text-gray-200"}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Interactive Rating Component */}
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-saffron-100 text-center">
                            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Rate Your Experience</h3>
                            <p className="text-gray-600 mb-8">Your feedback helps us grow and serve our students better.</p>

                            <RatingInteraction />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function RatingInteraction() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6"
            >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 fill-current" />
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">Thank you!</h4>
                <p className="text-gray-600">Your rating of {rating} stars has been submitted.</p>
            </motion.div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(star)}
                        className="transition-transform hover:scale-125 focus:outline-none"
                    >
                        <Star
                            className={`w-12 h-12 transition-colors duration-200 ${star <= (hover || rating)
                                ? "text-saffron-500 fill-current"
                                : "text-gray-200"
                                }`}
                        />
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {rating > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="space-y-4"
                    >
                        <textarea
                            placeholder="Tell us what you liked (optional)..."
                            className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all resize-none h-32 text-gray-900 placeholder:text-gray-400"
                        ></textarea>
                        <Button
                            onClick={() => setSubmitted(true)}
                            size="lg"
                            className="bg-saffron-600 hover:bg-saffron-700 text-white px-12 rounded-full"
                        >
                            Submit Review
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
