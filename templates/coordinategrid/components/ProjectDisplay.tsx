import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import SolutionAreaDescription from "templates/coordinategrid/components/SolutionAreaDescription";
import {
  getDefaultIconCoordinates,
  getPlacedIconCoordinates,
} from "templates/coordinategrid/utils";
import {
  CoordinateGridPhases,
  gridBreakpointDimensions,
} from "templates/coordinategrid/constants";
import ProjectDescription from "templates/coordinategrid/components/ProjectDescription";
import PhaseCompletionPrompt from "templates/coordinategrid/components/PhaseCompletionPrompt";
import PeerReview from "templates/coordinategrid/components/peerreview/Container";
import LearningResources from "templates/coordinategrid/components/LearningResources";
import { StudentSolution } from "templates/coordinategrid/types";
import { ProposalSubmitButton } from "templates/coordinategrid/components/ProposalSubmitButton";
import { CoordinateGrid } from "open-math-tools";
import { getNextPhase } from "templates/coordinategrid/utils";

type Props = {
  data: any;
  currentPhase: any;
  userSolutions?: StudentSolution[];
};

const CoordinateGridActions = {
  ADD_ICON: "ADD_ICON",
  REMOVE_ICON: "REMOVE_ICON",
};

const ProjectDisplay = ({ data, currentPhase, userSolutions = [] }: Props) => {
  const mostRecentSolutionCoordinates = getPlacedIconCoordinates(userSolutions);
  const projectDefaultCoordinates = getDefaultIconCoordinates(
    data.projectData.placedIcons
  );

  const allIcons = [
    ...projectDefaultCoordinates,
    ...mostRecentSolutionCoordinates,
  ];

  const gridDimension = useBreakpointValue(gridBreakpointDimensions);

  const [activeIcons, setActiveIcons] = useState(allIcons);
  const [activity, setActivity] = useState([]);

  const handleIconClick = (icon) => {
    if (!icon.canRemove) {
      return;
    }
    const newIcons = activeIcons.filter(
      (currentIcon) => !(currentIcon.x === icon.x && currentIcon.y === icon.y)
    );

    setActiveIcons(newIcons);

    const { x, y } = icon;
    setActivity([
      ...activity,
      { x, y, timestamp: Date.now(), type: CoordinateGridActions.REMOVE_ICON },
    ]);
  };

  const addableIcon = {
    // These don't matter when using activeIcons (so need to edit library)
    image: "/cell-tower.svg",
    size: 20,
    onAddIcon: (icon) => {
      const { x, y } = icon;
      const addedIconInfo = {
        x,
        y,
        image: "/cell-tower.svg",
        size: 20,
        timestamp: Date.now(),
        canRemove: true,
      };

      setActiveIcons([...activeIcons, addedIconInfo]);
      setActivity([
        ...activity,
        { ...addedIconInfo, type: CoordinateGridActions.ADD_ICON },
      ]);
    },
  };

  return (
    <Box>
      <Box>
        <Heading>{data.name}</Heading>
      </Box>

      <Box mt={8}>
        <ProjectDescription data={data} />
      </Box>

      <Box padding={[2, 8]} textAlign="center" border="1px solid #ececec">
        <PhaseCompletionPrompt data={data} currentPhase={currentPhase} />

        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={8}>
          <Box display="block" id="hey">
            <SolutionAreaDescription
              solutionPrompt={data.phaseContent[currentPhase].solutionPrompt}
            />
            {data.phaseContent[currentPhase].solutionPromptHelper && (
              <Text as="i">
                {data.phaseContent[currentPhase].solutionPromptHelper}
              </Text>
            )}
            <Box width={gridDimension} margin="auto">
              <CoordinateGrid
                id="coordinateGrid"
                gridHeight={gridDimension}
                gridWidth={gridDimension}
                activeIcons={activeIcons}
                onIconClick={handleIconClick}
                addableIcon={addableIcon}
              />
            </Box>
            <ProposalSubmitButton
              isDisabled={!Boolean(activeIcons.length)}
              addedIcons={activeIcons.filter(
                (activeIcon) => activeIcon.canRemove
              )}
              currentPhase={currentPhase}
              nextPhase={getNextPhase(currentPhase)}
            />
          </Box>
          {currentPhase === CoordinateGridPhases.FIRST_PROPOSAL && (
            <Box>
              <LearningResources data={data} />
            </Box>
          )}
          {(currentPhase === CoordinateGridPhases.MODIFY_PROPOSAL ||
            currentPhase === CoordinateGridPhases.FINAL_SOLUTION) && (
            <PeerReview
              currentPhase={currentPhase}
              projectDefaultCoordinates={projectDefaultCoordinates}
            />
          )}
        </Grid>
        <Divider mt={8} />
        {userSolutions.length > 1 && (
          <Box mt={8}>
            <Heading fontSize="2xl" mb={8}>
              {" "}
              Your Previous Proposals
            </Heading>
            {userSolutions.map((solution, index) => {
              return (
                <Box
                  id={`previous-proposal-${index}`}
                  width={gridDimension}
                  margin="auto"
                  mb={4}
                >
                  <Text fontSize="xl">Propsal {index + 1}</Text>
                  <CoordinateGrid
                    id={`previous-proposal-grid-${index}`}
                    activeIcons={[
                      ...projectDefaultCoordinates,
                      ...solution.solution,
                    ]}
                    gridHeight={gridDimension}
                    gridWidth={gridDimension}
                  />
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProjectDisplay;
