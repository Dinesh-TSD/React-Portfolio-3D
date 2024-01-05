import React from "react";
import "./Skills.css";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiMongodb,SiMysql  } from "react-icons/si";
import { PiTreeStructureBold } from "react-icons/pi";
import { faAws, faBootstrap, faCss3Alt, faGithub, faHtml5, faJs, faNodeJs, faPython, faReact, faSquareGit } from "@fortawesome/free-brands-svg-icons";
import { faE } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <Element name="skills" className="container-fluid skill-bg">
      <div className="skill-heading">
          <h1>Technical Skills</h1>
        </div>

        <div className="row skill-icons">
          <div className="col-xl-2 col-3 skill-card">
          <FontAwesomeIcon icon={faHtml5} className="skill-icon-html" />
          </div>
          <div className="col-xl-2 col-3 skill-card">
          <FontAwesomeIcon icon={faCss3Alt} className="skill-icon-css" />
          </div>
          <div className="col-xl-2 col-3 skill-card">
            <FontAwesomeIcon icon={faBootstrap} className="skill-icon-bts" />
          </div>
          <div className="col-xl-2 col-3 skill-card">
            <FontAwesomeIcon icon={faJs} className="skill-icon-js" />
          </div>
          <div className="col-xl-2 col-3 skill-card">
            <FontAwesomeIcon icon={faReact} className="skill-icon-rjs" />
          </div>
          <div className="col-xl-2 col-3 skill-card">
            <FontAwesomeIcon icon={faNodeJs} className="skill-icon-njs" />
          </div>
          <div className="col-xl-2 col-3 skill-card">
            <FontAwesomeIcon icon={faE} className="skill-icon-exp" />
          </div>
          <div className="col-xl-2 col-3 skill-card">
          <SiMongodb className="skill-icon-mdb" />
          </div>
          <div className="col-xl-2 col-3 skill-card">
          <SiMysql className="skill-icon-sql" />
          </div>
          <div className="col-xl-2 col-3 skill-card">
          <FontAwesomeIcon icon={faSquareGit} className="skill-icon-git"/>
          </div>
          <div className="col-xl-2 col-3 skill-card">
          <FontAwesomeIcon icon={faGithub} className="skill-icon-github"/>
          </div>
          <div className="col-xl-2 col-3 skill-card">
            <FontAwesomeIcon icon={faAws} className="skill-icon-aws" />
          </div>
          <div className="col-xl-2 col-3 skill-card">
          <PiTreeStructureBold  className="skill-icon-dsa"/>
          </div>
          <div className="col-xl-2 col-3 skill-card">
            <FontAwesomeIcon icon={faPython} className="skill-icon-python" />
          </div>
        </div>
    </Element>
  );
};

export default Skills;
