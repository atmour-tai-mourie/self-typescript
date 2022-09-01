import React, { useState } from "react";
import Form from "./Form";
import IncompleteProjects from "./IncompleteProjects";
import CompletedProjects from "./CompletedProjects";

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  number: number;
  completed: boolean;
};

function App() {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  function addNewProject(newProject: ProjectType) {
    setProjects([...projects, newProject]);
  }

  function updateCompletionStatus(projectId: number, newStatus: boolean) {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? { ...project, completed: newStatus }
          : project
      )
    );
  }

  return (
    <main>
      <Form addNewProject={addNewProject} />
      <IncompleteProjects
        projects={projects}
        updateCompletionStatus={updateCompletionStatus}
      />
      <CompletedProjects
        projects={projects}
        updateCompletionStatus={updateCompletionStatus}
      />
    </main>
  );
}

export default App;
