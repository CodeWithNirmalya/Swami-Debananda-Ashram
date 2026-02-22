"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Crown, Building2, Globe } from "lucide-react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
    const { t } = useTranslation("common");
    const [openSection, setOpenSection] = useState<string | null>("maharaj");

    const sections = [
        {
            id: "maharaj",
            title: t("about.maharaj_title", "Swami Debananda Maharaj"),
            icon: Crown,
            content: (
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>{t("about.maharaj_p1")}</p>
                    <p>{t("about.maharaj_p2")}</p>
                    <p>{t("about.maharaj_p3")}</p>
                </div>
            ),
        },
        {
            id: "ashram",
            title: t("about.ashram_title", "Swami Debananda Ashram"),
            icon: Building2,
            content: (
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Established as a sanctuary for peace and spiritual growth, Swami
                        Debananda Ashram provides a serene environment for meditation, prayer,
                        and self-reflection. It is a place where individuals can retreat from
                        the chaos of daily life and reconnect with their inner selves.
                    </p>
                </div>
            ),
        },
        {
            id: "mission",
            title: t("about.mission_title", "Swami Debananda Mission"),
            icon: Globe,
            content: (
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        The Swami Debananda Mission is the philanthropic arm of the organization,
                        committed to social welfare and humanitarian service.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <>
            <PageHeader
                title={t("about.title", "About Us")}
                subtitle={t("about.subtitle")}
                image="/assets/gallery/Maharaj6.jpg"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="space-y-6">
                        {sections.map((section) => (
                            <motion.div
                                key={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border border-saffron-100 rounded-2xl overflow-hidden shadow-sm bg-white"
                            >
                                <button
                                    onClick={() =>
                                        setOpenSection(openSection === section.id ? null : section.id)
                                    }
                                    className={clsx(
                                        "w-full flex items-center justify-between p-6 transition-colors",
                                        openSection === section.id
                                            ? "bg-saffron-50 text-saffron-900"
                                            : "bg-white hover:bg-gray-50 text-gray-800"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={clsx(
                                                "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                                                openSection === section.id
                                                    ? "bg-saffron-200 text-saffron-800"
                                                    : "bg-gray-100 text-gray-500"
                                            )}
                                        >
                                            <section.icon size={20} />
                                        </div>
                                        <span className="font-serif text-xl font-bold">
                                            {section.title}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        className={clsx(
                                            "transition-transform duration-300",
                                            openSection === section.id ? "rotate-180" : "rotate-0"
                                        )}
                                    />
                                </button>

                                <AnimatePresence>
                                    {openSection === section.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 border-t border-saffron-100/50 bg-saffron-50/30">
                                                {section.content}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
