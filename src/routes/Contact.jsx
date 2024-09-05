import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/NavbarFooter.css";
import "../styles/Contact.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

export default function Contact() {
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
      <section className="mb-5">
        <div className="container mam6">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-3">
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
                Bole Sub City, Mega Building 3rd floor 
              </p>
              <h2>
                <i className="fas fa-envelope "></i>&nbsp;Email
              </h2>
              <p className="lead1">
                <a href="mailto:ezramtd36@gmail.com@gmail.com">betisha01@gmail.com</a>
              </p>
              <h2>
                <i className="fas fa-phone "></i>&nbsp;Phone
              </h2>
              <span className="lead1">
                <a href="tel:+251911209528">Mob +251-931138338</a>
              </span>
              <br />
              <span className="lead1">
                <a href="tel:+251911930188">Mob +251-703239707</a>
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
