import React from "react";
import "./Hero.css";
import { Element } from "react-scroll";
import Typical from "react-typical";
import { MDBBtn, MDBContainer, MDBFooter, MDBIcon } from "mdb-react-ui-kit";

const Hero = () => {
  return (
    <Element name="hero" className="container-fluid header">
      <div className="row">
        <div className="col-xl-6 col-lg-6 left">
          <h4>Hi I Am</h4>
          <h1>Dinesh TSD</h1>

          <div className="hero-name">
            <span className="primary-text">
              {" "}
              <h2>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "MERN Stack Developer",
                    1500,
                    "Full Stack Developer",
                    1500,
                    "React Developer",
                    1500,
                    "Ethusiastic  Developer",
                    1500,
                  ]}
                />
              </h2>
            </span>
          </div>

          <div className="cv_buttons">
            <div className="col-xl-6 col-lg-6 ">
              <a href="header" className="btn hire-btn">
                Hire Me
              </a>
            </div>
            <div className="col-xl-6 col-lg-6 ">
              <a href="./images/Resume3D.pdf" download className="btn hire-btn">
                Download CV
              </a>
            </div>
          </div>
          <MDBFooter className=" text-center text-white">
            <MDBContainer className="p-4 pb-0">
              <section className="mb-4">
                <MDBBtn
                  floating
                  className="m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="https://www.facebook.com/profile.php?id=100040037795176"
                  role="button"
                >
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn
                  floating
                  className="m-1"
                  style={{ backgroundColor: "#55acee" }}
                  href=""
                  role="button"
                >
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn
                  floating
                  className="m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="https://www.instagram.com/dineshdhiney/"
                  role="button"
                >
                  <MDBIcon fab icon="instagram" />
                </MDBBtn>

                <MDBBtn
                  floating
                  className="m-1"
                  style={{ backgroundColor: "#0082ca" }}
                  href="https://www.linkedin.com/in/dinesh-tsd-fire-coder/"
                  role="button"
                >
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>

                <MDBBtn
                  floating
                  className="m-1"
                  style={{ backgroundColor: "#333333" }}
                  href="https://github.com/Dinesh-TSD"
                  role="button"
                >
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </section>
            </MDBContainer>
          </MDBFooter>
        </div>
        <div className="col-xl-6 col-lg-6 right">
          <img src="./images/boy.jpg" alt="" className="hero-pic" />
        </div>
      </div>
    </Element>
  );
};

export default Hero;
