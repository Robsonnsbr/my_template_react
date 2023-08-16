import { Link } from "react-router-dom";
import css from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <Link to="./">Home</Link>
      <Link to="./about">About</Link>
      <Link to="./projects">Projects</Link>
      <Link to="https://github.com/Robsonnsbr">Return to GitHub</Link>
    </nav>
  );
};
