// Ideal targets used to generate recommendations — adjust to match your dataset's realistic ranges
export const TARGETS = {
  study_hours: { min: 4, label: "Study Hours", unit: "hrs/day" },
  attendance: { min: 75, label: "Attendance", unit: "%" },
  sleep_hours: { min: 7, max: 9, label: "Sleep", unit: "hrs/night" },
  internet_usage: { max: 3, label: "Internet Usage", unit: "hrs/day" },
  assignments_completed: { min: 8, max: 10, label: "Assignments Completed", unit: "/10" },
};

export const PLACEMENT_THRESHOLD = 70;