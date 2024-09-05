import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Projects from "./routes/Projects";
import Team from "./routes/Team";
import Contact from "./routes/Contact";
import Oda_bultum from "./routes/project/oda_bultum";
import Office_building from "./routes/services/office_building";
import Mobile_phones from "./routes/services/mobile_phones";
import { Route, Routes } from "react-router-dom";
import Affair_managnement from "./routes/services/affair_managnement";
import Mental_health from "./routes/services/mental_health";
import Photo_camera from "./routes/services/photo_camera";
import Kitchen_appliance from "./routes/services/kitchen_appliance";
import Electronics_product from "./routes/services/electronics_product";
import Health_beauty from "./routes/services/health_beauty";
import Wanted_items from "./routes/services/wanted_items";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/services/office_building" element={<Office_building />} />
        <Route path="/services/mobile_phones" element={<Mobile_phones />} />
        <Route path="/services/affair_managnement" element={<Affair_managnement />} />
        <Route path="/services/mental_health" element={<Mental_health />} />
        <Route path="/services/photo_camera" element={<Photo_camera />} />
        <Route path="/services/kitchen_appliance" element={<Kitchen_appliance />} />
        <Route path="/services/electronics_product" element={<Electronics_product />} />
        <Route path="/services/health_beauty" element={<Health_beauty />} />
        <Route path="/services/wanted_items" element={<Wanted_items />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/oda_bultum" element={<Oda_bultum />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
