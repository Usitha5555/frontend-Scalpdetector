import React from "react";

const Contact = () => {
  return (
    <secion id="contact">
      <div className="container-lg">
        <div className="text-center">
          <h2>Get in Touch</h2>
          <div className="lead">
            Questions to ask? Fill out the form to contact me directly...
          </div>
        </div>
        {/*  contact form  */}
        <div className="row justify-content-center my-5">
          <div className="col-lg-6">
            <form>
              {/*  email  */}
              <label for="email" className="form-label">
                Email address:{" "}
              </label>
              <div className="mb-4 input-group">
                <span className="input-group-text">
                  <i className="bi bi-envelope-at-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="e.g. mario@example.com"
                />
                {/*  tooltip  */}
                <span className="input-group-text">
                  <span
                    className="tt"
                    data-bs-placement="bottom"
                    title="Enter an email address to which we can reply to."
                  >
                    <i className="bi bi-question text-muted"></i>
                  </span>
                </span>
              </div>

              {/*  name  */}
              <label for="name" className="form-label">
                Name:{" "}
              </label>
              <div className="mb-4 input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="e.g. Mario"
                />
                {/*  tooltip  */}
                <span className="input-group-text">
                  <span
                    className="tt"
                    data-bs-placement="bottom"
                    title="Enter your first name."
                  >
                    <i className="bi bi-question text-muted"></i>
                  </span>
                </span>
              </div>

              {/*  query select  */}
              <label for="subject" className="form-label">
                What is your question about?
              </label>
              <div className="mb-4 input-group">
                <span className="input-group-text">
                  <i className="bi bi-chat-right-text-fill"></i>
                </span>
                <select id="subject" className="form-select">
                  <option value="pricing" selected>
                    Pricing query
                  </option>
                  <option value="content">Content query</option>
                  <option value="other">Other query</option>
                </select>
              </div>

              {/*  query  */}
              <div className="form-floating mt-5 mb-4">
                <textarea
                  id="query"
                  className="form-control"
                  style={{ height: "140px" }}
                ></textarea>
                <label for="query">Your query...</label>
              </div>

              {/*  submit  */}
              <div className="mb-4 text-center">
                <button className="btn btn-secondary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </secion>
  );
};

export default Contact;
