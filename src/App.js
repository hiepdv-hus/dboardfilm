import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import FilmLst from "./pages/FilmLst";
import FilmAdd from "./pages/FilmAdd";
import CinemaLst from "./pages/CinemaLst";
import CinemaAdd from "./pages/CinemaAdd";
import ZoomLst from "./pages/ZoomLst";
import ZoomAdd from "./pages/ZoomAdd";
import ShowTime from "./pages/ShowTime";
import SuatChieu from "./pages/SuatChieu";
import Order from "./pages/Order";

function App() {
  const Layout = () => {
    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper">
          <main className="mx-auto pt-3">
            {/* Đây là nơi nội dung động hiển thị */}
            <Outlet />
          </main>
        </div>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        {/* Sử dụng layout component */}
        <Route path="/" element={<Layout />}>
          {/* Các route con */}
          <Route index element={<Dashboard />} />
          <Route path="/film-list" element={<FilmLst />} />
          <Route path="/film-add" element={<FilmAdd />} />
          <Route path="/cinema-list" element={<CinemaLst />} />
          <Route path="/cinema-add" element={<CinemaAdd />} />
          <Route path="/zoom-list" element={<ZoomLst />} />
          <Route path="/zoom-add" element={<ZoomAdd />} />
          <Route path="/show-time" element={<ShowTime />} />
          <Route path="/suat-chieu" element={<SuatChieu />} />
          <Route path="/order" element={<Order />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
