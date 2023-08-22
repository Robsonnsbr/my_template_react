import { SliderProps } from "../../../../@types/Slider";

import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css"; //Não usar css.module e deixar a chamada após os styles do swiper

export const Slider = ({ settings, children }: SliderProps) => {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
};
