"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function DivineMessagePage() {
    const { t } = useTranslation("common");
    const [showAll, setShowAll] = useState(false);

    const quotes = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        text: t(`quotes.q${i + 1}`),
        author: t("quotes.author"),
        role: t("quotes.role"),
    }));

    const visibleQuotes = showAll ? quotes : quotes.slice(0, 6);

    return (
        <>
            <PageHeader
                title={t("quotes.title")}
                subtitle={t("quotes.subtitle")}
                image="/assets/divine-message/image.png"
                contain={false}
            />

            <section className="py-20 bg-saffron-50/20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <AnimatePresence mode="popLayout">
                            {visibleQuotes.map((msg, index) => (
                                <motion.div
                                    key={msg.id}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, delay: showAll && index >= 6 ? (index - 6) * 0.1 : 0 }}
                                    className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-saffron-100 relative group hover:shadow-md transition-all"
                                >
                                    <div className="absolute top-6 left-6 text-saffron-200">
                                        <Quote size={48} className="transform rotate-180" />
                                    </div>

                                    <div className="relative z-10 pt-8">
                                        <p className="font-serif text-xl md:text-2xl text-gray-800 leading-relaxed italic mb-6">
                                            "{msg.text}"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-saffron-100" />
                                            <div>
                                                <p className="font-bold text-gray-900 text-sm">
                                                    {msg.author}
                                                </p>
                                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                                    {msg.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="mt-12 text-center">
                        <Button
                            variant="premium"
                            size="lg"
                            onClick={() => setShowAll(!showAll)}
                            className="rounded-full px-8 gap-2 group transition-all"
                        >
                            {showAll ? (
                                <>
                                    {t("common.show_less")}
                                    <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                                </>
                            ) : (
                                <>
                                    {t("common.read_more")}
                                    <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
