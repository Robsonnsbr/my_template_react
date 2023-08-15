// import { useState } from "react";
import { Outlet } from "react-router-dom";
import css from "./App-Outlet.module.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main className={css.outlet}>
        <h3>TESTEE</h3>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
