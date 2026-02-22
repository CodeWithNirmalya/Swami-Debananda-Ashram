"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
    Play,
    Pause,
    RefreshCw,
    Volume2,
    Wind,
    Clock,
    Music
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

type BreathPhase = "inhale" | "hold" | "exhale";

const meditationTracks = [
    {
        title: "Satyajugasrita Naamgan",
        artist: "Swami Debananda Ashram",
        url: "/assets/music/Swami Debananda Ashram Satyajugasrita Naamgan Narayana Parabeda.mp3"
    },
    {
        title: "Om Chanting",
        artist: "Spiritual Peace",
        url: "/assets/music/Om Enchanting and relaxing sound 5 Minutes_ 8D Beast _ Full song.mp3"
    }
];

export default function MeditationPage() {
    const { t } = useTranslation("common");
    const [isPlaying, setIsPlaying] = useState(false);
    const [phase, setPhase] = useState<BreathPhase>("inhale");
    const [timer, setTimer] = useState(0);
    const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Breathing Animation Logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setPhase((prev) => {
                    if (prev === "inhale") return "hold";
                    if (prev === "hold") return "exhale";
                    return "inhale";
                });
            }, 4000); // 4 seconds per phase
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    // Timer Logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const handleTogglePlay = () => {
        const audio = document.getElementById('meditation-audio') as HTMLAudioElement;
        if (!isPlaying) {
            audio?.play();
        } else {
            audio?.pause();
        }
        setIsPlaying(!isPlaying);
    };

    const handleReset = () => {
        const audio = document.getElementById('meditation-audio') as HTMLAudioElement;
        if (audio) {
            audio.currentTime = 0;
            audio.pause();
        }
        setIsPlaying(false);
        setTimer(0);
        setPhase("inhale");
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <main className="min-h-screen bg-stone-50 pb-20">
            <PageHeader
                title={t("nav.meditation", "Meditation")}
                subtitle={t("meditation.subtitle", "Find your inner peace through divine chanting and mindfulness.")}
                image="/assets/gallery/Maharaj100.jpg"
            />

            <div className="container mx-auto px-4 mt-12 mb-20">
                <div className="max-w-4xl mx-auto">
                    {/* Breathing Section */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100 flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-saffron-400 via-orange-500 to-red-500 opacity-30" />

                        {!isPlaying && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mb-8"
                            >
                                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">{t("meditation.ready", "Ready to begin?")}</h2>
                                <p className="text-gray-500">{t("meditation.focus", "Focus on your breath and let the divine vibrations guide you.")}</p>
                            </motion.div>
                        )}

                        {/* Breathing Visualization */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-12">
                            {/* Outer Pulse */}
                            <motion.div
                                animate={isPlaying ? {
                                    scale: phase === 'inhale' ? 1.4 : phase === 'exhale' ? 1 : 1.4,
                                    opacity: phase === 'inhale' ? 0.3 : phase === 'exhale' ? 0.1 : 0.4
                                } : { scale: 1, opacity: 0.2 }}
                                transition={{ duration: phase === 'hold' ? 4 : 4, ease: "easeInOut" }}
                                className="absolute inset-0 bg-saffron-400 rounded-full blur-3xl"
                            />

                            {/* OM Icon */}
                            <motion.div
                                animate={isPlaying ? {
                                    scale: phase === 'inhale' ? 1.2 : phase === 'exhale' ? 0.9 : 1.1,
                                    rotate: phase === 'hold' ? [0, 5, -5, 0] : 0
                                } : { scale: 1 }}
                                transition={{ duration: 4, ease: "easeInOut" }}
                                className="relative z-10 text-saffron-600 drop-shadow-2xl"
                            >
                                <span className="text-8xl md:text-9xl font-serif select-none">ॐ</span>
                            </motion.div>

                            {/* Breathing Ring */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="45%"
                                    fill="none"
                                    stroke="#fde68a"
                                    strokeWidth="4"
                                    strokeDasharray="10 10"
                                    className="opacity-20"
                                />
                                <motion.circle
                                    cx="50%"
                                    cy="50%"
                                    r="45%"
                                    fill="none"
                                    stroke="#ea580c"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    animate={{
                                        strokeDasharray: isPlaying ? ["0 1000", "282 1000"] : "0 1000"
                                    }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                    className="drop-shadow-[0_0_8px_rgba(234,88,12,0.5)]"
                                />
                            </svg>
                        </div>

                        {/* Breathing Text */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={phase}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="h-12 mb-8"
                            >
                                <span className="text-2xl md:text-3xl font-serif font-medium text-saffron-800 tracking-wide uppercase">
                                    {isPlaying ? (
                                        phase === 'inhale' ? t("meditation.inhale", "Breathe In...") :
                                            phase === 'hold' ? t("meditation.hold", "Hold...") :
                                                t("meditation.exhale", "Breathe Out...")
                                    ) : ""}
                                </span>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="flex flex-wrap items-center justify-center gap-6 z-10">
                            <Button
                                onClick={handleTogglePlay}
                                className={clsx(
                                    "h-16 px-10 rounded-full text-lg font-serif transition-all hover:scale-105 shadow-xl",
                                    isPlaying ? "bg-red-600 hover:bg-red-700 text-white" : "bg-saffron-600 hover:bg-saffron-700 text-white"
                                )}
                            >
                                {isPlaying ? <Pause className="mr-2 fill-current" /> : <Play className="mr-2 fill-current" />}
                                {isPlaying ? t("common.cancel", "Stop") : t("common.get_started", "Start Session")}
                            </Button>

                            <Button
                                onClick={handleReset}
                                variant="outline"
                                className="h-16 w-16 rounded-full border-stone-200 text-stone-600 hover:bg-stone-50"
                            >
                                <RefreshCw size={24} />
                            </Button>
                        </div>
                    </div>

                    {/* Features Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-saffron-100 rounded-2xl flex items-center justify-center text-saffron-600 mb-4">
                                <Clock size={24} />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-1">{t("meditation.session_time", "Session Time")}</h4>
                            <p className="text-2xl font-serif font-bold text-saffron-700">{formatTime(timer)}</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-saffron-100 rounded-2xl flex items-center justify-center text-saffron-600 mb-4">
                                <Wind size={24} />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-1">{t("meditation.method", "Method")}</h4>
                            <p className="text-sm text-gray-500 px-4">{t("meditation.box_breathing", "4-4-4 Box Breathing for focus & calm.")}</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-saffron-100 rounded-2xl flex items-center justify-center text-saffron-600 mb-4">
                                <Volume2 size={24} />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-1">{t("meditation.chant", "Chant")}</h4>
                            <p className="text-sm text-gray-500 px-4">{t("meditation.divine_vibes", "Divine vibrations to purify the soul.")}</p>
                        </div>
                    </div>

                    {/* Audio Track Selector */}
                    <div className="mt-12 bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Music size={20} className="text-saffron-600" />
                            {t("meditation.now_playing", "Now Playing")}
                        </h3>
                        <div className="space-y-4">
                            {meditationTracks.map((track, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setCurrentTrackIdx(idx);
                                        if (isPlaying) {
                                            const audio = document.getElementById('meditation-audio') as HTMLAudioElement;
                                            audio.src = track.url;
                                            audio.play();
                                        }
                                    }}
                                    className={clsx(
                                        "w-full flex items-center justify-between p-4 rounded-2xl border transition-all",
                                        currentTrackIdx === idx
                                            ? "border-saffron-300 bg-saffron-50/50 shadow-sm"
                                            : "border-stone-100 hover:border-saffron-200 hover:bg-stone-50/50"
                                    )}
                                >
                                    <div className="flex items-center gap-4 text-left">
                                        <div className={clsx(
                                            "w-10 h-10 rounded-full flex items-center justify-center",
                                            currentTrackIdx === idx ? "bg-saffron-600 text-white" : "bg-stone-100 text-stone-400"
                                        )}>
                                            {currentTrackIdx === idx && isPlaying ? (
                                                <div className="flex items-end gap-0.5 h-4 mb-0.5">
                                                    <motion.div animate={{ height: [4, 12, 6, 14, 4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-white rounded-full" />
                                                    <motion.div animate={{ height: [8, 4, 14, 6, 8] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-white rounded-full" />
                                                    <motion.div animate={{ height: [6, 14, 4, 12, 6] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1 bg-white rounded-full" />
                                                </div>
                                            ) : <Play fill="currentColor" size={16} />}
                                        </div>
                                        <div>
                                            <p className={clsx("font-bold", currentTrackIdx === idx ? "text-saffron-900" : "text-gray-700")}>{track.title}</p>
                                            <p className="text-xs text-gray-400 capitalize">{track.artist}</p>
                                        </div>
                                    </div>
                                    {currentTrackIdx === idx && (
                                        <div className="px-3 py-1 rounded-full bg-saffron-100 text-[10px] font-bold text-saffron-700 uppercase tracking-widest">
                                            Active
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <audio id="meditation-audio" src={meditationTracks[currentTrackIdx].url} loop />
        </main>
    );
}
