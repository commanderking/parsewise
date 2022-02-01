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
    <Box>
      <Heading fontSize="2xl">Learn</Heading>
      <Text as={"i"}>Some learning resources that might help</Text>
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
