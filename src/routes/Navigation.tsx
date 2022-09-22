import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Lazyload1, Lazyload2, Lazyload3 } from "../01-lazyload/pages";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/lazy1"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                LazyPage 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                LazyPage 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                LazyPage 3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="lazy1" element={<Lazyload1 />} />
          <Route path="lazy2" element={<Lazyload2 />} />
          <Route path="lazy3" element={<Lazyload3 />} />

          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
