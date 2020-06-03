import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    { link: "/home", name: "Home" },
    { link: "/trenches", name: "Deepest trenches" },
    { link: "/ring-of-fire", name: "Ring of fire" },
    { link: "/square-waves", name: "Square waves" },
  ];

  return (
    <nav className="Menu">
      <ul>
        {menuItems.map((item) => (
          <li key={item.name} className="Menu__item">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
