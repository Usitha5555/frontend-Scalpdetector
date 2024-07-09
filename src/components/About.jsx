import React from "react";
import aboutImage from "../assets/images/about.png"; // Import your image here

const About = () => {
  return (
    <section id="about">
      <div className="container-md">
        <div className="text-center">
          <h2>About Us</h2>
          <p className="lead text-muted">
            Join us on the path to healthier hair and discover the difference
            that HairTreatzz can make in your hair care routine.
          </p>
        </div>
        <div className="row my-5 g-5 justify-content-around align-items-center">
          {/* picture grid */}
          <div className="col-6 col-lg-4">
            <img src={aboutImage} className="img-fluid" alt="About Us" />{" "}
            {/* Use your image variable */}
          </div>
          {/* accordion grid */}
          <div className="col-lg-6">
            {/* accordion */}
            <div className="accordion" id="chapters">
              {/* who-we-are */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#who-we-are"
                    aria-expanded="true"
                    aria-controls="who-we-are"
                  >
                    Who We Are
                  </button>
                </h2>
                {/* div with className 'show' will be shown by default */}
                <div
                  className="accordion-collapse collapse show"
                  id="who-we-are"
                  aria-labelledby="heading-1"
                  data-bs-parent="#chapters"
                >
                  <div className="accordion-body">
                    <p>
                      HairTreatzz is a team of dedicated professionals, united
                      by a passion for hair health. With years of experience in
                      both technology and healthcare, we have developed a
                      cutting-edge platform that leverages machine learning to
                      provide precise hair analysis.
                    </p>
                  </div>
                </div>
              </div>
              {/* our-mission */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-2">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#our-mission"
                    aria-expanded="true"
                    aria-controls="our-mission"
                  >
                    Our Mission
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="our-mission"
                  aria-labelledby="heading-2"
                  data-bs-parent="#chapters"
                >
                  <div className="accordion-body">
                    <p>
                      At HairTreatzz, we are committed to revolutionizing hair
                      care through advanced technology. Our mission is to
                      empower individuals with accurate and personalized
                      insights into their hair health, helping them achieve
                      their best hair yet.
                    </p>
                  </div>
                </div>
              </div>
              {/* our-vision */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-3">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#our-vision"
                    aria-expanded="true"
                    aria-controls="our-vision"
                  >
                    Our Vision
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="our-vision"
                  aria-labelledby="heading-3"
                  data-bs-parent="#chapters"
                >
                  <div className="accordion-body">
                    <p>
                      We envision a world where everyone has access to the
                      knowledge and tools they need to maintain healthy,
                      beautiful hair. By harnessing the power of ML, we strive
                      to make personalized hair care accessible and affordable
                      for all.
                    </p>
                  </div>
                </div>
              </div>
              {/* why-choose-HairTreatzz */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-4">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#why-choose-HairTreatzz"
                    aria-expanded="true"
                    aria-controls="why-choose-HairTreatzz"
                  >
                    Why Choose HairTreatzz?
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="why-choose-HairTreatzz"
                  aria-labelledby="heading-4"
                  data-bs-parent="#chapters"
                >
                  <div className="accordion-body">
                    <p>
                      <span className="fw-medium">Expertise:</span> We combine
                      the latest in ML technology with deep expertise in hair
                      health.
                    </p>
                    <p>
                      <span className="fw-medium">Innovation:</span> We
                      continually improve our algorithms and analysis techniques
                      to provide the most accurate results.
                    </p>
                    <p>
                      <span className="fw-medium">User-Centric:</span> Your hair
                      care journey is at the heart of what we do. We design our
                      services with your needs in mind.
                    </p>
                    <p>
                      <span className="fw-medium">Privacy:</span> We prioritize
                      your privacy and ensure that your data is secure and
                      confidential
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
