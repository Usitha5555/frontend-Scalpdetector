import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [messageSent, setMessageSent] = useState(false);

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (formData.to_name.trim() === "") {
      tempErrors["to_name"] = "Name is required";
      isValid = false;
    }
    if (formData.from_name.trim() === "") {
      tempErrors["from_name"] = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.from_name)) {
      tempErrors["from_name"] = "Email is not valid";
      isValid = false;
    }
    if (formData.message.trim() === "") {
      tempErrors["message"] = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validate()) {
      emailjs
        .sendForm(
          "service_102uu4q",
          "template_u65i63u",
          form.current,
          "_JsZD5x3lGyim9lqF"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            setMessageSent(true);
            setFormData({ to_name: "", from_name: "", message: "" });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section
      id="contact"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container-lg" style={{ maxWidth: "600px" }}>
        <div className="text-center">
          <h2>Get in Touch</h2>
          <div className="lead">
            Questions to ask? Fill out the form to contact me directly...
          </div>
        </div>
        <div className="row justify-content-center my-5">
          <div className="d-flex justify-content-center">
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="email" className="form-label">
                Email address:
              </label>
              <div className="mb-4 input-group">
                <span className="input-group-text" style={{ height: "37px" }}>
                  <i className="bi bi-envelope-at-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="from_name"
                  placeholder="e.g. mario@example.com"
                  value={formData.from_name}
                  onChange={handleChange}
                />
              </div>
              {errors.from_name && (
                <span className="error">{errors.from_name}</span>
              )}
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <div className="mb-4 input-group">
                <span className="input-group-text" style={{ height: "38px" }}>
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="to_name"
                  placeholder="e.g. Mario"
                  value={formData.to_name}
                  onChange={handleChange}
                />
              </div>
              {errors.to_name && (
                <span className="error">{errors.to_name}</span>
              )}
              <label htmlFor="subject" className="form-label">
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
              <div className="form-floating mt-5 mb-4">
                <textarea
                  id="query"
                  className="form-control"
                  style={{ width: "400px", height: "140px" }}
                  name="message"
                  placeholder="Your query..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="query">Your query...</label>
              </div>
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
              {messageSent && (
                <p className="text-danger">Message sent successfully!</p>
              )}
              <div className="mb-4 text-center">
                <button className="btn btn-secondary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
