"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryGridProps {
    images: string[];
}

export const GalleryGrid = ({ images }: GalleryGridProps) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
        null
    );

    const openLightbox = (index: number) => setSelectedImageIndex(index);
    const closeLightbox = () => setSelectedImageIndex(null);

    const nextImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) =>
                prev === null ? null : (prev + 1) % images.length
            );
        }
    };

    const prevImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) =>
                prev === null
                    ? null
                    : (prev - 1 + images.length) % images.length
            );
        }
    };

    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((src, index) => (
                    <motion.div
                        key={src}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden"
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={`/assets/gallery/${src}`}
                            alt={`Gallery Image ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
                        >
                            <X size={32} />
                        </button>

                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50 p-2 bg-black/20 rounded-full backdrop-blur-sm"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50 p-2 bg-black/20 rounded-full backdrop-blur-sm"
                        >
                            <ChevronRight size={32} />
                        </button>

                        <motion.div
                            key={selectedImageIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
                        >
                            <Image
                                src={`/assets/gallery/${images[selectedImageIndex]}`}
                                alt="Selected"
                                width={1200}
                                height={800}
                                className="max-w-full max-h-[90vh] object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
