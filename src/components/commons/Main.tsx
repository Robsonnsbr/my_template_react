import { Outlet } from "react-router-dom";
import css from "./Main.module.css";

export const Main = (): React.ReactElement => {
  return (
    <main className={css.main}>
      <Outlet />
    </main>
  );
};
