import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import gridVideo from "../../assets/showreel.mp4";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import axios from "axios";

const HeroSection = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverItem, setHoverItem] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    emailToContact: "",
    phoneNo: "",
    companyName: "",
    requirementDescription: ""
  });
  const [responseMsg, setResponseMsg] = useState("");


  const controls = useAnimation(); // controls header motion

  useEffect(() => {
    // Mouse tilt effect
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      setTilt({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, -80]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  // Header hide/show animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < 5) return;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        controls.start({
          y: "-100%",
          opacity: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        });
      } else {
        controls.start({
          y: "0%",
          opacity: 1,
          transition: { duration: 0.5, ease: "easeOut" },
        });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  const tiltStyle = {
    transform: `rotateX(${tilt.y}deg) rotateZ(${tilt.x}deg)`,
  };

  const items = ["About", "Services", "Works", "Blog", "Contact"];

  const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:8080/contact", formData);
    setResponseMsg(res.data);
    setFormData({
      customerName: "",
      emailToContact: "",
      phoneNo: "",
      companyName: "",
      requirementDescription: ""
    });
  } catch (error) {
    setResponseMsg("Something went wrong!");
  }
};


  return (
    <section className="hero">
      <motion.header
        animate={controls}
        initial={{ y: -100, opacity: 0 }}
        
        className="hero-header fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-white/70 backdrop-blur-lg shadow-md"
      >
        <div
          className="menu-toggle cursor-pointer font-mono text-sm tracking-widest"
          onClick={() => {
            setMenuOpen((s) => !s);
            setHoverItem("");
          }}
        >
          {menuOpen ? "[ close ]" : "[ menu ]"}
        </div>

        <div className="logo text-lg font-semibold tracking-widest">
          ALL /\\ MOTION
        </div>

        <button className="start-project border border-black rounded-full px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors"
                onClick={() => setShowForm(true)}>
          start a project ↗
        </button>
      </motion.header>

      {menuOpen && (
        <div className="menu-overlay" role="dialog" aria-modal="true">
          <div className="menu-overlay-inner">
            <nav className="menu-nav">
              {items.map((it) => (
                <div
                  key={it}
                  className={`menu-item ${
                    hoverItem === it ? "hovered" : ""
                  }`}
                  onMouseEnter={() => setHoverItem(it)}
                  onMouseLeave={() => setHoverItem("")}
                  onClick={() => {
                    setMenuOpen(false);
                    setHoverItem("");
                  }}
                >
                  {hoverItem === it ? `[ ${it} ]` : it}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className="hero-grid">
        {/* Row 1 */}
        <div className="cell letter" style={tiltStyle}>A</div>
        <div className="cell letter" style={tiltStyle}>L</div>
        <div className="cell letter" style={tiltStyle}>L</div>
        <div className="cell letter col-span-1 flex items-center justify-center overflow-hidden">
          <video
            src={gridVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="cell letter" style={tiltStyle}>I</div>
        <div className="cell letter" style={tiltStyle}>N</div>

        {/* Row 2 */}
        <div className="cell letter" style={tiltStyle}>M</div>
        <div className="cell letter" style={tiltStyle}>O</div>
        <div className="cell letter" style={tiltStyle}>T</div>
        <div className="cell letter" style={tiltStyle}>I</div>
        <div className="cell letter" style={tiltStyle}>O</div>
        <div className="cell letter" style={tiltStyle}>N</div>

        {/* Row 3 */}
        <div className="cell letter" style={tiltStyle}>A</div>
        <div className="cell letter" style={tiltStyle}>L</div>
        <div className="cell letter" style={tiltStyle}>L</div>
        <div className="cell text-block">
          <div className="text-inner">
            Deliver in time all things amazing of value.<br />
            Travel beyond passionately, without fear with respect for everyone.
          </div>
        </div>
        <div className="cell letter" style={tiltStyle}>I</div>
        <div className="cell letter" style={tiltStyle}>N</div>

        {/* Row 4 */}
        <div className="cell letter" style={tiltStyle}>M</div>
        <div className="cell letter" style={tiltStyle}>O</div>
        <div className="cell letter" style={tiltStyle}>T</div>
        <div className="cell letter" style={tiltStyle}>I</div>
        <div className="cell letter" style={tiltStyle}>O</div>
        <div className="cell letter" style={tiltStyle}>N</div>
      </div>

      {showForm && (
  <div className="form-overlay">
    <div className="form-container">
      <button className="close-btn" onClick={() => setShowForm(false)}>✕</button>
      <h2>Start a Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="customerName"
          placeholder="Your Name"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
        <input
          name="emailToContact"
          placeholder="Email"
          value={formData.emailToContact}
          onChange={handleChange}
          required
        />
        <input
          name="phoneNo"
          placeholder="Phone Number"
          value={formData.phoneNo}
          onChange={handleChange}
          required
        />
        <input
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
        />
        <textarea
          name="requirementDescription"
          placeholder="Describe your requirement..."
          value={formData.requirementDescription}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {responseMsg && <p className="response">{responseMsg}</p>}
    </div>
  </div>
)}

    </section>
  );
};

export default HeroSection;
