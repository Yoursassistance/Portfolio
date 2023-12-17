import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useMediaQuery,
  Spacer,
} from "@chakra-ui/react";
import serviceback from "../Assets/Png/ServiceBackground.png";
import Header from "../Components/Header";
import arrowDown from "../Assets/Svg/arrowDown.svg";
import Footer from "../Components/Footer";
import logoC from "../Assets/Svg/logoC.svg";
import mobileImg from "../Assets/Svg/serviceMobile.svg";
// import ServiceSecOne from "../Components/ServiceSecOne";

const Service = () => {
  console.log('Rendering service component...');
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box backgroundColor="#002D3A">
      {isMobile ? (
        <Box paddingX="3%" paddingTop="2%" color="white">
          <Header />

          <Flex alignItems="center">
            <Image width="100%" src={mobileImg} />
          </Flex>
          <Flex flexDirection="column" paddingY="5%">
            {/* <Text fontSize="28px" fontWeight="600" color="white" width="100%">
              “Nurturing Nature, Crafting Beauty:
              <span
                style={{
                  fontWeight: "400",
                  color: "#FFB445",
                  fontStyle: "italic",
                }}
              >
                Your Landscape, Our Expertise.
              </span>{" "}
              ”
            </Text> */}
            <Text width="90%" fontSize="14px" color="#E0E0E0" marginLeft="7%">
              “Explore our comprehensive landscaping services designed to
              transform your outdoor space into a harmonious masterpiece. From
              meticulous design to expert installation and dedicated care, we
              bring your vision to life, creating a lush and inviting
              environment tailored just for you.”
            </Text>
          </Flex>
          <Flex>
            <Button
              backgroundColor="#FFB445"
              color="white"
              borderRadius="10px"
              paddingY="8%"
              width="227px"
              float="right"
            >
              Book an appointment
            </Button>
            <Spacer />
            <Box float="right">
              <Image width="60%" src={arrowDown} />
            </Box>
          </Flex>
        </Box>
      ) : (
        <Box
          paddingX="5%"
          paddingTop="2%"
          height="800px"
          backgroundImage={serviceback}
          color="white"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Header />
          <Flex flexDirection="column" paddingY="5%">
            {/* <Text fontSize="64px" fontWeight="600" color="white" width="60%">
              “Nurturing Nature, Crafting Beauty:
              <span
                style={{
                  fontWeight: "400",
                  color: "#FFB445",
                  fontStyle: "italic",
                }}
              >
                Your Landscape, Our Expertise.
              </span>{" "}
              ”
            </Text> */}
            <Text width="45%" fontSize="20px" color="#E0E0E0" marginLeft="7%">
              “Explore our comprehensive landscaping services designed to
              transform your outdoor space into a harmonious masterpiece. From
              meticulous design to expert installation and dedicated care, we
              bring your vision to life, creating a lush and inviting
              environment tailored just for you.”
            </Text>
          </Flex>
          <Box float="right">
            <Image width="80%" src={arrowDown} />
          </Box>
        </Box>
      )}

      {/* <ServiceSecOne /> */}

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

export default Service;
