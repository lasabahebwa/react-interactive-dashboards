/*
 * React interactive dashboard
 */
import React from "react";
import "zingchart/es6";
import "zinggrid";
import ZingChart from "zingchart-react";

import customers from "./customers.js";
import "./App.css";

function InteractiveDashboards() {
  const mediaConsumptionConfig = {
    type: "area",
    stacked: true,
    legend: {
      align: "left",
      marginTop: "30px",
      backgroundColor: "none",
      borderWidth: "0px",
      item: {
        fontFamily: "Roboto",
      },
      layout: "x4",
      marker: {
        type: "circle",
        borderColor: "transparent",
        size: "5px",
      },
      shadow: false,
      toggleAction: "remove",
      verticalAlign: "top",
    },
    plot: {
      tooltip: {
        text: '<div style="text-align: center; line-height: 14px; padding-top: 5px;"><b>%t</b><br><br>%kt<br><br><b>Traffic: %node-value KBps</b></div>',
        marginTop: "5px",
        padding: "5px 15px",
        fontFamily: "Roboto",
        htmlMode: true,
      },
      activeArea: true,
      alphaArea: 0.7,
      aspect: "spline",
      marker: {
        borderColor: "#ffffff",
        shadow: false,
        size: "3px",
      },
      shadow: false,
    },
    plotarea: {
      marginTop: "70px",
      marginRight: "65px",
      marginLeft: "20px",
    },
    scaleX: {
      values: [
        1564646407000, 1564646707000, 1564647007000, 1564647307000,
        1564647607000, 1564647907000, 1564648207000, 1564648507000,
        1564648807000, 1564649107000, 1564649407000, 1564649707000,
        1564650007000,
      ],
      guide: {
        visible: false,
      },
      item: {
        fontColor: "#acacac",
        fontFamily: "Roboto",
        offsetY: "2px",
        rules: [
          {
            offsetX: "20px",
            rule: "%scale-position === 0",
          },
        ],
      },
      lineWidth: "0px",
      tick: {
        visible: false,
      },
      transform: {
        type: "date",
        all: "%h:%i %A",
      },
    },
    scaleY: {
      format: "%v KBps",
      guide: {
        lineStyle: "dotted",
      },
      item: {
        fontColor: "#acacac",
        fontFamily: "Roboto",
      },
      lineWidth: "0px",
      placement: "opposite",
      tick: {
        visible: false,
      },
      zooming: true,
    },

    series: [
      {
        text: "Outbound",
        values: [
          32.0226, 28.9014, 28.1703, 23.3206, 32.8237, 27.3159, 27.2535,
          25.1924, 16.7938, 15.0575, 13.4819, 12.0279, 0.009,
        ],
        backgroundColor: "#ffc107",
        lineColor: "#ffc107",
        marker: {
          backgroundColor: "#ffc107",
        },
        palette: 1,
      },
      {
        text: "Inbound",
        values: [
          7.1359, 7.4406, 8.2906, 6.6474, 6.8506, 17.8208, 15.6422, 9.8198,
          7.3635, 6.0869, 3.0183, 4.4826, 0.0155,
        ],
        backgroundColor: "#ff5722",
        lineColor: "#ff5722",
        marker: {
          backgroundColor: "#ff5722",
        },
        palette: 0,
      },
    ],
  };

  const engagementPlatformsConfig = {
    type: "bar",
    legend: {
      align: "right",
      marginTop: "0px",
      marginLeft: "0px",
      backgroundColor: "none",
      borderWidth: "0px",
      item: {
        fontFamily: "Roboto",
      },
      layout: "x4",
      marker: {
        type: "circle",
        borderColor: "transparent",
        size: "5px",
      },
      shadow: false,
      toggleAction: "remove",
      verticalAlign: "top",
    },
    plotarea: {
      marginTop: 40,
      marginBottom: 90,
      marginLeft: 80,
    },
    scaleY: {
      values: "0:120:10",
      guide: {
        lineStyle: "dashed",
        lineGapSize: 10,
      },
      lineColor: "none",
      tick: {
        visible: false,
      },
      item: {
        color: "#b8beca",
        fontWeight: 600,
        paddingRight: 20,
      },
    },
    tooltip: {
      visible: false,
    },
    scaleX: {
      lineColor: "none",
      guide: {
        lineColor: "#657685",
      },
      tick: {
        visible: false,
      },
      item: {
        paddingTop: "20px",
        color: "#b8beca",
        fontWeight: 600,
      },
    },

    backgroundColor: "#fff",
    plot: {
      stacked: true,
      "stack-true": "normal",
      barWidth: 10,
    },
    crosshairX: {
      marker: {},
      plotLabel: {},
      scaleLabel: {},
    },
    series: [
      {
        values: [
          19, 5, 13, 23, 9, 15, 10, 14, 17, 13, 6, 28, 13, 17, 2, 20, 5, 9, 15,
          4, 10, 10, 17, 28, 16, 8, 5, 3, 9, 22,
        ],
        backgroundColor: "#9c27b0",
        text: "Facebook",
      },
      {
        values: [
          11, 29, 27, 12, 16, 19, 27, 5, 13, 3, 2, 2, 9, 16, 3, 16, 2, 27, 11,
          28, 22, 16, 3, 6, 11, 0, 24, 15, 5, 15,
        ],
        backgroundColor: "#673ab7",
        text: "Twitter",
      },
      {
        values: [
          19, 20, 22, 10, 19, 7, 8, 7, 24, 7, 25, 26, 3, 4, 25, 19, 28, 25, 24,
          5, 22, 14, 17, 4, 29, 4, 16, 0, 16, 23,
        ],
        backgroundColor: "#e91e63",
        text: "Instagram",
      },
      {
        values: [
          16, 3, 12, 5, 11, 20, 14, 8, 19, 18, 28, 15, 14, 17, 20, 24, 24, 14,
          11, 2, 2, 28, 12, 4, 1, 8, 5, 14, 11, 6,
        ],
        backgroundColor: "#2196f3",
        text: "TikTok",
      },
    ],
  };

  const reachSparkConfig = {
    type: "line",
    plotarea: {
      margin: 3,
    },
    scaleX: {
      visible: false,
    },
    scaleY: {
      visible: false,
    },
    tooltip: {
      visible: false,
    },
    plot: {
      aspect: "spline",
      marker: {
        visible: false,
      },
    },
    series: [
      {
        values: [1, 2, 5, 3, 9, 4],
        lineColor: "#2196f3",
      },
    ],
  };

  const impressionsSparkConfig = {
    type: "bar",
    plotarea: {
      margin: 3,
    },
    scaleX: {
      visible: false,
    },
    scaleY: {
      visible: false,
    },
    tooltip: {
      visible: false,
    },
    plot: {
      aspect: "spline",
      marker: {
        visible: false,
      },
    },
    series: [
      {
        values: [3, 4, 6, 7, 4, 10],
        backgroundColor: "#8bc34a",
      },
    ],
  };

  const campaignSparkConfig = {
    type: "area",
    plotarea: {
      margin: 3,
    },
    scaleX: {
      visible: false,
    },
    scaleY: {
      visible: false,
    },
    tooltip: {
      visible: false,
    },
    plot: {
      aspect: "spline",
      marker: {
        visible: false,
      },
    },
    series: [
      {
        values: [3, 4, 6, 7, 4, 3],
        lineColor: "#FFF",
        backgroundColor: "#f44336",
      },
    ],
  };
  const websiteTrafficConfig = {
    type: "line",
    backgroundColor: "#FFC107",
    tooltip: {
      fontColor: "#333",
    },
    plot: {
      marker: {
        backgroundColor: "#FFC107",
        borderWidth: "2px",
      },
      aspect: "spline",
    },
    plotarea: {
      margin: "35 40 40 40",
    },
    scaleX: {
      lineColor: "#ffd363",
      tick: {
        lineColor: "none",
      },
      labels: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"],
      item: {
        fontColor: "white",
        rules: [],
      },
      guide: {
        lineColor: "none",
      },
    },
    scaleY: {
      offsetX: -15,
      lineColor: "none",
      tick: {
        lineColor: "none",
      },
      item: {
        fontColor: "white",
      },
      guide: {
        lineColor: "#ffd363",
      },
    },
    series: [
      {
        values: [500, 300, 400, 500, 600, 200, 300],
        lineColor: "white",
        lineWidth: "2px",
      },
    ],
  };

  const allocatedBudgetConfig = {
    type: "gauge",
    alpha: 1,
    backgroundColor: "#fff",
    plot: {
      backgroundColor: "#be314b",
      indicator: [10, 2, 0, 0, 0],
    },
    plotarea: {
      margin: "30 0 0 0",
    },
    scale: {
      sizeFactor: 1,
      offsetY: "10px",
    },
    scaleR: {
      tick: {
        "line-color": "none",
      },
      values: "0:100:10",
      backgroundColor: "none",
      borderColor: "none",
      borderWidth: "5px",
      aperture: 220,
      center: {
        //Pivot Point
        size: 5,
        "background-color": "white",
        "border-color": "b",
      },
      item: {
        fontSize: 12,
        offsetX: -4,
        color: "#777",
      },
      ring: {
        offsetR: "10px",
        gradientColors: "#e53935 #5e35b1 #2196f3",
        gradientStops: "0.1 0.6 0.9",
        fillAngle: 180,
        borderRadius: 10,
        size: "10px",
      },
    },

    tooltip: {
      backgroundColor: "black",
    },
    series: [
      {
        values: [70],
        animation: {
          effect: "ANIMATION_EXPAND_VERTICAL",
          method: "ANIMATION_REGULAR_EASE_OUT",
          speed: 2500,
        },
      },
    ],
  };

  const customerInteractionsConfig = {
    type: "radar",
    backgroundColor: "#2196f3",
    plot: {
      aspect: "area",
      animation: {
        effect: 3,
        sequence: 1,
        speed: 700,
      },
      marker: {
        alpha: 0,
      },
    },
    scaleV: {
      visible: false,
    },
    scaleK: {
      values: "0:5:1",
      labels: ["Support", "Sales", "Returns", "Orders", "Marketing", "General"],
      item: {
        fontColor: "white",
        backgroundColor: "none",
        borderColor: "#aeaeae",
        borderWidth: 0,
        fontSize: 12,
        padding: "5 10",
        borderRadius: 10,
      },
      refLine: {
        lineColor: "#c10000",
      },
      tick: {
        lineColor: "#c6e3ff",
        lineWidth: 1,
        lineStyle: "solid",
        size: 10,
      },
      guide: {
        lineColor: "none",
        lineStyle: "solid",
        alpha: 0.4,
        backgroundColor: "#b2ebf2 #cfd8dc",
      },
    },
    plotarea: {
      margin: "20",
    },
    series: [
      {
        values: [70, 39, 48, 39, 41, 35],
        lineColor: "#fff",
        backgroundColor: "#fff",
      },
      {
        values: [10, 20, 54, 60, 51, 75],
        lineColor: "#00e5ff",
        backgroundColor: "#00e5ff",
      },
    ],
  };

  return (
    <div id="dashboard">
      <header className="dashboard__header">
        <h1>My Dashboard</h1>
        <div>Showing analytics from Today</div>
      </header>
      <section className="dash-row">
        <div id="welcome-message">
          <div className="welcome__left">
            <h2>Welcome back Karen!</h2>
            <p>
              We've created a daily analytics report just for you. So far, it
              looks like traffic has increased <span>40%</span> from last week!
              Keep it up!
            </p>
          </div>
          <div className="welcome__center">
            <h5>Jan 23 - Jan 29</h5>
            <div className="spark-container">
              <ZingChart data={reachSparkConfig} height="30px" width="50px" />
              <div className="spark-stat">+1528 Reach</div>
            </div>
            <div className="spark-container">
              <ZingChart
                data={impressionsSparkConfig}
                height="30px"
                width="50px"
              />

              <div className="spark-stat">+608 Impressions</div>
            </div>
            <div className="spark-container">
              <ZingChart
                data={campaignSparkConfig}
                height="30px"
                width="50px"
              />
              <div className="spark-stat">-102 Campaign Clicks</div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="welcome__right">
            <img
              alt="art"
              style={{ height: "180px" }}
              src="https://gistcdn.githack.com/mike-schultz/10a1a059f77cc33a350d85a0870397e2/raw/d11f4b4804d9a49faec957a1d51c3d4e5174477c/data_xmfy.svg"
            />
          </div>
        </div>
      </section>
      <section className="graph-row">
        <div id="card-0-1" className="card">
          <div className="card-heading">Traffic</div>
          <div>www.yourwebsite.com</div>
          <ZingChart data={websiteTrafficConfig} height="250px" />
        </div>
        <div id="card-0-2" className="card">
          <div className="card-heading">Budget</div>
          <div>Percentage of annual spend</div>
          <ZingChart data={allocatedBudgetConfig} height="250px" />
        </div>
        <div id="card-1-1" className="card">
          <div className="card-heading">Interactions</div>
          <div>Your customer's interactions</div>
          <ZingChart data={customerInteractionsConfig} height="250px" />
        </div>
      </section>
      <section className="grid-row">
        <zing-grid
          template-start-delimiter="$^"
          template-end-delimiter="^$"
          pager
          page-size="3"
          page-size-options="2,3,6"
          viewport-stop
          caption={"Customers"}
          data={JSON.stringify(customers)}
        >
          <zg-colgroup>
            <zg-column index="selector" type="selector"></zg-column>
            <zg-column index="first_name" header="First Name"></zg-column>
            <zg-column index="last_name"></zg-column>
            <zg-column index="email"></zg-column>
            <zg-column index="company"></zg-column>
          </zg-colgroup>
        </zing-grid>
      </section>
      <section className="last-row">
        <div className="card">
          <div className="title">Downloads</div>
          <div className="sub-title">Bandwidth of consumed content</div>
          <div>
            <ZingChart data={mediaConsumptionConfig} height="250px" />
          </div>
        </div>
        <div className="card">
          <div className="title">Social Media</div>
          <div className="sub-title">Engagement by Platform</div>
          <div>
            <ZingChart data={engagementPlatformsConfig} height="250px" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default InteractiveDashboards;
