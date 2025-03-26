import React from "react";
import Plot from "react-plotly.js";
import { Passenger } from "../../data/Passenger";

interface HistogramProps {
  passengers: Passenger[];
}

const Histogram: React.FC<HistogramProps> = ({ passengers }) => {
  const survivalData = [1, 2, 3].map((pclass) => ({
    class: pclass,
    survived: passengers.filter((p) => p.pclass === pclass && p.survived === 1)
      .length,
    total: passengers.filter((p) => p.pclass === pclass).length,
  }));

  return (
    <div style={{ width: "80vw", height: "100%", padding: "1rem" }}>
      <Plot
        data={[
          {
            y: survivalData.map((d) => d.survived),
            x: survivalData.map((d) => `Class ${d.class}`),
            type: "histogram",
            name: "Survivors",
            marker: {
              color: survivalData.map((d) =>
                d.class === 1
                  ? "#1f77b4"
                  : d.class === 2
                  ? "#ff7f0e"
                  : "#2ca02c"
              ),
              pattern: { shape: "/" },
            },
            hovertext: survivalData.map(
              (d) =>
                `${d.survived} of ${d.total} survived (${(
                  (d.survived / d.total) *
                  100
                ).toFixed(1)}%)`
            ),
            hoverinfo: "text",
          },
        ]}
        layout={{
          title: "Titanic Survivors by Passenger Class",
          yaxis: { title: "Number of Survivors" },
          xaxis: {
            title: "Passenger Class",
            type: "category", // Ensures classes stay discrete
          },
          bargap: 0.3,
          hovermode: "x unified",
          showlegend: true,
        }}
        config={{ responsive: true }}
        style={{ width: "100%", height: "100vh" }}
      />
    </div>
  );
};

export default Histogram;
