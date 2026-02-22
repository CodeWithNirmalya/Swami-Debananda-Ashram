"use client";

import Link from "next/link";
import { Facebook, Youtube, MapPin, Mail, Phone, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation("common");
    return (
        <footer className="bg-saffron-50 pt-20 pb-10 border-t border-saffron-100/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Bio */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-saffron-500 rounded-full flex items-center justify-center text-white font-serif font-bold text-sm">SD</div>
                            <h3 className="font-serif text-xl font-bold text-saffron-900 tracking-tight">
                                {t("nav.home", "Swami Debananda Ashram")}
                            </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm font-medium">
                            {t("footer.description", "A sacred sanctuary dedicated to the realization of Truth and Service to humanity, inspired by the divine teachings of Sadguru Swami Debananda Maharaj.")}
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white border border-saffron-200 flex items-center justify-center text-saffron-700 hover:bg-saffron-600 hover:text-white hover:border-saffron-600 transition-all shadow-sm"
                            >
                                <Facebook size={18} />
                            </Link>
                            <Link
                                href="https://youtube.com"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white border border-saffron-200 flex items-center justify-center text-saffron-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm"
                            >
                                <Youtube size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="font-serif text-lg font-bold text-gray-800 uppercase tracking-widest text-xs">
                            {t("footer.quick_links", "Quick Links")}
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-600 font-medium">
                            {[
                                { name: t("nav.home", "Home"), href: "/" },
                                { name: t("nav.about", "About Maharaj"), href: "/about" },
                                { name: t("nav.activities", "Activities"), href: "/activities" },
                                { name: t("nav.events", "Events"), href: "/events" },
                                { name: t("nav.gallery", "Gallery"), href: "/gallery" },
                                { name: t("nav.diksha_registration", "Diksha Registration"), href: "/diksha" },
                                { name: t("nav.contact", "Contact Us"), href: "/contact" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-saffron-600 transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-saffron-300" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Location */}
                    <div className="space-y-6">
                        <h4 className="font-serif text-lg font-bold text-gray-800 uppercase tracking-widest text-xs">
                            {t("footer.main_ashram", "Main Ashram")}
                        </h4>
                        <ul className="space-y-5 text-sm text-gray-600 font-medium">
                            <li className="flex items-start gap-3 group">
                                <div className="p-2 bg-white rounded-lg group-hover:bg-saffron-100 transition-colors border border-saffron-100">
                                    <MapPin className="w-4 h-4 text-saffron-600 shrink-0" />
                                </div>
                                <a
                                    href="https://maps.app.https://share.google/umrz9J77UwiPoZUNe.gl/YourGoogleMapsLink"
                                    target="_blank"
                                    className="hover:text-saffron-700 leading-relaxed transition-colors pt-1"
                                >
                                    7W25+3C4 Swami Debananda Ashram, Nadra, Krishnapur, Nandara, WB 713407
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg border border-saffron-100">
                                    <Mail className="w-4 h-4 text-saffron-600 shrink-0" />
                                </div>
                                <a href="mailto:info@sdashram.org" className="hover:text-saffron-700">
                                    info@sdashram.org
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg border border-saffron-100">
                                    <Phone className="w-4 h-4 text-saffron-600 shrink-0" />
                                </div>
                                <a href="tel:+919474638702" className="hover:text-saffron-700">
                                    +91 94746 38702
                                </a>
                            </li>
                        </ul>
                        {/* Map Section */}
                        <div className="mt-4 rounded-xl overflow-hidden shadow-md border border-saffron-100 h-32 w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.212046532454!2d87.6961445!3d23.3080084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f905953047a5f7%3A0xc3f905953047a5f7!2sSwami%20Debananda%20Ashram!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="font-serif text-lg font-bold text-gray-800 uppercase tracking-widest text-xs">
                            {t("footer.daily_divyabani", "Daily Divyabani")}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-medium">
                            {t("footer.newsletter_sub", "Subscribe to receive divine quotes and spiritual updates directly in your inbox.")}
                        </p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder={t("footer.enter_email", "Enter your email")}
                                className="w-full h-12 pl-4 pr-12 rounded-xl bg-white border border-saffron-200 outline-none focus:ring-2 focus:ring-saffron-500 /30 focus:border-saffron-500 transition-all text-sm shadow-sm text-gray-900"
                            />
                            <button className="absolute right-1 top-1 w-10 h-10 bg-saffron-600 text-white rounded-lg flex items-center justify-center hover:bg-saffron-700 transition-colors shadow-lg shadow-saffron-200">
                                <Send size={16} />
                            </button>
                        </div>
                        <div className="pt-4 border-t border-saffron-200">
                            <p className="italic text-gray-500 text-[11px] leading-relaxed font-medium">
                                "The purpose of life is to recognize the divine within yourself and others."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-saffron-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    <p>
                        &copy; {new Date().getFullYear()} {t("nav.home", "Swami Debananda Ashram")}. {t("footer.rights_reserved", "All rights reserved.")}
                    </p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-saffron-700 transition-colors">{t("footer.privacy_policy", "Privacy Policy")}</Link>
                        <Link href="/terms" className="hover:text-saffron-700 transition-colors">{t("footer.terms_of_service", "Terms of Service")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
