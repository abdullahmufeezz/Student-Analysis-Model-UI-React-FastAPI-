import { TARGETS } from "./targets";

export function buildRecommendations(data) {
  const notes = [];

  if (data.study_hours < TARGETS.study_hours.min) {
    notes.push(`Increase daily study time — currently ${data.study_hours} hrs, aim for at least ${TARGETS.study_hours.min} hrs.`);
  }
  if (data.attendance < TARGETS.attendance.min) {
    notes.push(`Attendance is below ${TARGETS.attendance.min}%. Consistent class attendance is one of the strongest predictors of score improvement.`);
  }
  if (data.sleep_hours < TARGETS.sleep_hours.min) {
    notes.push(`Sleep is a bit low at ${data.sleep_hours} hrs. Aim for ${TARGETS.sleep_hours.min}–${TARGETS.sleep_hours.max} hrs for better focus and retention.`);
  } else if (data.sleep_hours > TARGETS.sleep_hours.max) {
    notes.push(`Sleep is higher than typical (${data.sleep_hours} hrs) — fine occasionally, but excessive sleep can correlate with reduced study time.`);
  }
  if (data.internet_usage > TARGETS.internet_usage.max) {
    notes.push(`Recreational internet/screen use is high at ${data.internet_usage} hrs/day. Reducing this tends to free up time for focused study.`);
  }
  if (data.assignments_completed < TARGETS.assignments_completed.min) {
    notes.push(`Only ${data.assignments_completed} assignments completed. Completing more consistently is strongly linked to higher scores.`);
  }

  if (notes.length === 0) {
    notes.push("All habits are within healthy ranges — keep this routine consistent.");
  }
  return notes;
}