import React from "react";
import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import servicePageImg1 from "../Assets/Svg/servicePageImg1.svg";
import si9 from "../Assets/Svg/si9.svg";
import si10 from "../Assets/Svg/si10.svg";
// import ServicePartOne from "./ServicePartOne";
// import ServicePartTwo from "./ServicePartTwo";
// import ServicePartThree from "./ServicePartThree";

const ServiceSecOne = () => {
  console.log("Rendering ServiceSecOne component...");
  return (
    <Box
      marginTop={{ base: "10%", md: "0" }}
      paddingX="5%"
      paddingY="5%"
      backgroundColor="#F0FFD0"
    >
      <Box textAlign="center">
        <Text fontWeight="600" fontSize={{ base: "20px", md: "32px" }}>
          Seedtime landscaping
        </Text>
        <Text>
          Craft a vision for your outdoor sanctuary with our meticulous variety
          of services
        </Text>
      </Box>

      {/* <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        paddingY="5%"
      >
        <Box flex="1">
          <Image src={servicePageImg1} />
        </Box>
        <Box marginLeft={{ base: "0", md: "3%" }} flex="1">
          <Text
            margin="2% 0"
            width={{ base: "100%", md: "80%" }}
            fontSize={{ base: "26px", md: "40px" }}
            fontWeight="600"
            color="#017931"
            textAlign={{ base: "center", md: "left" }}
          >
            We believe in things well crafted and designed
          </Text>
          <Text
            textAlign={{ base: "center", md: "left" }}
            marginTop="2%"
            width={{ base: "100%", md: "80%" }}
          >
            From our meticulous woodwork and custom furniture to carefully
            selected plants and quality materials, we take pride in every
            detail. Our dedication extends to sourcing plants from top
            nurseries, using premium natural materials, and selecting
            furnishings with a keen eye for craft and design.{" "}
          </Text>
          <Flex
            width="100%"
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Button
              fontSize="16px"
              fontWeight="500"
              borderRadius="10px"
              backgroundColor="#017931"
              color="white"
              paddingX="5%"
              paddingY={{ base: "7%", md: "4%" }}
              marginTop="2%"
            >
              Book and Inspection
            </Button>
          </Flex>
        </Box>
      </Flex> */}

      <Box
        paddingX={{ base: "0", md: "5%" }}
        paddingY="5%"
        backgroundColor="#F0FFD0"
      >
        <Box textAlign="center" paddingY="5%">
          <Text fontSize={{ base: "24px", md: "32px" }} fontWeight="600">
            Our core services
          </Text>
          <Text>Explore our core landscaping services</Text>
        </Box>
        {/* <ServicePartOne />
        <ServicePartTwo />
        <ServicePartThree /> */}

        <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
          <Box flex="1">
            <Image src={si9} />
          </Box>
          <Box flex="1">
            <Text marginY="2%" fontSize="20px" fontWeight="600">
              Retaining Wall
            </Text>
            <Box>
              <Text margin="2% 0" fontWeight="600">
                Custom Design Solutions:
              </Text>
              <Text>
                Collaborate with our design experts to create a retaining wall
                that seamlessly integrates with the natural contours of your
                landscape while reflecting your unique style.
              </Text>
            </Box>

            <Box>
              <Text margin="2% 0" fontWeight="600">
                Structural Integrity:
              </Text>
              <Text>
                Ensure the longevity and stability of your landscape with our
                professionally engineered retaining walls, designed to withstand
                soil pressure and prevent erosion.
              </Text>
            </Box>

            <Box>
              <Text margin="2% 0" fontWeight="600">
                Versatile Material Options:
              </Text>
              <Text>
                Choose from a variety of materials such as natural stone,
                concrete blocks, or timber to achieve the desired look that
                complements your property's aesthetics.
              </Text>
            </Box>

            <Box>
              <Text margin="2% 0" fontWeight="600">
                Functional Terracing:
              </Text>
              <Text>
                Maximize usable space on sloped terrain by incorporating
                retaining walls for effective terracing, creating visually
                appealing and practical areas for planting or seating
              </Text>
            </Box>
            <Button
              margin="2% 0"
              backgroundColor="#017931"
              padding={{ md: "4% 6%", base: "7% 6%" }}
              fontWeight="400"
              color="white"
            >
              Book an inspection
            </Button>
          </Box>
        </Flex>

        <Flex
          flexDirection={{ base: "column-reverse", md: "row" }}
          alignItems="center"
          paddingY="5%"
        >
          <Box flex="1">
            <Text marginY="2%" fontSize="20px" fontWeight="600">
              Garden Makeover and Upgrades
            </Text>
            <Box>
              <Text margin="2% 0" fontWeight="600">
                Comprehensive Design Consultation:
              </Text>
              <Text>
                Collaborate with our design experts to conceptualize a garden
                makeover that aligns with your vision, preferences, and
                lifestyle.
              </Text>
            </Box>

            <Box>
              <Text margin="2% 0" fontWeight="600">
                Planting and Greenery Enhancements:
              </Text>
              <Text>
                Introduce a burst of color and texture with carefully selected
                plants, flowers, and trees that thrive in your specific
                environment.
              </Text>
            </Box>

            <Box>
              <Text margin="2% 0" fontWeight="600">
                Hardscape Renewal:
              </Text>
              <Text>
                Upgrade pathways, patios, and other hardscape elements to
                complement the overall design and functionality of your garden.
              </Text>
            </Box>

            <Box>
              <Text margin="2% 0" fontWeight="600">
                Water Features and Lighting:
              </Text>
              <Text>
                Enhance the ambiance with the addition of water features or
                strategic lighting, creating a magical atmosphere during day and
                night.
              </Text>
            </Box>
            <Button
              margin="2% 0"
              backgroundColor="#017931"
              padding={{ md: "4% 6%", base: "7% 6%" }}
              fontWeight="400"
              color="white"
            >
              Book an inspection
            </Button>
          </Box>
          <Box flex="1" marginLeft={{ base: "0", md: "3%" }}>
            <Image src={si10} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ServiceSecOne;
