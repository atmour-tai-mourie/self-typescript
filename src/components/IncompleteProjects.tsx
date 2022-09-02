import * as React from "react";

import { ProjectType } from "./App";
import Project from "./Project";

type UpdateCompletionStatus = (
  projectID: number,
  projectCompletionStatus: boolean
) => void;

type ProjectsProps = {
  projects: ProjectType[];
  updateCompletionStatus: UpdateCompletionStatus;
};

function IncompleteProjects({
  projects,
  updateCompletionStatus,
}: ProjectsProps) {
  return (
    <section className="projects" id="incomplete-projects">
      <header>
        <h2>Projects</h2>
      </header>
      <ul>
        {projects.map((project, index) => (
          <Project
            key={index}
            project={project}
            updateCompletionStatus={updateCompletionStatus}
          />
        ))}
      </ul>
    </section>
  );
}

export default IncompleteProjects;
