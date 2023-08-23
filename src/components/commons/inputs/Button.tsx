import css from "./Button.module.css";
import React, { ReactNode } from "react";

type ButtonProps = {
  type?: "button" | "reset" | "submit";
  customFunction?: () => void;
  value?: ReactNode;
};

export const Button = ({ type, customFunction, value }: ButtonProps) => {
  return (
    <button className={css.btn} type={type} onClick={customFunction}>
      {value}
    </button>
  );
};

//TODO: o componente continua preso ao onClick! corrigir! deve ser mais genérico
//onClick={customFunction}> => generic={customFunction}> how?
