import React from "react";
import {Link} from "react-router-dom"

const OrderDetail = () => {
  return (
    <div className="container-fluid">
      <Link to={'/order'}><button type="reset" className="btn btn-secondary ms-2">
            Quay lại
        </button></Link>
      <form>
        <div className="row mt-4">
          {/* Cột bên trái */}
          <div className="col-md-6">
            <div className="row">
                <div className="col-lg-6">
                    <h3>Thông tin đơn hàng</h3>
                    <div className="mt-5">
                        <div><b>Mã đơn hàng:</b> 96175515</div>
                        <div className="mt-3"><b>Phim:</b> <span style={{color: 'blue'}}>Money Man Báo Thù</span></div>
                        <div className="mt-3"><b>Giờ chiếu:</b> <button
                          type="button"
                          className="btn btn-outline-danger py-0"
                        >
                          20:25 - 22:20
                        </button></div>
                        <div><b>Ngày chiếu:</b> IMAX</div>
                        <div><b>Rạp chiếu:</b> HCinema Hà Đông</div>
                        <div><b>Ngày đặt:</b> 06-05-2025</div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3>Thông tin khách hàng</h3>
                    <div className="mt-5">
                        <div><b>Khách Hàng:</b> Hiền Supper</div>
                        <div className="mt-3"><b>Điện thoại:</b> 09120512512</div>
                        <div className="mt-3"><b>Trạng thái:</b> <button
                          type="button"
                          className="btn btn-outline-success py-0"
                        >
                          Đã xác nhận
                        </button></div>
                        <div><b>Thành tiền:</b> 1.060.00</div>
                        <div><b>Giảm giá:</b> 0</div>
                        <div><b>Tổng tiền:</b> 1.060.00</div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Ghế và dịch vụ</h3>

            <div className="mt-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Thông tin ghế</th>
                    <th scope="col">Loại ghế</th>
                    <th scope="col">Giá tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>A1</td>
                    <td>Ghế thường</td>
                    <td>10000</td>
                    </tr>
                    <tr>
                    <td>A1</td>
                    <td>Ghế thường</td>
                    <td>10000</td>
                    </tr>
                    <tr>
                    <td>A1</td>
                    <td>Ghế thường</td>
                    <td>10000</td>
                    </tr>
                </tbody>
                </table>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderDetail;
