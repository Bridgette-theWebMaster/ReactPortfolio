import React from "react";
import "./Projects.css";

export default function Projects(props) {
  const projects = props.projects;
  return (
    <div className="ProjectsContainer">
      <h1>My Projects</h1>
      {projects.map((p) => (
        <>
          <li key={p.id} className="Projects">
            <img src={p.photo} alt={p.name} />
            <div className="row">
              <h2>{p.name}</h2>

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
          </li>
        </>
      ))}
    </div>
  );
}
