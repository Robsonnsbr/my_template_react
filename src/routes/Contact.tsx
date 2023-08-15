import { Link } from "react-router-dom";
import css from "./Contact.module.css";

export const Contact = () => {
  const arrayContact = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Removi a função, já que você tem um array estático
  return (
    <div className={css.contact}>
      <h1>Page Contacts</h1>
      {arrayContact.map((id) => (
        <p key={id}>
          <Link to={`/contact/${id}`}>Forma de contato {id}</Link>
        </p>
      ))}
    </div>
  );
};
