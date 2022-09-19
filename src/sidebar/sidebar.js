import React from "react";
// CSS
import "./sidebar.css";

function sidebar() {
  return (
    <div className="main">
      <div className="sidebar">
        <ul>
          <li>hello</li>
        </ul>
      </div>
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

export default sidebar;
