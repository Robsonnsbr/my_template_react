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
