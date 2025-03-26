import React from "react";
import Plot from "react-plotly.js";
import { Passenger } from "../../data/Passenger";

interface LineGraphProps {
  passengers: Passenger[];
}

const LineGraph: React.FC<LineGraphProps> = ({ passengers }) => {
  const validPassengers = passengers.filter(
    (p) => p.age > 0 && p.fare > 0 && !isNaN(p.age) && !isNaN(p.fare)
  );

  const sortedData = [...validPassengers].sort((a, b) => a.age - b.age);

  return (
    <div style={{ width: "80vw", height: "100%", padding: "1rem" }}>
      <Plot
        data={[
          {
            x: sortedData.map((p) => p.age),
            y: sortedData.map((p) => p.fare),
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "#636efa" },
            line: { shape: "spline" },
            name: "fare by age",
          },
        ]}
        layout={{
          title: "Titanic Passenger fare by age",
          xaxis: {
            title: "age (years)",
            range: [0, Math.max(...sortedData.map((p) => p.age)) + 10],
          },
          yaxis: {
            title: "fare (£)",
            range: [0, Math.max(...sortedData.map((p) => p.fare)) + 10],
          },
          hovermode: "closest",
          showlegend: true,
          legend: { orientation: "h", y: -0.2 },
        }}
        config={{
          responsive: true,
          displayModeBar: true,
        }}
        style={{ width: "100%", height: "100vh" }}
      />
    </div>
  );
};

export default LineGraph;
