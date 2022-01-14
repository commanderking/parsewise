export const submitProposal = ({ projectId, activity, addedIcons }) => {
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
        ...(JSON.parse(window.localStorage.getItem("solutions")) || []),
        solution,
      ])
    );
    location.reload();
  }
};

export const submitFeedback = ({
  projectId,
  studentId,
  proposalId,
  comment,
  reactions,
  proposerStudentId,
}) => {
  if (window) {
    const feedback = {
      projectId,
      studentId,
      proposerStudentId,
      proposalId,
      comment,
      reactions,
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
    window.localStorage.setItem(
      "customProjects",
      JSON.stringify([
        ...(JSON.parse(window.localStorage.getItem("customProjects")) || []),
        project,
      ])
    );
  }
};

export const getCustomProjects = () => {
  if (window) {
    const customProjects = window.localStorage.getItem("customProjects");

    return JSON.parse(customProjects) || [];
  }
};
