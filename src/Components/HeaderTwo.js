import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/Svg/logoC.svg";
import { NavLink } from "react-router-dom";

const NavLinkWithLine = ({ to, children }) => {
  return (
    <Box marginX="5%" position="relative">
      <Text fontSize="16px" fontWeight="600">
        <NavLink
          to={to}
          style={({ isActive }) => {
            return {
              color: isActive ? "#017931" : "#002D3A",
              borderBottom: isActive ? "2px solid #017931" : "none",
              fontWeight: isActive ? "600" : "500",
            };
          }}
        >
          {children}
        </NavLink>
      </Text>
    </Box>
  );
};

const HeaderTwo = () => {
  return (
    <Flex
      paddingX="5%"
      paddingTop="2%"
      backgroundColor="#F0FFD0"
      color="#002D3A"
      alignItems="center"
      paddingBottom="2%"
    >
      <Box flex="1">
        <Image width="20%" src={logo} />
      </Box>

      <Flex flex="1.5" justifyContent="center">
        <NavLinkWithLine to="/">Home</NavLinkWithLine>
        <NavLinkWithLine to="/services">Services</NavLinkWithLine>
        <NavLinkWithLine to="/portfolio">Portfolio</NavLinkWithLine>
        <NavLinkWithLine to="/reviews">Reviews</NavLinkWithLine>
        <NavLinkWithLine to="/contact-us">Contact</NavLinkWithLine>
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

export default HeaderTwo;
