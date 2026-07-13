import { useState } from "react";
import IntakeForm from "./components/IntakeForm";
import Scorecard from "./components/Scorecard";
import Breakdown from "./components/Breakdown";
import Recommendations from "./components/Recommendations";
import "./App.css";

function App() {
  const [result, setResult] = useState(null); // { score, inputs }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (numericInputs) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("https://student-analysis-model.vercel.app/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(numericInputs),
      });
      if (!response.ok) throw new Error(`Server error: ${response.status}`);
      const data = await response.json();
      setResult({ score: data.predicted_exam_score, inputs: numericInputs });
    } catch (err) {
      setError("Couldn't reach the prediction server. Is the backend running?");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="page">
      <header className="page-header">
        <span className="eyebrow">Student Performance Analyzer Using Machine Learning & Data Analysis</span>
        <h1>Progress &amp; Readiness Dashboard</h1>
      </header>

      <IntakeForm onSubmit={handleSubmit} loading={loading} error={error} />

      {result && (
        <section className="dashboard">
          <Scorecard score={result.score} />
          <Breakdown inputs={result.inputs} />
          <Recommendations inputs={result.inputs} />
        </section>
      )}
    </div>
  );
}

export default App;
