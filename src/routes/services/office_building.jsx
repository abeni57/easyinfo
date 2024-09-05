import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/office_building.css";
import imgage from "../../img/lap1.jpg"
import imgage1 from "../../img/lap2.jpg"
import imgage2 from "../../img/lap3.jpg"

const Office_building = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-3 sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-5">
                <h1 data-aos="zoom-in" className="Title">
                  Laptop & Computers
                </h1>
                <div className="row mt-1">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <p data-aos="slide-right" data-aos-once="true">
              Our professionals are here to offer expert advice and detailed information about laptops and computers, including their 
              location and specifications, all within your budget. 
              Call us today for personalized support and find the perfect tech solutions that meet your needs and financial considerations.
              </p>
              </div></div>
              <div class="row">

            <div class="col-lg-4">
              <div class="card">
              <img src={imgage} class="card-img-top img-fluid" alt="" />
              
               </div>
             </div>

             <div class="col-lg-4 second_profile">
                <div class="card">
                <img src={imgage1} class="card-img-top img-fluid" alt="" />
                  
                 </div>
               </div>
  

               <div class="col-lg-4">
                <div class="card">
                  <img src={imgage2} class="card-img-top img-fluid" alt="" />
                  
                 </div>
               </div>
              </div>
              
              </div>
            </div>
          </div>
        
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Office_building;
