"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import EditorialStories from "@/components/EditorialStories";
import ShopSection from "@/components/ShopSection";
import AccessoriesSection from "@/components/AccessoriesSection";
import AboutMission from "@/components/AboutMission";
import SellSection from "@/components/SellSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <HeroBanner />
      <EditorialStories />
      <ShopSection selectedFilter={selectedFilter} onSelectFilter={setSelectedFilter} />
      <AccessoriesSection />
      <AboutMission />
      <SellSection />
      <Footer />
    </main>
  );
}
