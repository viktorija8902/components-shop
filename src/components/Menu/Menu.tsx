import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

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
            <NavLink
              key={item.name}
              to={item.link}
              className="Menu__link"
              aria-current="page"
              activeStyle={{
                fontWeight: "bold",
                color: "darkBlue",
              }}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
