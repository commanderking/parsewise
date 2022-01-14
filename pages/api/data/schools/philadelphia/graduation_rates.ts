import { getSchoolGraduationRates } from "utils/data/schools/philadelphia/schools";

export default async (req, res) => {
  const graduationRates = await getSchoolGraduationRates();
  console.log("graduationRates", graduationRates);
  res.status(200).json(graduationRates);
};
