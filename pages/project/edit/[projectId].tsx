import Container from "templates/coordinategrid/ContainerEditable";
import useSWR from "swr";

const fetcher = (args) => {
  return fetch(args).then((res) => res.json());
};

const ProjectPage = () => {
  const { data, error } = useSWR("/api/project", fetcher);

  if (!data) {
    return <div>Loading Project</div>;
  }
  return <Container data={data} />;
};

export default ProjectPage;
