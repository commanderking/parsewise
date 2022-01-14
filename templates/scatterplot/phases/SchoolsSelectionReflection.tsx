import { useState } from "react";

import { Box, Text, Button, Textarea } from "@chakra-ui/react";

const SchoolSelectionReflection = () => {
  const [answer, setAnswer] = useState("");
  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setAnswer(inputValue);
  };

  return (
    <Box>
      <Text>
        What are some things you notice about the schools you've selected?
      </Text>
      <Textarea
        value={answer}
        onChange={handleInputChange}
        placeholder="The high school with the highest graduation rate is... &#10;All high schools... &#10;It seems schools that have a higher..."
      />
      <Button colorScheme="teal">Submit</Button>
    </Box>
  );
};

export default SchoolSelectionReflection;
