import { Box, Button } from "@chakra-ui/react";
import { CoordinateGrid } from "open-math-tools";
import { useState } from "react";
import _ from "lodash";
import { submitProposal } from "templates/coordinategrid/requests";
import { useRouter } from "next/router";

const CoordinateGridActions = {
  ADD_ICON: "ADD_ICON",
  REMOVE_ICON: "REMOVE_ICON",
};

const ModifyProposalGrid = ({
  mostRecentSolutionCoordinates,
  customButton = null,
}) => {
  const router = useRouter();
  const { projectId } = router.query;

  const [activeIcons, setActiveIcons] = useState(mostRecentSolutionCoordinates);
  const [activity, setActivity] = useState([]);

  console.log("activeIcons", activeIcons);
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

  return (
    <Box>
      <Box width={400} margin="auto">
        <CoordinateGrid
          id="coordinate grid"
          gridHeight={400}
          gridWidth={400}
          activeIcons={activeIcons}
          onIconClick={handleIconClick}
          addableIcon={{
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
          }}
        />
      </Box>
      {customButton || (
        <Box textAlign="center">
          <Button
            onClick={() => {
              submitProposal({
                // If icon can be removed, that means it was added by the user
                // This might cause trouble later so might want to think about a better approach
                addedIcons: activeIcons.filter((icon) => icon.canRemove),
                activity,
                projectId,
              });
            }}
            colorScheme="teal"
          >
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ModifyProposalGrid;
