import { Box, Button } from "@chakra-ui/react";
import { CoordinateGrid } from "open-math-tools";
import { useState } from "react";
import _ from "lodash";
import { useRouter } from "next/router";
import { ProposalSubmitButton } from "templates/coordinategrid/components/ProposalSubmitButton";
import { getNextPhase } from "templates/coordinategrid/utils";

const CoordinateGridActions = {
  ADD_ICON: "ADD_ICON",
  REMOVE_ICON: "REMOVE_ICON",
};

const ModifyProposalGrid = ({
  mostRecentSolutionCoordinates,
  customButton = null,
  isEditable = true,
  currentPhase,
  gridDimension = 400,
}) => {
  const router = useRouter();
  const { projectId } = router.query;

  const [activeIcons, setActiveIcons] = useState(mostRecentSolutionCoordinates);
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

  const getAddableIconProp = (isEditable: boolean) => {
    if (!isEditable) {
      return null;
    }

    return {
      addableIcon: {
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
      },
    };
  };

  return (
    <Box>
      <Box width={gridDimension}>
        <CoordinateGrid
          id="coordinate grid"
          gridHeight={gridDimension}
          gridWidth={gridDimension}
          activeIcons={activeIcons}
          onIconClick={isEditable ? handleIconClick : () => {}}
          {...getAddableIconProp(isEditable)}
        />
      </Box>
      {customButton || (
        <ProposalSubmitButton
          isDisabled={!Boolean(activeIcons.length)}
          addedIcons={activeIcons.filter((activeIcon) => activeIcon.canRemove)}
          currentPhase={currentPhase}
          nextPhase={getNextPhase(currentPhase)}
        />
      )}
    </Box>
  );
};

export default ModifyProposalGrid;
