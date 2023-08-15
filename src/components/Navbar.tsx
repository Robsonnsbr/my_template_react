import { Link } from "react-router-dom";
import css from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <Link to="./">Home</Link>
      <Link to="./About">About</Link>
      <Link to="./Contact">Contact</Link>
    </nav>
  );
};
