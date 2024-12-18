import React from "react";

const data = [
  {
    name: "Mickey 17",
    address:
      "2011/04/10 - 2024/07/06",
    created: "Sắp chiếu",
  },
  {
    name: "Naruto",
    address:
      "2011/04/10 - 2024/07/06",
    created: "Đang chiếu",
  },
  {
    name: "Mickey 17",
    address:
      "2011/04/10 - 2024/07/06",
      created: "Sắp chiếu",
  },
  {
    name: "Mickey 17",
    address:
      "2011/04/10 - 2024/07/06",
      created: "Sắp chiếu",
  },
  {
    name: "Mickey 17",
    address:
      "2011/04/10 - 2024/07/06",
      created: "Sắp chiếu",
  },
];

const ShowTime = () => {
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
                <h5 className="modal-title" id="exampleModalLabel">Tạo lịch chiếu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Tên phim chiếu</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên phim chiếu"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Ngày bắt đầu</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Loại phòng chiếu"
                  />
                </div>
                <div className="mb-3">
                <label className="form-label">Ngày kết thúc</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Số hàng"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                <button type="button" className="btn btn-primary">Tạo mới</button>
              </div>
            </div>
          </div>
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
                    <th>Thời gian chiếu</th>
                    <th>Phân loại</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        {item.name}
                      </td>
                      <td>{item.address}</td>
                      <td>
                        {item.created == 'Sắp chiếu'  && <button
                            type="button"
                            class="btn btn-outline-success py-0"
                            >
                            {item.created}
                        </button> }
                        {item.created == 'Đang chiếu'  && <button
                            type="button"
                            class="btn btn-outline-primary py-0"
                            >
                            {item.created}
                        </button> }
                        </td>
                      <td>
                        <button className="ms-2 btn btn-primary">
                          <i className="fas fa-pen"></i>
                        </button>
                        <button className="ms-2 btn btn-outline-danger">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
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

export default ShowTime;
