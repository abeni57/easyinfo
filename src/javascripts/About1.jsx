import React from "react";
import { PieChart } from "react-minimal-pie-chart";
const About1 = () => {
  return (
    <PieChart
      data={[
        {
          title: "Innovation",
          alloutLabelKey: "Ezra",
          value: 20,
          color: "#e23c32",
        },
        { title: "Customer Satisfaction", value: 20, color: "#54372f" },
        { title: "Respect & devotion", value: 20, color: "#90b827" },
        { title: "Sustainability", value: 20, color: "#68c0cc" },
        { title: "Eco-Friendly", value: 20, color: "#e98a2c" },
      ]}
    />
  );
};

export default About1;
