import Container from "templates/coordinategrid/ContainerEditable";
import useSWR from "swr";
import data from "data/celltower/camden.json";
import { useRouter } from "next/router";

const fetcher = (args) => {
  return fetch(args).then((res) => res.json());
};

const ProjectPage = () => {
  // const { data, error } = useSWR("/api/project", fetcher);

  const router = useRouter();
  const { projectId } = router.query;

  if (!data) {
    return <div>Loading Project</div>;
  }
  return <Container data={data} projectId={projectId} />;
};

export default ProjectPage;
