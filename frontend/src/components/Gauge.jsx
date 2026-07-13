function Gauge({ score }) {
  const clamped = Math.max(0, Math.min(100, score ?? 0));
  const angle = 180 - (clamped / 100) * 180;
  const rad = (angle * Math.PI) / 180;
  const cx = 110, cy = 110, r = 90;
  const needleX = cx + r * Math.cos(rad);
  const needleY = cy - r * Math.sin(rad);

  return (
    <svg viewBox="0 0 220 130" className="gauge">
      <path d="M 20 110 A 90 90 0 0 1 200 110" className="gauge-zone zone-low" />
      <path d="M 52 45 A 90 90 0 0 1 168 45" className="gauge-zone zone-mid" />
      <path d="M 140 55 A 90 90 0 0 1 200 110" className="gauge-zone zone-high" />
      <line x1={cx} y1={cy} x2={needleX} y2={needleY} className="gauge-needle" />
      <circle cx={cx} cy={cy} r="6" className="gauge-hub" />
      <text x="20" y="126" className="gauge-tick">0</text>
      <text x="192" y="126" className="gauge-tick">100</text>
    </svg>
  );
}

export default Gauge;