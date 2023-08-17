// import { useState } from "react";
import { Outlet } from "react-router-dom";
import css from "./App.module.css";
import { routesComponents } from "./components/exportRoutesComponents";

const { Navbar, Footer } = routesComponents;

export const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main className={css.main}>
        <h3>TESTE</h3>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
