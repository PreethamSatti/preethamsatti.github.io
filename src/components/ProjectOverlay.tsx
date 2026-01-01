import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface ProjectOverlayProps {
    project: {
        title: string;
        category: string;
        image: string;
        caseStudy?: {
            subtitle?: string;
            details: string;
            image?: string;
            gallery?: string[];
        };
    } | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectOverlay = ({ project, isOpen, onClose }: ProjectOverlayProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    const galleryImages = project.caseStudy?.gallery && project.caseStudy.gallery.length > 0
        ? project.caseStudy.gallery
        : [project.caseStudy?.image || project.image];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex justify-center overflow-y-auto bg-background/80 backdrop-blur-sm p-4 md:p-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0"
                        aria-hidden="true"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-5xl bg-background border border-border rounded-lg shadow-2xl my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                            aria-label="Close overlay"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col">
                            {/* Image Carousel Section */}
                            <div className="w-full bg-muted overflow-hidden rounded-t-lg bg-black/5 relative group">
                                <div className="overflow-hidden" ref={emblaRef}>
                                    <div className="flex">
                                        {galleryImages.map((img, index) => (
                                            <div className="flex-[0_0_100%] min-w-0 bg-black/5 flex items-center justify-center pointer-events-none" key={index}>
                                                <img
                                                    src={img}
                                                    alt={`${project.title} image ${index + 1}`}
                                                    className="w-auto h-auto max-w-full max-h-[70vh] object-contain block select-none"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {galleryImages.length > 1 && (
                                    <>
                                        <button
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent"
                                            onClick={scrollPrev}
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent"
                                            onClick={scrollNext}
                                        >
                                            <ChevronRight size={24} />
                                        </button>

                                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                            {scrollSnaps.map((_, index) => (
                                                <button
                                                    key={index}
                                                    className={`w-2 h-2 rounded-full transition-colors ${index === selectedIndex ? 'bg-primary' : 'bg-primary/30'}`}
                                                    onClick={() => scrollTo(index)}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="p-6 md:p-10 lg:p-12 space-y-8">
                                <div className="space-y-4 border-b border-border pb-8">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                                            {project.title}
                                        </h2>
                                        <span className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium w-fit">
                                            {project.category}
                                        </span>
                                    </div>
                                    {project.caseStudy?.subtitle && (
                                        <p className="font-body text-muted-foreground text-sm md:text-base">
                                            {project.caseStudy.subtitle}
                                        </p>
                                    )}
                                </div>

                                {project.caseStudy?.details && (
                                    <div className="prose prose-neutral dark:prose-invert max-w-none font-body">
                                        <div className="whitespace-pre-line leading-relaxed text-muted-foreground">
                                            {project.caseStudy.details}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectOverlay;
