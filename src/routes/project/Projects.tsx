import { Link } from "react-router-dom";
import css from "./Projects.module.css";
import { Slider } from "../../components/commons/Slider/Slider";
import { SwiperProps, SwiperSlide } from "swiper/react";

export const Projects = () => {
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 3, // Corrected typo in property name
    navigation: true,
    pagination: {
      clickable: true,
    },
  };
  const arrayProject = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={css.Project}>
      <h1>Page Projects</h1>

      <Slider settings={settings}>
        {arrayProject.map((id) => (
          <SwiperSlide key={id}>
            {""}
            {/* Add key here */}
            <p>
              <Link to={`/my_template_react/Project/${id}`}>Project: {id}</Link>
            </p>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};
