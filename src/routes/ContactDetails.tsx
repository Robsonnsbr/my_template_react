import { useParams } from "react-router-dom";

import css from "./ContactDetails.module.css";

//TODO: //Colocar Projetos do GitHub

export const ContactDetails = () => {
  const { id } = useParams();
  return (
    <div className={css.contactDetails}>Exibindo informações contato: {id}</div>
  );
};
