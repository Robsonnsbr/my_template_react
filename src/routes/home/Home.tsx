import { useState } from "react";
import { UserProps } from "../../@types/UserProps";
import { routesComponentsUser } from "../../components/exportRoutesComponents";
import { validateUser } from "../../api/validateUser";

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
  const style = {
    overflow: "hidden",
  };
  return (
    <div className={css.home} style={style}>
      <div className={css.content}>
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
      </div>
    </div>
  );
};
