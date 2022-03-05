import { Phase } from "templates/types";

type ProposalProps = {
  projectId: string | string[];
  activity: any[];
  addedIcons: any[]; // TODO: update types
  phase?: Phase;
  reload?: boolean;
};

export const submitProposal = ({
  projectId,
  activity,
  addedIcons,
  phase,
  reload = true,
}: ProposalProps) => {
  const solution = {
    projectId,
    solution: addedIcons,
    activity: activity,
  };

  // TODO: This is placeholder for real submit behavior (leveraging local storage)
  if (window) {
    window.localStorage.setItem(
      "solutions",
      JSON.stringify([
        solution,
        ...(JSON.parse(window.localStorage.getItem("solutions")) || []),
      ])
    );

    if (phase) {
      window.localStorage.setItem(`${projectId}-phase`, phase);
    }

    if (reload) {
      location.reload();
    }
  }
};

export const submitFeedback = ({
  projectId,
  studentId,
  proposalId,
  comment,
  proposerStudentId,
}) => {
  if (window) {
    const feedback = {
      projectId,
      studentId,
      proposerStudentId,
      proposalId,
      comment,
    };
    window.localStorage.setItem(
      "feedback",
      JSON.stringify([
        ...(JSON.parse(window.localStorage.getItem("feedback")) || []),
        feedback,
      ])
    );
  }
};

export const saveCustomProject = (project) => {
  if (window) {
    const existingProjects =
      JSON.parse(window.localStorage.getItem("customProjects")) || [];

    const projects = existingProjects.filter(
      (existingProject) => existingProject.id !== project.id
    );

    const allProjects = [...projects, project];

    window.localStorage.setItem("customProjects", JSON.stringify(allProjects));
  }
};

export const getCustomProjects = () => {
  if (window) {
    const customProjects = window.localStorage.getItem("customProjects");

    return JSON.parse(customProjects) || [];
  }
};
