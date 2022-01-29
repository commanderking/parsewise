import { Fragment, useState } from "react";
import { Box, Divider } from "@chakra-ui/react";
import {
  getCurrentPhase,
  getDefaultIconCoordinates,
} from "templates/coordinategrid/utils";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";
import LearningResources from "templates/coordinategrid/components/LearningResources";
import PeerReview from "templates/coordinategrid/components/peerreview/Container";
import ProjectDisplay from "templates/coordinategrid/components/ProjectDisplay";
import { projectContainerWidth } from "constants/styles";

const CoordinateGridContainer = ({ data }) => {
  // This will be API call in the future
  const submittedSolutions =
    (window && JSON.parse(window.localStorage.getItem("solutions"))) || [];
  const [userSolutions, setSolutions] = useState(submittedSolutions);

  const currentPhase = getCurrentPhase(data.id);

  const projectDefaultCoordinates = getDefaultIconCoordinates(
    data.projectData.placedIcons
  );

  return (
    <Box maxWidth={projectContainerWidth} margin="auto">
      <Box mt={8}>
        <ProjectDisplay
          data={data}
          currentPhase={currentPhase}
          userSolutions={userSolutions}
        />
        {currentPhase === CoordinateGridPhases.MODIFY_PROPOSAL && (
          <PeerReview projectDefaultCoordinates={projectDefaultCoordinates} />
        )}

        {currentPhase !== CoordinateGridPhases.PREDICTION && (
          <Fragment>
            <LearningResources data={data} />
            <Divider mt={8} />
          </Fragment>
        )}
      </Box>
    </Box>
  );
};

export default CoordinateGridContainer;
