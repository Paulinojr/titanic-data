import React from "react";
import Plot from "react-plotly.js";
import { PageTitle, PlotDiv } from "../Common/Common.styles";
import { usePassengerData } from "../../context/PassengerDataContext";
import { HistogramProps } from "./Histogram.d";

const Histogram: React.FC<HistogramProps> = ({isMobile}) => {
  const { passengers, loading } = usePassengerData();

  const data = passengers;

  const survivedData = data
    .filter((p) => p.survived === 1)
    .map((p) => p.pclass);
  const notSurvivedData = data
    .filter((p) => p.survived === 0)
    .map((p) => p.pclass);

  const classTotals = [1, 2, 3].map((cls) => ({
    class: cls,
    total: data.filter((p) => p.pclass === cls).length,
    survived: data.filter((p) => p.pclass === cls && p.survived === 1)
      .length,
  }));

 const plotData = [
   {
     x: survivedData,
     type: "histogram",
     name: "Survived",
     marker: { color: "#2ca02c" }, // Green for survived
     opacity: 0.7,
     xbins: {
       start: 0.5,
       end: 3.5,
       size: 1,
     },
     // Add text labels showing counts
     text: classTotals.map((cls) => cls.survived),
     textposition: "inside",
     hoverinfo: "x+text",
     hovertext: classTotals.map(
       (cls) => `${cls.survived} survived (${(
         (cls.survived / cls.total) *
         100
       ).toFixed(1)}%)`
     ),
   },
   {
     x: notSurvivedData,
     type: "histogram",
     name: "Did Not Survive",
     marker: { color: "#d62728" }, // Red for didn't survive
     opacity: 0.7,
     xbins: {
       start: 0.5,
       end: 3.5,
       size: 1,
     },
     // Add text labels showing counts
     text: classTotals.map((cls) => cls.total - cls.survived),
     textposition: "inside",
     hoverinfo: "x+text",
     hovertext: classTotals.map(
       (cls) => `${cls.total - cls.survived} did not survive (${(
         ((cls.total - cls.survived) / cls.total) *
         100
       ).toFixed(1)}%)`
     ),
   },
 ] as unknown as Plotly.Data[];

  return (
    <PlotDiv isMobile={isMobile}>
      <PageTitle>Titanic Histogram</PageTitle>

      {loading && <div>Loading...</div>}

      {!loading && data.length === 0 && <div>No data available</div>}

      {!loading && data.length > 0 && (
        <Plot
          data={plotData}
          layout={{
            title: "Titanic Survival Counts by Passenger Class",
            xaxis: {
              title: "Passenger Class",
              tickvals: [1, 2, 3],
              ticktext: ["First Class", "Second Class", "Third Class"],
            },
            yaxis: {
              title: "Number of Passengers",
            },
            barmode: "overlay",
            bargap: 0.1,
            hovermode: "closest",
            legend: {
              orientation: "h",
              y: 1.1,
            },
            annotations: classTotals.map((cls) => ({
              x: cls.class,
              y:
                cls.total + Math.max(...classTotals.map((c) => c.total)) * 0.05,
              text: `Total: ${cls.total}`,
              showarrow: false,
              font: {
                size: 12,
                color: "black",
              },
            })),
          }}
          config={{ responsive: true }}
          style={{ width: "100%", height: isMobile ? "80vh" : "800px" }}
        />
      )}
    </PlotDiv>
  );
};

export default Histogram;
