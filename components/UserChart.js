import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function UserChart(props) {
  const canvasEl = useRef(null);

  const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)",
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)",
    },
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    // const ctx = document.getElementById("myChart");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    const weight = props.array

    const labels = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: "Weekly Readings",
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3,
        },
      ],
    };
    const config = {
      type: "line",
      data: data,
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div className="w-full h-full ">
      <canvas id="myChart" ref={canvasEl} height="100%" width="100%" />
    </div>
  );
}
