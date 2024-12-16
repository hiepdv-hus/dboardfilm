import React from "react";
import headerImage from "../images/undraw_rocket.svg"; // Cập nhật đúng đường dẫn hình ảnh

const Sidebar = () => {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-text mx-3">ADMIN FILM</div>
        </a>

        <hr className="sidebar-divider my-0" />

        {/* Dashboard */}
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        {/* Interface Section */}
        {/* <div className="sidebar-heading">Interface</div> */}

        <SidebarItem
          title="Components"
          icon="fas fa-fw fa-cog"
          targetId="collapseTwo"
          items={[
            { text: "Buttons", link: "buttons.html" },
            { text: "Cards", link: "cards.html" },
          ]}
        />

        <SidebarItem
          title="Utilities"
          icon="fas fa-fw fa-wrench"
          targetId="collapseUtilities"
          items={[
            { text: "Colors", link: "utilities-color.html" },
            { text: "Borders", link: "utilities-border.html" },
            { text: "Animations", link: "utilities-animation.html" },
            { text: "Other", link: "utilities-other.html" },
          ]}
        />

        <hr className="sidebar-divider" />

        {/* Addons Section */}
        {/* <div className="sidebar-heading">Addons</div> */}

        <SidebarItem
          title="Pages"
          icon="fas fa-fw fa-folder"
          targetId="collapsePages"
          items={[
            {
              header: "Login Screens:",
              items: [
                { text: "Login", link: "login.html" },
                { text: "Register", link: "register.html" },
                { text: "Forgot Password", link: "forgot-password.html" },
              ],
            },
            { divider: true },
            {
              header: "Other Pages:",
              items: [
                { text: "404 Page", link: "404.html" },
                { text: "Blank Page", link: "blank.html" },
              ],
            },
          ]}
        />

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
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
      <div
        className="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target={`#${targetId}`}
        aria-expanded="true"
        aria-controls={targetId}
      >
        <i className={icon}></i>
        <span>{title}</span>
      </div>
      <div id={targetId} className="collapse" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          {items.map((item, index) =>
            item.header ? (
              <React.Fragment key={index}>
                <h6 className="collapse-header">{item.header}</h6>
                {item.items.map((subItem, subIndex) => (
                  <a
                    className="collapse-item"
                    href={subItem.link}
                    key={subIndex}
                  >
                    {subItem.text}
                  </a>
                ))}
                {item.divider && <div className="collapse-divider"></div>}
              </React.Fragment>
            ) : (
              <a className="collapse-item" href={item.link} key={index}>
                {item.text}
              </a>
            )
          )}
        </div>
      </div>
    </li>
  );
};

export default Sidebar;
