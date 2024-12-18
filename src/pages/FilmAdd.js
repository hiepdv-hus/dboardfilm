import React from "react";

const FilmForm = () => {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Tạo phim</h1>
      <form>
        <div className="row mt-4">
          {/* Cột bên trái */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Tên phim</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter film name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Tên phim (tiếng anh)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter english name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Trailer</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter trailer URL"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mô tả</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter description"
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Thể loại</label>
              <select className="form-select">
                <option>Select genres</option>
                <option>Action</option>
                <option>Drama</option>
              </select>
            </div>
          </div>

          {/* Cột bên phải */}
          <div className="col-md-6">
            {/* <div className="mb-3">
              <label className="form-label">Hình thức chiếu</label>
              <select className="form-select">
                <option>Select method</option>
                <option>Online</option>
                <option>Theater</option>
              </select>
            </div> */}
            <div className="mb-3">
              <label className="form-label">Hình thức dịch</label>
              <select className="form-select">
                <option>Select translation</option>
                <option>Subtitles</option>
                <option>Dubbing</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Ngày chiếu</label>
              <input type="date" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Thời lượng (phút)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter duration"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Quốc gia</label>
              <select className="form-select">
                <option>Select a country</option>
                <option>USA</option>
                <option>Vietnam</option>
              </select>
            </div>
          </div>
        </div>

        {/* Nút bấm */}
        <div className="text-end">
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

export default FilmForm;
