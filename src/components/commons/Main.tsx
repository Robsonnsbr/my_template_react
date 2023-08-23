import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // Importar o motion do Framer Motion
import css from "./Main.module.css";

export const Main = (): React.ReactElement => {
  const location = useLocation();

  return (
    <motion.main
      className={css.main}
      key={location.pathname}
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: -window.innerWidth }}
      transition={{ duration: 0.5 }}
    >
      <Outlet />
    </motion.main>
  );
};
