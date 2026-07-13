import { buildRecommendations } from "../utils/recommendations";

function Recommendations({ inputs }) {
  const notes = buildRecommendations(inputs);

  return (
    <div className="panel recommendations">
      <span className="panel-label">Recommendations</span>
      <ul className="notes-list">
        {notes.map((note, i) => (
          <li key={i} className="note-item">{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;