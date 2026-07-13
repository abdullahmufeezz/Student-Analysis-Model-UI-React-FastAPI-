import Gauge from "./Gauge";
import { PLACEMENT_THRESHOLD } from "../utils/targets";

function Scorecard({ score }) {
  const isPlaced = score >= PLACEMENT_THRESHOLD;

  return (
    <div className="panel scorecard">
      <span className="panel-label">Predicted Exam Score</span>
      <Gauge score={score} />
      <div className="score-number">{score.toFixed(1)}</div>
      <div className={`placement-badge ${isPlaced ? "badge-good" : "badge-warn"}`}>
        {isPlaced ? "Placement Ready" : "Needs Improvement"}
      </div>
      <p className="threshold-note">Placement threshold: {PLACEMENT_THRESHOLD}</p>
    </div>
  );
}

export default Scorecard;