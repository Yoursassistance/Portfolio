// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Box, Flex, Image, useMediaQuery } from "@chakra-ui/react";
// import { Navigation, Pagination } from "swiper/modules";
// import left from "../Assets/Svg/carouselLeft.svg";
// import Right from "../Assets/Svg/carouselRight.svg";

// export default function Responsive() {
//   const [isMobile] = useMediaQuery("(max-width: 768px)");
//   const slidesPerView = isMobile ? 1 : 3;
//   return (
//     <Box zIndex="-1">
//       <Swiper
//         slidesPerView={slidesPerView}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         modules={[Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <Box
//             borderRadius="10px"
//             backgroundColor="white"
//             width={{ base: "350px", md: "605px" }}
//             height="359px"
//             marginX={{ base: "5%", md: "10%" }}
//           ></Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Box
//             borderRadius="10px"
//             backgroundColor="white"
//             width={{ base: "350px", md: "605px" }}
//             height="359px"
//             marginX={{ base: "5%", md: "10%" }}
//           ></Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Box
//             borderRadius="10px"
//             backgroundColor="white"
//             width={{ base: "350px", md: "605px" }}
//             height="359px"
//             marginX={{ base: "5%", md: "10%" }}
//           ></Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Box
//             borderRadius="10px"
//             backgroundColor="white"
//             width={{ base: "350px", md: "605px" }}
//             height="359px"
//             marginX={{ base: "5%", md: "10%" }}
//           ></Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Box
//             borderRadius="10px"
//             backgroundColor="white"
//             width={{ base: "350px", md: "605px" }}
//             height="359px"
//             marginX={{ base: "5%", md: "10%" }}
//           ></Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Box
//             borderRadius="10px"
//             backgroundColor="white"
//             width={{ base: "350px", md: "605px" }}
//             height="359px"
//             marginX={{ base: "5%", md: "10%" }}
//           ></Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Box
//             borderRadius="10px"
//             backgroundColor="white"
//             width={{ base: "350px", md: "605px" }}
//             height="359px"
//             marginX={{ base: "5%", md: "10%" }}
//           ></Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Box
//             borderRadius="10px"
//             backgroundColor="white"
//             width={{ base: "350px", md: "605px" }}
//             height="359px"
//             marginX={{ base: "5%", md: "10%" }}
//           ></Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Box
//             borderRadius="10px"
//             backgroundColor="white"
//             width={{ base: "350px", md: "605px" }}
//             height="359px"
//             marginX={{ base: "5%", md: "10%" }}
//           ></Box>
//         </SwiperSlide>
//       </Swiper>
//       <Box marginY="3%" marginX="5%">
//         <Flex justifyContent="flex-end">
//           <Image marginX="1%" src={left} />
//           <Image src={Right} />
//         </Flex>
//       </Box>
//     </Box>
//   );
// }
