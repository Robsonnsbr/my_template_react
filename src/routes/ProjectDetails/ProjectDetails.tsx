import { useParams } from "react-router-dom";

import css from "./ProjectDetails.module.css";

//TODO: //Colocar Projetos do GitHub

export const ProjectDetails = () => {
  const { id } = useParams();
  return (
    <div className={css.ProjectDetails}>
      Exibindo informações do projeto: {id}
    </div>
  );
};
