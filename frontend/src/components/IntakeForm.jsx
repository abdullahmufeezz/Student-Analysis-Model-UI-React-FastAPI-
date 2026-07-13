import { useState } from "react";

const FIELDS = [
  { name: "study_hours", label: "Study Hours", unit: "/day" },
  { name: "attendance", label: "Attendance", unit: "%" },
  { name: "sleep_hours", label: "Sleep Hours", unit: "/night" },
  { name: "internet_usage", label: "Internet Usage", unit: "hrs/day" },
  { name: "assignments_completed", label: "Assignments Completed", unit: "/10" },
  { name: "previous_score", label: "Previous Score", unit: "/100" },
];

function IntakeForm({ onSubmit, loading, error }) {
  const [formData, setFormData] = useState(
    Object.fromEntries(FIELDS.map((f) => [f.name, ""]))
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericInputs = Object.fromEntries(
      Object.entries(formData).map(([key, val]) => [key, parseFloat(val)])
    );
    onSubmit(numericInputs);
  };

  return (
    <section className="intake-card">
      <form onSubmit={handleSubmit} className="intake-form">
        {FIELDS.map((f) => (
          <div className="field" key={f.name}>
            <label>{f.label} <span>{f.unit}</span></label>
            <input
              type="number"
              step="any"
              name={f.name}
              value={formData[f.name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" disabled={loading} className="predict-btn">
          {loading ? "Calculating…" : "Generate Report"}
        </button>
      </form>
      {error && <p className="error-text">{error}</p>}
    </section>
  );
}

export default IntakeForm;