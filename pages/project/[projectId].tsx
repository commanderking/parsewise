import CoordinateGridContainer from "templates/coordinategrid/Container";
import data from "data/celltower/camden.json";
import { gql } from "@apollo/client";

const ACTIVITIES = gql`
  query Activities {
    activities {
      id
    }
  }
`;

const ProjectPage = () => {
  if (data.projectType === "COORDINATE_GRID") {
    return <CoordinateGridContainer data={data} />;
  }

  return <div>"No Project Found"</div>;
};

export default ProjectPage;
