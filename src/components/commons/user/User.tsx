import { Link } from "react-router-dom";

import css from "./User.module.css";
import { BsPersonWorkspace } from "react-icons/bs";
import { UserProps } from "../../../@types/UserProps";
import { useEffect, useState } from "react";
export const User = ({
  avatar_url,
  login,
  followers,
  following,
  bio,
}: UserProps) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (login === "Robsonnsbr") {
      setUrl("https://atacadao-app.vercel.app/Login");
    } else {
      setUrl(`https://github.com/${login}?tab=repositories`);
    }
  }, [login]);

  return (
    <div className={css.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <div className={css.user_stats}>
        <div>
          <p>Seguidores:</p>
          <p className={css.user_number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={css.user_number}>{following}</p>
        </div>
      </div>
      <div className={css.user_stats_bio}>
        <p>Bio:</p>
        <p>{bio}</p>
      </div>
      <Link to={url} target="_blank">
        Ver melhores projetos
        <BsPersonWorkspace />
      </Link>
    </div>
  );
};
