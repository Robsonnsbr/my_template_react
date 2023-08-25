import loading from "../../../../../public/img/loading.svg";

import css from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={css.loader_container}>
      <img className={css.loader} src={loading} alt="loader de carregamento" />
    </div>
  );
};
