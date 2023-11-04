import { useState } from "react";
import css from "./Form.module.css";
import { enviarEmail } from "../../../../services/sendEmail";
import { Button } from "../Button";

type customError = {
  erro: boolean;
  msg: string;
};
const customError = { erro: false, msg: "" };

export const Form = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(customError);

  const btnSubmit = document.getElementById("btnSubmit") as HTMLButtonElement;

  const clearInputs = () => {
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
  };

  const validarInputs = () => {
    if (subject && name && email && message) {
      setError({ erro: false, msg: "Email enviado Com sucesso!" });
      return true;
    }
    setError({
      erro: true,
      msg: "Erro ao enviar email.",
    });
    return false;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validarInputs()) {
      enviarEmail({ name, subject, message, email });
      clearInputs();
      btnSubmit.disabled = true;
      btnSubmit.style.opacity = "0.2";
      setTimeout(() => {
        btnSubmit.disabled = false;
        btnSubmit.style.opacity = "1";
      }, 5000);

      setTimeout(() => {
        setError({ erro: false, msg: "" });
      }, 5000);
    }

    setTimeout(() => {
      setError({ erro: false, msg: "" });
    }, 5000);
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            onFocus={focus}
          />
        </div>
        <div>
          <label htmlFor="subject">Assunto:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Texto:</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </div>
        <div>
          <Button type="submit" id="btnSubmit" value="Enviar" />
          {error.msg && <span>{error.msg}</span>}
        </div>
      </form>
    </div>
  );
};
