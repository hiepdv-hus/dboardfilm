import React from "react";

const data = [
  {
    name: "Lật mặt điều ước 7",
    position: "2024",
    office: "Hành động",
    age: "2011/04/25",
    startDate: "Công khai",
    salary: "2011/04/10",
  },
  {
    name: "Lật mặt điều ước 7",
    position: "2024",
    office: "Hành động",
    age: "2011/04/25",
    startDate: "Công khai",
    salary: "2011/04/10",
  },
  {
    name: "Lật mặt điều ước 7",
    position: "2024",
    office: "Hành động",
    age: "2011/04/25",
    startDate: "Công khai",
    salary: "2011/04/10",
  },
  {
    name: "Lật mặt điều ước 7",
    position: "2024",
    office: "Hành động",
    age: "2011/04/25",
    startDate: "Công khai",
    salary: "2011/04/10",
  },
  {
    name: "Lật mặt điều ước 7",
    position: "2024",
    office: "Hành động",
    age: "2011/04/25",
    startDate: "Công khai",
    salary: "2011/04/10",
  },
  {
    name: "Lật mặt điều ước 7",
    position: "2024",
    office: "Hành động",
    age: "2011/04/25",
    startDate: "Công khai",
    salary: "2011/04/10",
  },
  {
    name: "Lật mặt điều ước 7",
    position: "2024",
    office: "Hành động",
    age: "2011/04/25",
    startDate: "Công khai",
    salary: "2011/04/10",
  },
  {
    name: "Lật mặt điều ước 7",
    position: "2024",
    office: "Hành động",
    age: "2011/04/25",
    startDate: "Công khai",
    salary: "2011/04/10",
  },
  {
    name: "Lật mặt điều ước 7",
    position: "2024",
    office: "Hành động",
    age: "2011/04/25",
    startDate: "Công khai",
    salary: "2011/04/10",
  },
  {
    name: "Lật mặt điều ước 7",
    position: "2024",
    office: "Hành động",
    age: "2011/04/25",
    startDate: "Công khai",
    salary: "2011/04/10",
  },
  {
    name: "Lật mặt điều ước 7",
    position: "2024",
    office: "Hành động",
    age: "2011/04/25",
    startDate: "Công khai",
    salary: "2011/04/10",
  },
  {
    name: "Lật mặt điều ước 7",
    position: "2024",
    office: "Hành động",
    age: "2011/04/25",
    startDate: "Công khai",
    salary: "2011/04/10",
  },
];

const FilmLst = () => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Danh sách phim</h1>

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
                    <th>Tên phim</th>
                    <th>Năm phát hành</th>
                    <th>Thể loại</th>
                    <th>Lịch chiếu</th>
                    <th>Trạng thái</th>
                    <th>Ngày tạo</th>
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

export default FilmLst;
