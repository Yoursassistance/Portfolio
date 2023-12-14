import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/Svg/logoW.svg";
import line from "../Assets/Svg/Line.svg";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Flex alignItems="center">
      <Box flex="1">
        <Image src={logo} />
      </Box>
     
      <Flex flex="1.5" justifyContent="center">
        <Box marginX="5%">
          <Text color="#FFB445" fontSize="16px" fontWeight="600">
            <Link to="/">Home</Link>
          </Text>
          <Image src={line} />
        </Box>
        <Box marginX="5%">
          <Text fontSize="16px" fontWeight="600">
            <Link to="/services">Services</Link>
          </Text>
        </Box>
        <Box marginX="5%">
          <Text fontSize="16px" fontWeight="600">
            <Link to="/portfolio">Portfolio</Link>
          </Text>
        </Box>
        <Box marginX="5%">
          <Text fontSize="16px" fontWeight="600">
            <Link to="/reviews">Reviews</Link>
          </Text>
        </Box>{" "}
        <Box marginX="5%">
          <Text fontSize="16px" fontWeight="600">
            <Link to="/contact-us">Contact</Link>
          </Text>
        </Box>
       
      </Flex>
      
      <Box flex="1">
        <Button
          backgroundColor="#FFB445"
          color="white"
          borderRadius="10px"
          paddingY="5%"
          // paddingX="15%"
          width="227px"
          float="right"
        >
          Book an appointment
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
