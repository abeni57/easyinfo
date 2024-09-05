import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/NavbarFooter.css";
import "../styles/Home.css";
import img from "../img/Constr.jpg";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

export default function Home() {
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm();
  function onSubmit1(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p1l974w",
        "template_08q0dzc",
        e.target,
        "Sxof60nC3cP0ZPodj"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Thank You for Message. We will conduct you as soon as possible"
          );
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
        }
      );
  }
  return (
    <div>
      <Navbar />
      <section className="ConT bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex TEXT align-items-center justify-content-center text-center flex-column">
                {/* <h1 data-aos="fade-up" data-aos-anchor=".other-element">
                  Easy
                </h1>
                <h2 data-aos="fade-in">Tech Support Call Center</h2> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ma">
      <div className="container mb-5 mt-3 mat">
      <div className="row p-4 gx-5">
        <div className="col-12 col-sm-12 col-lg-6 col-md-6 col-xl-6 imgg">
          <img src={img} alt="" />
        </div>
        <div className="col-12 col-sm-12 col-lg-6 col-md-6 col-xl-6 ma1">
          <h1 data-aos="zoom-in">Why You Choose Us?</h1>
          <p className="mb-5 text-justify" data-aos="slide-up" data-aos-once="true">
            Easy Consultancy is a privately owned and operated company that adheres to
            Ethiopian commercial law as well as the professional requirements of the
            Ministry of Labor and Skills. Easy Consultancy is a consultancy and
            information service provider. The aim is to enhance people's lives by
            offering information via a 15-hour daily call center and a 24-hour
            platform service. Our company is on the side of the people and serves
            them honestly. Our mission is to provide daily services with a single
            phone call and at an affordable price through the application, reducing
            societal living pressures. Our Vision is to helping our society live a
            simpler lifestyle by expanding services in all sectors.
          </p>
          <span data-aos="slide-up" className="btb">
            <Link to="" className="btn btn-primary btb1">
              Read More
            </Link>
            <Link to="" className="btn btn-primary btb2">
              Get Started
            </Link>
          </span>
        </div>
      </div>
</div>

      </section>
      <section className="mb-5 mat1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center pt-5 pb-5">
                <h1 data-aos="zoom-in">Our Service</h1>
              </div>
            </div>
          </div>
          <div className="row gy-4 serbices">
          <div
              data-aos="slide-right"
              data-aos-once="true"
              className="col-12 col-md-6 col-sm-6 col-xl-4 col-lg-4"
            >
              <div className="card text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-briefcase"></i>
                  <h3 className="card-title">Any type of Affair Management</h3>
                  <p className="lead">
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
              className="col-12 col-md-6 col-sm-6 col-xl-4 sm1 col-lg-4"
            >
              <div className="card text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-brain"></i>
                  <h3 className="card-title">Mental Health</h3>
                  <p className="lead">
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
              className="col-12 col-md-6 col-sm-6 col-xl-4 col-lg-4"
            >
              <div className="card text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-laptop"></i>
                  <h3 className="card-title">Laptops & Computers</h3>
                  <p className="lead">
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
              className="col-12 col-md-6 sm2 col-sm-6 col-xl-4 col-lg-4"
            >
              <div className="card text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-phone"></i>
                  <h3 className="card-title">Mobile Phones & Tablets </h3>
                  <p className="lead">
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
              className="col-12 col-md-6 col-sm-6 sm2 col-xl-4 col-lg-4"
            >
              <div className="card text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-camera"></i>
                  <h3 className="card-title">Photo & Video Cameras</h3>
                  <p className="lead">
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
              className="col-12 col-md-6 col-sm-6 sm1 sm2 col-xl-4 col-lg-4"
            >
              <div className="card text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-blender"></i>
                  <h3 className="card-title">Kitchen Appliances</h3>
                  <p className="lead">
                  Our specialists offer expert advice and detailed 
                  information on kitchen appliances and networking products, 
                  including their features and specifications, all within your budget. 
                  Call us today for personalized support to find 
                  the perfect solutions that meet your needs and financial considerations.
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
              className="col-12 col-md-6 col-sm-6 col-xl-4 sm1 col-lg-4"
            >
              <div className="card text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-plug"></i>
                  <h3 className="card-title">Electronics and Networking Products</h3>
                  <p className="lead">
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
              data-aos="slide-left"
              data-aos-once="true"
              className="col-12 pl-4 col-md-6 col-sm-6 col-xl-4 col-lg-4"
            >
              <div className="card w1 text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-star"></i>
                  <h3 className="card-title">Wanted Items</h3>
                  <p className="lead">
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
      <section className="mb-5">
        <div className="container mam6">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mam1 mt-3 mb-3">
                <h1 data-aos="zoom-in">Contact Us</h1>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div
              data-aos="slide-right"
              data-aos-once="true"
              className="col-12 Atopic col-md-4 col-sm-4 col-xl-4 col-lg-4 mt-3"
            >
              <h2>
                <i className="fas fa-map-marker-alt "></i>&nbsp;Address
              </h2>
              <p className="lead1">
                Bole Sub City, Kebele 8, Mega Building 3rd Floor
              </p>
              <h2>
                <i className="fas fa-envelope "></i>&nbsp;Email
              </h2>
              <p className="lead1">
                <a href="mailto:ezramtd36@gmail.com">beti2024@gmail.com</a>
              </p>
              <h2>
                <i className="fas fa-phone "></i>&nbsp;Phone
              </h2>
              <span className="lead1">
                <a href="tel:+251911209528">Mob +251-93 113 8338</a>
              </span>
              <br />
              <span className="lead1">
                <a href="tel:+251911930188">Mob +251-703972307</a>
              </span>
              <br />
              <span className="lead1">
                <a href="tel:+251114160839">Tel 011-114160839</a>
              </span>
            </div>
            <div
              data-aos="slide-left"
              data-aos-once="true"
              className="col-12 col-md-6 Aform col-sm-8 col-xl-8 col-lg-8"
            >
              <form onSubmit={onSubmit1} className="bg-light p-4 m-auto">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Full Name"
                        type="text"
                        name="to_name"
                        required
                        {...register("to_name", {
                          required: "Name is required",
                          minLength: {
                            value: 4,
                            message: "Minimum required length is 4",
                          },
                          pattern: {
                            value: /^[A-z]*$/,
                            message: "Only Letters are allowed",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("to_name");
                        }}
                      />
                      {errors.to_name && (
                        <small className="text-danger">
                          {errors.to_name.message}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Email"
                        type="text"
                        name="from_name"
                        required
                        {...register("from_name", {
                          required: "Email is required",
                          pattern: {
                            value:
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Invalid Email format",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("from_name");
                        }}
                      />
                      {errors.from_name && (
                        <small className="text-danger">
                          {errors.from_name.message}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        rows="3"
                        name="message"
                        required
                        {...register("message", {
                          required: "message is required",
                          minLength: {
                            value: 5,
                            message: "Minimum required length is 5",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("message");
                        }}
                      ></textarea>
                      {errors.message && (
                        <small className="text-danger">
                          {errors.message.message}
                        </small>
                      )}
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btb3 btn-lg btn-block mt-3"
                    type="submit"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
