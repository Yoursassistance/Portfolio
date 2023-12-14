import React from "react";
import { Box, Text, Image, Flex, Spacer } from "@chakra-ui/react";
import Header from "../Components/Header";
import intoImage from "../Assets/Svg/IntroBackground.svg";
import arrowDown from "../Assets/Svg/arrowDown.svg";
import designImage from "../Assets/Svg/designImage.svg";
import installation from "../Assets/Svg/InstallationImage.svg";
import care from "../Assets/Svg/careImage.svg";
import dot from "../Assets/Svg/dot.svg";
import SeedtimeLandscaping from "../Components/SeedtimeLandscaping";
import HomeServiceP from "../Components/HomeServiceP";
import Footer from "../Components/Footer";
const HomePage = () => {
  return (
    <Box backgroundColor="#002D3A" color="white">
      <Box
        paddingX="5%"
        paddingTop="2%"
        height="800px"
        backgroundImage={intoImage}
        color="white"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Header />
        <Flex flexDirection="column" paddingY="5%">
          <Text fontSize="64px" fontWeight="600" color="white" width="40%">
            Experience the{" "}
            <span
              style={{
                fontWeight: "400",
                color: "#FFB445",
                fontStyle: "italic",
              }}
            >
              artistry of nature
            </span>{" "}
            in your own backyard
          </Text>
          <Text width="45%" fontSize="20px" color="#E0E0E0" marginLeft="7%">
            "Transform your outdoor space into a haven of natural beauty, where
            every detail is a brushstroke of tranquility and every corner a
            masterpiece of serenity. Discover the harmony of landscaping that
            brings the artistry of nature to your doorstep."
          </Text>
        </Flex>
        <Box float="right">
          <Image width="80%" src={arrowDown} />
        </Box>
      </Box>

      <Flex paddingX="5%" paddingBottom="5%">
        <Box marginTop="-5%">
          <Image width="80%" src={designImage} />
          <Flex>
            <Image marginRight="5px" src={dot} />
            <Text fontSize="20px" fontWeight="600">
              Design
            </Text>
          </Flex>
          <Text fontWeight="400" fontSize="14px" marginLeft="5%" width="75%">
            Unlock the artistry of landscaping with Seedtime Design. From
            envisioning vibrant landscapes to crafting functional hardscapes,
            our team brings your outdoor vision to life, ensuring a blend of
            creativity and functionality in every detail.
          </Text>
        </Box>
        <Spacer />
        <Flex flexDirection="column" alignItems="center" marginTop="2%">
          <Flex justifyContent="flex-start" width="70%">
            <Image marginRight="5px" src={dot} />
            <Text textAlign="left" fontSize="20px" fontWeight="600">
              Installation
            </Text>
          </Flex>
          <Text fontWeight="400" fontSize="14px" marginLeft="15%" width="75%">
            "Experience seamless transformations with Seedtime Installation. Our
            skilled team brings your envisioned landscapes to life, ensuring
            precision and expertise in every installation. From lush greenery to
            sturdy structures, trust us to turn your outdoor dreams into
            reality.
          </Text>
          <Image marginTop="2%" width="70%" src={installation} />
        </Flex>
        <Spacer />
        <Flex flexDirection="column" alignItems="flex-end" marginTop="4%">
          <Image width="70%" src={care} />
          <Flex justifyContent="flex-start" width="70%">
            <Image marginRight="5px" src={dot} />
            <Text fontSize="20px" fontWeight="600">
              Care
            </Text>
          </Flex>
          <Text fontWeight="400" fontSize="14px" marginLeft="25%" width="65%">
            Nurture the beauty we've crafted with Seedtime Care. Our commitment
            extends beyond installation, providing dedicated care to ensure your
            landscape flourishes. From routine maintenance to specialized
            attention, we're here to keep your outdoor haven thriving.
          </Text>
        </Flex>
      </Flex>

      <SeedtimeLandscaping />
      <HomeServiceP />
      <Footer />
    </Box>
  );
};

export default HomePage;
