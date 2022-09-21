import React, { Children } from "react";
import { AiFillHome, FaShoppingCart, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar({}) {
  const menuItem = () => [
    {
      path: "/",
      name: "Home",
      icon: <AiFillHome />,
    },
    {
      path: "/bookshop",
      name: "Bookshop",
      icon: <FaShoppingCart />,
    },
  ];
  return (
    <div className="conteiner">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo"></h1>
          <div className="bars">
            <FaBars />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
