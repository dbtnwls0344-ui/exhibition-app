import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Around from "./pages/Around";
import MySpace from "./pages/MySpace";


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/explore" element={<Explore />}/>
          <Route path="/around" element={<Around />}/>
          <Route path="/my" element={<MySpace />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
