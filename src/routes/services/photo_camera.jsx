import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/photo_camera.css";
import imgage from "../../img/cam1.jpg"
import imgage1 from "../../img/cam2.jpg"
import imgage2 from "../../img/cam3.jpg"

const Photo_camera = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-3 sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-5">
                <h1 data-aos="zoom-in" className="Title">
                 Photo & Video Cameras 
                </h1>
                <div className="row mt-1">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <p data-aos="slide-right" data-aos-once="true">
              Our experts are ready to provide you with advice and information on photo and video cameras. 
              Call us today for personalized recommendations and support to enhance your photography and videography experience. 
              Let us help you choose the perfect equipment for your needs and financial considerations.
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

export default Photo_camera;
