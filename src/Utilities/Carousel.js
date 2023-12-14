import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper/modules";
import left from "../Assets/Svg/carouselLeft.svg"
import Right from "../Assets/Svg/carouselRight.svg"

export default function Responsive() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            borderRadius="10px"
            backgroundColor="white"
            width="505px"
            height="309px"
            marginX="10%"
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            borderRadius="10px"
            backgroundColor="white"
            width="505px"
            height="309px"
            marginX="10%"
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            borderRadius="10px"
            backgroundColor="white"
            width="505px"
            height="309px"
            marginX="10%"
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            borderRadius="10px"
            backgroundColor="white"
            width="505px"
            height="309px"
            marginX="10%"
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            borderRadius="10px"
            backgroundColor="white"
            width="505px"
            height="309px"
            marginX="10%"
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            borderRadius="10px"
            backgroundColor="white"
            width="505px"
            height="309px"
            marginX="10%"
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            borderRadius="10px"
            backgroundColor="white"
            width="505px"
            height="309px"
            marginX="10%"
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            borderRadius="10px"
            backgroundColor="white"
            width="505px"
            height="309px"
            marginX="10%"
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            borderRadius="10px"
            backgroundColor="white"
            width="505px"
            height="309px"
            marginX="10%"
          ></Box>
        </SwiperSlide>
      </Swiper>
      <Box marginY="3%" marginX="5%">
        <Flex justifyContent="flex-end">
            <Image marginX="1%" src={left} />
            <Image src={Right} />
        </Flex>
      </Box>
    </>
  );
}
