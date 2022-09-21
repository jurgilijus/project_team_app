import React from "react";
import SidebarComponents from "./sidebarComponents";
// CSS
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="main">
      <SidebarComponents />
      <div className="container">
        <h1>My React App</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quo unde
          minima ipsam vitae nam animi, ducimus doloribus incidunt repudiandae
          rem, libero natus magni adipisci veritatis at ad ipsum? Accusamus.
        </p>
        <button className="btn">Explore now</button>
      </div>
    </div>
  );
}

export default Sidebar;
