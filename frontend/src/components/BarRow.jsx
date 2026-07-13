function BarRow({ label, value, target, unit }) {
  let status = "good";
  if (target.min !== undefined && value < target.min) status = "low";
  if (target.max !== undefined && value > target.max) status = "high";

  const displayMax = target.max ? target.max * 1.4 : (target.min || 10) * 1.8;
  const pct = Math.min(100, (value / displayMax) * 100);

  return (
    <div className="bar-row">
      <div className="bar-label-line">
        <span className="bar-label">{label}</span>
        <span className="bar-value">{value}{unit}</span>
      </div>
      <div className="bar-track">
        <div className={`bar-fill fill-${status}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default BarRow;