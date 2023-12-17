import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Input,
  Textarea,
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../Components/Footer";
import HeaderTwo from "../Components/HeaderTwo";
import contactImg1 from "../Assets/Svg/contactImg1.png";
import contactImg2 from "../Assets/Svg/contactImg2.png";
import { useDisclosure } from "@chakra-ui/react";
import caution from "../Assets/Svg/caution.svg";
import success from "../Assets/Svg/successIcon.svg";

const BookAppointment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(true);
  };
  return (
    <Box backgroundColor="#002D3A" color="#002D3A">
      <HeaderTwo />
      <Box marginX="5%" marginY="9%">
        <Box
          textAlign="center"
          color="white"
          marginY={{ base: "7%", md: "3%" }}
        >
          <Text fontSize={{ base: "24px", md: "32px" }} fontWeight="600">
            Book an Inspection
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }}>
            Get our expert advise on how to transform your outdoor space to
            something amazing
          </Text>
        </Box>
        <Box
          marginX={{ base: "0", md: "25%" }}
          borderRadius="10px"
          padding="5%"
          backgroundColor="white"
        >
          <Text
            textAlign="center"
            fontSize={{ base: "16px", md: "24px" }}
            padding="3% 0"
          >
            Book for an inspection of your space to begin your outdoor
            transformation journey
          </Text>
          <Box>
            <Text fontSize="16px" fontWeight="600">
              Name
            </Text>
            <Input
              marginY={{ base: "5%", md: "2%" }}
              padding={{ base: "8% 3%", md: "5% 2%" }}
              placeholder="Enter your name"
              type="text"
            />
          </Box>

          <Box>
            <Text fontSize="16px" fontWeight="600">
              Phone Number
            </Text>
            <Input
              marginY={{ base: "5%", md: "2%" }}
              padding={{ base: "8% 3%", md: "5% 2%" }}
              placeholder="Phone Number"
              type="number"
            />
          </Box>

          <Box>
            <Text fontSize="16px" fontWeight="600">
              Email Address
            </Text>
            <Input
              marginY={{ base: "5%", md: "2%" }}
              padding={{ base: "8% 3%", md: "5% 2%" }}
              placeholder="Email address"
              type="email"
            />
          </Box>

          <Box>
            <Text fontSize="16px" fontWeight="600">
              Date
            </Text>
            <Input
              marginY={{ base: "5%", md: "2%" }}
              padding={{ base: "8% 3%", md: "5% 2%" }}
              type="date"
            />
          </Box>
          <Box>
            <Text fontSize="16px" fontWeight="600">
              Time
            </Text>
            <Select
              marginY={{ base: "5%", md: "2%" }}
              //   padding={{ base: "8% 3%", md: "5% 2%" }}
              placeholder="Select convinient time slot"
              size="xl"
              style={{
                height: "65px",
                fontSize: "16px",
                padding: "0 3%",
                borderRadius: "7px",
              }}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>

          <Box>
            <Text fontSize="16px" fontWeight="600">
              Landscaping Service
            </Text>
            <Select
              marginY={{ base: "5%", md: "2%" }}
              //   padding={{ base: "8% 3%", md: "5% 2%" }}
              placeholder="Select service"
              size="xl"
              style={{
                height: "65px",
                fontSize: "16px",
                padding: "0 3%",
                borderRadius: "7px",
              }}
            >
              <option value="option1">Landscape and maintenance service</option>
              <option value="option2">Soft scalping and Mulching</option>
              <option value="option3">Tree Pruning</option>
              <option value="option3">Rubbish Removal</option>
              <option value="option3">High Pressure Cleaning</option>
              <option value="option3">Fencing</option>
              <option value="option3">Concreating</option>
              <option value="option3">Paving</option>
              <option value="option3">Retaining Wall</option>
              <option value="option3">Garden Makeover and Upgrades</option>
            </Select>
          </Box>

          <Textarea
            marginY={{ base: "5%", md: "3%" }}
            height={{ base: "150px", md: "140px" }}
            placeholder="Message - Tell us about your project"
          />

          <Box textAlign={{ base: "center", md: "left" }}>
            <Button
              backgroundColor="#017931"
              color="white"
              padding={{ base: "9% 15%", md: "5% 10%" }}
              onClick={onOpen}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          {submit ? (
            <AlertDialogContent
              marginX="2%"
              paddingTop={{ base: "5%", md: "2%" }}
            >
              <Flex flexDirection="column" alignItems="center">
                <Image width={{ base: "20%", md: "15%" }} src={success} />
                <AlertDialogHeader textAlign="center">
                  Success
                </AlertDialogHeader>
                <AlertDialogBody textAlign="center">
                  Your inspection application has been sent successfully
                </AlertDialogBody>
                <Box padding="5% 0" textAlign="center">
                  <Button
                    onClick={onClose}
                    color="white"
                    backgroundColor="#017931"
                    ml={3}
                  >
                    Return to Dashboard
                  </Button>
                </Box>
              </Flex>
            </AlertDialogContent>
          ) : (
            <AlertDialogContent
              marginX="2%"
              paddingTop={{ base: "5%", md: "2%" }}
            >
              <Flex flexDirection="column" alignItems="center">
                <Image width={{ base: "20%", md: "15%" }} src={caution} />
                <AlertDialogHeader textAlign="center">
                  Are you sure you want to submit
                </AlertDialogHeader>
                <AlertDialogBody textAlign="center">
                  You can easily go make and make sure the information provided
                  are correct.
                </AlertDialogBody>
                <Box padding="5% 0" textAlign="center">
                  <Button
                    backgroundColor="#FFB445"
                    color="white"
                    ref={cancelRef}
                    onClick={onClose}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    color="white"
                    backgroundColor="#017931"
                    ml={3}
                  >
                    Submit
                  </Button>
                </Box>
              </Flex>
            </AlertDialogContent>
          )}
        </AlertDialog>
      </Box>
      <Footer />
    </Box>
  );
};

export default BookAppointment;
