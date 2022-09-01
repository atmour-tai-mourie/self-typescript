import * as React from "react";

import { ProjectType } from "./App";

type ProjectProps = {
  project: ProjectType;
  updateCompletionStatus: (a: number, b: boolean) => void;
};

function Project(props: ProjectProps) {
  function checkboxToggled() {
    props.updateCompletionStatus(props.project.id, !props.project.completed);
  }

  return (
    <div className="project-container">
      <div>
        <h3>{props.project.title}</h3>
        <p>{props.project.number} people on this Project</p>
        <p>{props.project.description}</p>
      </div>
      <div>
        <button id="completion" onClick={checkboxToggled}>
          {props.project.completed ? "Completed" : "Mark as Complete"}
        </button>
      </div>
    </div>
  );
}

export default Project;
