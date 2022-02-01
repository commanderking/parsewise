import { useState, useMemo } from "react";
import _ from "lodash";

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Divider,
} from "@chakra-ui/react";
import ClosableTags from "templates/scatterplot/components/ClosableTags";
import { phases } from "templates/scatterplot/constants/phases";

const grayBorder = "1px solid #ececec";

const SchoolsSelection = ({ schools, setCurrentPhase }) => {
  const [addedSchools, setAddedSchools] = useState([]);

  const schoolsById = useMemo(() => {
    return _.keyBy(schools, "schoolId");
  }, [schools]);

  const addedSchoolsById = useMemo(() => {
    return _.keyBy(addedSchools, "schoolId");
  }, [addedSchools]);

  const addedSchoolsTags = useMemo(() => {
    return addedSchools.map((school) => {
      return {
        id: school.schoolId,
        label: school.name,
      };
    });
  }, [addedSchools]);

  const removeSchool = (schools, removedSchoolId) => {
    const newSchools = schools.filter(
      (school) => school.schoolId !== removedSchoolId
    );
    setAddedSchools(newSchools);
  };

  const addedSchoolsCount = addedSchools.length;
  const tooFewSchools = addedSchoolsCount < 5;
  const tooManySchools = addedSchoolsCount > 10;

  return (
    <Box>
      <Box mt={8}>
        <Heading mb={4} size="md">
          Your Added Schools
        </Heading>
        {(tooFewSchools || tooManySchools) && (
          <Box>
            <Text fontSize="lg" as="i" color="red.600">
              Please select between 5-10 schools before submitting.
            </Text>
          </Box>
        )}
        <Box p={5}>
          {addedSchoolsTags.length ? (
            <ClosableTags
              tags={addedSchoolsTags}
              onCloseClick={(tag) => {
                removeSchool(addedSchools, tag.id);
              }}
            />
          ) : (
            <Text as="i">No Schools Added Yet</Text>
          )}
        </Box>
      </Box>
      <Box mt={4}>
        <Button
          onClick={() => {
            setCurrentPhase(phases.SCHOOLS_SELECTION_INITIAL_REFLECTION);
          }}
          colorScheme="teal"
          isDisabled={tooFewSchools || tooManySchools}
        >
          Submit
        </Button>
      </Box>
      <Divider mt={4} />
      <Heading mt={4} size="md">
        Pick from List
      </Heading>

      <Box
        mt={8}
        maxWidth={500}
        p={4}
        border={grayBorder}
        overflowY="scroll"
        maxHeight={600}
      >
        {schools.map((school) => {
          const isAdded = addedSchoolsById[school.schoolId];
          return (
            <SimpleGrid
              key={school.schoolId}
              templateColumns={"375px 100px"}
              borderBottom={grayBorder}
              pt={3}
              pb={3}
            >
              <Text maxWidth="400px" isTruncated>
                {school.name}
              </Text>
              <Button
                maxWidth="50px"
                size="xs"
                onClick={() => {
                  setAddedSchools([
                    ...addedSchools,
                    schoolsById[school.schoolId],
                  ]);
                }}
                colorScheme={isAdded ? "gray" : "teal"}
                disabled={isAdded}
              >
                {isAdded ? "Added" : "Add"}
              </Button>
            </SimpleGrid>
          );
        })}
      </Box>
    </Box>
  );
};

export default SchoolsSelection;
