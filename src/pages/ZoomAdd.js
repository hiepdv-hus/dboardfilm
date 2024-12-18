import React from "react";

const ZoomAdd = () => {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Tạo phòng chiếu</h1>
      <form>
        <div className="row mt-4">
          {/* Cột bên trái */}
          <div className="col-md-6">
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
        </div>

        {/* Nút bấm */}
        <div className="text-start">
          <button type="submit" className="btn btn-primary">
            Tạo phim
          </button>
          <button type="reset" className="btn btn-secondary ms-2">
            Quay lại
          </button>
        </div>
      </form>
    </div>
  );
};

export default ZoomAdd;
