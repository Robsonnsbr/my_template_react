import { Link } from "react-router-dom";

import css from "./User.module.css";
import { BsPersonWorkspace } from "react-icons/bs";
import { UserProps } from "../../../@types/UserProps";

export const User = ({
  avatar_url,
  login,
  followers,
  following,
  bio,
}: UserProps) => {
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
      {/* TODO: passar o user dinamicamente */}
      <Link to={"https://github.com/Robsonnsbr"} target="_blank">
        Ver melhores projetos
        <BsPersonWorkspace />
      </Link>
    </div>
  );
};
