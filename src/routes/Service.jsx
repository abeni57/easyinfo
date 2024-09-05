import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../styles/Service.css";

const Service = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-5 mb-5 mat1">
        <div className="container mam3">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-5">
                <h1 data-aos="zoom-in" className="teamT">
                  Our Service
                </h1>
              </div>
            </div>
          </div>

          <div class="row gy-4 serbices">
          <div
              data-aos="slide-right"
              data-aos-once="true"
              class="col-12 col-md-6 col-sm-6 col-xl-4 col-lg-4"
            >
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-briefcase"></i>
                  <h3 class="card-title">Any type of Affair Management</h3>
                  <p class="lead">
                  We offer Effective and Fast affair management services tailored to your needs. 
                  Our expert team is equipped to handle any type of situation with Honesty and professionalism. 
                  Contact us and save your time. 
                  </p>
                  <Link
                    class="btn btb3 btn-primary text-light"
                    to="/services/affair_managnement"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-right"
              data-aos-once="true"
              class="col-12 col-md-6 col-sm-6 col-xl-4 col-lg-4"
            >
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-brain"></i>
                  <h3 class="card-title">Mental Health</h3>
                  <p class="lead">
                  Our trained listeners and our team of professional psychologists 
                  are here to offer expert support and guidance is ready to assist you with your needs. 
                  Call us today to connect with a skilled trainee listener who will provide attentive and empathetic support. 
                  Experience our dedicated service and get the help you deserve.
                  </p>
                  <Link
                    class="btn btb3 btn-primary text-light"
                    to="/services/mental_health"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-right"
              data-aos-once="true"
              class="col-12 col-md-6 col-sm-6 col-xl-4 col-lg-4"
            >
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-laptop"></i>
                  <h3 class="card-title">Laptops & Computers</h3>
                  <p class="lead">
                  Our professionals are here to offer expert advice and detailed information about laptops and computers, 
                  including their location and specifications, all within your budget. 
                  Call us today for personalized support and find the perfect tech solutions 
                  that meet your needs and financial considerations.
                  </p>
                  <Link
                    class="btn btb3 btn-primary text-light"
                    to="/services/office_building"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-down"
              data-aos-once="true"
              class="col-12 col-md-6 sm2 col-sm-6 col-xl-4 col-lg-4"
            >
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-phone"></i>
                  <h3 class="card-title">Mobile Phones & Tablets </h3>
                  <p class="lead">
                  Our professionals offer expert advice and detailed information on 
                  mobile phones and tablets, including their features and specifications, 
                  all within your budget. Call us today for personalized support to find 
                  the perfect device that meets your needs and financial considerations.
                  </p>
                  <Link
                    class="btn btb3 btn-primary text-light"
                    to="/services/mobile_phones"
                  >
                    Read More
                  </Link>
                  
                </div>
              </div>
            </div>
            <div
              data-aos="slide-left"
              data-aos-once="true"
              class="col-12 col-md-6 col-sm-6 sm2 col-xl-4 col-lg-4"
            >
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-camera"></i>
                  <h3 class="card-title">Photo & Video Cameras</h3>
                  <p class="lead">
                  Our experts are ready to provide you with advice and information on 
                  photo and video cameras. Call us today for personalized recommendations 
                  and support to enhance your photography and videography experience. 
                  Let us help you choose the perfect equipment for your needs and financial considerations.
                  </p>
                  <Link
                    class="btn btb3 btn-primary text-light"
                    to="/services/photo_camera"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-up"
              data-aos-once="true"
              class="col-12 col-md-6 col-sm-6 sm1 sm2 col-xl-4 col-lg-4"
            >
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-blender"></i>
                  <h3 class="card-title">Kitchen Appliances</h3>
                  <p class="lead">
                  Our experts offer personalized advice and detailed information on health and beauty products. 
                  Call us today for tailored support to find the best solutions that meet your needs. 
                  Let us help you achieve your health and beauty goals with professional guidance
                  </p>
                  <Link
                    class="btn btb3 btn-primary text-light"
                    to="/services/kitchen_appliance"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-right"
              data-aos-once="true"
              class="col-12 col-md-6 col-sm-6 col-xl-4 sm1 col-lg-4">
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-plug"></i>
                  <h3 class="card-title">Electronics and Networking Products</h3>
                  <p class="lead">
                  Our professionals are here to provide expert advice and detailed information on 
                  kitchen appliances and networking products. Call us today for personalized support 
                  and recommendations to find the perfect solutions for your needs. 
                  Let us help you make informed choices and get the best value for your investment with in a budget.
                  </p>
                  <Link
                    class="btn btb3 btn-primary text-light"
                    to="/services/electronics_product"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          
        
            <div
              data-aos="slide-up"
              data-aos-once="true"
              className="col-12 col-md-6 col-sm-6 sm1 sm2 col-xl-4 col-lg-4"
            >
              <div className="card text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-spa"></i>
                  <h3 className="card-title">Health & Beauty</h3>
                  <p className="lead">
                  Our experts offer personalized advice and detailed information on health and beauty products. 
                  Call us today for tailored support to find the best solutions that meet your needs. 
                  Let us help you achieve your health and beauty goals with professional guidance
                  </p>
                  <Link
                    class="btn btb3 btn-primary text-light"
                    to="/services/health_beauty"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-up"
              data-aos-once="true"
              class="col-12 col-md-6 col-sm-6 sm1 sm2 col-xl-4 col-lg-4"
            >
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-star"></i> 
                  <h3 class="card-title">Wanted Items</h3>
                  <p class="lead">
                  Looking for something specific? Our service can help you find 
                  what you need by gathering details about wanted items and providing additional 
                  information. Call us today to share your request and get personalized assistance 
                  in locating your desired items.
                  </p>
                  <Link
                    class="btn btb3 btn-primary text-light"
                    to="/services/wanted_items"
                  >
                    Read More
                  </Link>
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

export default Service;
