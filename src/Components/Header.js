import { Box, Button, Flex, Image, Text, Spacer, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/Svg/logoW.svg";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import menu from "../Assets/Svg/Menu.svg"

const NavLinkWithLine = ({ to, children }) => {
  return (
    <Box marginX="5%" position="relative">
      <Text fontSize="16px" fontWeight="600">
        <NavLink
          to={to}
          style={({ isActive }) => {
            return {
              color: isActive ? "#FFB445" : "white",
              borderBottom: isActive ? "2px solid #FFB445" : "none",
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

const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      {isMobile ? (
        <Flex padding="1.5% 5%">
          <Image width={{ base: "100px", md: "150px" }} src={logo} />
          <Spacer />

          <Menu>
            <MenuButton marginRight="-5%" backgroundColor="white" as={Button}>
              <Image src={menu} />
            </MenuButton>
            <MenuList>
              <MenuItem width="100%">
                <NavLink to="/">Home</NavLink>
              </MenuItem>
              <MenuItem width="100%">
                <NavLink to="pricing">Pricing</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/login">Login</NavLink>
              </MenuItem>
              <MenuItem>
                {" "}
                <NavLink to="/getstarted">Get Started</NavLink>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <Flex alignItems="center">
          <Box flex="1">
            <Image src={logo} />
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
              width="227px"
              float="right"
            >
              Book an appointment
            </Button>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Header;
