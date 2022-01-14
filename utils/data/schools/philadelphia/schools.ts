import schools from "pages/api/data/schools/philadelphia/schools";

const csv = require("csvtojson");
const _ = require("lodash");

const validYears = [
  "2010-2011",
  "2011-2012",
  "2012-2013",
  "2013-2014",
  "2014-2015",
  "2015-2016",
  "2016-2017",
  "2017-2018",
  "2018-2019",
  "2019-2020",
] as const;

type AcademicYear = typeof validYears[number];

const yearsWithIndex = validYears.map((year, index) => {
  return {
    academicYear: year,
    index,
  };
});

const yearsMap: {
  [key in AcademicYear]: {
    academicYear: AcademicYear;
    index: number;
  };
} = _.keyBy(yearsWithIndex, "academicYear");

type GraduationGroup =
  | "All Students"
  | "Ethnicity"
  | "IEP"
  | "Economically Disadvantaged"
  | "ELL"
  | "Gender"
  | "IEP"
  | "Ethnicity"
  | "Gender"
  | "ELL"
  | "Economically Disadvantaged";

type GraduationSubgroup = "All Students" | "Asian";
type GraduationRateType = "4-Year Graduation Rate" | "5-Year Graduation Rate";
type Sector = "District" | "Alternative" | "<NULL>";

type SchoolGraduationRate = {
  cohort: AcademicYear;
  group: GraduationGroup;
  num: string | "s"; // string form of number
  denom: string; // string form of number, always at least 1
  rate_type: GraduationRateType;
  schoolid_ulcs: string;
  schoolname: string;
  score: string | "s";
  sector: Sector;
  srcschoolid: string;
  subgroup: GraduationSubgroup;
};

const getCount = (count: string) => {
  if (count === "s" || !Boolean(count)) {
    return null;
  }

  return parseInt(count);
};

const getGraduationRate = (gradRate) => {
  if (!gradRate.denom) {
    return null;
  }

  if (!gradRate.num) {
    return 0;
  }

  return Math.round((gradRate.num / gradRate.denom) * 100);
};

const formatGraduationRates = (gradRate: SchoolGraduationRate) => {
  const graduationYearIndex = yearsMap[gradRate.cohort].index + 3;
  const graduationYear = validYears[graduationYearIndex];

  return {
    schoolId: gradRate.schoolid_ulcs,
    academicYear: graduationYear,
    group: gradRate.group,
    subgroup: gradRate.subgroup,
    gradRateType: gradRate.rate_type,
    graduatesCount: getCount(gradRate.num),
    graduatesPotentialCount: getCount(gradRate.denom),
    graduationRate: getGraduationRate(gradRate),
  };
};

type GraduationRateFilters = {
  group: GraduationGroup;
  gradRateType: GraduationRateType;
  graduationYear: AcademicYear;
};

export const getSchoolGraduationRates = async (
  filters?: GraduationRateFilters
) => {
  const schoolGraduationRates = await csv().fromFile(
    "./data/schools/philadelphia/school_graduation_rates_cohort_2011_2017.csv"
  );

  const formattedRates: ReturnType<typeof formatGraduationRates>[] =
    schoolGraduationRates.map(formatGraduationRates);

  if (!filters) {
    return formattedRates;
  }

  const { group, gradRateType, graduationYear } = filters;

  return formattedRates.filter(
    (school) =>
      school.group === group &&
      school.gradRateType === gradRateType &&
      school.academicYear === graduationYear
  );
};

const formatAttendanceRate = (rate: any) => {
  const formattedRate = _.mapKeys(rate, (value, key) => {
    return _.camelCase(key);
  });

  return {
    ...formattedRate,
    schoolId: formattedRate.ulcsCode,
    averageDailyAttendance: parseInt(formattedRate.averageDailyAttendance),
  };
};

type AttendanceFilters = {
  academicYear: AcademicYear;
};

export const getAttendanceRates = async (filter?: AttendanceFilters) => {
  const attendanceRates = await csv().fromFile(
    "./data/schools/philadelphia/school_average_daily_attendance_2014_2020.csv"
  );

  const formattedRates = attendanceRates.map(formatAttendanceRate);

  if (!filter) {
    return formattedRates;
  }

  return formattedRates.filter(
    (rate) => rate.schoolYear === filter.academicYear
  );
};

const getLongitudeAndLatitude = (gpsLocation: string | null) => {
  if (!gpsLocation) {
    return null;
  }

  const [latitude, longitude] = gpsLocation.split(",").map((degree) => {
    return parseFloat(degree.trim());
  });

  return {
    longitude,
    latitude,
  };
};

const formatSchool = (school: any) => {
  const formattedSchool = _.mapKeys(school, (value, key) => {
    return _.camelCase(key);
  });

  return {
    ...formattedSchool,
    name: formattedSchool.publicationName,
    schoolId: formattedSchool.ulcsCode,
    admissionType: formattedSchool.admissionType,
    ...getLongitudeAndLatitude(formattedSchool.gpsLocation),
  };
};

export const getHighSchools = async () => {
  const schools = await csv().fromFile(
    "./data/schools/philadelphia/school_list_2020.csv"
  );

  const formattedSchools = schools.map(formatSchool);

  const highSchools = formattedSchools.filter(
    (school) =>
      school.schoolLevel === "High" || school.schoolLevel === "Middle-High"
  );

  return highSchools.map(formatSchool);
};
