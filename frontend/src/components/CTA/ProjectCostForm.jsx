import React, { useState } from "react";
import axios from "axios";
import "./ProjectCostForm.css";

export default function ProjectCostForm({ onClose }) {
  const [formData, setFormData] = useState({
    type: "2D",
    duration: 10,
    details: []
  });

  const [price, setPrice] = useState(null);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      details: checked
        ? [...prev.details, value]
        : prev.details.filter((d) => d !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/contact/calculate-cost", formData);
      setPrice(res.data);
    } catch {
      setPrice("Error calculating cost");
    }
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Calculate Project Cost</h2>
        <form onSubmit={handleSubmit}>
          <label>What kind of animation?</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="2D">2D</option>
            <option value="3D">3D</option>
            <option value="Live">Live</option>
          </select>

          <label>Duration (sec)</label>
          <input
            type="number"
            min="1"
            max="100"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          />

          <label>Details (select multiple)</label>
          <div className="checkbox-group">
            {["Music", "Animation", "Scripting"].map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  value={item}
                  checked={formData.details.includes(item)}
                  onChange={handleCheckboxChange}
                />
                {item}
              </label>
            ))}
          </div>

          <button type="submit">Calculate</button>
        </form>

        {price && <p className="price">Estimated Cost: ₹{price}</p>}
      </div>
    </div>
  );
}
