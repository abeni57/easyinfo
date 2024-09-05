import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Projects.css";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-3">
        <div className="container mam">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-3">
                <h1 data-aos="zoom-in">Suppliers</h1>
              </div>
            </div>
          </div>
          <table class="table mt-3 mb-5 col-sm-12 table-borderless">
            <thead className="table-primaryy">
              <tr>
                <th>Supplier Name</th>
                <th>Product Type</th>
                <th>Product Name</th>
                <th>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jupiter Trading</td>
                <td>Computer Accessories</td>
                <td>Laptop Stand With Fan</td>
                <td>Kazanchis</td>
                <td>
                  <Link
                    className="btn btb3 btn-primary text-light"
                    to="/project/oda_bultum"
                  >
                    Read More
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Ulter Computer</td>
                <td>Networking Products</td>
                <td>D-Link Wifi</td>
                <td>Dembel</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>Jupiter Trading</td>
                <td>Computer Accessories</td>
                <td>Laptop Stand With Fan</td>
                <td>Kazanchis</td>
                <td>
                  <Link
                    className="btn btb3 btn-primary text-light"
                    to="/project/oda_bultum"
                  >
                    Read More
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Ulter Computer</td>
                <td>Networking Products</td>
                <td>D-Link Wifi</td>
                <td>Dembel</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>Jupiter Trading</td>
                <td>Computer Accessories</td>
                <td>Laptop Stand With Fan</td>
                <td>Kazanchis</td>
                <td>
                  <Link
                    className="btn btb3 btn-primary text-light"
                    to="/project/oda_bultum"
                  >
                    Read More
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Ulter Computer</td>
                <td>Networking Products</td>
                <td>D-Link Wifi</td>
                <td>Dembel</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>Jupiter Trading</td>
                <td>Computer Accessories</td>
                <td>Laptop Stand With Fan</td>
                <td>Kazanchis</td>
                <td>
                  <Link
                    className="btn btb3 btn-primary text-light"
                    to="/project/oda_bultum"
                  >
                    Read More
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Ulter Computer</td>
                <td>Networking Products</td>
                <td>D-Link Wifi</td>
                <td>Dembel</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
