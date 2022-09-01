import React, { useState } from "react";
import Form from "./Form";
import IncompleteProjects from "./IncompleteProjects";
import CompletedProjects from "./CompletedProjects";

export type Project = {
  id: number;
  title: string;
  description: string;
  number: number;
  completed: boolean;
};

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  function addNewProject(newProject: Project) {
    setProjects([...projects, newProject]);
  }

  const IncompleteProjectsArr = projects.filter(
    (project) => !project.completed
  );

  function updateCompletionStatus(
    projects: Project[],
    projectId: number,
    newStatus: Boolean
  ) {
    projects.map((project) =>
      project.id === projectId ? { ...project, completed: newStatus } : project
    );
  }

  return (
    <main>
      <Form addNewProject={addNewProject} />
      <IncompleteProjects projects={projects} />
      <CompletedProjects
        projects={projects}
        updateCompletionStatus={updateCompletionStatus}
      />
    </main>
  );
}

export default App;
