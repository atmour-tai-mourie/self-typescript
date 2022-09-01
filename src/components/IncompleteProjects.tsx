import * as React from "react";

import { Project as ProjectType } from "./App";
import Project from "./Project";

type ProjectsProps = {
  projects: ProjectType[];
};

function IncompleteProjects(props: ProjectsProps) {
  return (
    <section className="projects">
      <header>
        <h2>Projects</h2>
      </header>
      <ul>
        {props.projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default IncompleteProjects;
