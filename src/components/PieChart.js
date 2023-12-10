import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Pie chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Gender age"
            }
          }
        }}
      />
    </>
  );
}
export default PieChart;