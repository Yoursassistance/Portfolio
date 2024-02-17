import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import React from "react";
import si6 from "../Assets/Svg/si6.svg";
import si7 from "../Assets/Svg/si7.svg";
import si8 from "../Assets/Svg/si8.svg";
import { NavLink } from "react-router-dom";
const ServicePartThree = () => {
  return (
    <Box>
      <Flex
        flexDirection={{ base: "column-reverse", md: "row" }}
        alignItems="center"
        paddingY="5%"
      >
        <Box flex="1">
          <Text marginY="2%" fontSize="20px" fontWeight="600">
            Fencing
          </Text>
          <Box>
            <Text margin="2% 0" fontWeight="600">
              Custom Design and Installation:
            </Text>
            <Text>
              Collaborate with our design team to create a fencing solution that
              perfectly complements your property's architecture and your unique
              style
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Security Fencing:
            </Text>
            <Text>
              Safeguard your property with our durable and secure fencing
              options, designed to provide both protection and peace of mind.
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Decorative Fencing:
            </Text>
            <Text>
              Enhance the visual appeal of your property with decorative fencing
              that adds character and charm to your outdoor spaces.
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Privacy Fencing:
            </Text>
            <Text>
              Create a secluded oasis with our privacy fencing solutions,
              offering an elegant barrier while maintaining a sense of serenity.
            </Text>
          </Box>
          <Box>
            <Text margin="2% 0" fontWeight="600">
              Wood, Metal, and Vinyl Fencing:
            </Text>
            <Text>
              Choose from a variety of materials, including classic wood,
              contemporary metal, or low-maintenance vinyl, to suit your
              preferences and budget.
            </Text>
          </Box>
          <Button
            margin="2% 0"
            backgroundColor="#017931"
            padding={{ md: "4% 6%", base: "7% 6%" }}
            fontWeight="400"
            color="white"
          >
            <NavLink to="/book-appointment">Book an appointment</NavLink>
          </Button>
        </Box>
        <Box marginLeft={{ base: "0", md: "3%" }} flex="1">
          <Image src={si6} />
        </Box>
      </Flex>

      <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
        <Box flex="1" marginRight={{ base: "0", md: "3%" }}>
          <Image src={si7} />
        </Box>
        <Box flex="1">
          <Text marginY="2%" fontSize="20px" fontWeight="600">
            Concreating
          </Text>
          <Box>
            <Text margin="2% 0" fontWeight="600">
              Decorative Concrete:
            </Text>
            <Text>
              Elevate your pathways, driveways, and outdoor living areas with
              decorative concrete finishes, including stamped patterns,
              textures, and coloring options.
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Patio and Deck Construction:
            </Text>
            <Text>
              Create a versatile and inviting outdoor space with our patio and
              deck construction services, using high-quality concrete for
              durability and longevity.
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Retaining Walls:
            </Text>
            <Text>
              Strengthen the structural integrity of your landscape while adding
              a touch of sophistication with our expertly designed and
              constructed concrete retaining walls.
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Driveways and Walkways:
            </Text>
            <Text>
              Ensure a grand entrance to your property with professionally
              crafted driveways and walkways that marry functionality with
              aesthetic appeal.
            </Text>
          </Box>
          <Button
            margin="2% 0"
            backgroundColor="#017931"
            padding={{ md: "4% 6%", base: "7% 6%" }}
            fontWeight="400"
            color="white"
          >
             <NavLink to="/book-appointment">Book an appointment</NavLink>
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
            Paving
          </Text>
          <Box>
            <Text margin="2% 0" fontWeight="600">
              Custom Paver Design:
            </Text>
            <Text>
              Collaborate with our design experts to create a unique and
              tailored paving layout that complements your property's
              architecture and your personal style
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Patios and Outdoor Entertainment Areas:
            </Text>
            <Text>
              Transform your outdoor space into a welcoming retreat with our
              expertly crafted patios and entertainment areas, using
              high-quality pavers for lasting beauty.
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Driveway Paving:
            </Text>
            <Text>
              Make a lasting first impression with an impeccably paved driveway,
              combining durability and elegance to enhance your property's curb
              appeal.
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Walkways and Path Paving:
            </Text>
            <Text>
              Ensure a seamless and visually appealing connection between
              different areas of your landscape with our skillfully designed
              walkways and paths.
            </Text>
          </Box>
          <Button
            margin="2% 0"
            backgroundColor="#017931"
            padding={{ md: "4% 6%", base: "7% 6%" }}
            fontWeight="400"
            color="white"
          >
             <NavLink to="/book-appointment">Book an appointment</NavLink>
          </Button>
        </Box>
        <Box marginLeft={{ base: "0", md: "3%" }} flex="1">
          <Image src={si8} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ServicePartThree;
