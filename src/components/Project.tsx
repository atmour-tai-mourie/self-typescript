import * as React from "react";

import { Project } from "./App";

type ProjectProps = {
  project: Project;
};

function Project(props: ProjectProps) {
  return (
    <div className="project-container">
      <h3>{props.project.title}</h3>
      <p>{props.project.number} people on this Project</p>
      <p>{props.project.description}</p>
    </div>
  );
}

export default Project;
