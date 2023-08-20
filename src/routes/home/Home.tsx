import { useState } from "react";
import { UserProps } from "../../@types/user";
import { routesComponentsUser } from "../../components/exportRoutesComponents";
import { validateUser } from "../../api/validateUser";

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
    <div id="Home">
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error errorMsg={errorMsg} />}
    </div>
  );
};
