import { Link, useParams } from "react-router-dom";
import Iframe from "react-iframe";
import css from "./ProjectDetails.module.css";
import { useEffect, useState } from "react";
import { getProject } from "../../../services/getProjects";
import { TbArrowBackUp } from "react-icons/tb";

interface ProjectProps {
  id?: number;
  name?: string;
  full_name?: string;
  stringify?: string;
}

export const ProjectDetails = () => {
  const { id, name } = useParams();
  const [project, setProject] = useState<ProjectProps | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getProject(name);
        const data: ProjectProps | unknown = response.data;

        if (data) {
          setProject(data);
          // console.log(data);
        } else {
          console.error("Erro: os dados obtidos não são do tipo ProjectProps");
        }
      } catch (error) {
        console.error("Erro ao obter os projetos:", error);
      }
    })();
  }, []);

  // const location = useLocation();
  // const projectName = location.state.projectName;
  // console.log(projectName);
  return (
    <div className={css.containerProject}>
      <div className={css.ProjectDetails}>
        Exibindo informações do projeto: {`${name} id ${id}`}
        {project && <div>{project.full_name}</div>}
        <Link className="link" to={"/portfolio/projects"}>
          <button>
            <TbArrowBackUp />
          </button>
        </Link>
        <Iframe
          url="https://atacadao-app.vercel.app/Login"
          width="750px"
          height="100%"
          id=""
          className=""
          display="block"
          position="relative"
        />
      </div>
      <div style={{ width: "100%" }}>
        <h3 style={{ margin: "20px", textAlign: "center" }}>
          INFORMAÇÕES DO PROJETO:
        </h3>
        <div style={{ margin: "20px", textAlign: "center" }}>
          <Link to="https://atacadao-app.vercel.app/Login" target="_blank">
            Link do projeto na Vercel
          </Link>
          <p style={{ color: "#fff", margin: "20px", textAlign: "justify" }}>
            Este projeto não é compatível com dispositivos móveis e não foi
            desenvolvido com essa finalidade. A intenção do sistema é ser
            utilizado exclusivamente em dispositivos desktop, sendo
            contraditório seu uso em dispositivos móveis
          </p>
        </div>
      </div>
    </div>
  );
};
