import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomNav from "./BottomNav";
import "../styles/layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}
