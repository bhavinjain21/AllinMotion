import React from "react";
import "./Portfolio.css";

const portfolioItems = [
  { title: "AI Academy", img: "https://picsum.photos/600/360?random=1" },
  { title: "Data on Cloud", img: "https://picsum.photos/1000/600?random=2" },
  { title: "Digital 3D", img: "https://picsum.photos/1000/600?random=3" },
  { title: "Smart City", img: "https://picsum.photos/600/360?random=4" },
  { title: "EduQuestion", img: "https://picsum.photos/600/360?random=5" },
  { title: "Labra Solution", img: "https://picsum.photos/1000/600?random=6" },
];

export default function Portfolio() {
  return (
    <section className="portfolio" data-aos="fade-up">
      <div className="container">
        <div className="portfolio-heading">
          <h2>
            Empowering <br /> imagery
          </h2>
          <span className="projects-count">[ 120+ ]</span>
        </div>

        <div className="portfolio-works">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className={`portfolio-row ${
                idx % 2 === 0 ? "row-small-big" : "row-big-small"
              }`}
            >
              <div className="portfolio-item small">
                <img src={portfolioItems[idx].img} alt={item.title} />
                <div className="overlay">
                  <button className="play-btn">▶</button>
                  <span>{item.title}</span>
                </div>
              </div>

              <div className="portfolio-item big">
                <img
                  src={
                    portfolioItems[(idx + 1) % portfolioItems.length].img
                  }
                  alt={item.title}
                />
                <div className="overlay">
                  <button className="play-btn">▶</button>
                  <span>{portfolioItems[(idx + 1) % portfolioItems.length].title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="see-projects">
          <button className="see-btn">
            see all projects <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
