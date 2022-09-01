import * as React from "react";

import { Project as ProjectType } from "./App";
import Project from "./Project";

type ProjectsProps = {
  projects: ProjectType[];
  updateCompletionStatus: (a: ProjectType[], b: number, c: Boolean) => void;
};

function CompletedProjects(props: ProjectsProps) {
  return (
    <section className="projects" id="finished-projects">
      <header>
        <h2>Completed Projects</h2>
      </header>
      <ul>
        {props.projects
          .filter((project) => project.completed)
          .map((project, index) => (
            <Project key={index} project={project} />
          ))}
      </ul>
    </section>
  );
}

export default CompletedProjects;
