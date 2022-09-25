import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Lazyload1, Lazyload2, Lazyload3 } from "../pages";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        <li>
            <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
            <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
            <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1" element={<Lazyload1/>} />
        <Route path="lazy2" element={<Lazyload2/>} />
        <Route path="lazy3" element={<Lazyload3/>} />
        {/* <Route path="*" element={<div>Not Found</div>} />*/}
        
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};


export default LazyLayout;