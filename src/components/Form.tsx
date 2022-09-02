import React, { useState } from "react";

import { ProjectType } from "./App";

type FormProps = {
  addNewProject: (newProject: ProjectType) => void;
};

function Form({ addNewProject }: FormProps) {
  const [project, setProject] = useState({
    id: 1,
    title: "",
    description: "",
    number: 0,
    completed: false,
  });

  function updateTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setProject({ ...project, title: event.target.value });
  }

  function updateDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setProject({ ...project, description: event.target.value });
  }

  function updateNumber(event: React.ChangeEvent<HTMLInputElement>) {
    setProject({ ...project, number: +event.target.value });
  }

  function submitProject(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!project.title) {
      alert("Please enter a title for this project");
      return;
    }
    if (!project.description) {
      alert("Please enter a description for this project");
      return;
    }
    addNewProject(project);
    setProject({
      id: project.id + 1,
      title: "",
      description: "",
      number: 0,
      completed: false,
    });
  }

  return (
    <section id="form-container">
      <form>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={updateTitle}
            value={project.title}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows={3}
            onChange={updateDescription}
            value={project.description}
          ></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="people">People</label>
          <input
            type="number"
            id="people"
            step="1"
            min="0"
            max="10"
            onChange={updateNumber}
            value={project.number}
            onKeyDown={(event) => {
              event.preventDefault();
            }}
          />
        </div>
        <button onClick={submitProject}>ADD PROJECT</button>
      </form>
    </section>
  );
}

export default Form;
