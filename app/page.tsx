// app/support/page.jsx (Next.js 13+ App Router)
"use client";
import Header from "./components/header";
import FeatureTabs from "./components/FeatureTabs";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import SupportTeam from "./components/SupportTeam";

export default function SupportPage() {
  return (
    <>
        <Header />
        <Banner/>
        <FeatureTabs />
        <SupportTeam/>
        <Footer />
    </>
  );
}
