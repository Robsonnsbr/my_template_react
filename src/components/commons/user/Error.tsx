type errorMsg = {
  errorMsg: string | undefined;
};
export const Error = (errorMsg: errorMsg) => {
  return (
    <div>
      <p>{errorMsg.errorMsg}</p>
    </div>
  );
};
