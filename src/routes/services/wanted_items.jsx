import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/wanted_items.css";
import imgage from "../../img/wen1.jpg"
import imgage1 from "../../img/wen2.jpg"
import imgage2 from "../../img/wen3.jpg"

const Wanted_items = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-3 sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-5">
                <h1 data-aos="zoom-in" className="Title">
                 Wanted Items
                </h1>
                <div className="row mt-1">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <p data-aos="slide-right" data-aos-once="true">
              Looking for something specific? Our service can help you find 
              what you need by gathering details about wanted items and providing additional 
              information. Call us today to share your request and get personalized assistance 
              in locating your desired items.
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

export default Wanted_items;
