import { getHighSchools } from "utils/data/schools/philadelphia/schools";

export default async (req, res) => {
  const schools = await getHighSchools();
  res.status(200).json(schools);
};
