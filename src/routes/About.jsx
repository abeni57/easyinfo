import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About1 from "../javascripts/About1";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="mb-5">
        <div className="container mam1">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-5">
                <h1 data-aos="zoom-in" className="teamT1">
                  About Us
                </h1>
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <p data-aos="slide-right" data-aos-once="true">
              Easy Consultancy is a privately owned and operated company that adheres to 
              Ethiopian commercial law as well as the professional requirements of the Ministry of Labor and Skills. 
              They work in technology and were originally licensed as information service providers.
              Easy Consultancy is a consultancy and information service provider. 
              The aim is to enhance people's lives by offering information via a 15-hour daily call center and a 24-hour platform service.
              </p>
            
              <p data-aos="slide-right" data-aos-once="true" className="mt-3">
              
              Our mission: To provide daily services with a single phone call and at an affordable price through the application, reducing societal living pressures.
              </p>
              <p data-aos="slide-right" data-aos-once="true" className="mt-3">
              
              Our Vision: Helping our society live a simpler lifestyle by expanding services in all sectors.

              </p>
              <p data-aos="slide-right" data-aos-once="true" className="mt-3">
              Honesty: Our company is on the side of the people and serves them honestly.
            
              </p>

              <ul className="pt-2 lil">
                <li>
                  <p data-aos="flip-up" data-aos-once="true">
                    <i className="fas fa-check-circle"></i>&nbsp;&nbsp;&nbsp;
                    Short-term goals: For many people to serve both full-time and part-time work, simplify the life of the community by providing users
                  </p>
                </li>
                <li>
                  <p data-aos="flip-up" data-aos-once="true">
                    <i className="fas fa-check-circle"></i>&nbsp;&nbsp;&nbsp;
                    Long-term goals: To build our customers' trust in us by working with integrity, increasing the number of our customers, and expanding by adding different services.
                  </p>
                </li>
              
              </ul>
            </div>
          </div>
          
              </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
