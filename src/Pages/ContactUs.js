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
          <Box>
            <Text fontWeight="600" fontSize="20px">
              Contact us
            </Text>
            <Text fontSize="14px">
              Here is what our clients are saying about seedtime landscaping
              service
            </Text>
            <Box>
              <Text>
                Connecting Dreams to Landscapes: Reach Out to Seedtime
                Landscaping for Your Vision to Blossom
              </Text>
              <Text>
                We are eager to hear from you and find out how to make your
                outdoor space glow.
              </Text>
            </Box>
            <Box>
              <Text>General Enquiries</Text>
              <Input placeholder="Name" type="text" />
              <Input placeholder="Phone Number" type="phone" />
              <Input placeholder="Email address" type="email" />
              <Input placeholder="Select Service" />
              <Textarea placeholder="Message - Tell us about your project" />
              <Input placeholder="How did you hear about us" />
              <Button>Submit</Button>
            </Box>
          </Box>

          <Box>
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
