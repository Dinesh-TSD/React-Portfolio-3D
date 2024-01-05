import React from "react";
import "./About.css";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about" className="container-fluid about-container">
      <div className="heroContainer">
        <div className="about-heading">
          <h1>About Me</h1>
        </div>

        <div className="row">
          <div className="col-lg-6 col-sm-12 hero-bg">
            <img src="./images/hero-stand.jpg" alt="" className="about-pic" />
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="about-content">
              <div className="about-section">
                <h4>Profile</h4>
                <p>
                  Passionate MERN stack developer with a flair for crafting
                  robust and scalable web applications. Proficient in MongoDB,
                  Express.js, React.js, and Node.js, I bring a creative approach
                  to solving complex problems. Dedicated to staying ahead in the
                  ever-evolving tech landscape, I thrive on turning innovative
                  ideas into seamless, user-friendly experiences. Let's
                  collaborate and build the future of web development together.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
