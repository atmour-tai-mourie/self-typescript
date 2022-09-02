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

  const completedProjects = projects.filter((project) => project.completed);
  const incompleteProjects = projects.filter((project) => !project.completed);

  return (
    <main>
      <Form addNewProject={addNewProject} />
      <IncompleteProjects
        projects={incompleteProjects}
        updateCompletionStatus={updateCompletionStatus}
      />
      <CompletedProjects
        projects={completedProjects}
        updateCompletionStatus={updateCompletionStatus}
      />
    </main>
  );
}

export default App;
