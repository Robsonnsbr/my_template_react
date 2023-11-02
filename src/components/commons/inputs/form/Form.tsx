import { useState } from "react";
import css from "./Form.module.css";
import { enviarEmail } from "../../../../services/sendEmail";
import { Button } from "../Button";

export const Form = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    enviarEmail({ name, subject, message, email });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Dados do formulário:", { subject, name, email, message });
  };

  //TODO: Limpar inputs
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
          <Button
            type="submit"
            value="Enviar"
            customFunction={handleButtonClick}
          />
        </div>
      </form>
    </div>
  );
};
