import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import HeaderTwo from "../Components/HeaderTwo";
import logoC from "../Assets/Svg/logoC.svg";
// import Responsive from "../Utilities/Carousel";

const Reviews = () => {
  return (
    <Box position="relative" backgroundColor="#002D3A" color="white">
      <HeaderTwo />
      {/* <Box>
        <Box marginY="5%" textAlign="center">
          <Text fontSize={{ md: "32px", base: "24px" }} fontWeight="600">
            Our Projects Portfolio
          </Text>
          <Text>
            Craft a vision for your outdoor sanctuary with our meticulous design
            process.
          </Text>
        </Box>

        <Box>
          <Responsive />
        </Box>
      </Box> */}

      <Box
        marginX={{ base: "5%", md: "15%" }}
        marginY="5%"
        color="#002D3A"
        borderRadius="20px"
        backgroundColor="white"
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          paddingY={{ base: "7%", md: "3%" }}
        >
          <Box textAlign={{ base: "center", md: "left" }} marginRight="4%">
            <Text fontSize={{ base: "22px", md: "48px" }} fontWeight="600">
              Have a project in mind?
            </Text>
            <Text fontSize={{ base: "16px", md: "24px" }} fontWeight="600">
              Schedule a consult.
            </Text>
            <Button
              backgroundColor="#09AD00"
              color="white"
              padding="7% 15%"
              marginTop="2%"
            >
              Contact Us
            </Button>
          </Box>
          <Flex
            justifyContent={{ base: "center", md: "flex-start" }}
            marginTop={{ base: "5%", md: "0" }}
          >
            <Image width={{ base: "30%", md: "70%" }} src={logoC} />
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Reviews;
