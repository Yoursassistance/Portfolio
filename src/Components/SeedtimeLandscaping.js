import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import React from "react";
import landscapeImg1 from "../Assets/Svg/landscapeImg1.svg";
import landscapeImg2 from "../Assets/Svg/landscapeImg2.svg";
import landscapeImg3 from "../Assets/Svg/landscapeImg3.svg";
import dot from "../Assets/Svg/dot.svg";

const SeedtimeLandscaping = () => {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      paddingY="4%"
      paddingX="5%"
      backgroundColor="#F0FFD0"
      color="#002D3A"
    >
      <Box textAlign="center">
        <Text fontWeight="600" fontSize="32px">
          Seedtime landscaping
        </Text>
        <Text>
          Crafting outdoor spaces that blend beauty, functionality, and
          sustainability.
        </Text>
      </Box>

      <Flex marginTop="5%" alignItems="center">
        <Box margin="0" flex="1.5">
          <Image src={landscapeImg1} />
        </Box>
        <Box marginLeft="10px" flex="1">
          <Text color="#017931" fontSize="40px" fontWeight="600">
            We believe in things well crafted and designed
          </Text>
          <Text marginTop="2%" width="80%">
            From our meticulous woodwork and custom furniture to carefully
            selected plants and quality materials, we take pride in every
            detail. Our dedication extends to sourcing plants from top
            nurseries, using premium natural materials, and selecting
            furnishings with a keen eye for craft and design.{" "}
          </Text>
          <Button
            fontSize="16px"
            fontWeight="500"
            borderRadius="10px"
            backgroundColor="#017931"
            color="white"
            paddingX="5%"
            paddingY="4%"
            marginTop="2%"
          >
            Book and Inspection
          </Button>
        </Box>
      </Flex>

      <Flex marginTop="5%" alignItems="center">
        <Box marginRight="20px" flex="1">
          <Text color="#017931" fontSize="40px" fontWeight="600">
            You need an awesome backyard
          </Text>
          <Text marginTop="2%" width="80%">
            At seedtime we know you want an awesome background right? your
            problems are:
          </Text>
          <Flex>
            <Image marginRight="5px" src={dot} />
            <Text>It’s hard to picture what it looks like.</Text>
          </Flex>
          <Flex>
            <Image marginRight="5px" src={dot} />
            <Text>You don’t know what this space could cost.</Text>
          </Flex>
          <Flex>
            <Image marginRight="5px" src={dot} />
            <Text>
              You don’t want to live with the regret of doing nothing at all or
              making wrong decisions.
            </Text>
          </Flex>
          <Text>
            We believe you deserve to be proud of your property and we are here
            to help with that process.
          </Text>
          <Button
            fontSize="16px"
            fontWeight="500"
            borderRadius="10px"
            backgroundColor="#017931"
            color="white"
            paddingX="5%"
            paddingY="4%"
            marginTop="2%"
          >
            Book and Inspection
          </Button>
        </Box>
        <Box margin="0" flex="1.5">
          <Image src={landscapeImg2} />
        </Box>
      </Flex>

      <Flex justifyContent="center" width="100%" alignItems="center" marginTop="5%">
        <Box
          height="960px"
          color="white"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundImage={landscapeImg3}
          width="1400px"
        >
          <Text
            marginTop="42%"
            marginLeft="5%"
            fontSize="32px"
            fontWeight="600"
            width="40%"
          >
            Maximize the value of your home with seedtime landscaping
          </Text>
          <Text marginLeft="5%" width="40%">
            From our meticulous woodwork and custom furniture to carefully
            selected plants and quality materials, we take pride in every
            detail. Our dedication extends to sourcing plants from top
            nurseries, using premium natural materials, and selecting
            furnishings with a keen eye for craft and design.{" "}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SeedtimeLandscaping;
