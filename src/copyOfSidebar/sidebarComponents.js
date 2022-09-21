import SidebarItems from "./sidebarItems";
import Items from "../sidebar/sidebarItems.json";
import React from "react";

const Sidebarcomponents = () => {
  return (
    <div className="sidebar">
      <h2 className="menu_headerName">Menu</h2>
      {Items.map((item, index) => (
        <SidebarItems key={index} {...item} item={item} />
      ))}
    </div>
  );
};

export default Sidebarcomponents;
