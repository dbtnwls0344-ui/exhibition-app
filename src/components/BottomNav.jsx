import { NavLink } from "react-router-dom";
import "../styles/bottom-nav.css";

const activeClass = ({ isActive }) => (isActive ? "tab active" : "tab");

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end className={activeClass}>Home</NavLink>
      <NavLink to="/explore" className={activeClass}>Explore</NavLink>
      <NavLink to="/around" className={activeClass}>Around</NavLink>
      <NavLink to="/my" className={activeClass}>My</NavLink>
    </nav>
  );
}