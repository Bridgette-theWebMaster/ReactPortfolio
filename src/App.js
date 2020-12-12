import "./App.css";
import React, { useState } from "react";
import Modal from "./Modal/Modal";
import About from "./Screen/About";
import Projects from "./Screen/Projects";
import Project from "./Screen/Project";
import Contact from "./Screen/Contact";
import STORE from "./PROJECTS";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  const [modalToggle, setModalToggle] = useState(false);

  const modalHandler = (e) => {
    e.preventDefault();
    setModalToggle(!modalToggle);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">bridgetteTURNER</Link>
      </header>
      <nav>
        <Link
          to="/about"
          onClick={() => setModalToggle(!modalToggle)}
          className="AboutLink"
        >
          About
        </Link>
        <Link
          to="/projects"
          onClick={() => setModalToggle(!modalToggle)}
          className="ProjectsLink"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          onClick={() => setModalToggle(!modalToggle)}
          className="ContactLink"
        >
          Contact
        </Link>
      </nav>

      <Switch>
        <Route
          path="/about"
          render={() => (
            <Modal show={modalToggle} showModal={modalHandler}>
              <div style={{ color: "black" }}>
                <About />
              </div>
            </Modal>
          )}
        />
        <Route
          exact
          path="/projects"
          render={() => (
            <Modal show={modalToggle} showModal={modalHandler}>
              <div style={{ color: "black" }}>
                <Projects projects={STORE.projects} />
              </div>
            </Modal>
          )}
        />
        <Route
          path="/projects/:id"
          render={(props) => (
            <Modal show={modalToggle} showModal={modalHandler}>
              <div style={{ color: "black" }}>
                <Project {...props} />
              </div>
            </Modal>
          )}
        />
        <Route
          path="/contact"
          render={() => (
            <Modal show={modalToggle} showModal={modalHandler}>
              <div style={{ color: "black" }}>
                <Contact />
              </div>
            </Modal>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
