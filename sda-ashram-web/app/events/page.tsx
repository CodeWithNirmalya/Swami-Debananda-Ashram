"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { CountdownTimer } from "@/components/events/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

// Initial target date mostly for demo, can be updated
const HOLIKA_DAHAN_DATE = "2026-03-03T00:00:00";

const events = [
    {
        id: 1,
        title: "HOLIKA_DAHAN",
        date: "March 03, 2026",
        time: "All Day",
        location: "SDA Ashram Central",
        description: "Join us for the grand celebration of Holi with colours, sweets, bhajan, and special puja.",
        image: "/assets/home/Cover Photo.jpg", // Fallback
    },
    {
        id: 2,
        title: "Guru Purnima",
        date: "July 24, 2026",
        time: "8:00 AM - 8:00 PM",
        location: "All Branches",
        description: "A day to honor the Guru. Special discourse and community feast (Bhandara) will be organized.",
        image: "/assets/home/Cover Photo.jpg", // Fallback
    },
    {
        id: 3,
        title: "Annual Medical Camp",
        date: "Aug 10, 2026",
        time: "9:00 AM - 4:00 PM",
        location: "SDA School Campus",
        description: "Free medical check-up camp for general health, eye care, and dental issues.",
        image: "/assets/school/School1.jpg", // Fallback
    },
];

export default function EventsPage() {
    return (
        <>
            <PageHeader
                title="Upcoming Events"
                subtitle="Join us in our celebrations and service activities."
                image="/assets/gallery/Ashram3.jpg"
            />

            {/* Featured Event / Countdown */}
            <section className="py-20 bg-saffron-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
                        NEXT BIG EVENT
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8">
                        HOLIKA-DAHAN CELEBRATION
                    </h2>
                    <CountdownTimer targetDate={HOLIKA_DAHAN_DATE} />
                    <div className="mt-12">
                        <Button size="lg" className="bg-white text-saffron-700 hover:bg-saffron-50 rounded-full px-8">
                            View Event Details
                        </Button>
                    </div>
                </div>
            </section>

            {/* Event List */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow"
                            >
                                {/* Date Badge (Mobile) / Image */}
                                <div className="md:w-1/3 relative h-48 md:h-auto bg-gray-200">
                                    {/* In a real app, use next/image here with event.image */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-saffron-50 text-saffron-800 p-4 text-center">
                                        <span className="text-3xl font-bold font-serif">{event.date.split(',')[0]}</span>
                                        <span className="text-sm uppercase tracking-wider">{event.date.split(',')[1]}</span>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
                                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-saffron-600 transition-colors">
                                        {event.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Clock size={16} className="text-saffron-500" />
                                            {event.time}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={16} className="text-saffron-500" />
                                            {event.location}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {event.description}
                                    </p>

                                    <Button variant="outline" className="self-start">
                                        Register / Learn More
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
