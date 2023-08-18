import { useState } from "react";

import { UserProps } from "../../@types/user";
// import css from "./Home.module.css";

import { User } from "../../components/commons/user/User";
import { Search } from "../../components/commons/user/Search";
import { Error } from "../../components/commons/user/Error";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<boolean>(false);
  const loadUser = async (userName: string) => {
    console.log(userName);
    setError(false);
    setUser(null);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    if (response.status === 404) {
      setError(true);
      return;
    }
    const { avatar_url, name, login, followers, following, bio } = data;

    const userData: UserProps = {
      avatar_url,
      name,
      login,
      followers,
      following,
      bio,
    };
    setUser(userData);
  };

  return (
    <>
      <div id="Home">
        <Search loadUser={loadUser} />
        {user && <User {...user} />}
        {error && <Error />}
      </div>
    </>
  );
};
