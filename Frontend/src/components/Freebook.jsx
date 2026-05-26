// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import list from "../data/list.json";
import Cards from "./Cards";
const Freebook = () => {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);

  return (
    <div className="container mx-auto md:px-20 px-4">
      <div className="mb-10">
        <h1 className="text-2xl font-bold pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, aperiam dolor id ducimus esse magni assumenda. Illum
          provident velit facere.
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {filterData.map((item) => (
            <SwiperSlide key={item.id}>
              <Cards item={item}></Cards>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Freebook;
