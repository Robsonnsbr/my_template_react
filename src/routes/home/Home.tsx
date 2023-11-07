import { useState } from "react";
import { UserProps } from "../../@types/UserProps";
import { routesComponentsUser } from "../../components/exportRoutesComponents";
import { validateUser } from "../../services/validateUser";

import css from "./Home.module.css";
import { motion } from "framer-motion";

const { User, Search, Error } = routesComponentsUser;

export const Home = () => {
  const [user, setUser] = useState<UserProps | undefined | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | undefined>("");
  //TODO: add loading...
  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);
    const validationResult = await validateUser(userName);

    if (validationResult.error) {
      setError(true);
      setErrorMsg(validationResult.errorMsg);
    } else {
      setUser(validationResult.user);
      setError(false);
      setErrorMsg("");
    }
  };

  return (
    <div className={css.home}>
      <section className={css.contentUser}>
        <motion.div
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -window.innerWidth }}
          transition={{ duration: 1 }}
        >
          {user && <User {...user} />}
        </motion.div>
        {error && <Error errorMsg={errorMsg} />}
        <motion.div
          initial={{ opacity: 0, y: 1000 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -window.innerWidth }}
          transition={{ duration: 1 }}
        >
          <Search loadUser={loadUser} />
        </motion.div>
      </section>
      <section className={css.contentTech}>
        <h1>TECNOLOGIAS DO PORTFÓLIO</h1>
        <ul>
          <li>
            <a href="https://vitejs.dev/" target="_blank">
              Vite
            </a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/" target="_blank">
              TypeScript
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/" target="_blank">
              React
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/docs/react-dom.html" target="_blank">
              React DOM
            </a>
          </li>
          <li>
            <a
              href="https://react-icons.github.io/react-icons/"
              target="_blank"
            >
              React Icons
            </a>
          </li>
          <li>
            <a
              href="https://blog.logrocket.com/best-practices-react-iframes/"
              target="_blank"
            >
              React Iframe
            </a>
          </li>
          <li>
            <a
              href="https://knowbody.github.io/react-router-docs/"
              target="_blank"
            >
              React Router DOM
            </a>
          </li>
          <li>
            <a href="https://swiperjs.com/" target="_blank">
              Swiper
            </a>
          </li>
          <li>
            <a href="https://github.com/uuidjs/uuid" target="_blank">
              UUID
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/gh-pages" target="_blank">
              gh-pages
            </a>
          </li>
          <li>
            <a href="https://docs.github.com/en/rest" target="_blank">
              GitHub API
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
