import { useBreakpointValue } from "@chakra-ui/react";
import { CoordinateGrid } from "open-math-tools";
import { gridBreakpointDimensions } from "templates/coordinategrid/constants";

type Props = {
  id: string;
  activeIcons: any; // TODO: Update with library types,
  onIconClick?: (icon: any) => void; // TOOD: Update with library types
  addableIcon?: any; // TODO: Update with library types
};

const ResponsiveGrid = ({
  id,
  activeIcons,
  onIconClick,
  addableIcon,
}: Props) => {
  const gridDimension = useBreakpointValue(gridBreakpointDimensions);

  return (
    <CoordinateGrid
      id={id}
      activeIcons={activeIcons}
      gridHeight={gridDimension}
      gridWidth={gridDimension}
      onIconClick={onIconClick}
      addableIcon={addableIcon}
    />
  );
};

export default ResponsiveGrid;
