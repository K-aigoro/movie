import React, { useState, useEffect } from "react";
import "./trend.css";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from "swiper/modules";
import TreadCard from "../component/TrendCard";

function Trend() {
  const [slides, setSlides] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:3000/data/movieData.json")
      .then((res) => res.json())
      .then((data) => {
        setSlides(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="trend" className="trend">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Coming Soon</h4>
        </div>
        <div className="row">
          <Swiper
            breakpoints={{
              320: {
                slidesPerview: 1,
                spaceBetween: 20,
              },
              400: {
                slidesPerview: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerview: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerview: 6,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="trendSwiper"
          >
            {slides &&
              slides.length > 0 &&
              slides.map(slide => (
                <SwiperSlide key={slide._id} >
                  <TreadCard slide={slide} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Trend;
