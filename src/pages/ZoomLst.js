import React from "react";
import PhongChieu from "../images/phongchieu.png"

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

        <div className="d-flex align-items-center justify-content-between mt-4">
          <h1 className="h3 mb-2 text-gray-800">Danh sách phòng chiếu</h1>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal123">+ Tạo phòng chiếu</button>
        </div>

        <div className="modal fade" id="exampleModal123" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Tạo phòng chiếu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Tên phòng chiếu</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên phòng chiếu"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Loại phòng chiếu</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Loại phòng chiếu"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Số hàng</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Số hàng"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Số cột</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Số cột"
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

        <div className="modal fade" id="exampleModal789" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModal789">Tạo phòng chiếu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img width={'100%'} src={PhongChieu}/>

                <div className="ghe">
                  <div className="ghe-item d-flex align-items-center">
                      <div className="box1"></div> Đã đặt
                  </div>
                  <div className="ghe-item d-flex align-items-center">
                      <div className="box2"></div> Ghế thường
                  </div>
                  <div className="ghe-item d-flex align-items-center">
                      <div className="box3"></div> Ghế Vip
                  </div>
                  <div className="ghe-item d-flex align-items-center">
                      <div className="box4"></div> Ghế bạn đặt
                  </div>
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
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
                          className="btn btn-outline-primary py-0"
                        >
                          {item.office}
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-danger py-0"
                        >
                          {item.age}
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-success py-0"
                        >
                          {item.startDate}
                        </button>
                      </td>
                      <td>{item.salary}</td>
                      <td>
                        <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal789">
                          <i className="fas fa-film"></i>
                        </button>
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
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
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
