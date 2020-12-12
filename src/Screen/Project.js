import React from "react";
import STORE from "../PROJECTS";
import "./Project.css";
import BackButton from "../Button/BackButton";

export default function Project(props) {
  const id = props.match.params.id;
  const project = STORE.projects.filter((p) => p.id == id);
  return (
    <div className="ProjectContainer">
      <BackButton />
      {project.map((p) => (
        <div className="Project">
          <h1>{p.name}</h1>
          <br />
          <img src={p.photo} alt={p.name} />
          <p>{p.description}</p>
          <p>Built with: {p.tech}</p>
          {p.liveSite !== null ? <a href={p.liveSite}>Live Site</a> : null}
          <br />
          {p.clientRepo !== null ? (
            <a href={p.clientRepo}>Client Repo</a>
          ) : null}
          <br />
          {p.serverRepo !== null ? (
            <a href={p.serverRepo}>Server Repo</a>
          ) : null}
        </div>
      ))}
    </div>
  );
}
