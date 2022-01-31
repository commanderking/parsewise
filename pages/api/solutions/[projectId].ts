// Each time student sees 3 other solutions
import { proposals } from "data/celltower/solutions";

export default (req, res) => {
  res.status(200).json(proposals);
};
