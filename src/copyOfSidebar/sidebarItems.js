import { useState } from "react";
import React from "react";

function SidebarItems({ item }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? "sidebar_item open" : "sidebar_item"}>
        <div className="sidebar_title">
          <span>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          <i
            className="bi bi-chevron-down toggle_btn"
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        <div className="sidebar_content">
          {item.childrens.map((child, index) => (
            <SidebarItems key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={item.path || "#"} className="sidebar_item plain">
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    );
  }
}

export default SidebarItems;
