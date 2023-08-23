import css from "./Contact.module.css";
import { routesComponents } from "../../components/exportRoutesComponents";
const { Form } = routesComponents;
export const Contact = () => {
  return (
    <div className={css.contact}>
      <Form />
    </div>
  );
};

//TODO: ao voltar de uma pagina externa a pagina contact da erro. tratar
