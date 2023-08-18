import { Link } from "react-router-dom";

import classes from "./User.module.css";
import { BsPersonWorkspace } from "react-icons/bs";
import { UserProps } from "../../../@types/user";

export const User = ({
  avatar_url,
  login,
  followers,
  following,
  bio,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <div className={classes.user_stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.user_number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.user_number}>{following}</p>
        </div>
      </div>
      <div className={classes.user_stats_bio}>
        <p>Bio:</p>
        <p>{bio}</p>
      </div>
      <Link to={`/repos/${login}`}>
        Ver melhores projetos
        <BsPersonWorkspace />
      </Link>
    </div>
  );
};
