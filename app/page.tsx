"use client";
import { Suspense } from "react";
import FeatureTabs from "./components/FeatureTabs";
import Banner from "./components/Banner";
import SupportTeam from "./components/SupportTeam";

export default function SupportPage() {
  return (
    <>
      <Banner />
      <Suspense fallback={<div>Loading support features...</div>}>
        <FeatureTabs />
      </Suspense>
      <SupportTeam />
    </>
  );
}
