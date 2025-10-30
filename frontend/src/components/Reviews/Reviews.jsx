import React from "react";
import "./Reviews.css";

const reviews = [
  {
    name: "Jeffrey Schenck",
    title: "VP Product Marketing",
    company: "Linedata",
    text: "We have always appreciated the great work quality and professionalism.",
    video: "https://picsum.photos/600/400?random=1",
  },
  {
    name: "Ananya Gupta",
    title: "Manager, Insights & Data",
    company: "Capgemini",
    text: "They were clear on what we wanted and delivered beyond expectations.",
    video: "https://picsum.photos/600/400?random=2",
  },
  {
    name: "Carlos D.",
    title: "Chief Marketing Officer",
    company: "Infosys",
    text: "Fantastic collaboration and creative execution on our campaign.",
    video: "https://picsum.photos/600/400?random=3",
  },
];

export default function Reviews() {
  return (
    <section className="reviews" data-aos="fade-up">
      <div className="reviews-container">
        <div className="reviews-heading">
          <h2>
            Trusted by <br /> <em>Many</em>
          </h2>
          <a href="#" className="reviews-link">
            ► reviews
          </a>
        </div>

        <div className="reviews-stack">
          {reviews.map((r, i) => (
            <div
              className="review-layer"
              key={i}
              style={{
                transform: `translate(${i * 40}px, ${i * 25}px)`,
                zIndex: reviews.length - i,
              }}
            >
              <div className="review-card">
                <img src={r.video} alt={r.name} className="review-video" />
                <button className="play-btn">▶</button>
                <div className="review-info">
                  <h4>{r.company}</h4>
                  <p className="review-text">“{r.text}”</p>
                  <p className="review-name">
                    {r.name} <br />
                    <span>{r.title}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
