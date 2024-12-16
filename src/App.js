import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";

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
          {/* <Route path="/cuoc-hen" element={<CuocHen />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
