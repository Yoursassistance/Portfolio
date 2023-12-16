import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import line from "../Assets/Svg/lineLong.svg";
import logoC from "../Assets/Svg/logoC.svg";
import facebook from "../Assets/Svg/facebook.svg";
import instagram from "../Assets/Svg/instagram.svg";
import youtube from "../Assets/Svg/youtube.svg";
import pinterest from "../Assets/Svg/pinterest.svg";
import houxx from "../Assets/Svg/houxx.svg";
import tiktok from "../Assets/Svg/tiktok.svg";
import copyright from "../Assets/Svg/copyright.svg";

const Footer = () => {
  return (
    <Box
      backgroundColor="#F0FFD0"
      color="#002D3A"
      paddingX="5%"
      paddingTop="5%"
      paddingBottom="2%"
    >
      <Flex flexDirection={{ base: "column", md: "row" }} paddingX="3%">
        <Box flex="1">
          <Text fontSize={{ base: "22px", md: "48px" }} fontWeight="600">
            Sign up for our newsletter
          </Text>
          <Text
            width={{ base: "100%", md: "80%" }}
            fontSize={{ base: "16px", md: "20px" }}
          >
            Stay up to date with what’s happening and see our recent works and
            projects
          </Text>
        </Box>

        <Box marginTop={{ base: "5%", md: "0" }} flex="1">
          <Input
            padding={{ base: "7% 4%", md: "4%" }}
            borderRadius="10px"
            border="1px solid #017931"
            placeholder="Email address"
          />
          <Button
            backgroundColor="#017931"
            marginTop="2%"
            padding="5% 10%"
            borderRadius="10px"
            color="white"
          >
            Subscribe
          </Button>
        </Box>
      </Flex>

      <Image width="100%" marginTop="3%" src={line} />

      <Flex
        flexDirection={{ base: "column", md: "row" }}
        marginTop="3%"
        marginX="3%"
      >
        <Box flex="1">
          <Image marginBottom="5%" width="20%" src={logoC} />
          <Text fontSize={{ base: "16px", md: "20px" }} fontWeight="600">
            PO Box 26, Strathpine Qld, 4500
          </Text>
          <Text fontSize={{ base: "16px", md: "20px" }} fontWeight="600">
            (04)02840482
          </Text>
          <Text fontSize={{ base: "16px", md: "20px" }} fontWeight="600">
            seedtime.landscape@gmail.com
          </Text>
          <Flex marginTop={{ base: "5%", md: "2%" }}>
            <Image marginRight="2%" src={facebook} />
            <Image marginRight="2%" src={instagram} />
            <Image marginRight="2%" src={youtube} />
            <Image marginRight="2%" src={tiktok} />
            <Image marginRight="2%" src={houxx} />
            <Image marginRight="2%" src={pinterest} />
          </Flex>
        </Box>

        <Flex
          marginTop={{ base: "5%", md: "0" }}
          flexDirection={{ base: "column", md: "row" }}
          flex="1"
        >
          <Box flex="1">
            <Text fontSize="20px" fontWeight="600">
              Services
            </Text>
            <Text fontSize="14px">Landscape and maintenance service</Text>
            <Text fontSize="14px">Soft scalping and mulching</Text>
            <Text fontSize="14px">Tree pruning</Text>
            <Text fontSize="14px">Rubbish removal</Text>
            <Text fontSize="14px">High pressure cleaning</Text>
            <Text fontSize="14px">Fencing</Text>
            <Text fontSize="14px">Concreting</Text>
            <Text fontSize="14px">Paving</Text>
            <Text fontSize="14px">Retaining wall</Text>
            <Text fontSize="14px">Garden makeover and upgrade</Text>
          </Box>
          <Box flex="1">
            <Text fontSize="20px" fontWeight="600">
              Company
            </Text>
            <Text fontSize="14px">About us</Text>
            <Text fontSize="14px">Services</Text>
            <Text fontSize="14px">Portfolio</Text>
            <Text fontSize="14px">Reviews</Text>
            <Text fontSize="14px">Contact</Text>
            <Text fontSize="14px">Contact</Text>
          </Box>
        </Flex>
      </Flex>

      <Image width="100%" marginTop="3%" src={line} />

      <Box marginTop="2%">
        <Flex
          alignItems={{ base: "center", md: "flex-start" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          width={{ base: "100%", md: "100%" }}
        >
          <Image src={copyright} />
          <Text fontSize={{ base: "12px", md: "14px" }} textAlign="center">
            2023 seedtime landscape | all right reserved | Privacy policy
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
