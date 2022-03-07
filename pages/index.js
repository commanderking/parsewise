import Head from "next/head";
import {
  Box,
  Heading,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import AuthenticTable from "components/home/AuthenticTable";

export default function Home() {
  return (
    <Box textAlign="center">
      <Head textAlign="center">
        <title>Parsewise - Truly Authentic Math Problems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Heading>Truly Authentic Math Problems</Heading>
        <Box mt={10}>
          <Heading maxWidth={500} margin="auto" size="md">
            Houses within 4 km of a cell tower can receive coverage. Where
            should we build the cell towers?
          </Heading>
          <Box mt={4}>
            <Image src="/demo_2.gif" alt="demo gif" width={500} height={500} />
          </Box>
          <Box mt={4} textAlign="center" display="inline-block">
            <Link href="/demo">
              <Button colorScheme="teal" width={100}>
                Demo it!
              </Button>
            </Link>
            <Box display="inline-block">
              <Button
                colorScheme="teal"
                variant="outline"
                ml={4}
                onClick={() => {
                  if (document) {
                    document
                      .getElementById("waitlist")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Join Wait List
              </Button>
            </Box>
          </Box>
        </Box>
        <Divider mt={8} />
        <Box mt={10} mb={50}>
          <Heading mb={10} size="lg">
            What makes a problem authentic?
          </Heading>
          <AuthenticTable />
        </Box>

        <Divider mt={8} mb={8} />

        <Box id="waitlist" width={[150, 300]} margin="auto" mb={200}>
          <Heading size="lg">Join Wait List</Heading>

          <Box mt={4}>
            <form
              id="waitlist"
              action="https://docs.google.com/forms/d/e/1FAIpQLScO_0FpyvMGuCOAlhgJngKVi78fICSTsGYAvn9LyVcWudf2fQ/formResponse"
              method="post"
              target="_blank"
            >
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input name="entry.145226338" placeholder="Name" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input name="entry.2137045222" placeholder="Email" />
              </FormControl>
              <Button mt={4} type="submit" value="Send" colorScheme="teal">
                Send
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
