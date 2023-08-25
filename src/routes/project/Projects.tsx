import { Link } from "react-router-dom";
import { SwiperProps, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import css from "./Projects.module.css";

import { routesComponents } from "../../components/exportRoutesComponents";
import { useState } from "react";
const { Slider } = routesComponents;

export const Projects = () => {
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

  interface ProjectProps {
    id: string;
    title: string;
  }

  const arrayProjects: ProjectProps[] = [
    { id: uuidv4(), title: "Projeto teste" },
    { id: uuidv4(), title: "Projeto teste" },
    { id: uuidv4(), title: "Projeto teste" },
    { id: uuidv4(), title: "Projeto teste" },
  ];

  //TODO: não estou usando o setProjects aqui, mas vou usar..eu acho..
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [projects, _] = useState<ProjectProps[]>(arrayProjects);

  return (
    <div className={css.project}>
      <h1>Page Projects</h1>
      <Slider settings={settings}>
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <p>
              <Link to={`../Project/${project.id}`}>{project.title}</Link>
            </p>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};
