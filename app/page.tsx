// app/support/page.jsx (Next.js 13+ App Router)
"use client";
import Header from "./components/header";
import FeatureTabs from "./components/FeatureTabs";
import Footer from "./components/Footer";
import Image from "next/image";

export default function SupportPage() {
  return (
    <>
   
    <div className="min-h-screen bg-gray-100">
      <Header/>


      <section className="heroBanner relative py-16 flex items-center min-h-[500px] xl:min-h-[700px]">

        {/* Background Image */}
        <div className="absolute inset-0 ">
          <Image
            src="/ovlox.jpg"
            alt="Hero Banner Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className=" text-white ">

            <div className="max-w-2xl mr-auto px-4 bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg text-white ">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Ovlox India Support Team
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Welcome to Ovlox India Customer Support
              </h2>

              <p className="text-lg text-2xl font-bold mb-4 leading-relaxed">
                At Ovlox India, we are committed to providing reliable, high-quality security solutions for
                hotels, homes, and workplaces. Our support page is designed to help you find answers, learn
                product features, and resolve any issues with your Ovlox smart locks and accessories.
              </p>
            </div>

          </div>
        </div>
      </section>
    
      <FeatureTabs />
    </div>

    <Footer />
    </>
  );
}
