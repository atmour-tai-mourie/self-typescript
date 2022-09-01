import React, { useState } from "react";
import Form from "./Form";
import IncompleteProjects from "./IncompleteProjects";

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

  return (
    <main>
      <Form addNewProject={addNewProject} />
    </main>
  );
}

export default App;
