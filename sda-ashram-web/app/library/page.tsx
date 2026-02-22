"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Book, ExternalLink, Bookmark } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DigitalLibraryPage() {
    const { t } = useTranslation("common");
    const [searchQuery, setSearchQuery] = useState("");

    const books = [
        {
            title: t("library.gita_title", "Bhagavad Gita"),
            author: t("library.vyasa", "Ved Vyasa"),
            description: t("library.gita_desc", "The sacred conversation between Lord Krishna and Arjuna."),
            image: "https://images.unsplash.com/photo-1614084120935-86641579be40?auto=format&fit=crop&q=80&w=400",
            link: "https://www.holy-bhagavad-gita.org/",
            category: t("library.scripture", "Scripture")
        },
        {
            title: t("library.mahabharata_title", "Mahabharata"),
            author: t("library.vyasa", "Ved Vyasa"),
            description: t("library.mahabharata_desc", "The epic tale of the Kurukshetra War and the fates of the Kaurava and the Pandava princes."),
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
            link: "https://www.sacred-texts.com/hin/maha/index.htm",
            category: t("library.epic", "Epic")
        },
        {
            title: t("library.ramayana_title", "Ramayana"),
            author: t("library.valmiki", "Valmiki"),
            description: t("library.ramayana_desc", "The journey of Lord Rama, exploring his life, exile, and victory over Ravana."),
            image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=400",
            link: "https://www.sacred-texts.com/hin/rama/index.htm",
            category: t("library.epic", "Epic")
        },
        {
            title: t("library.puranas_title", "The Puranas"),
            author: t("library.vyasa", "Ved Vyasa"),
            description: t("library.puranas_desc", "A vast genre of Indian literature about a wide range of topics, particularly myths, legends and other traditional lore."),
            image: "https://images.unsplash.com/photo-1532012197267-da24d127e765?auto=format&fit=crop&q=80&w=400",
            link: "https://www.sacred-texts.com/hin/index.htm#purana",
            category: t("library.scripture", "Scripture")
        }
    ];

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-stone-50 pb-20">
            <PageHeader
                title={t("nav.digital_library", "Digital Library")}
                subtitle={t("library.subtitle", "Explore the timeless wisdom of ancient scriptures and spiritual literature.")}
                image="/assets/gallery/Maharaj6.jpg"
            />

            <div className="container mx-auto px-4 -mt-8 relative z-10">
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-16">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-stone-400 group-focus-within:text-saffron-500 transition-colors" />
                        </div>
                        <Input
                            type="text"
                            placeholder={t("library.search_placeholder", "Search for books, scriptures, authors...")}
                            className="h-16 pl-12 pr-4 rounded-2xl border-stone-200 bg-white shadow-xl focus-visible:ring-saffron-500 text-lg transition-all"
                            value={searchQuery}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book, idx) => (
                                <motion.div
                                    key={book.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-shadow group h-full flex flex-col"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={book.image}
                                            alt={book.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-saffron-700 uppercase tracking-widest shadow-sm">
                                                {book.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-1 group-hover:text-saffron-700 transition-colors line-clamp-1">{book.title}</h3>
                                        <p className="text-sm text-saffron-600 font-medium mb-4">{book.author}</p>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                            {book.description}
                                        </p>
                                        <Button
                                            asChild
                                            className="w-full h-12 rounded-xl bg-stone-900 hover:bg-saffron-600 transition-colors gap-2"
                                        >
                                            <a href={book.link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={18} />
                                                {t("library.read_online", "Read Online")}
                                            </a>
                                        </Button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-300">
                                    <Book size={40} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{t("library.no_results", "No books found matching your search.")}</h3>
                            </div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Contribution Section */}
                <div className="mt-20 bg-saffron-600 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl shadow-saffron-200">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/20 rounded-full -ml-32 -mb-32 blur-3xl" />

                    <div className="relative z-10 max-w-3xl">
                        <Bookmark className="mb-6 opacity-80" size={40} />
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t("library.expanding", "Expanding Our Library")}</h2>
                        <p className="text-lg text-saffron-50 mb-8 leading-relaxed">
                            {t("library.expanding_desc", "We are continuously adding more scriptures, spiritual discourses, and books to our digital collection. If you have a suggestion or a book to contribute, please let us know.")}
                        </p>
                        <Button className="h-14 px-8 rounded-full bg-white text-saffron-700 hover:bg-stone-50 text-base font-bold">
                            {t("library.request_book", "Request a Book")}
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
