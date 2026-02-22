import { PageHeader } from "@/components/layout/PageHeader";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import fs from "fs";
import path from "path";

export default function GalleryPage() {
    const galleryDir = path.join(process.cwd(), "public/assets/gallery");
    let images: string[] = [];

    try {
        images = fs.readdirSync(galleryDir).filter((file) => {
            return /\.(jpg|jpeg|png|webp)$/i.test(file);
        });
    } catch (err) {
        console.error("Error reading gallery directory:", err);
    }

    return (
        <>
            <PageHeader
                title="Photo Gallery"
                subtitle="Glimpses of spiritual life, ashram activities, and divine moments."
                image="/assets/gallery/Ashram.jpg" // Fallback to one of the images
            />
            <div className="bg-white min-h-screen">
                <GalleryGrid images={images} />
            </div>
        </>
    );
}
