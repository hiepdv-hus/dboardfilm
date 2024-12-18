import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar Brand */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-text mx-3">ADMIN FILM</div>
        </Link>

        <hr className="sidebar-divider my-0" />

        {/* Dashboard */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        {/* Interface Section */}
        <SidebarItem
          title="Quản lý phim"
          icon="fas fa-film"
          targetId="collapseTwo"
          items={[
            { text: "Danh sách phim", link: "/film-list" },
            { text: "Tạo mới phim", link: "/film-add" },
          ]}
        />

        <SidebarItem
          title="Quản lý rạp chiếu phim"
          icon="fas fa-building"
          targetId="collapseUtilities1"
          items={[
            { text: "Danh sách rạp phim", link: "/cinema-list" },
            { text: "Tạo mới rạp", link: "/cinema-add" },
          ]}
        />

        <SidebarItem
          title="Quản lý phòng chiếu"
          icon="fas fa-person-booth"
          targetId="collapseUtilities2"
          items={[
            { text: "Danh sách phòng chiếu", link: "/zoom-list" },
            { text: "Tạo mới", link: "/zoom-add" },
          ]}
        />

        <SidebarItem
          title="Quản lý lịch chiếu"
          icon="fas fa-fw fa-table"
          targetId="collapseUtilities3"
          items={[
            { text: "Danh sách lịch chiếu", link: "/show-time" },
          ]}
        />

        <SidebarItem
          title="Quản lý suất chiếu"
          icon="fas fa-fw fa-table"
          targetId="collapseUtilities4"
          items={[
            { text: "Danh sách suất chiếu", link: "/suat-chieu" },
          ]}
        />


        <li className="nav-item">
          <Link className="nav-link" to="/order">
            <i class="fas fa-shopping-basket"></i>
            <span>Đơn hàng</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </div>
  );
};

// SidebarItem Component for Reusability
const SidebarItem = ({ title, icon, targetId, items }) => {
  return (
    <li className="nav-item">
      {/* Nút điều hướng */}
      <button
        className="nav-link collapsed"
        type="button"
        data-bs-toggle="collapse" // Bootstrap 5
        data-bs-target={`#${targetId}`}
        aria-expanded="false"
        aria-controls={targetId}
      >
        <i className={icon}></i>
        <span>{title}</span>
      </button>

      {/* Nội dung collapsible */}
      <div id={targetId} className="collapse" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          {items.map((item, index) =>
            item.header ? (
              <React.Fragment key={index}>
                <h6 className="collapse-header">{item.header}</h6>
                {item.items.map((subItem, subIndex) => (
                  <Link
                    className="collapse-item"
                    to={subItem.link}
                    key={subIndex}
                  >
                    {subItem.text}
                  </Link>
                ))}
                {item.divider && <div className="collapse-divider"></div>}
              </React.Fragment>
            ) : (
              <Link className="collapse-item" to={item.link} key={index}>
                {item.text}
              </Link>
            )
          )}
        </div>
      </div>
    </li>
  );
};

export default Sidebar;
