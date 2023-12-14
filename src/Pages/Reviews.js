import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import HeaderTwo from "../Components/HeaderTwo";
import logoC from "../Assets/Svg/logoC.svg";
import Responsive from "../Utilities/Carousel";

const Reviews = () => {
  
  return (
    <Box backgroundColor="#002D3A" color="white">
      <HeaderTwo />
      <Box>
        <Box marginY="5%" textAlign="center">
          <Text fontSize="32px" fontWeight="600">
            Our Projects Portfolio
          </Text>
          <Text>
            Craft a vision for your outdoor sanctuary with our meticulous design
            process.
          </Text>
        </Box>

        <Box>

        <Responsive />
          {/* <Flex justifyContent="center">
            {data.map((item, index) => (
              <Box
                onClick={handleProject}
                marginY="2%"
                marginX="2%"
                key={index}
              >
                <Box
                  borderRadius="10px"
                  backgroundColor="white"
                  width="505px"
                  height="309px"
                ></Box>

                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
              </Box>
            ))}
          </Flex> */}
        </Box>
      </Box>

      <Box
        marginX="15%"
        marginY="5%"
        color="#002D3A"
        borderRadius="20px"
        backgroundColor="white"
      >
        <Flex alignItems="center" justifyContent="center" paddingY="3%">
          <Box marginRight="4%">
            <Text fontSize="48px" fontWeight="600">
              Have a project in mind?
            </Text>
            <Text fontSize="24px" fontWeight="600">
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
          <Box>
            <Image src={logoC} />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Reviews;
