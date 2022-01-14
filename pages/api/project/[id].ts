import _ from "lodash";
import {
  getSchoolGraduationRates,
  getHighSchools,
  getAttendanceRates,
} from "utils/data/schools/philadelphia/schools";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mockProjectData = {
  id: "1",
  name: "Project - Philadelphia Schools",
  overview: `<p>Let's see what different high schools in Philadelphia are like for different attributes.</p>`,
  projectType: "COORDINATE_GRID",
  projectData: {
    options: [
      { key: "graduatesCount", displayName: "# Graduates" },
      { key: "graduatesPotentialCount", displayName: "# Seniors" },
      { key: "graduationRate", displayName: "4 Year Graduation Percentage" },
      {
        key: "averageDailyAttendance",
        displayName: "Average Daily Attendance",
      },
    ],
  },
  phaseContent: {},
  resources: [],
};

export default async (req, res) => {
  const academicYear = "2019-2020";
  const { id } = req.query;

  // project 2 is Philly Data for now
  if (id === "2") {
    const graduationRates = await getSchoolGraduationRates({
      group: "All Students",
      gradRateType: "4-Year Graduation Rate",
      graduationYear: academicYear,
    });
    const graduationRatesBySchool = _.keyBy(graduationRates, "schoolId");

    const attendanceRates = await getAttendanceRates({ academicYear });
    const attendanceRatesBySchool = _.keyBy(attendanceRates, "schoolId");

    const schools = await getHighSchools();

    const allSchoolData = schools.map((school) => {
      return {
        ..._.pick(graduationRatesBySchool[school.schoolId], [
          "graduatesCount",
          "graduatesPotentialCount",
          "gradRateType",
          "graduationRate",
        ]),
        ..._.pick(attendanceRatesBySchool[school.schoolId], [
          "averageDailyAttendance",
        ]),
        ..._.pick(school, [
          "name",
          "schoolId",
          "admissionType",
          "longitude",
          "latitude",
        ]),
      };
    });

    res.status(200).json(allSchoolData);
  }

  res.status(404).json({});
};
