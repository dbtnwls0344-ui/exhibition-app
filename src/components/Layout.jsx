import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import BottomNav from "./BottomNav";
import "../styles/layout.css";

export default function Layout() {
  const location = useLocation();
  const isAround = location.pathname === "/around";

  return (
    <div className={`layout${isAround ? " layout--around" : ""}`}>
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}
