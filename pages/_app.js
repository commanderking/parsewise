import { ChakraProvider, theme, Box } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "components/navbar/Container";

let apolloClient;

function MyApp({ Component, pageProps }) {
  // client must be defined in component to leverage env variables
  apolloClient =
    apolloClient ||
    new ApolloClient({
      uri: process.env.NEXT_PUBLIC_BACKEND_URL,
      cache: new InMemoryCache(),
    });

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <Box>
          <Navbar />
          <Box maxWidth="1048px" margin="auto" padding="20px" mt={10}>
            <Component {...pageProps} />
          </Box>
        </Box>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
