import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Gender age"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </>
  );
};

export default BarChart;