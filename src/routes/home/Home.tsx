import { useState } from "react";
import { UserProps } from "../../@types/UserProps";
import { routesComponentsUser } from "../../components/exportRoutesComponents";
import { validateUser } from "../../api/validateUser";

import css from "./Home.module.css";

const { User, Search, Error } = routesComponentsUser;

export const Home = () => {
  const [user, setUser] = useState<UserProps | undefined | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | undefined>("");

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
      <div className={css.content}>
        {user && <User {...user} />}
        {error && <Error errorMsg={errorMsg} />}
        <Search loadUser={loadUser} />
      </div>
    </div>
  );
};
