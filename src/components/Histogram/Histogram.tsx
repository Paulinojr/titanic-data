import React from "react";
import Plot from "react-plotly.js";
import { PageTitle, PlotDiv } from "../Common/Common.styles";
import { usePassengerData } from "../../context/PassengerDataContext";


const Histogram: React.FC = () => {
  const { passengers, loading } = usePassengerData();

  const data = passengers;

  const survivalData = [1, 2, 3].map((pclass) => ({
    class: pclass,
    survived: passengers.filter((p) => p.pclass === pclass && p.survived === 1)
      .length,
    total: passengers.filter((p) => p.pclass === pclass).length,
  }));

  return (
    <PlotDiv>
      <PageTitle>Titanic Histogram</PageTitle>

      {loading && <div>Loading...</div>}

      {!loading && data.length === 0 && <div>No data available</div>}

      {!loading && data.length > 0 && (
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
              type: "category", 
            },
            bargap: 0.3,
            hovermode: "x unified",
            showlegend: true,
          }}
          config={{ responsive: true }}
          style={{ width: "100%", height: "85vh" }}
        />
      )}
    </PlotDiv>
  );
};

export default Histogram;
