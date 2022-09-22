import React from "react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const menuItem = [
  {
    path: "",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/bookshop",
    name: "Bookshop",
    icon: <FaShoppingCart />,
  },
];
function Sidebar({ children }) {
  return (
    <div className="conteiner">
      <div className="sidebar">
        <div className="top_section">
          <Link to="">
            <h1 className="logo">Menu</h1>
          </Link>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" end>
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main className="main_content main_background_color">{children}</main>
    </div>
  );
}

export default Sidebar;
