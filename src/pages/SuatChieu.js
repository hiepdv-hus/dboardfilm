import React from "react";

const data = [
    {
      name: "Mickey 17",
      hinhthuc: "2D",
      phude: "Phụ đề",
      time: "07:00 - 09:45",
      loatsuatchieu: "Theo lịch",
      status: "Sắp chiếu",
    },
    {
      name: "Mickey 17",
      hinhthuc: "2D",
      phude: "Phụ đề",
      time: "07:00 - 09:45",
      loatsuatchieu: "Theo lịch",
      status: "Đang chiếu",
    },
    {
      name: "Mickey 17",
      hinhthuc: "2D",
      phude: "Phụ đề",
      time: "07:00 - 09:45",
      loatsuatchieu: "Theo lịch",
      status: "Đang chiếu",
    },
    {
      name: "Mickey 17",
      hinhthuc: "2D",
      phude: "Phụ đề",
      time: "07:00 - 09:45",
      loatsuatchieu: "Theo lịch",
      status: "Sắp chiếu",
    },
    {
      name: "Mickey 17",
      hinhthuc: "2D",
      phude: "Phụ đề",
      time: "07:00 - 09:45",
      loatsuatchieu: "Theo lịch",
      status: "Sắp chiếu",
    },
    {
      name: "Mickey 17",
      hinhthuc: "2D",
      phude: "Phụ đề",
      time: "07:00 - 09:45",
      loatsuatchieu: "Theo lịch",
      status: "Đang chiếu",
    },
    {
      name: "Mickey 17",
      hinhthuc: "2D",
      phude: "Phụ đề",
      time: "07:00 - 09:45",
      loatsuatchieu: "Theo lịch",
      status: "Sắp chiếu",
    },
    {
      name: "Mickey 17",
      hinhthuc: "2D",
      phude: "Phụ đề",
      time: "07:00 - 09:45",
      loatsuatchieu: "Theo lịch",
      status: "Sắp chiếu",
    },
];

const SuatChieu = () => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Danh sách lịch chiếu</h1>

        <div className="d-flex align-items-center mt-4">
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal123">+ Tạo lịch chiếu</button>
          <button className="btn btn-outline-primary ms-2">Refresh</button>
        </div>

        <div className="modal fade" id="exampleModal123" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Tạo suất chiếu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Phim chiếu</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên phim chiếu"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Ngày chiếu</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Loại phòng chiếu"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Hình thức chiếu</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Hình thức chiếu"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Hình thức dịch</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Hình thức dịch"
                  />
                </div>
                <div className="mb-3">
                    <label className="form-label">Thời gian chiếu</label>
                    <div className="row">
                        <div className="col-6">
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Số hàng"
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Số hàng"
                            />
                        </div>
                    </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                <button type="button" className="btn btn-primary">Tạo mới</button>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center mt-4">
            <div>Rạp chiếu:</div>
            <select style={{width: '300px'}} class="form-select" aria-label="Default select example">
                <option selected>CGV Royal City</option>
                <option value="1">CGV Mỹ Đình</option>
                <option value="2">Beta</option>
                <option value="3">CGV Mỹ Đình 2</option>
            </select>
            <div className="ms-3">Phòng chiếu:</div>
            <select style={{width: '200px'}} class="form-select" aria-label="Default select example">
                <option selected>Số 1</option>
                <option value="1">Số 2</option>
                <option value="2">Số 3</option>
                <option value="3">Số 4</option>
            </select>
            <div className="ms-3">Ngày chiếu:</div>
            <input style={{width: '200px'}} className="form-control" type="date"/>
            <button className="ms-3 btn btn-primary">Tìm kiếm</button>
        </div>

        <div className="card shadow mb-4 mt-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Phim chiếu</th>
                    <th>Hình thức chiếu</th>
                    <th>Phụ đề</th>
                    <th>Thời gian chiếu</th>
                    <th>Loại suất chiếu</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td><button
                            type="button"
                            class="btn btn-outline-primary py-0"
                            >
                            {item.hinhthuc}
                        </button></td>
                        <td><button
                            type="button"
                            class="btn btn-outline-success py-0"
                            >
                            {item.phude}
                        </button></td>
                        <td><button
                            type="button"
                            class="btn btn-outline-danger py-0"
                            >
                            {item.time}
                        </button></td>
                        <td><button
                            type="button"
                            class="btn btn-outline-success py-0"
                            >
                            {item.loatsuatchieu}
                        </button></td>
                        <td>
                        {item.status == 'Sắp chiếu'  && <button
                            type="button"
                            class="btn btn-outline-success py-0"
                            >
                            {item.status}
                        </button> }
                        {item.status == 'Đang chiếu'  && <button
                            type="button"
                            class="btn btn-outline-primary py-0"
                            >
                            {item.status}
                        </button> }</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-end">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link active" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuatChieu;
