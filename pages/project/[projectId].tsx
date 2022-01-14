import CoordinateGridContainer from "templates/coordinategrid/Container";
import data from "data/celltower/camden.json";
import { gql, useQuery } from "@apollo/client";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const ACTIVITIES = gql`
  query Activities {
    activities {
      id
    }
  }
`;

const ProjectPage = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [token, setToken] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      const getToken = async () => {
        const token = (await getAccessTokenSilently()) || "";
        setToken(token);
      };

      getToken();
    }
  }, [isAuthenticated]);

  const authorizationToken = token ? `Bearer ${token}` : "";

  // Intentionally not using for now - testing production
  const {
    loading,
    error,
    data: test,
  } = useQuery(ACTIVITIES, {
    skip: !token,
    context: { headers: { authorization: authorizationToken } },
  });

  if (!data) {
    return <div>Loading Project</div>;
  }

  if (data.projectType === "COORDINATE_GRID") {
    return <CoordinateGridContainer data={data} />;
  }

  return <div>"No Project Found"</div>;
};

export default withAuthenticationRequired(ProjectPage, {
  onRedirecting: () => <div>Loading...</div>,
});
