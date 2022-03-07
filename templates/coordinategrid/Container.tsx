import { useRef, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { getCurrentPhase } from "templates/coordinategrid/utils";

import ProjectDisplay from "templates/coordinategrid/components/ProjectDisplay";
import { projectContainerWidth } from "constants/styles";
import { selectCurrentPhase } from "templates/coordinategrid/selectors";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setCurrentPhase } from "templates/coordinategrid/coordinateGridSlice";
import DemoAlert from "features/demo/components/DemoAlert";

const CoordinateGridContainer = ({ data }) => {
  // This will be API call in the future
  const submittedSolutions =
    (window && JSON.parse(window.localStorage.getItem("solutions"))) || [];
  const [userSolutions, setSolutions] = useState(submittedSolutions);

  const [isDemoAlertOpen, setIsDemoAlertOpen] = useState(true);
  const onClose = () => setIsDemoAlertOpen(false);

  const cancelRef = useRef();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const localStoragePhase = getCurrentPhase(data.id);
    dispatch(setCurrentPhase(localStoragePhase));
  }, []);

  const currentPhase = useAppSelector(selectCurrentPhase);

  return (
    <Box maxWidth={projectContainerWidth} margin="auto">
      <Box mt={8}>
        <ProjectDisplay
          data={data}
          currentPhase={currentPhase}
          userSolutions={userSolutions}
        />
      </Box>
      <DemoAlert
        isOpen={isDemoAlertOpen}
        cancelRef={cancelRef}
        onClose={onClose}
        currentPhase={currentPhase}
      />
    </Box>
  );
};

export default CoordinateGridContainer;
