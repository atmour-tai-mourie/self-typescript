import * as React from "react";

import { ProjectType } from "./App";

type UpdateCompletionStatus = (
  projectID: number,
  projectCompletionStatus: boolean
) => void;

type ProjectProps = {
  project: ProjectType;
  updateCompletionStatus: UpdateCompletionStatus;
};

function Project({ project, updateCompletionStatus }: ProjectProps) {
  function checkboxToggled() {
    updateCompletionStatus(project.id, !project.completed);
  }

  return (
    <div className="project-container">
      <div>
        <h3>{project.title}</h3>
        <p>{project.number} people on this Project</p>
        <p>{project.description}</p>
      </div>
      <div>
        <button id="completion" onClick={checkboxToggled}>
          {project.completed ? "Completed" : "Mark as Complete"}
        </button>
      </div>
    </div>
  );
}

export default Project;
