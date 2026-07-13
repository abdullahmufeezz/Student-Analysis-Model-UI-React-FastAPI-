import BarRow from "./BarRow";
import { TARGETS } from "../utils/targets";

function Breakdown({ inputs }) {
  return (
    <div className="panel breakdown">
      <span className="panel-label">Habit Breakdown</span>
      <BarRow label="Study Hours" value={inputs.study_hours} target={TARGETS.study_hours} unit=" hrs" />
      <BarRow label="Attendance" value={inputs.attendance} target={TARGETS.attendance} unit="%" />
      <BarRow label="Sleep" value={inputs.sleep_hours} target={TARGETS.sleep_hours} unit=" hrs" />
      <BarRow label="Internet Usage" value={inputs.internet_usage} target={TARGETS.internet_usage} unit=" hrs" />
      <BarRow label="Assignments" value={inputs.assignments_completed} target={TARGETS.assignments_completed} unit="/10" />
    </div>
  );
}

export default Breakdown;