import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/students">Students</NavLink>
      <NavLink to="/add">Add Student</NavLink>
      <NavLink to="/counter">Counter</NavLink>
    </nav>
  );
}

export default Navbar;