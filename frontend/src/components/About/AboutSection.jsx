import React from "react";
import "./AboutSection.css";
import { motion } from "framer-motion";
import aboutVideo from "../../assets/showreel.mp4"; 

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.h2
          className="about-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Creative <br />
          <em>mission</em> <br />
          in Motion
        </motion.h2>

        <div className="about-line">
          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              fill="none"
              stroke="#0050ff"
              strokeWidth="20"
              d="M0,160 C360,40 1080,280 1440,160"
            />
          </svg>
        </div>

        <div className="about-video">
          <video src={aboutVideo} autoPlay loop muted playsInline />
        </div>

        <div className="about-content">
          <p>
            All in Motion is a global creative production company. Our creative
            endeavours are underpinned by an empathy-driven pursuit of emotions.
          </p>
          <p>
            We provide a broad spectrum of solutions from bespoke deliveries to
            integrated campaigns thanks to an involved in-house team.
          </p>
        </div>

        <button className="about-btn">more about us</button>
      </div>
    </section>
  );
}
