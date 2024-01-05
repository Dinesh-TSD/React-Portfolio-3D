import React from "react";
import "./Projects.css";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="project" className="container-fluid my-5 project-cointainer">
        <div className="pro-heading">
          <h1>Recent Projects</h1>
        </div>
        <div className="row project-bg">
          <div className="col-md-4 col-12">
            <div className="card mb-4 project-card">
              <img src='./images/shop.jpg' className="card-img-top" alt="Card" />
              <div className="card-body">
                <h5 className="card-title">DST Shop</h5>
                <p className="card-text"> MERN Stack E-commerce Project: Using MongoDB, Express.js, React, and Node.js for product management, functionality, and secure transactions.</p>
                <button type="button" class="btn btn-primary">Live Preview</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="card mb-4 project-card">
              <img src='./images/social.jpg' className="card-img-top" alt="Card" />
              <div className="card-body">
                <h5 className="card-title">CodeFire</h5>
                <p className="card-text"> Social Media App for Developers: Connect, collaborate, and share insights with fellow developers in a specialized platform tailored for the tech community.</p>
                <button type="button" class="btn btn-primary">Live Preview</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="card mb-4 project-card">
              <img src='./images/dashboard.jpg' className="card-img-top" alt="Card" />
              <div className="card-body">
                <h5 className="card-title">Dashboard</h5>
                <p className="card-text">Dashboard: An intuitive and data-driven platform providing real-time insights and analytics for efficient decision-making and monitoring in a MERN stack application.</p>
                <button type="button" class="btn btn-primary">Live Preview</button>
              </div>
            </div>
          </div>
        </div>

    </Element>
  );
};

export default Projects;
