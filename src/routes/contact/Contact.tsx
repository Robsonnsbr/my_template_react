import css from "./Contact.module.css";
import { routesComponents } from "../../components/exportRoutesComponents";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const { Form } = routesComponents;
export const Contact = () => {
  const location = useLocation();
  return (
    <div className={css.contact}>
      <h1>Estou Ansioso para Receber Seu E-mail.</h1>
      <motion.div
        className={css.content}
        key={location.pathname}
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: -window.innerWidth }}
        transition={{ duration: 1 }}
      >
        <Form />
      </motion.div>
    </div>
  );
};

//TODO: ao voltar de uma pagina externa a pagina contact da erro. tratar
