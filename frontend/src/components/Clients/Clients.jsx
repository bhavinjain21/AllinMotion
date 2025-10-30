import React from "react";
import "./Clients.css";

export default function Clients() {
  const clients = Array.from({ length: 8 }).map((_, i) => ({
    name: `coursera`,
  }));

  return (
    <section className="clients" data-aos="fade-up">
      <div className="clients-wrap">
        
        <div className="clients-left">
          <h2 className="clients-number">20+</h2>
          <p className="clients-sub">satisfied customers</p>
        </div>

        <div className="clients-right">
          <h3 className="clients-heading">
            Bringing <i>Visions</i> to Life
          </h3>
          </div>

          <div className="marquee">
            <div className="marquee-track">
              {clients.map((c, idx) => (
                <div className="client-pill" key={idx}>
                  {c.name}
                </div>
              ))}
              {clients.map((c, idx) => (
                <div className="client-pill" key={`dup-${idx}`}>
                  {c.name}
                </div>
              ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
