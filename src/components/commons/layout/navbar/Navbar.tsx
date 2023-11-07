import { Link } from "react-router-dom";
import css from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <ul>
        <span style={{ position: "absolute", top: 0, left: 0 }}>
          is under development...
        </span>
        <li>
          <Link to="./">INÍCIO</Link>
        </li>
        <li>
          <Link to="about">SOBRE</Link>
        </li>
        <li>
          <Link to="projects">PROJETOS</Link>
        </li>
        <li>
          <Link to="contact">CONTATO</Link>
        </li>
        <li>
          <Link to="https://github.com/Robsonnsbr" target="_blank">
            GITHUB
          </Link>
        </li>
      </ul>
    </nav>
  );
};
