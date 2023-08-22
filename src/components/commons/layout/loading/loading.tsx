import loading from "../../../../../public/img/loading.svg";
import css from "./loading.module.css";

export const Loading = () => {
  return (
    <div className={css.loader_container}>
      <img className={css.loader} src={loading} alt="Loading" />
    </div>
  );
};
