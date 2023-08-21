import css from "./Error.module.css";
type errorMsg = {
  errorMsg: string | undefined;
};

export const Error = (errorMsg: errorMsg) => {
  return (
    <div className={css.error}>
      <p>{errorMsg.errorMsg}</p>
    </div>
  );
};
