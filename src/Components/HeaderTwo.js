import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/Svg/logoC.svg";
import { NavLink } from "react-router-dom";
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
import menu from "../Assets/Svg/MenuG.svg";
import { useState } from "react";

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

const HeaderTwo = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handleLinkClick = (icon) => {
    setActiveLink(icon);
  };

  const renderIcon = (normalIcon, activeIcon) => {
    return activeLink === normalIcon ? activeIcon : normalIcon;
  };
  return (
    <Box>
      {isMobile ? (
        <Flex alignItems="center" backgroundColor="#F0FFD0" padding="3%">
          <Image width="20%" src={logo} />
          <Spacer />

          <Menu>
            <MenuButton
              backgroundColor="#F0FFD0"
              marginRight={{ base: "0", md: "-5%" }}
              as={Button}
            >
              <Image src={menu} />
            </MenuButton>
            <MenuList
              zIndex="2"
              height="fit-content"
              paddingY="5%"
              color="#002D3A"
            >
              <MenuItem width="100%">
                <Image src={renderIcon(HomeIconNA, HomeIconA)} />
                <NavLinkWithLine
                  to="/"
                  onClick={() => handleLinkClick(HomeIconA)}
                >
                  Home
                </NavLinkWithLine>
              </MenuItem>
              <MenuItem width="100%">
                <Image src={renderIcon(ServiceNA, ServiceA)} />
                <NavLinkWithLine
                  to="/services"
                  onClick={() => handleLinkClick(HomeIconNA)}
                >
                  Services
                </NavLinkWithLine>
              </MenuItem>
              <MenuItem>
                <Image src={renderIcon(PortfolioNA, PortfolioA)} />
                <NavLinkWithLine
                  to="/portfolio"
                  onClick={() => handleLinkClick(HomeIconNA)}
                >
                  Portfolio
                </NavLinkWithLine>
              </MenuItem>
              <MenuItem>
                <Image src={renderIcon(ReviewsNA, ReviewsA)} />
                <NavLinkWithLine
                  to="/reviews"
                  onClick={() => handleLinkClick(HomeIconNA)}
                >
                  Reviews
                </NavLinkWithLine>
              </MenuItem>
              <MenuItem>
                <Image src={renderIcon(ContactNA, ContactA)} />
                <NavLinkWithLine
                  to="/contact-us"
                  onClick={() => handleLinkClick(HomeIconNA)}
                >
                  Contact
                </NavLinkWithLine>
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
      )}
    </Box>
  );
};

export default HeaderTwo;
