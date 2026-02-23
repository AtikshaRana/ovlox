"use client";

import Header from "../components/header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

const teamMembers = [
    { name: "Deependra Singh Rana", email: "deependra@ovloxindia.com" },
    { name: "Akash Kumar", email: "akash@ovloxindia.com" },
    { name: "Ankan Sharma", email: "ankan@ovloxindia.com" },
    { name: "Anuj Pratap Singh", email: "anuj@ovloxindia.com" },
    { name: "Harsh Kumar", email: "harsh@ovloxindia.com" },
    { name: "Pushpendra Singh", email: "pushpendra@ovloxindia.com" },
];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#101828] text-white selection:bg-[#22598e] selection:text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#22598e]/20 to-transparent pointer-none"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Have a question or need technical assistance? Our team is dedicated to providing you with the best support experience.
                    </p>
                </div>
            </section>

            <section className="py-12 pb-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col gap-16">

                        {/* Contact Info Section */}
                        <div className="space-y-12">

                            {/* Main Contact Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group flex flex-col h-full">
                                    <div className="w-12 h-12 bg-[#22598e]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Phone className="text-[#3ca0f0]" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                                    <div className="space-y-4 flex-grow">
                                        <div className="space-y-1">
                                            <p className="text-xs font-semibold text-[#3ca0f0] uppercase tracking-wider">Direct Line</p>
                                            <a href="tel:+918868830011" className="text-lg text-slate-300 hover:text-white transition-colors block">
                                                +91 8868830011
                                            </a>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs font-semibold text-[#3ca0f0] uppercase tracking-wider">IVR (Sales & Support)</p>
                                            <a href="tel:+918048620284" className="text-lg text-slate-300 hover:text-white transition-colors block">
                                                +91 80486 20284
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <a
                                            href="https://crm.ovloxindia.com/forms/ticket"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-[#22598e]/20 hover:bg-[#22598e]/40 border border-[#22598e]/30 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                                        >
                                            <span className="text-lg">🛠</span> Raise Support Ticket
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group flex flex-col h-full">
                                    <div className="w-12 h-12 bg-[#22598e]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Mail className="text-[#3ca0f0]" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Email Us</h3>
                                    <div className="space-y-4 flex-grow">
                                        <div className="space-y-1">
                                            <p className="text-xs font-semibold text-[#3ca0f0] uppercase tracking-wider">Official Support</p>
                                            <a href="mailto:support@ovloxindia.com" className="text-lg text-slate-300 hover:text-white transition-colors block">
                                                support@ovloxindia.com
                                            </a>
                                        </div>
                                        <p className="text-sm text-slate-500 italic mt-2">
                                            Always mention your order ID or device model for faster assistance.
                                        </p>
                                    </div>
                                    <div className="mt-8 mt-auto">
                                        <a
                                            href="mailto:support@ovloxindia.com"
                                            className="inline-flex items-center gap-2 bg-[#22598e]/20 hover:bg-[#22598e]/40 border border-[#22598e]/30 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                                        >
                                            <Mail size={16} /> Send an Email
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Support Team Directory */}
                            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem]">
                                <div className="flex items-center gap-4 mb-8">
                                    <Globe className="text-[#3ca0f0]" size={28} />
                                    <h3 className="text-2xl font-bold">Support Directory</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                    {teamMembers.map((member, idx) => (
                                        <div key={idx} className="flex flex-col">
                                            <span className="font-semibold text-white">{member.name}</span>
                                            <a href={`mailto:${member.email}`} className="text-sm text-slate-500 hover:text-[#3ca0f0] transition-colors">
                                                {member.email}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4 text-slate-400">
                                    <Clock size={20} />
                                    <span className="text-sm">Response time: Usually within 2-4 hours</span>
                                </div>
                            </div>

                            {/* Office Location placeholder */}
                            <div className="bg-gradient-to-br from-[#22598e]/10 to-transparent border border-white/10 p-8 rounded-3xl flex items-center gap-6">
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                                    <MapPin className="text-[#3ca0f0]" size={32} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Headquarters</h4>
                                    <p className="text-slate-400 text-sm">Ovlox India, Premium Smart Lock Solutions</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
