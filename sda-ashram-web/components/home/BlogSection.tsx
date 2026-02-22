"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const blogs = [
    {
        title: "The Path of Selfless Service",
        date: "Feb 15, 2026",
        category: "Spirituality",
        image: "/assets/home/Sathe Achi.jpg",
        excerpt: "Discover how karma yoga can transform your daily life into a spiritual practice.",
    },
    {
        title: "Empowering Through Education",
        date: "Feb 10, 2026",
        category: "Mission",
        image: "/assets/home/vidyamandir.jpg",
        excerpt: "Highlighting the annual day celebrations at S.D. Vidyamandir and our students' achievements.",
    },
    {
        title: "Healing Vision, Healing Souls",
        date: "Feb 05, 2026",
        category: "Charity",
        image: "/assets/home/Eye day care.jpg",
        excerpt: "Impact report from our latest free eye cataract surgery camp in Hooghly.",
    },
];

export const BlogSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
                            Latest From <span className="text-saffron-600 italic">Blog</span>
                        </h2>
                        <p className="text-gray-600 max-w-xl text-lg">
                            Stay updated with our latest activities, spiritual discourses, and community impacts.
                        </p>
                    </div>
                    <Link
                        href="/gallery"
                        className="flex items-center gap-2 text-stone-900 font-bold border-b-2 border-saffron-500 pb-1 group"
                    >
                        View All Stories
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-saffron-700 uppercase tracking-widest">
                                    {blog.category}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <p className="text-stone-400 text-sm font-medium">{blog.date}</p>
                                <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-saffron-700 transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-600 line-clamp-2 font-light leading-relaxed">
                                    {blog.excerpt}
                                </p>
                                <div className="pt-2 flex items-center gap-2 text-saffron-600 font-bold group/btn">
                                    Read More
                                    <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
