import React from "react";

const data = [
  {
    name: "Cinema 1",
    position: "Tiêu chuẩn",
    office: "224",
    age: "14(A->N)",
    startDate: "16(1->16)",
    salary: "2011/04/10",
  },
  {
    name: "Cinema 2",
    position: "GOLD CLASS",
    office: "114",
    age: "12(A->L)",
    startDate: "12(1->12)",
    salary: "2011/04/10",
  },
  {
    name: "Cinema 3",
    position: "Tiêu chuẩn",
    office: "224",
    age: "14(A->N)",
    startDate: "16(1->16)",
    salary: "2011/04/10",
  },
  {
    name: "Cinema 4",
    position: "Tiêu chuẩn",
    office: "224",
    age: "14(A->N)",
    startDate: "16(1->16)",
    salary: "2011/04/10",
  },
];

const ZoomLst = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="h3 mb-2 text-gray-800">Danh sách phòng chiếu</h1>
          <button className="btn btn-primary">+ Tạo phòng chiếu</button>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Tên rạp chiếu phim</label>
              <input
                type="text"
                value={"Cinema Hà nội Centerpoint"}
                className="form-control"
                placeholder="Tên rạp chiếu phim"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Địa chỉ</label>
              <textarea
                className="form-control"
                rows="5"
                value={
                  "Lầu 2, số 7/28, Đường Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam"
                }
                placeholder="Địa chỉ"
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Địa chỉ map</label>
              <textarea
                className="form-control"
                rows="5"
                value={
                  "https://www.google.com/maps/place/CGV+H%C3%A0+%C4%90%C3%B4ng/@20.9884221,105.7480469,17z/data=!3m1!4b1!4m6!3m5!1s0x3134536d31131b77:0xfd003217a9a2f55!8m2!3d20.9884221!4d105.7506272!16s%2Fg%2F11hzpkldn0?hl=vi-VN&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                }
                placeholder="Địa chỉ map"
              ></textarea>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1051414619324!2d105.74804691054715!3d20.988422080570082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134536d31131b77%3A0xfd003217a9a2f55!2zQ0dWIEjDoCDEkMO0bmc!5e0!3m2!1svi!2s!4v1734512181137!5m2!1svi!2s"
              width="100%"
              height="380"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
                    <th>Tên phòng chiếu</th>
                    <th>Loại phòng chiếu</th>
                    <th>Số lượng ghế</th>
                    <th>Số hàng</th>
                    <th>Số cột</th>
                    <th>Ngày tạo</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.position}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-outline-primary py-0"
                        >
                          {item.office}
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-outline-danger py-0"
                        >
                          {item.age}
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-outline-success py-0"
                        >
                          {item.startDate}
                        </button>
                      </td>
                      <td>{item.salary}</td>
                      <td>
                        <button className="btn btn-warning">
                          <i class="fas fa-film"></i>
                        </button>
                        <button className="ms-2 btn btn-primary">
                          <i class="fas fa-pen"></i>
                        </button>
                        <button className="ms-2 btn btn-outline-danger">
                          <i class="fas fa-trash-alt"></i>
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
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
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

export default ZoomLst;
