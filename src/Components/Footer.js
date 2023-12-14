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
      <Flex paddingX="3%">
        <Box flex="1">
          <Text fontSize="48px" fontWeight="600">
            Sign up for our newsletter
          </Text>
          <Text width="80%" fontSize="20px">
            Stay up to date with what’s happening and see our recent works and
            projects
          </Text>
        </Box>

        <Box flex="1">
          <Input
            padding="4%"
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

      <Flex marginTop="3%" marginX="3%">
        <Box flex="1">
          <Image width="20%" src={logoC} />
          <Text fontSize="20px" fontWeight="600">
            PO Box 26, Strathpine Qld, 4500
          </Text>
          <Text fontSize="20px" fontWeight="600">
            (04)02840482
          </Text>
          <Text fontSize="20px" fontWeight="600">
            seedtime.landscape@gmail.com
          </Text>
          <Flex marginTop="2%">
            <Image marginRight="2%" src={facebook} />
            <Image marginRight="2%" src={instagram} />
            <Image marginRight="2%" src={youtube} />
            <Image marginRight="2%" src={tiktok} />
            <Image marginRight="2%" src={houxx} />
            <Image marginRight="2%" src={pinterest} />
          </Flex>
        </Box>

        <Flex flex="1">
          <Box flex="1">
            <Text fontSize="20px" fontWeight="600">
              Services
            </Text>
            <Text>Landscape and maintenance service</Text>
            <Text>Soft scalping and mulching</Text>
            <Text>Tree pruning</Text>
            <Text>Rubbish removal</Text>
            <Text>High pressure cleaning</Text>
            <Text>Fencing</Text>
            <Text>Concreting</Text>
            <Text>Paving</Text>
            <Text>Retaining wall</Text>
            <Text>Garden makeover and upgrade</Text>
          </Box>
          <Box flex="1">
            <Text fontSize="20px" fontWeight="600">
              Company
            </Text>
            <Text>About us</Text>
            <Text>Services</Text>
            <Text>Portfolio</Text>
            <Text>Reviews</Text>
            <Text>Contact</Text>
            <Text>Contact</Text>
          </Box>
        </Flex>
      </Flex>

      <Image width="100%" marginTop="3%" src={line} />

      <Box marginTop="2%">
        <Flex>
          <Image src={copyright} />
          <Text>
            2023 seedtime landscape | all right reserved | Privacy policy
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
