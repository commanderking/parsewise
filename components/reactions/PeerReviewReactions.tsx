import React from "react";
import { Box, Text } from "@chakra-ui/react";
import EmojiButton from "components/EmojiButton";
import { reactions } from "components/reactions/constants";

const PeerReviewReactions = ({ onReactionClick, currentReactions }) => {
  return (
    <Box padding={2}>
      <Text display="inline-block" mr={2}>
        Reactions
      </Text>
      {Object.values(reactions).map((reaction) => {
        const { id } = reaction;
        const isClicked = currentReactions[id];
        return (
          <EmojiButton
            isClicked={isClicked}
            buttonProps={{
              onClick: onReactionClick,
              value: id,
              margin: 1,
            }}
            label="checkMark"
          >
            {reaction.emoji}
          </EmojiButton>
        );
      })}
    </Box>
  );
};

export default PeerReviewReactions;
