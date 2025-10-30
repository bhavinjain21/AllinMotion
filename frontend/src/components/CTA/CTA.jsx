import React, { useState } from "react";
import "./CTA.css";
import ProjectCostForm from "./ProjectCostForm";

export default function CTA() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="cta" data-aos="fade-up">
      <div className="cta-inner">
        <h2>
          Ready to <em>work</em> together?
        </h2>
        <div className="cta-meta">
          <p></p>
          <p>contact us</p>
        </div>

        {/* Instead of <a>, use button to avoid page reload */}
        <button
          className="circle-link"
          onClick={(e) => {
            e.preventDefault();
            setShowForm(true);
          }}
        >
          calculate <br /> project cost
        </button>

        {showForm && <ProjectCostForm onClose={() => setShowForm(false)} />}
      </div>
    </section>
  );
}
