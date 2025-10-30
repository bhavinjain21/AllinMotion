import React from "react";
import "./Services.css";

const services = [
  "Motion Graphics",
  "Crafting",
  "Virtual Reality 360°",
  "Live Action",
  "3D Animation",
  "Graphic Design",
  "Typography Animation",
  "Editing",
  "Voiceover",
  "SMM",
];

export default function Services() {
  return (
    <section className="services-section" data-aos="fade-up">
      <div className="services-top">
        <div className="services-heading">
          <h2>
            Elevate your <em>Storytelling</em>
          </h2>
        </div>

        <div className="services-line">
          <svg
            viewBox="0 0 800 200"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C200,0 600,200 800,100"
              fill="transparent"
              stroke="#246bff"
              strokeWidth="17"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="services-right">
          <div className="services-list">
            {services.map((s, i) => (
              <a href="#" key={i} className="service-item">
                [ {s} ]
              </a>
            ))}
          </div>

          <button className="explore-btn">explore services →</button>
        </div>
      </div>
    </section>
  );
}
