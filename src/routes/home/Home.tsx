import { useState } from "react";
import { UserProps } from "../../@types/user";
import { routesComponentsUser } from "../../components/exportRoutesComponents";
import { getUSer } from "../../api/api";

const { User, Search, Error } = routesComponentsUser;

export const Home = () => {
  const [user, setUser] = useState<UserProps | undefined | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | undefined>("");

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);
    try {
      const fetchedUser = await getUSer(userName);

      if ("errorMsg" in fetchedUser) {
        setError(true);
        setErrorMsg(fetchedUser.errorMsg);
      } else {
        setUser(fetchedUser.data);
        setError(false);
        setErrorMsg("");
      }
    } catch (e) {
      setError(true);
      setErrorMsg("Ocorreu um erro ao buscar os dados do usuário.");
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
