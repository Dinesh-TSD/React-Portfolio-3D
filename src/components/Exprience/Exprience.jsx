import React from "react";
import "./Exprience.css";
import { Element } from "react-scroll";

const Exprience = () => {
  return (
    <Element name="exp" className="container-fluid exp-container">
      <div className="exp-heading">
          <h1>Exprience</h1>
        </div>
      <div className="exp">
        
        <p>
          In my first four months as a MERN stack developer, I've gained
          valuable hands-on experience working with MongoDB, Express.js, React,
          and Node.js. I've actively contributed to the development of web
          applications, learning to implement efficient and scalable solutions.
          
          During this time, I've tackled real-world challenges, honed my coding
          skills, and collaborated within a team environment. My experience
          reflects a commitment to continuous learning and a proactive approach
          to problem-solving. Eager to take on more complex projects and further
          expand my expertise in the dynamic field of full-stack development.
        </p>
      </div>
    </Element>
  );
};

export default Exprience;
