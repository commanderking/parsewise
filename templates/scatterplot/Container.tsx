import { useState, useMemo } from "react";
import { Box, Heading } from "@chakra-ui/react";
import _ from "lodash";

import data from "data/high_school_2020.json";
import AllItemsTable from "templates/scatterplot/components/AllItemsTable";
import SchoolsSelection from "templates/scatterplot/phases/SchoolsSelection";
import SchoolsSelectionReflection from "templates/scatterplot/phases/SchoolsSelectionReflection";
import { phases } from "templates/scatterplot/constants/phases";

const ScatterPlotContainer = () => {
  const [currentPhase, setCurrentPhase] = useState(
    phases.SCHOOLS_SELECTION_INITIAL.value
  );

  const schools = useMemo(() => _.sortBy(data, "name"), [data]);

  return (
    <Box>
      <Heading mb={8}>
        Project - Trends in Philadelphia School Districts
      </Heading>
      {currentPhase === phases.SCHOOLS_SELECTION_INITIAL.value && (
        <SchoolsSelection schools={schools} setCurrentPhase={setCurrentPhase} />
      )}

      {currentPhase === phases.SCHOOLS_SELECTION_INITIAL_REFLECTION.value && (
        <SchoolsSelectionReflection />
      )}

      {/* <AllItemsTable data={schools} /> */}
    </Box>
  );
};

export default ScatterPlotContainer;
