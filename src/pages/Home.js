import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "../components/Services";

import brain from "../assets/images/brain.png";
import reward from "../assets/images/reward.png";
import report from "../assets/images/report.png";

const Home = () => {
  const data = [
    {
      cardImage: brain,
      cardTitle: "ML-Powered Hair Analysis",
      cardDesc:
        "Simply upload a clear photo of your hair, and model will assess the overall condition.",
    },
    {
      cardImage: reward,
      cardTitle: "Hair Care Advice",
      cardDesc:
        "Based on the ML analysis, we offer tailored hair care advice that suits your unique needs.",
    },
    {
      cardImage: report,
      cardTitle: "Hair Health Reports",
      cardDesc:
        "Receive reports that outline issues, and suggest steps to improve your hair health.",
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <br />
      <br />
      <About />
      <section
        id="services"
        className="d-flex justify-content-center gap-2 mb-5"
      >
        {data.map(({ cardImage, cardTitle, cardDesc }) => (
          <Services
            cardImage={cardImage}
            cardTitle={cardTitle}
            cardDesc={cardDesc}
          />
        ))}
      </section>
      <Contact />
    </>
  );
};

export default Home;
