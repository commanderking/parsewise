import { getAttendanceRates } from "utils/data/schools/philadelphia/schools";

export default async (req, res) => {
  const attendanceRates = await getAttendanceRates();

  res.status(200).json(attendanceRates);
};
