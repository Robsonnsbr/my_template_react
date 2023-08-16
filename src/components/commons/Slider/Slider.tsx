import { ReactNode } from "react";
import css from "./Slider.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export const Slider = ({ settings, children }: SliderProps) => {
  return (
    <Swiper
      className={css.slider}
      modules={[Navigation, Pagination, A11y]}
      {...settings}
    >
      {children}
    </Swiper>
  );
};
