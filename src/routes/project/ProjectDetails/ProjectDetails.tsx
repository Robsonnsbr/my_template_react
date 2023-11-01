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
      <div className={css.information} style={{ width: "100%" }}>
        <h3 style={{ margin: "20px", textAlign: "center" }}>
          INFORMAÇÕES DO PROJETO:
        </h3>
        <div style={{ margin: "20px", textAlign: "center" }}>
          <h3>Compatibilidade:</h3>
          <p style={{ color: "#fff", margin: "20px", textAlign: "justify" }}>
            O projeto Collectors Control não possui uma boa compatibilidade e
            responsividade com dispositivos móveis, uma vez que não foi
            desenvolvido com essa finalidade em mente. A intenção do sistema é
            ser utilizado exclusivamente em dispositivos desktop, o que pode
            limitar sua acessibilidade e usabilidade em smartphones e tablets.
            Claro que tendo em vista tal necessidade, é possível melhorar a
            experiência dos usuários que desejam acessar o sistema em
            dispositivos móveis. Havendo essa possibilidade, podem ser feitas as
            devidas alterações em uma versão posterior para incluir essas
            plataformas na responsividade, ajudando ainda mais o projeto a se
            tornar mais versátil e acessível a um público mais amplo.
          </p>
          <h3>
            O Propósito e Benefícios do Sistema de Controle de Coletores no
            Atacadão
          </h3>
          <p style={{ color: "#fff", margin: "20px", textAlign: "justify" }}>
            Agora vamos explorar com mais detalhes a intenção por trás do
            projeto. O sistema nasceu da necessidade específica de aprimorar o
            controle dos equipamentos usados pela empresa Atacadão, uma divisão
            do grupo Carrefour. A base dessa necessidade é o controle de uma
            série de dispositivos conhecidos como coletores. A missão do sistema
            é simplificar a gestão desses equipamentos, fornecendo informações
            sobre sua disponibilidade para uso e identificando quem está
            responsável por cada dispositivo a qualquer momento. Isso se torna
            essencial devido ao grande número de equipamentos em circulação e
            colaboradores, bem como a alta rotatividade na utilização, que
            ocorre com diferentes períodos e dias de uso. O sistema foi
            concebido para proporcionar um controle mais eficaz e uma alocação
            mais eficiente dos coletores, assegurando que eles estejam sempre
            prontos para uso quando necessário. Além disso, atribui clareza às
            responsabilidades, otimizando os processos operacionais da empresa e
            garantindo uma alocação mais eficiente dos recursos disponíveis.
          </p>
          <Link to="https://atacadao-app.vercel.app/Login" target="_blank">
            Link do projeto na Vercel
          </Link>
        </div>
      </div>
    </div>
  );
};
