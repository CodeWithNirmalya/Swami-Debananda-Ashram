"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Send, MapPin } from "lucide-react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const [ashramSubOpen, setAshramSubOpen] = useState(false);
    const pathname = usePathname();
    const { t } = useTranslation("common");

    const navItems = [
        { name: t("nav.home", "Home"), href: "/" },
        { name: t("nav.about", "About"), href: "/about" },
        { name: t("nav.activities", "Activities"), href: "/activities" },
        { name: t("nav.school", "School"), href: "/school" },
        { name: t("nav.eye_day_care", "Eye Day Care"), href: "/eye-day-care" },
        { name: t("nav.divine_message", "Divine Message"), href: "/divine-message" },
        { name: t("nav.donation", "Donation"), href: "/donation" },
    ];

    const ashramBranches = [
        { name: "Ashram Kenjra", href: "/ashram/kenjra" },
        { name: "Ashram Rambati", href: "/ashram/rambati" },
        { name: "Ashram Gangasagar", href: "/ashram/gangasagar" },
        { name: "Ashram Rajpur Sonarpur", href: "/ashram/sonarpur" },
        { name: "Ashram Patuli", href: "/ashram/patuli" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setMoreOpen(false);
    }, [pathname]);

    const isHome = pathname === "/";

    return (
        <nav
            className={clsx(
                "fixed left-0 right-0 z-50 transition-all duration-300 top-0",
                scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-md py-3"
                    : isHome
                        ? "bg-transparent py-5"
                        : "bg-white py-4 shadow-sm"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <div className="w-10 h-10 bg-saffron-500 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">
                        SD
                    </div>
                    <span className={clsx(
                        "font-serif text-xl font-bold tracking-wide",
                        scrolled || !isHome ? "text-saffron-900" : "text-white"
                    )}>
                        Swami Debananda Ashram
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "font-medium text-sm tracking-wide transition-colors relative group",
                                scrolled || !isHome ? "text-gray-700 hover:text-saffron-600" : "text-white/90 hover:text-white"
                            )}
                        >
                            {item.name}
                            <span className={clsx(
                                "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                                scrolled || !isHome ? "bg-saffron-500" : "bg-white"
                            )} />
                        </Link>
                    ))}

                    {/* More Dropdown */}
                    <div className="relative group"
                        onMouseEnter={() => setMoreOpen(true)}
                        onMouseLeave={() => setMoreOpen(false)}
                    >
                        <button className={clsx(
                            "flex items-center gap-1 font-medium text-sm tracking-wide transition-colors outline-none",
                            scrolled || !isHome ? "text-gray-700 hover:text-saffron-600" : "text-white/90 hover:text-white"
                        )}>
                            {t("nav.more", "More")} <ChevronDown size={14} className={clsx("transition-transform", moreOpen && "rotate-180")} />
                        </button>

                        <AnimatePresence>
                            {moreOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full right-0 lg:left-auto mt-2 w-64 bg-white rounded-xl shadow-2xl border border-stone-100 py-3 overflow-hidden backdrop-blur-xl"
                                >
                                    <Link href="/diksha" className="block px-6 py-2 text-sm text-gray-700 hover:bg-saffron-50 hover:text-saffron-700 transition-colors border-b border-gray-50 pb-3 mb-1 font-bold italic">
                                        {t("nav.diksha_registration", "Diksha Registration")}
                                    </Link>

                                    <div className="px-6 py-2">
                                        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2 block">{t("nav.our_ashrams", "Our Ashrams")}</span>
                                        {ashramBranches.map(branch => (
                                            <Link key={branch.href} href={branch.href} className="block py-1.5 text-sm text-gray-600 hover:text-saffron-600 transition-colors font-medium">
                                                {branch.name}
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="pt-2 mt-2 border-t border-gray-50 px-6">
                                        <Link href="/meditation" className="block py-1.5 text-sm text-gray-600 hover:text-saffron-600 font-medium">{t("nav.meditation", "Meditation")}</Link>
                                        <Link href="/library" className="block py-1.5 text-sm text-gray-600 hover:text-saffron-600 font-medium">{t("nav.digital_library", "Digital Library")}</Link>
                                        <Link href="/gallery" className="block py-1.5 text-sm text-gray-600 hover:text-saffron-600">{t("nav.gallery", "Gallery")}</Link>
                                        <Link href="/volunteer" className="block py-1.5 text-sm text-gray-600 hover:text-saffron-600">{t("nav.volunteer", "Volunteer")}</Link>
                                        <Link href="/contact" className="block py-1.5 text-sm text-gray-600 hover:text-saffron-600">{t("nav.contact", "Contact")}</Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className={clsx(scrolled || !isHome ? "text-gray-900" : "text-white")}>
                        <LanguageSwitcher className={scrolled || !isHome ? "text-gray-900" : "text-white"} />
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-2 lg:hidden">
                    <div className={clsx(scrolled || !isHome ? "text-gray-900" : "text-white")}>
                        <LanguageSwitcher className={scrolled || !isHome ? "text-gray-900" : "text-white"} />
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={clsx("z-50 p-2", scrolled || !isHome || isOpen ? "text-gray-900" : "text-white")}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 h-screen overflow-y-auto"
                        >
                            <div className="space-y-4">
                                {navItems.map((item) => (
                                    <Link key={item.href} href={item.href} className="text-xl font-serif text-gray-800 hover:text-saffron-600 block py-2 border-b border-gray-50">
                                        {item.name}
                                    </Link>
                                ))}

                                <Link href="/diksha" className="text-xl font-serif text-saffron-700 block py-2 border-b border-gray-50 font-bold">
                                    {t("nav.diksha_registration", "Diksha Registration")}
                                </Link>

                                <div className="py-2">
                                    <button
                                        onClick={() => setAshramSubOpen(!ashramSubOpen)}
                                        className="w-full flex items-center justify-between text-xl font-serif text-gray-800 font-bold"
                                    >
                                        {t("nav.our_ashrams", "Our Ashrams")} <ChevronDown size={20} className={ashramSubOpen ? "rotate-180" : ""} />
                                    </button>

                                    <AnimatePresence>
                                        {ashramSubOpen && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 mt-2 space-y-2">
                                                {ashramBranches.map(branch => (
                                                    <Link key={branch.href} href={branch.href} className="block text-lg text-gray-600 py-1 font-medium">
                                                        {branch.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <Link href="/meditation" className="text-xl font-serif text-gray-800 block py-2">{t("nav.meditation", "Meditation")}</Link>
                                <Link href="/library" className="text-xl font-serif text-gray-800 block py-2">{t("nav.digital_library", "Digital Library")}</Link>
                                <Link href="/gallery" className="text-xl font-serif text-gray-800 block py-2">{t("nav.gallery", "Gallery")}</Link>
                                <Link href="/volunteer" className="text-xl font-serif text-gray-800 block py-2">{t("nav.volunteer", "Volunteer")}</Link>
                                <Link href="/contact" className="text-xl font-serif text-gray-800 block py-2 border-b border-gray-50">{t("nav.contact", "Contact")}</Link>
                            </div>

                            <div className="mt-8 p-6 bg-stone-50 rounded-2xl flex items-center justify-center text-center">
                                <p className="text-xs text-gray-500 font-serif italic">
                                    "Spirituality is the journey from self to the divine."
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};
