import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/electronics_product.css";
import imgage from "../../img/ele1.jpg"
import imgage1 from "../../img/ele2.jpg"
import imgage2 from "../../img/ele3.jpg"
import imgage3 from "../../img/ele4.jpg"
import imgage4 from "../../img/ele5.jpg"
import imgage5 from "../../img/ele6.jpg"

const Electronics_product = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-3 sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-5">
                <h1 data-aos="zoom-in" className="Title">
                 Electronics & Netwoking Products 
                </h1>
                <div className="row mt-1">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <p data-aos="slide-right" data-aos-once="true">
              Our professionals are here to provide expert advice and detailed information on electronics and networking products. 
              Call us today for personalized support and recommendations to find the perfect solutions for your needs. 
              Let us help you make informed choices and get the best value for your investment with in a budget
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

               <div class="col-lg-4 second_profile">
                <div class="card">
                <img src={imgage3} class="card-img-top img-fluid" alt="" />
                  
                 </div>
               </div>

               <div class="col-lg-4 second_profile">
                <div class="card">
                <img src={imgage4} class="card-img-top img-fluid" alt="" />
                  
                 </div>
               </div>

               <div class="col-lg-4 second_profile">
                <div class="card">
                <img src={imgage5} class="card-img-top img-fluid" alt="" />
                  
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

export default Electronics_product;
