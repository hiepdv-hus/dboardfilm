import React from "react";

const CinemaAdd = () => {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Tạo rạp phim</h1>
      <form>
        <div className="row mt-4">
          {/* Cột bên trái */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Tên rạp chiếu phim</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tên rạp chiếu phim"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Địa chỉ</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Địa chỉ"
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Địa chỉ map</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Địa chỉ map"
              ></textarea>
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

export default CinemaAdd;
