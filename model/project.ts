type ProjectType = "COORDINATE_GRID";

type Resource = {
  url: string;
  title: string;
  description: string;
};

export type Project = {
  id: string;
  name: string;
  overview: string;
  projectType: ProjectType;
  projectData: any;
  phaseContent: any;
  resources: Resource[];
};
