import {
  Box,
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const LearningResources = ({ data }) => {
  return (
    <Box mt={8} mb={8}>
      <Heading fontSize="2xl">Learn</Heading>
      <Text mt={4}>
        Some learning resources that might help you solve the project
      </Text>
      <Grid templateColumns="1fr 1fr" gridAutoRows="max-content" gap={6} mt={4}>
        {data.resources.map((resource) => {
          return (
            <GridItem key={resource.title} borderWidth="1px" rounded="md">
              <LinkBox as="article" maxW="sm" p="5">
                <Heading size="md">
                  <LinkOverlay href={resource.url} isExternal>
                    {resource.title}
                  </LinkOverlay>
                </Heading>
                <Text>{resource.description}</Text>
              </LinkBox>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LearningResources;
