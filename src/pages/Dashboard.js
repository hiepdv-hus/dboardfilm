const Dashboard = () => {
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
          <div className="col-xl-8 col-lg-7 d-flex">
            <div className="card shadow mb-4 w-100">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Doanh thu theo tháng
                </h6>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <canvas id="myBarChart"></canvas>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-5 d-flex">
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
          </div>
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
