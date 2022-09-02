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

function CompletedProjects({
  projects,
  updateCompletionStatus,
}: ProjectsProps) {
  return (
    <section className="projects" id="finished-projects">
      <header>
        <h2>Completed Projects</h2>
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

export default CompletedProjects;
