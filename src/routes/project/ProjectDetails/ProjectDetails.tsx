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
    <div className={css.ProjectDetails}>
      Exibindo informações do projeto: {`${name} id ${id}`}
      {project && <div>{project.full_name}</div>}
      <Link className="link" to={"/portfolio/projects"}>
        <button>
          <TbArrowBackUp />
        </button>
      </Link>
      <Iframe
        url="https://robsonnsbr.github.io/loginReact/"
        width="640px"
        height="100%"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </div>
  );
};
