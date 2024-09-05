import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/affair_managnement.css";
import imgage from "../../img/aff3.jpg"
import imgage1 from "../../img/aff2.png"
import imgage2 from "../../img/aff1.png"

const Affair_managnement = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-3 sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-5">
                <h1 data-aos="zoom-in" className="Title">
                 Affair Management 
                </h1>
                <div className="row mt-1">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <p data-aos="slide-right" data-aos-once="true">
              We offer Effective and Fast affair management services tailored to your needs. 
              Our expert team is equipped to handle any type of situation with Honesty and professionalism. 
              Contact us and save your time
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

export default Affair_managnement;
