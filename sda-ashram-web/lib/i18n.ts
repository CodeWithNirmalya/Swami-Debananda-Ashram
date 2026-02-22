"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        supportedLngs: ["en", "bn", "hi"],
        detection: {
            order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
            caches: ["localStorage"],
        },
        backend: {
            loadPath: "/locales/{{lng}}/common.json",
        },
        react: {
            useSuspense: false, // For safety in Next.js SSR context if needed
        },
    });

export default i18n;
