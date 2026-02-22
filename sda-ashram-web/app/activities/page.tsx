"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    BookOpen,
    Heart,
    Home,
    Wifi,
    Shirt,
    HandHelping,
} from "lucide-react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export default function ActivitiesPage() {
    const { t } = useTranslation("common");
    const [activeTab, setActiveTab] = useState("education");

    const activities = [
        {
            id: "education",
            title: t("activities.education", "Education"),
            icon: BookOpen,
            description: t("activities.education_desc", "Empowering the future generation through value-based education."),
            details: [
                t("activities.education_d1", "Running primary and secondary schools."),
                t("activities.education_d2", "Providing scholarships to needy students."),
                t("activities.education_d3", "Focus on character building and discipline."),
            ],
        },
        {
            id: "healthcare",
            title: t("activities.healthcare", "Health Care"),
            icon: Heart,
            description: t("activities.healthcare_desc", "Providing accessible medical care to the underprivileged."),
            details: [
                t("activities.healthcare_d1", "Charitable Dispensary for general health."),
                t("activities.healthcare_d2", "Eye Care Unit (Free Cataract Screening & Surgery)."),
                t("activities.healthcare_d3", "Regular health check-up camps."),
            ],
        },
        {
            id: "old-age",
            title: t("activities.old_age_home", "Old Age Home"),
            icon: Home,
            description: t("activities.old_age_desc", "A home ensuring dignity and care for the elderly."),
            details: [
                t("activities.old_age_d1", "Residential care for the elderly."),
                t("activities.old_age_d2", "Medical and recreational facilities."),
                t("activities.old_age_d3", "Spiritual environment for peace of mind."),
            ],
        },
        {
            id: "outreach",
            title: t("activities.outreach", "E-Reach out Center"),
            icon: Wifi,
            description: t("activities.outreach_desc", "Bridging the digital divide by providing computer literacy."),
            details: [
                t("activities.outreach_d1", "Computer training centers."),
                t("activities.outreach_d2", "Vocational skill development."),
                t("activities.outreach_d3", "Digital literacy workshops."),
            ],
        },
        {
            id: "clothes",
            title: t("activities.clothes", "Distribution of Clothes"),
            icon: Shirt,
            description: t("activities.clothes_desc", "Regular distribution of clothes and blankets to the needy."),
            details: [
                t("activities.clothes_d1", "Winter garment distribution."),
                t("activities.clothes_d2", "Clothes for flood/disaster victims."),
                t("activities.clothes_d3", "Festive gift distribution."),
            ],
        },
        {
            id: "benevolent",
            title: t("activities.benevolent", "Benevolent Activities"),
            icon: HandHelping,
            description: t("activities.benevolent_desc", "Various other charitable initiatives aimed at community welfare."),
            details: [
                t("activities.benevolent_d1", "Disaster relief operations."),
                t("activities.benevolent_d2", "Feeding the poor (Annadan)."),
                t("activities.benevolent_d3", "Financial aid for critical medical treatments."),
            ],
        },
    ];

    const activeActivity = activities.find((a) => a.id === activeTab);

    return (
        <>
            <PageHeader
                title={t("activities.title", "Our Activities")}
                subtitle={t("activities.subtitle")}
                image="/assets/gallery/Ashram5.jpg"
            />

            <section className="py-20 bg-saffron-50/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar / Tabs */}
                        <div className="lg:w-1/3 space-y-2">
                            {activities.map((activity) => (
                                <button
                                    key={activity.id}
                                    onClick={() => setActiveTab(activity.id)}
                                    className={clsx(
                                        "w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300",
                                        activeTab === activity.id
                                            ? "bg-saffron-600 text-white shadow-lg shadow-saffron-200"
                                            : "bg-white text-gray-600 hover:bg-saffron-100 hover:text-saffron-800"
                                    )}
                                >
                                    <activity.icon size={20} />
                                    <span className="font-semibold">{activity.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="lg:w-2/3">
                            <AnimatePresence mode="wait">
                                {activeActivity && (
                                    <motion.div
                                        key={activeActivity.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-saffron-100"
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600">
                                                <activeActivity.icon size={32} />
                                            </div>
                                            <h2 className="font-serif text-3xl font-bold text-gray-900">
                                                {activeActivity.title}
                                            </h2>
                                        </div>

                                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                            {activeActivity.description}
                                        </p>

                                        <div className="bg-saffron-50 rounded-xl p-6 mb-8">
                                            <h3 className="font-serif font-bold text-gray-900 mb-4">
                                                {t("footer.newsletter_headline", "Key Highlights")}
                                            </h3>
                                            <ul className="space-y-3">
                                                {activeActivity.details.map((detail, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 mt-2 shrink-0" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Button className="rounded-full px-8 bg-saffron-600 hover:bg-saffron-700">
                                            {t("activities.support_cause", "Support This Cause")}
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
