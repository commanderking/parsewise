import { ChakraProvider, theme, Box } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";
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
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_REDIRECT_URI}
      // audience needed to get proper jwt format for backend (otherwise only sends 16 character accessToken)
      audience={process.env.NEXT_PUBLIC_AUTH0_AUDIENCE}
      scope="openid profile email"
    >
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
    </Auth0Provider>
  );
}

export default MyApp;
