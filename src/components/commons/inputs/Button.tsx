import css from "./Button.module.css";

type ButtonProps = {
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  id?: string;
  value?: string;
};

export const Button = ({ type, onClick, id, value }: ButtonProps) => {
  return (
    <button className={css.btn} type={type} id={id} onClick={onClick}>
      {value}
    </button>
  );
};

//TODO: o componente continua preso ao onClick! corrigir! deve ser mais genérico
//onClick={customFunction}> => generic={customFunction}> how?
