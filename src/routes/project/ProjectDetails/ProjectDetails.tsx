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
    <>
      <Link className="link" to={"/portfolio/projects"}>
        <button title="Voltar">
          <TbArrowBackUp />
        </button>
      </Link>
      <div className={css.containerProject}>
        <section className={css.ProjectDetails}>
          <Iframe
            url="https://atacadao-app.vercel.app/Login"
            width="750px"
            height="100%"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </section>
        <section className={css.information} style={{ width: "100%" }}>
          <h3 style={{ margin: "20px", textAlign: "center" }}>
            Exibindo informações do projeto: {`${name} id ${id}`}
            {project && <div>{project.full_name}</div>}
          </h3>
          <div style={{ margin: "20px", textAlign: "center" }}>
            <h3>Tecnologias</h3>
            <p style={{ color: "#fff", margin: "20px", textAlign: "justify" }}>
              O projeto utiliza React, React Router DOM, Swiper, Framer Motion,
              e EmailJS para criar uma interface dinâmica e interativa. Além
              disso, a API é desenvolvida com Node.js, Express, Mongoose e
              Bcrypt para garantir autenticação e segurança de dados, com
              TypeScript adicionando qualidade ao código
            </p>
            <h3>Compatibilidade:</h3>
            <p style={{ color: "#fff", margin: "20px", textAlign: "justify" }}>
              O Control Collectors &#40;AtacadãoApp&#41; não foi projetado para
              mobile, é destinado apenas para uso em desktops. Melhorias para
              torná-lo acessível em smartphones e tablets podem ser consideradas
              em futuras versões, visando aprimorar a experiência para um
              público mais amplo.
            </p>
            <h3>Propósito</h3>
            <p style={{ color: "#fff", margin: "20px", textAlign: "justify" }}>
              O sistema Control Collectors nasceu da necessidade de aprimorar o
              controle dos coletores usados pela empresa Atacadão, uma divisão
              do grupo Carrefour. Ele simplifica a gestão desses equipamentos,
              fornecendo informações sobre disponibilidade e responsabilidade.
              Isso é crucial devido ao grande número de dispositivos e
              colaboradores, bem como à alta rotatividade na utilização. O
              sistema assegura um controle eficaz, otimizando os processos
              operacionais da empresa e a alocação de recursos
            </p>
            <Link to="https://atacadao-app.vercel.app/Login" target="_blank">
              Link do projeto na Vercel
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
