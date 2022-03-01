import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Textarea,
  IconButton,
  Button,
} from "@chakra-ui/react";
import ResponsiveGrid from "templates/coordinategrid/components/ResponsiveGrid";
import { iconMap } from "constants/icons";
import Image from "next/image";
import { saveCustomProject } from "templates/coordinategrid/requests";
import dynamic from "next/dynamic";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

// Seems to be an issue with this version of htmlToDraft not handling dynamic imports correctly
// https://github.com/jpuri/html-to-draftjs/issues/83
let htmlToDraft = null;
if (typeof window === "object") {
  htmlToDraft = require("html-to-draftjs").default;
}

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
) as any; // need to figure out how to type dynamic imports better

const CoordinateGridContainer = ({ data }) => {
  const [name, setName] = useState(data.name);

  const [placeableIcon, setPlaceableIcon] = useState(
    data.projectData?.addableIcon?.iconType
  );

  const [activeIcons, setActiveIcons] = useState(
    data.projectData.placedIcons.map((coordinate) => ({
      ...coordinate,
      image: iconMap[coordinate.iconType].src,
      size: 15,
    }))
  );

  const [editorState, setEditorState] = useState(() => {
    const contentBlock = window ? htmlToDraft(data.overview) : null;
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      return editorState;
    }

    return EditorState.createEmpty();
  });

  const handleIconClick = (icon) => {
    const newIcons = activeIcons.filter(
      (currentIcon) => !(currentIcon.x === icon.x && currentIcon.y === icon.y)
    );

    setActiveIcons(newIcons);
  };

  const availableIcons = Object.values(iconMap);

  const getOverviewHtml = (editorState) => {
    return draftToHtml(convertToRaw(editorState.getCurrentContent()));
  };

  return (
    <Box maxWidth={1024} margin="auto" mb={150}>
      <Box>
        <Heading mb={2} size="lg">
          Project Name
        </Heading>
        <Textarea
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </Box>

      <Box mt={8}>
        <Heading mb={2} size="lg">
          Description
        </Heading>
        <Box border="1px solid" borderColor="gray.200" pl={4} pr={4}>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={(editorState) => {
              setEditorState(editorState);
            }}
            toolbar={{
              options: ["inline", "fontSize", "list", "emoji"],
              inline: {
                options: ["bold", "italic", "underline"],
              },
            }}
          />
        </Box>
      </Box>
      <Box mt={8}>
        <Heading size="lg">Starting Grid</Heading>
        <ResponsiveGrid
          id="coordinate grid"
          activeIcons={activeIcons}
          onIconClick={handleIconClick}
          addableIcon={{
            // These don't matter when using activeIcons (so need to edit library)
            image: iconMap.HOUSE.src,
            size: 20,
            onAddIcon: (icon) => {
              const { x, y } = icon;

              const addedIconInfo = {
                x,
                y,
                image: iconMap.HOUSE.src,
                size: 15,
                timestamp: Date.now(),
                canRemove: true,
              };

              setActiveIcons([...activeIcons, addedIconInfo]);
            },
          }}
        />
      </Box>
      <Box mt={8}>
        <Text>Placeable Icon (icon student will be able to add)</Text>
        <Box>
          {availableIcons.map((icon) => {
            const isSelectedPlaceableIcon =
              icon.id === placeableIcon ? "teal" : "";
            return (
              <IconButton
                margin={1}
                onClick={() => {
                  setPlaceableIcon(icon.id);
                }}
                border={
                  isSelectedPlaceableIcon ? "3px solid teal" : "3px solid white"
                }
                padding={15}
                aria-label="icon"
                icon={
                  <Image src={icon.src} alt="icon" width="20px" height="20px" />
                }
                theme="ghost"
              />
            );
          })}
        </Box>
      </Box>
      <Box mt={8}>
        <Button
          onClick={() => {
            saveCustomProject({
              ...data,
              name,
              overview: getOverviewHtml(editorState),
              projectData: {
                ...data.projectData,
                placedIcons: activeIcons,
                placeableIcon,
              },
              sourceId: data.id,
            });
          }}
          colorScheme="teal"
        >
          Save Custom Project
        </Button>
      </Box>
    </Box>
  );
};

export default CoordinateGridContainer;
