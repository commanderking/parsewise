import Table from "rc-table";
import { Box } from "@chakra-ui/react";

const renderAsPercent = (rate: number) => {
  if (!rate) {
    return "NO DATA";
  }

  return `${rate}%`;
};

const columns = [
  {
    title: "School",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Admission Type",
    dataIndex: "admissionType",
    key: "admissionType",
  },
  {
    title: "Average Daily Attendance",
    dataIndex: "averageDailyAttendance",
    key: "averageDailyAttendance",
    render: renderAsPercent,
  },
  {
    title: "Graduation Rate",
    dataIndex: "graduationRate",
    key: "graduationRate",
    render: renderAsPercent,
  },
];
const AllItemsTable = ({ data }) => {
  return (
    <Box maxWidth={800} margin="auto">
      <Table data={data} columns={columns} />
    </Box>
  );
};

export default AllItemsTable;
