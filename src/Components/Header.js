import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Spacer,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/Svg/logoW.svg";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import menu from "../Assets/Svg/Menu.svg";
import HomeIconA from "../Assets/Svg/Home.svg";
import HomeIconNA from "../Assets/Svg/HomeNA.svg";
import ServiceA from "../Assets/Svg/Service.svg";
import ServiceNA from "../Assets/Svg/ServiceNA.svg";
import ReviewsA from "../Assets/Svg/Reviews.svg";
import ReviewsNA from "../Assets/Svg/ReviewsNA.svg";
import PortfolioA from "../Assets/Svg/Portfolio.svg";
import PortfolioNA from "../Assets/Svg/PortfolioNA.svg";
import ContactA from "../Assets/Svg/Contact.svg";
import ContactNA from "../Assets/Svg/ContactNA.svg";

const NavLinkWithLine = ({ to, children }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box marginX="5%" position="relative">
      <Text fontSize="16px" fontWeight="600">
        {isMobile ? (
          <NavLink
            to={to}
            style={({ isActive }) => {
              return {
                color: isActive ? "#017931" : "#002D3A",
                fontWeight: isActive ? "600" : "500",
              };
            }}
          >
            {children}
          </NavLink>
        ) : (
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
        )}
      </Text>
    </Box>
  );
};

const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      {isMobile ? (
        <Flex padding="3%">
          <Image width="20%" src={logo} />
          <Spacer />

          <Menu>
            <MenuButton backgroundColor="#002D3A" marginRight="-5%" as={Button}>
              <Image src={menu} />
            </MenuButton>
            <MenuList height="fit-content" paddingY="5%" color="#002D3A">
              <MenuItem width="100%">
                <Image src={HomeIconA} />
                <NavLinkWithLine to="/">Home</NavLinkWithLine>
              </MenuItem>
              <MenuItem width="100%">
                <Image src={ServiceNA} />
                <NavLinkWithLine to="/services">Services</NavLinkWithLine>
              </MenuItem>
              <MenuItem>
                <Image src={PortfolioNA} />
                <NavLinkWithLine to="/portfolio">Portfolio</NavLinkWithLine>
              </MenuItem>
              <MenuItem>
                <Image src={ReviewsNA} />
                <NavLinkWithLine to="/reviews">Reviews</NavLinkWithLine>
              </MenuItem>
              <MenuItem>
                <Image src={ContactNA} />
                <NavLinkWithLine to="/contact-us">Contact</NavLinkWithLine>
              </MenuItem>
              <Box textAlign="center">
                <Button
                  backgroundColor="#FFB445"
                  color="white"
                  borderRadius="5px"
                  paddingY="5%"
                  paddingX="6%"
                  fontSize="14px"
                >
                  Book an appointment
                </Button>
              </Box>
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
