import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Cinema Hà nội Centerpoint",
    address:
      "Lầu 2, số 7/28, Đường Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
    created: "2011/04/10",
  },
  {
    name: "Cinema Hà nội Centerpoint",
    address:
      "Lầu 2, số 7/28, Đường Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
    created: "2011/04/10",
  },
  {
    name: "Cinema Hà nội Centerpoint",
    address:
      "Lầu 2, số 7/28, Đường Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
    created: "2011/04/10",
  },
  {
    name: "Cinema Hà nội Centerpoint",
    address:
      "Lầu 2, số 7/28, Đường Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
    created: "2011/04/10",
  },
  {
    name: "Cinema Hà nội Centerpoint",
    address:
      "Lầu 2, số 7/28, Đường Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
    created: "2011/04/10",
  },
];

const FilmLst = () => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Danh sách rạp chiếu phim</h1>

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
                    <th>Tên rạp chiếu phim</th>
                    <th>Địa chỉ</th>
                    <th>Ngày tạo</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <Link to="/zoom-list">{item.name}</Link>
                      </td>
                      <td>{item.address}</td>
                      <td>{item.created}</td>
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

export default FilmLst;
