import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import highschools from "data/high_school_2020.json";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const initialZoom = 12;
const initialIconWidth = 10;

const MapBox = ({ mapBoxApiKey }) => {
  const [viewport, setViewport] = useState({
    longitude: -75.1652,
    latitude: 39.9526,
    zoom: initialZoom,
  });

  const [iconSize, setIconSize] = useState(initialIconWidth);

  const handleViewPortChange = (viewport) => {
    setViewport(viewport);

    const iconSize = 2 * viewport.zoom - 10;
    setIconSize(Math.round(iconSize));
  };

  const [currentSchoolId, setCurrentSchoolId] = useState(null);

  const currentSchool = highschools.find(
    (school) => school.schoolId == currentSchoolId
  );

  const getIconSize = () => ({
    width: `${iconSize}px`,
    height: `${iconSize}px`,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="600px"
      onViewportChange={handleViewPortChange}
      mapboxApiAccessToken={mapBoxApiKey}
      minZoom={10}
      maxZoom={15}
      bearing={9.5}
    >
      {highschools.map((school) => {
        return (
          <Marker longitude={school.longitude} latitude={school.latitude}>
            <img
              onClick={() => setCurrentSchoolId(school.schoolId)}
              {...getIconSize()}
              src="/bus-stop.svg"
            />
          </Marker>
        );
      })}

      {currentSchool && (
        <Popup
          longitude={currentSchool.longitude}
          latitude={currentSchool.latitude}
          onClose={() => setCurrentSchoolId(null)}
          closeButton={true}
          closeOnClick={false}
        >
          <Box maxWidth={450} padding={5}>
            <Heading mb={4} fontSize="md">
              {currentSchool.name}
            </Heading>
            <Box mb={4}>
              <Text>Graduation Rate: {currentSchool.graduationRate}</Text>
              <Text>
                Attendance Rate: {currentSchool.averageDailyAttendance}
              </Text>
            </Box>
            <Button>Add School</Button>
          </Box>
        </Popup>
      )}
    </ReactMapGL>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      mapBoxApiKey: process.env.MAPBOX_API_KEY,
    },
  };
};

export default MapBox;
