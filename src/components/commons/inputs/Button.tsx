import css from "./Button.module.css";

type ButtonProps = {
  type?: "button" | "reset" | "submit";
  customFunction?: () => void;
  id?: string;
  value?: string;
};

export const Button = ({ type, customFunction, id, value }: ButtonProps) => {
  return (
    <button className={css.btn} type={type} id={id} onClick={customFunction}>
      {value}
    </button>
  );
};

//TODO: o componente continua preso ao onClick! corrigir! deve ser mais genérico
//onClick={customFunction}> => generic={customFunction}> how?
