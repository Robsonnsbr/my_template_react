import { routesComponents } from "../../components/exportRoutesComponents";
import { Icon } from "@iconify/react";
const { Button } = routesComponents;

import css from "./About.module.css";
export const About = () => {
  return (
    <div className={css.about}>
      <section className={css.sectionDev}>
        <h1>Minha Jornada de Desenvolvimento e Conquistas</h1>
        <div className={css.content}>
          <p>
            Minha jornada na tecnologia começou em Curitiba, onde desde muito
            cedo, fui cativado pelo funcionamento das máquinas e pela
            renderização de jogos e cálculos complexos.
          </p>
          <p>
            Na JClan Desenvolvimento de Software, atuei como
            Estagiário/Desenvolvedor Full Stack Jr., adquirindo habilidades em
            HTML, CSS, JavaScript, TypeScript, Quasar, Vue.js e GraphQL.
            Desenvolvi aplicações front-end, integrei APIs RESTful e trabalhei
            com bancos de dados SQL.
          </p>
          <p>
            Minhas experiências como Consultor Comercial na Concessionária Ford
            Slaviero e na Berrytech me aprimoraram em comunicação, vendas e
            soluções.
          </p>
          <p>
            Durante o serviço militar no CINDACTA II (FAB), aprofundei meu
            conhecimento em suporte de sistemas, redes e na instalação e
            configuração de sistemas. Gerenciei protocolos e adquiri habilidades
            em Microsoft Office, Active Directory e servidores Windows
            Server/Linux, consolidando meu conhecimento em infraestrutura e
            suporte.
          </p>
          <p>
            Hoje, sou um Desenvolvedor Full Stack que combina habilidades
            técnicas com compreensão das necessidades de negócios e meu
            currículo reflete minha familiaridade com diversas tecnologias, e
            uma história marcada por paixão, dedicação e crescimento constante.
          </p>
        </div>
        <a
          href="https://drive.google.com/u/0/uc?id=1UDclT2rbClofsSs-4k0IZwpjkqtmSDLV&export=download"
          download="Curriculo_Robson.pdf"
        >
          <Button
            value={"DOWNLOAD CV"}
            onClick={() =>
              alert(
                "AVISO! currículo removido!\nEntre em contato via página de contato."
              )
            }
          />
        </a>
      </section>
      <section className={css.sectionCon}>
        <h2>Habilidades Técnicas:</h2>
        <ul>
          <ul className={css.inlineBk}>
            <li>
              Tecnologias:
              <ul className={css.columnBk}>
                <li>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                    alt="icon-linux"
                  />{" "}
                  Linux
                </li>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt="icon-js"
                  />{" "}
                  JavaScript
                </li>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
                    alt="icon-ts"
                  />{" "}
                  TypeScript
                </li>
                <li>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    alt="icon-reactjs"
                  />{" "}
                  ReactJS
                </li>
                <li>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    alt="icon-nextjs"
                  />{" "}
                  NextJS
                </li>
                <li>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="icon-nodejs"
                  />{" "}
                  NodeJS
                </li>
                <li>
                  <i
                    className="devicon-mysql-plain"
                    style={{ marginRight: "5px" }}
                  />
                  MySQL
                </li>
                <li>
                  <i
                    className="devicon-mongodb-plain"
                    style={{ marginRight: "5px" }}
                  />
                  MongoDB
                </li>
                <li>
                  <i className="devicon-git-plain colored" /> Git
                </li>
              </ul>
            </li>
            <li>
              Familiaridades:
              <ul className={css.columnBk}>
                <li>
                  <i className="devicon-angularjs-plain colored" /> Angular
                </li>
                <li>
                  <i className="devicon-vuejs-plain colored" /> VueJS
                </li>
                <li>
                  <Icon icon="devicon:quasar" /> Quasar
                </li>
                <li>
                  <i className="devicon-graphql-plain colored" /> GraphQL
                </li>
                <li>
                  <i className="devicon-java-plain colored" /> Java
                </li>
                <li>
                  <Icon icon="devicon:python" /> Python
                </li>
                <li>
                  <Icon icon="vscode-icons:file-type-dockertest2" /> Docker
                </li>
                <li>
                  <Icon icon="eos-icons:patterns-outlined" /> Design Patterns
                </li>
              </ul>
            </li>
            <li>
              <ul className={css.columnBk}>
                <li className={css.columnBkLi}>
                  <Icon icon="logos:adobe-photoshop" /> Photoshop
                </li>
                <li>
                  <Icon
                    icon="logos:microsoft-power-bi"
                    style={{ alignSelf: "right", marginRight: "12px" }}
                  />
                  Power BI
                </li>
                <li>
                  <Icon icon="twemoji:infinity" /> CI/CD
                </li>
                <li>
                  <Icon icon="logos:rabbitmq-icon" /> Mensageria
                </li>
                <li>
                  <Icon icon="tabler:cloud-computing" /> Cloud computing
                </li>
                <li>
                  <Icon icon="simple-icons:uml" /> Modelagem
                </li>
                <li>
                  <Icon icon="bi:kanban-fill" /> ITIL Scrum/Kanban
                </li>
                <li>
                  <Icon icon="devicon:figma" /> Figma
                </li>
              </ul>
            </li>
          </ul>
        </ul>
        <ul className={css.columnInfo}>
          <li style={{ fontWeight: 600 }}>Desenvolvedor Full Stack</li>
          <li>Experiência em DevOps</li>
          <li>Experiência Infraestrutura</li>
          <li>Experiência Suporte</li>
          <li>Arquitetura de computadores</li>
          <li>Arquitetura de software</li>
        </ul>
      </section>
    </div>
  );
};
