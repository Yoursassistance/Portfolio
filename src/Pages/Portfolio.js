import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../Components/Footer";
import HeaderTwo from "../Components/HeaderTwo";
import data from "../Utilities/data";
import logoC from "../Assets/Svg/logoC.svg";
import carretLeft from "../Assets/Svg/carretLeft.svg";

const Portfolio = () => {
  const [selected, isSelected] = useState(false);

  const handleProject = () => {
    isSelected(true);
  };

  const handleBack = () => {
    isSelected(false);
  };
  return (
    <Box backgroundColor="#002D3A" color="white">
      <HeaderTwo />
      <Box>
        <Box>
          <Flex
            onClick={handleBack}
            display={selected ? "flex" : "none"}
            marginTop="2%"
            marginLeft="5%"
            alignItems="center"
            width="fit-content"
            cursor="pointer"
          >
            <Image src={carretLeft} />
            <Text fontWeight="600" marginLeft="10px">
              Back
            </Text>
          </Flex>
        </Box>
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
          {selected ? (
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                borderRadius="10px"
                backgroundColor="white"
                width="1568px"
                height="1180px"
              ></Box>
              <Box textAlign="center" marginY="3%">
                <Text fontSize="32px" fontWeight="600">
                  We believe in things well crafted and designed
                </Text>
                <Text fontSize="16px" fontWeight="400">
                  From our meticulous woodwork and custom furniture to carefully
                  selected plants and quality materials, we take pride in every
                  detail. Our dedication extends to sourcing plants from top
                  nurseries, using premium natural materials, and selecting
                  furnishings with a keen eye for craft and design.{" "}
                </Text>
              </Box>
              <Flex>
                <Box
                  borderRadius="10px"
                  backgroundColor="white"
                  width="774px"
                  height="582px"
                  marginX="1%"
                ></Box>
                <Box
                  borderRadius="10px"
                  backgroundColor="white"
                  width="774px"
                  height="582px"
                  marginX="1%"
                ></Box>
              </Flex>
              <Flex marginY="5%">
                <Box
                  borderRadius="10px"
                  backgroundColor="white"
                  width="505px"
                  height="391px"
                  marginX="1%"
                ></Box>
                <Box
                  borderRadius="10px"
                  backgroundColor="white"
                  width="505px"
                  height="391px"
                  marginX="1%"
                ></Box>
                <Box
                  borderRadius="10px"
                  backgroundColor="white"
                  width="505px"
                  height="391px"
                  marginX="1%"
                ></Box>
              </Flex>
            </Flex>
          ) : (
            <Flex justifyContent="center" flexWrap="wrap">
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
                  {/* <Image src={item.image} alt={item.title} /> */}
                  <Text>{item.title}</Text>
                  <Text>{item.description}</Text>
                </Box>
              ))}
            </Flex>
          )}
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

export default Portfolio;
