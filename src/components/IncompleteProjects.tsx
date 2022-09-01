import * as React from "react";

import { ProjectType } from "./App";
import Project from "./Project";

type ProjectsProps = {
  projects: ProjectType[];
  updateCompletionStatus: (a: number, b: boolean) => void;
};

function IncompleteProjects(props: ProjectsProps) {
  return (
    <section className="projects" id="incomplete-projects">
      <header>
        <h2>Projects</h2>
      </header>
      <ul>
        {props.projects
          .filter((project) => !project.completed)
          .map((project, index) => (
            <Project
              key={index}
              project={project}
              updateCompletionStatus={props.updateCompletionStatus}
            />
          ))}
      </ul>
    </section>
  );
}

export default IncompleteProjects;
