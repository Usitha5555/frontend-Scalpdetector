import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-image.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  return (
    <section id="intro" className="mt-5 ms-5">
      <div className="container-lg">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 text-center text-md-start">
            <h1>
              <div className="display-4 fw-medium">Revitalize Your Hair</div>
              <div className="display-5 text-muted fw-normal">
                with HairTreatzz
              </div>
            </h1>
            <p className="lead my-4 text-muted">
              Upload a photo of your hair and get personalized insights
              instantly!
            </p>
            <p>
              <Link to="/signup" className="btn btn-primary btn-lg">
                Register Now
              </Link>
              <span> &nbsp;&nbsp;or&nbsp;&nbsp; </span>
              <Link to="/login" className="btn btn-primary btn-lg">
                Login
              </Link>
            </p>
          </div>
          <div className="col-md-7 text-center d-none d-md-block">
            <img className="img-fluid" src={heroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
