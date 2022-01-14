import { Box, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";

export type Tag = {
  id: string;
  label: string;
};

type Props = {
  tags: Tag[];
  onCloseClick: (tag: Tag) => void;
};

const ClosableTags = ({ tags, onCloseClick }: Props) => {
  return (
    <Box>
      {tags.map((tag) => {
        return (
          <Tag
            size={"lg"}
            key={"lg"}
            borderRadius="full"
            variant="outline"
            colorScheme="teal"
            mr={2}
            mb={2}
          >
            <TagLabel>{tag.label}</TagLabel>
            <TagCloseButton
              onClick={() => {
                onCloseClick(tag);
              }}
            />
          </Tag>
        );
      })}
    </Box>
  );
};

export default ClosableTags;
