import React from "react";
import { Link } from "react-router-dom";
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
            <Link to={`/projects/${p.id}`}>
              <p>{p.name}</p>
            </Link>
          </li>
        </>
      ))}
    </div>
  );
}
