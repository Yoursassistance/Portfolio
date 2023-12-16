// import {
//   Box,
//   Flex,
//   Image,
//   Text,
//   Button,
//   Input,
//   Textarea,
//   AlertDialog,
//   AlertDialogBody,
//   AlertDialogHeader,
//   AlertDialogContent,
//   AlertDialogOverlay,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import Footer from "../Components/Footer";
// import HeaderTwo from "../Components/HeaderTwo";
// import contactImg1 from "../Assets/Svg/contactImg1.svg";
// import contactImg2 from "../Assets/Svg/contactImg2.svg";
// import { useDisclosure } from "@chakra-ui/react";
// import caution from "../Assets/Svg/caution.svg";
// import success from "../Assets/Svg/successIcon.svg";

// const ContactUs = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const cancelRef = React.useRef();
//   const [submit, setSubmit] = useState(false);

//   const handleSubmit = () => {
//     setSubmit(true);
//   };

//   return (
//     <Box backgroundColor="#F0FFD0" color="#002D3A">
//       <HeaderTwo />
//       <Box marginX="5%" marginY="3%">
//         <Flex>
//           <Box flex="1">
//             <Text fontWeight="600" fontSize="20px">
//               Contact us
//             </Text>
//             <Text width={{ base: "100%", md: "60%" }} fontSize="14px">
//               Here is what our clients are saying about seedtime landscaping
//               service
//             </Text>
//             <Box padding="3% 0">
//               <Text width="70%" fontWeight="500" fontSize="32px">
//                 Connecting Dreams to Landscapes: Reach Out to Seedtime
//                 Landscaping for Your Vision to Blossom
//               </Text>
//               <Text width={{ base: "100%", md: "70%" }}>
//                 We are eager to hear from you and find out how to make your
//                 outdoor space glow.
//               </Text>
//             </Box>
//             <Box borderRadius="10px" padding="5%" backgroundColor="white">
//               <Text fontSize="28px" padding="3% 0">
//                 General Enquiries
//               </Text>
//               <Input
//                 marginY={{ base: "5%", md: "2%" }}
//                 padding={{ base: "8% 3%", md: "5% 2%" }}
//                 placeholder="Name"
//                 type="text"
//               />
//               <Input
//                 marginY={{ base: "5%", md: "2%" }}
//                 padding={{ base: "8% 3%", md: "5% 2%" }}
//                 placeholder="Phone Number"
//                 type="phone"
//               />
//               <Input
//                 marginY={{ base: "5%", md: "2%" }}
//                 padding={{ base: "8% 3%", md: "5% 2%" }}
//                 placeholder="Email address"
//                 type="email"
//               />
//               <Input
//                 marginY={{ base: "5%", md: "2%" }}
//                 padding={{ base: "8% 3%", md: "5% 2%" }}
//                 placeholder="Select Service"
//               />
//               <Textarea
//                 marginY={{ base: "5%", md: "2%" }}
//                 height={{ base: "8% 3%", md: "140px" }}
//                 placeholder="Message - Tell us about your project"
//               />
//               <Input
//                 marginY={{ base: "5%", md: "2%" }}
//                 padding={{ base: "8% 3%", md: "5% 2%" }}
//                 placeholder="How did you hear about us"
//               />
//               <Box textAlign={{ base: "center", md: "left" }}>
//                 <Button
//                   backgroundColor="#017931"
//                   color="white"
//                   padding={{ base: "9% 15%", md: "5% 10%" }}
//                   onClick={onOpen}
//                 >
//                   Submit
//                 </Button>
//               </Box>
//             </Box>
//           </Box>

//           <AlertDialog
//             motionPreset="slideInBottom"
//             leastDestructiveRef={cancelRef}
//             onClose={onClose}
//             isOpen={isOpen}
//             isCentered
//           >
//             <AlertDialogOverlay />

//             {submit ? (
//               <AlertDialogContent
//                 marginX="2%"
//                 paddingTop={{ base: "5%", md: "2%" }}
//               >
//                 <Flex flexDirection="column" alignItems="center">
//                   <Image width={{ base: "20%", md: "15%" }} src={success} />
//                   <AlertDialogHeader textAlign="center">
//                     Success
//                   </AlertDialogHeader>
//                   <AlertDialogBody textAlign="center">
//                     Your inspection application has been sent successfully
//                   </AlertDialogBody>
//                   <Box padding="5% 0" textAlign="center">
//                     <Button
//                       onClick={onClose}
//                       color="white"
//                       backgroundColor="#017931"
//                       ml={3}
//                     >
//                       Return to Dashboard
//                     </Button>
//                   </Box>
//                 </Flex>
//               </AlertDialogContent>
//             ) : (
//               <AlertDialogContent
//                 marginX="2%"
//                 paddingTop={{ base: "5%", md: "2%" }}
//               >
//                 <Flex flexDirection="column" alignItems="center">
//                   <Image width={{ base: "20%", md: "15%" }} src={caution} />
//                   <AlertDialogHeader textAlign="center">
//                     Are you sure you want to submit
//                   </AlertDialogHeader>
//                   <AlertDialogBody textAlign="center">
//                     You can easily go make and make sure the information
//                     provided are correct.
//                   </AlertDialogBody>
//                   <Box padding="5% 0" textAlign="center">
//                     <Button
//                       backgroundColor="#FFB445"
//                       color="white"
//                       ref={cancelRef}
//                       onClick={onClose}
//                     >
//                       Back
//                     </Button>
//                     <Button
//                       onClick={handleSubmit}
//                       color="white"
//                       backgroundColor="#017931"
//                       ml={3}
//                     >
//                       Submit
//                     </Button>
//                   </Box>
//                 </Flex>
//               </AlertDialogContent>
//             )}
//           </AlertDialog>

//           <Box display={{ base: "none", md: "block" }} flex="1" marginLeft="3%">
//             <Image src={contactImg1} />
//             <Image src={contactImg2} />
//           </Box>
//         </Flex>
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default ContactUs;
