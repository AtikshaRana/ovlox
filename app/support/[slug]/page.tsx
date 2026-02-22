"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { supportData, defaultSupportContent, SupportContent } from "../supportData";
import { Play, Pause } from "lucide-react";

interface VideoPlayerProps {
    videoUrl: string;
    posterUrl: string;
    title: string;
}

function VideoPlayer({ videoUrl, posterUrl, title }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <div className="mb-10 last:mb-0">
            {title && (
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Play size={18} className="text-[#3ca0f0]" />
                    {title}
                </h3>
            )}
            <div
                className="w-full rounded-2xl overflow-hidden bg-black/60 backdrop-blur-sm border border-white/10 relative group shadow-2xl min-h-[300px] max-h-[700px] flex items-center justify-center"
            >
                {/* Custom Overlay - Big Play/Pause Button */}
                <div
                    className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-all z-10 cursor-pointer ${isPlaying ? 'opacity-0 pointer-events-none group-hover:opacity-100' : 'opacity-100'}`}
                    onClick={togglePlay}
                >
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                        {isPlaying ? (
                            <Pause size={40} className="text-white fill-white" />
                        ) : (
                            <Play size={40} className="text-white fill-white ml-2" />
                        )}
                    </div>
                </div>

                {/* Video Tag */}
                <video
                    ref={videoRef}
                    className="max-w-full max-h-[700px] w-auto h-auto object-contain cursor-pointer"
                    poster={posterUrl}
                    key={videoUrl} // Force reload on change
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    playsInline
                    controls
                    onClick={togglePlay}
                >
                    {videoUrl && <source src={videoUrl} type="video/mp4" />}
                </video>
                {!videoUrl && (
                    <div className="absolute inset-x-4 bottom-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs text-slate-300 text-center z-20">
                        Video tutorial for {title} will appear here.
                    </div>
                )}
            </div>
        </div>
    );
}

export default function SupportDetailPage() {
    const { slug } = useParams();
    const router = useRouter();
    const [content, setContent] = useState<SupportContent>(defaultSupportContent);

    useEffect(() => {
        if (slug) {
            const mappedContent = supportData[slug as string];
            if (mappedContent) {
                setContent(mappedContent);
            } else {
                // Fallback: Generate a title if not in data
                const readableTitle = (slug as string)
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
                setContent({
                    ...defaultSupportContent,
                    title: readableTitle
                });
            }
        }
    }, [slug]);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#101828] to-[#1a2b3c] text-white py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors group cursor-pointer"
                >
                    <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="cursor-pointer">Back to Support</span>
                </button>

                {/* Header Section */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 mb-10 shadow-2xl">
                    <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-6">
                        {content.title}
                    </h1>

                    <div className="flex items-center gap-4 text-slate-400 text-sm mb-10">
                        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Support Article</span>
                        <span>•</span>
                        <span>Last Updated: Feb 2026</span>
                    </div>

                    {/* Videos Section */}
                    {content.videos && content.videos.length > 0 ? (
                        <div className="space-y-6">
                            {content.videos.map((vid, idx) => (
                                <VideoPlayer
                                    key={idx}
                                    title={vid.title}
                                    videoUrl={vid.url}
                                    posterUrl={content.posterUrl}
                                />
                            ))}
                        </div>
                    ) : (
                        <VideoPlayer
                            title={content.title}
                            videoUrl={content.videoUrl || ""}
                            posterUrl={content.posterUrl}
                        />
                    )}
                </div>

                {/* Summary Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-xl">
                            <h2 className="text-2xl font-bold mb-4 text-white">Summary</h2>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                {content.summary}
                            </p>

                            <h3 className="text-lg font-semibold text-[#3ca0f0] mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-[#3ca0f0] rounded-full"></span>
                                Implementation Steps
                            </h3>

                            <div className="space-y-6">
                                {content.steps.map((step, index) => (
                                    <div key={index} className="flex gap-4 items-start group">
                                        <div className="w-10 h-10 rounded-xl bg-[#22598e]/30 border border-[#22598e]/50 flex items-center justify-center shrink-0 font-bold text-[#3ca0f0] group-hover:bg-[#22598e] transition-colors">
                                            {index + 1}
                                        </div>
                                        <div className="pt-2">
                                            <p className="text-slate-300 group-hover:text-white transition-colors">{step}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / Related */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-[#22598e] to-[#101828] p-8 rounded-3xl border border-white/20 shadow-xl">
                            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                            <p className="text-slate-200 text-sm mb-6">Our technical team is available to assist you with any advanced queries regarding {content.title}.</p>
                            <Link href="/contact" className="block w-full text-center py-3 bg-white text-[#101828] font-bold rounded-xl hover:bg-slate-200 transition-colors">
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
