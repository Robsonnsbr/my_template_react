import { routesComponents } from "../../components/exportRoutesComponents";
const { Button } = routesComponents;

import css from "./About.module.css";
export const About = () => {
  return (
    <div className={css.about}>
      <div className={css.content}>
        <h1>Minha Jornada de Desenvolvimento e Conquistas:</h1>
        <p>
          Desde os primeiros passos em Curitiba até as atuais realizações, minha
          trajetória na tecnologia é empolgante. Comecei a me interessar pela
          tecnologia aos 15 anos, quando fiquei curioso sobre o funcionamento
          das máquinas e como elas renderizam jogos e realizam cálculos
          complexos.
        </p>
        <p>
          Na JClan Desenvolvimento de Software, fui Estagiário/Desenvolvedor
          Full Stack Jr. entre 2021 e 2022. Dominei HTML, CSS, JavaScript,
          TypeScript, Quasar, Vue.js, GraphQL, construindo aplicações front-end
          e integrando com APIs RESTful e bancos de dados SQL.
        </p>
        <p>
          Além do desenvolvimento, experiências como Consultor Comercial na
          Concessionária Ford Slaviero (2019-2020) e na Berrytech (2018-2019)
          aprimoraram habilidades em comunicação, vendas e soluções.
        </p>
        <p>
          No serviço militar no CINDACTA II (FAB) de 2012 a 2017, aprofundei-me
          em suporte de sistemas, redes, instalação e configuração de sistemas,
          além de gerenciamento de protocolos.
        </p>
        <p>
          Habilidades em Microsoft Office, Active Directory e servidores Windows
          Server/Linux solidificaram meu conhecimento em infraestrutura e
          suporte. Hoje, sou um Desenvolvedor Full Stack Jr., combinando
          habilidades técnicas com compreensão das necessidades dos negócios.
        </p>
        <p>
          Meu currículo reflete familiaridade com diversas tecnologias, mas
          minha história é de paixão, dedicação e crescimento constante.
        </p>
      </div>
      <a
        href="../../../public/assets/Curriculo_Robson_Monteiro_2023.pdf"
        download="Curriculo_Robson.pdf"
        type="application/pdf"
      >
        <Button value={"DOWNLOAD CV"} />
      </a>
    </div>
  );
};
