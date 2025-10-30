import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import AboutSection from "../components/About/AboutSection";
import Clients from "../components/Clients/Clients";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import Reviews from "../components/Reviews/Reviews";
import Awards from "../components/Awards/Awards";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Clients />
      <Services />
      <Portfolio />
      <Reviews />
      <Awards />
      <CTA />
      <Footer />
    </div>
  );
}
