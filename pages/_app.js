import { ChakraProvider, theme, Box } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "components/navbar/Container";
import store from "app/store";
import { Provider } from "react-redux";

let apolloClient;

function MyApp({ Component, pageProps }) {
  // client must be defined in component to leverage env variables
  apolloClient =
    apolloClient ||
    new ApolloClient({
      uri: process.env.NEXT_PUBLIC_BACKEND_URL,
      cache: new InMemoryCache(),
    });

  console.log({ store });

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default MyApp;
