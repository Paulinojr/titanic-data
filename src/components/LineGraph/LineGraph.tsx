import React from "react";
import Plot from "react-plotly.js";
import { PageTitle } from "../Common/Common.styles";
import { usePassengerData } from "../../context/PassengerDataContext";


const LineGraph: React.FC = () => {
  const { passengers, loading } = usePassengerData();

  const data = passengers;

  const validPassengers = passengers.filter(
    (p) => !isNaN(Number(p.age)) && !isNaN(p.fare) && Number(p.age) > 0 && p.fare > 0 && !isNaN(Number(p.age)) && !isNaN(p.fare)
  );

  const sortedData = [...validPassengers].sort((a, b) => Number(a.age) - Number(b.age));

  return (
    <div style={{ width: "80vw", height: "100%", padding: "1rem" }}>
      <PageTitle>Titanic Line Graph</PageTitle>

      {loading && <div>Loading...</div>}

      {!loading && data.length === 0 && <div>No data available</div>}
      
      {!loading && data.length > 0 && (

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
            title: "Age (years)",
            range: [0, Math.max(...sortedData.map((p) => Number(p.age))) + 10],
          },
          yaxis: {
            title: "Fare (£)",
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
      )}
    </div>
  );
};

export default LineGraph;
