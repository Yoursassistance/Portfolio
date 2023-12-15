import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import HeaderTwo from "../Components/HeaderTwo";
import logoC from "../Assets/Svg/logoC.svg";
import Responsive from "../Utilities/Carousel";
import contactImg1 from "../Assets/Svg/contactImg1.svg";
import contactImg2 from "../Assets/Svg/contactImg2.svg";

const ContactUs = () => {
  return (
    <Box backgroundColor="#F0FFD0" color="#002D3A">
      <HeaderTwo />
      <Box marginX="5%" marginY="3%">
        <Flex>
          <Box flex="1">
            <Text fontWeight="600" fontSize="20px">
              Contact us
            </Text>
            <Text width="60%" fontSize="14px">
              Here is what our clients are saying about seedtime landscaping
              service
            </Text>
            <Box padding="3% 0">
              <Text width="70%" fontWeight="500" fontSize="32px">
                Connecting Dreams to Landscapes: Reach Out to Seedtime
                Landscaping for Your Vision to Blossom
              </Text>
              <Text width="70%">
                We are eager to hear from you and find out how to make your
                outdoor space glow.
              </Text>
            </Box>
            <Box borderRadius="10px" padding="5%" backgroundColor="white">
              <Text fontSize="28px" padding="3% 0">
                General Enquiries
              </Text>
              <Input
                marginY="2%"
                padding="5% 2%"
                placeholder="Name"
                type="text"
              />
              <Input
                marginY="2%"
                padding="5% 2%"
                placeholder="Phone Number"
                type="phone"
              />
              <Input
                marginY="2%"
                padding="5% 2%"
                placeholder="Email address"
                type="email"
              />
              <Input
                marginY="2%"
                padding="5% 2%"
                placeholder="Select Service"
              />
              <Textarea
                marginY="2%"
                height="140px"
                placeholder="Message - Tell us about your project"
              />
              <Input
                marginY="2%"
                padding="5% 2%"
                placeholder="How did you hear about us"
              />
              <Button backgroundColor="#017931" color="white" padding="5% 10%">
                Submit
              </Button>
            </Box>
          </Box>

          <Box flex="1" marginLeft="3%">
            <Image src={contactImg1} />
            <Image src={contactImg2} />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactUs;
