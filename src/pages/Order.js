import React from "react";

const data = [
    {
        code: '9125125',
        name: 'Money man báo thù',
        suatchieu1: '20:00 - 21:00',
        suatchieu2: '05-06-2024',
        phongchieu: 'IMAX - HCinema Aeon Hà Đông',
        status: 'Đã hoàn thành',
        tongtien: '1,500,000',
        ngaydat: '06-05-2024'
    },
    {
        code: '9125125',
        name: 'Quỷ cái',
        suatchieu1: '20:00 - 21:00',
        suatchieu2: '05-06-2024',
        phongchieu: 'IMAX - HCinema Aeon Hà Đông',
        status: 'Đã hoàn thành',
        tongtien: '1,500,000',
        ngaydat: '06-05-2024'
    },
    {
        code: '9125125',
        name: 'Thanh Xuân',
        suatchieu1: '20:00 - 21:00',
        suatchieu2: '05-06-2024',
        phongchieu: 'IMAX - HCinema Aeon Hà Đông',
        status: 'Đã hủy',
        tongtien: '1,500,000',
        ngaydat: '06-05-2024'
    },
    {
        code: '9125125',
        name: 'Money man báo thù',
        suatchieu1: '20:00 - 21:00',
        suatchieu2: '05-06-2024',
        phongchieu: 'IMAX - HCinema Aeon Hà Đông',
        status: 'Đã hoàn thành',
        tongtien: '1,500,000',
        ngaydat: '06-05-2024'
    },
    {
        code: '9125125',
        name: 'Money man báo thù',
        suatchieu1: '20:00 - 21:00',
        suatchieu2: '05-06-2024',
        phongchieu: 'IMAX - HCinema Aeon Hà Đông',
        status: 'Đã hoàn thành',
        tongtien: '1,500,000',
        ngaydat: '06-05-2024'
    },
    {
        code: '9125125',
        name: 'Money man báo thù',
        suatchieu1: '20:00 - 21:00',
        suatchieu2: '05-06-2024',
        phongchieu: 'IMAX - HCinema Aeon Hà Đông',
        status: 'Đã hoàn thành',
        tongtien: '1,500,000',
        ngaydat: '06-05-2024'
    },
    {
        code: '9125125',
        name: 'Money man báo thù',
        suatchieu1: '20:00 - 21:00',
        suatchieu2: '05-06-2024',
        phongchieu: 'IMAX - HCinema Aeon Hà Đông',
        status: 'Đã hoàn thành',
        tongtien: '1,500,000',
        ngaydat: '06-05-2024'
    },
    {
        code: '9125125',
        name: 'Money man báo thù',
        suatchieu1: '20:00 - 21:00',
        suatchieu2: '05-06-2024',
        phongchieu: 'IMAX - HCinema Aeon Hà Đông',
        status: 'Đã hoàn thành',
        tongtien: '1,500,000',
        ngaydat: '06-05-2024'
    },
    {
        code: '9125125',
        name: 'Thanh Xuân',
        suatchieu1: '20:00 - 21:00',
        suatchieu2: '05-06-2024',
        phongchieu: 'IMAX - HCinema Aeon Hà Đông',
        status: 'Đã hủy',
        tongtien: '1,500,000',
        ngaydat: '06-05-2024'
    },
    {
        code: '9125125',
        name: 'Thanh Xuân',
        suatchieu1: '20:00 - 21:00',
        suatchieu2: '05-06-2024',
        phongchieu: 'IMAX - HCinema Aeon Hà Đông',
        status: 'Đã hủy',
        tongtien: '1,500,000',
        ngaydat: '06-05-2024'
    },
]

const Order = () => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Danh sách đơn hàng</h1>

        <div className="d-flex align-items-center mt-4">
          <button className="btn btn-outline-primary ms-2">Refresh</button>
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
                    <th>Mã đơn hàng</th>
                    <th>Tên phim</th>
                    <th>Suất chiếu</th>
                    <th>Phòng chiếu</th>
                    <th>Trạng thái</th>
                    <th>Tổng tiền</th>
                    <th>Ngày đặt</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.code}</td>
                        <td>{item.name}</td>
                        <td><button
                            type="button"
                            class="btn btn-outline-warning py-0"
                            >
                            {item.suatchieu1}
                        </button><button
                            type="button"
                            class="ms-2 btn btn-outline-success py-0"
                            >
                            {item.suatchieu2}
                        </button></td>
                        <td>{item.phongchieu}</td>
                        <td>
                        {item.status == 'Đã hoàn thành'  && <button
                            type="button"
                            class="btn btn-outline-success py-0"
                            >
                            {item.status}
                        </button> }
                        {item.status == 'Đã hủy'  && <button
                            type="button"
                            class="btn btn-outline-danger py-0"
                            >
                            {item.status}
                        </button> }</td>
                        <td>{item.tongtien}</td>
                        <td>{item.ngaydat}</td>
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

export default Order;
