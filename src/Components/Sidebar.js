import React from "react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const menuItem = [
  {
    path: "/home",
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
          <h1 className="logo">Menu</h1>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
