import React from "react";
import "./Awards.css";
import trophy from "../../assets/trophy.png";

export default function Awards() {
  return (
    <section className="awards" data-aos="fade-up">
      <div className="awards-container">
        
        <div className="awards-list">
          <p>[ Hermes gold award ]</p>
          <p><strong>[ Hermes award ]</strong></p>
          <p>[ Viddy awards ]</p>
          <p>[ Viddy platinum award ]</p>
          <p>[ Viddy platinum award ]</p>
        </div>

        <div className="awards-center">
          <svg
            className="blue-curve"
            viewBox="0 0 800 400"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q400,300 800,50"
              stroke="#0057ff"
              strokeWidth="10"
              fill="none"
            />
          </svg>
          <img src={trophy} alt="Award Trophy" className="award-img" />
        </div>

        <div className="awards-meta">
          <p>* awards</p>
          <p>Motion category<br />2023</p>
        </div>

        <div className="awards-heading">
          <h2>
            <em>Championing</em> <br /> Achievements
          </h2>
        </div>
      </div>
    </section>
  );
}
