import { NavLink } from "react-router-dom";
import "../styles/bottom-nav.css";

import homeIcon from "../img/home-icon.svg";
import exploreIcon from "../img/explore-icon.svg";
import aroundIcon from "../img/around-icon.svg";
import myIcon from "../img/my-icon.svg";

const activeClass = ({ isActive }) => (isActive ? "tab active" : "tab");

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end className={activeClass}>
        <img src={homeIcon} alt="Home" />
      </NavLink>

      <NavLink to="/explore" className={activeClass}>
        <img src={exploreIcon} alt="Explore" />
      </NavLink>

      <NavLink to="/around" className={activeClass}>
        <img src={aroundIcon} alt="Around" />
      </NavLink>

      <NavLink to="/my" className={activeClass}>
        <img src={myIcon} alt="My" />
      </NavLink>
    </nav>
  );
}
