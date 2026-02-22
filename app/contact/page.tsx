"use client";

import Header from "../components/header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { useState } from "react";

const teamMembers = [
    { name: "Deependra Singh Rana", email: "deependra@ovloxindia.com" },
    { name: "Akash Kumar", email: "akash@ovloxindia.com" },
    { name: "Ankan Sharma", email: "ankan@ovloxindia.com" },
    { name: "Anuj Pratap Singh", email: "anuj@ovloxindia.com" },
    { name: "Harsh Kumar", email: "harsh@ovloxindia.com" },
    { name: "Pushpendra Singh", email: "pushpendra@ovloxindia.com" },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message! Our team will get back to you shortly.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

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
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Form Section */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
                            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#22598e] transition-all placeholder:text-slate-600"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#22598e] transition-all placeholder:text-slate-600"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#22598e] transition-all placeholder:text-slate-600"
                                        placeholder="How can we help?"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#22598e] transition-all placeholder:text-slate-600 resize-none"
                                        placeholder="Tell us more about your issue..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#22598e] to-[#3ca0f0] text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-[#22598e]/20 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                                >
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Section */}
                        <div className="space-y-12">

                            {/* Main Contact Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                    <div className="w-12 h-12 bg-[#22598e]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Phone className="text-[#3ca0f0]" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Call Us</h3>
                                    <a href="tel:+918868830011" className="text-slate-400 hover:text-white transition-colors">
                                        +91 8868830011
                                    </a>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                    <div className="w-12 h-12 bg-[#22598e]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Mail className="text-[#3ca0f0]" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                                    <a href="mailto:support@ovloxindia.com" className="text-slate-400 hover:text-white transition-colors">
                                        support@ovloxindia.com
                                    </a>
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
