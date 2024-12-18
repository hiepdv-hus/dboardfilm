import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
const Dashboard = () => {
  const [state] = useState({
    series: [
      {
        name: "Actual",
        data: [
          {
            x: "2011",
            y: 1292,
            goals: [
              {
                name: "Expected",
                value: 1400,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2012",
            y: 4432,
            goals: [
              {
                name: "Expected",
                value: 5400,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2013",
            y: 5423,
            goals: [
              {
                name: "Expected",
                value: 5200,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2014",
            y: 6653,
            goals: [
              {
                name: "Expected",
                value: 6500,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2015",
            y: 8133,
            goals: [
              {
                name: "Expected",
                value: 6600,
                strokeHeight: 13,
                strokeWidth: 0,
                strokeLineCap: "round",
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2016",
            y: 7132,
            goals: [
              {
                name: "Expected",
                value: 7500,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2017",
            y: 7332,
            goals: [
              {
                name: "Expected",
                value: 8700,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2018",
            y: 6553,
            goals: [
              {
                name: "Expected",
                value: 7300,
                strokeHeight: 2,
                strokeDashArray: 2,
                strokeColor: "#775DD0",
              },
            ],
          },
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          columnWidth: "60%",
        },
      },
      colors: ["#00E396"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Actual", "Expected"],
        markers: {
          fillColors: ["#00E396", "#775DD0"],
        },
      },
    },
  });

  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Doanh thu trong ngày
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      760,000
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Khách hàng mới
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      $215,000
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Tổng số vé bán ra
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      760
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Tổng doanh thu
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      18,9999,9999
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12 col-lg-12 d-flex">
            <div className="card shadow mb-4 w-100">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Doanh thu theo tháng
                </h6>
              </div>
              <div className="card-body">
                <div className="">
                  <div>
                    <div id="chart">
                      <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        height={350}
                      />
                    </div>
                    <div id="html-dist"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-xl-4 col-lg-5 d-flex">
            <div className="card shadow mb-4 w-100">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Top bài viết được xem nhiều nhất
                </h6>
              </div>
              <div className="card-body">
                <div className="chart-pie pt-4 pb-2">
                  <canvas id="myPieChart"></canvas>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Doanh thu theo phim
                </h6>
              </div>
              <div className="card-body">
                <table className="table  table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Tên phim</th>
                      <th scope="col">Tổng vé bán ra</th>
                      <th scope="col">Tổng doanh thu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Money báo thu</td>
                      <td>5</td>
                      <td>1.000.000</td>
                    </tr>
                    <tr>
                      <td>Money báo thu</td>
                      <td>5</td>
                      <td>1.000.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Doanh thu theo rạp
                </h6>
              </div>
              <div className="card-body">
                <table className="table  table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Tên phim</th>
                      <th scope="col">Tổng vé bán ra</th>
                      <th scope="col">Tổng doanh thu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Money báo thu</td>
                      <td>5</td>
                      <td>1.000.000</td>
                    </tr>
                    <tr>
                      <td>Money báo thu</td>
                      <td>5</td>
                      <td>1.000.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
