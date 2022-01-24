import {
  Box,
  Heading,
  Center,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
};

const DemoCard = ({
  title,
  description,
  buttonText,
  buttonHref,
  imageSrc,
}: Props) => {
  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Heading size="lg" textAlign="center" p={4}>
          {title}
        </Heading>
        <Box margin="auto" textAlign="center" p={2}>
          <Image src={imageSrc} width={"200px"} height="200px"></Image>
        </Box>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={6}>
          <Text>{description}</Text>
          <Link href={buttonHref}>
            <Button
              mt={4}
              w={"full"}
              bg={"green.400"}
              color={"white"}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
              _hover={{
                bg: "green.500",
              }}
              _focus={{
                bg: "green.500",
              }}
            >
              {buttonText}
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  );
};

export default DemoCard;
