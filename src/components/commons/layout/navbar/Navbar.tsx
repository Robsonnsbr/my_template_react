import { Link } from "react-router-dom";
import css from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <Link to="./">home</Link>
      <Link to="about">about</Link>
      <Link to="projects">projects</Link>
      <Link to="contact">contact</Link>
      <Link to="https://github.com/Robsonnsbr">Return to GitHub</Link>
    </nav>
  );
};
