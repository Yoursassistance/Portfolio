// import React from "react";
// import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
// import servicePageImg1 from "../Assets/Svg/servicePageImg1.svg";
// import si1 from "../Assets/Svg/si1.svg";
// import si2 from "../Assets/Svg/si2.svg";
// import si3 from "../Assets/Svg/si3.svg";
// import si4 from "../Assets/Svg/si4.svg";
// import si5 from "../Assets/Svg/si5.svg";
// import si6 from "../Assets/Svg/si6.svg";
// import si7 from "../Assets/Svg/si7.svg";
// import si8 from "../Assets/Svg/si8.svg";
// import si9 from "../Assets/Svg/si9.svg";
// import si10 from "../Assets/Svg/si10.svg";

// const ServiceSecOne = () => {
//   return (
//     <Box
//       marginTop={{ base: "10%", md: "0" }}
//       paddingX="5%"
//       paddingY="5%"
//       backgroundColor="#F0FFD0"
//     >
//       <Box textAlign="center">
//         <Text fontWeight="600" fontSize={{ base: "20px", md: "32px" }}>
//           Seedtime landscaping
//         </Text>
//         <Text>
//           Craft a vision for your outdoor sanctuary with our meticulous variety
//           of services
//         </Text>
//       </Box>

//       <Flex
//         flexDirection={{ base: "column", md: "row" }}
//         alignItems="center"
//         paddingY="5%"
//       >
//         <Box flex="1">
//           <Image src={servicePageImg1} />
//         </Box>
//         <Box marginLeft={{ base: "0", md: "3%" }} flex="1">
//           <Text
//             margin="2% 0"
//             width={{ base: "100%", md: "80%" }}
//             fontSize={{ base: "26px", md: "40px" }}
//             fontWeight="600"
//             color="#017931"
//             textAlign={{ base: "center", md: "left" }}
//           >
//             We believe in things well crafted and designed
//           </Text>
//           <Text
//             textAlign={{ base: "center", md: "left" }}
//             marginTop="2%"
//             width={{ base: "100%", md: "80%" }}
//           >
//             From our meticulous woodwork and custom furniture to carefully
//             selected plants and quality materials, we take pride in every
//             detail. Our dedication extends to sourcing plants from top
//             nurseries, using premium natural materials, and selecting
//             furnishings with a keen eye for craft and design.{" "}
//           </Text>
//           <Flex
//             width="100%"
//             justifyContent={{ base: "center", md: "flex-start" }}
//           >
//             <Button
//               fontSize="16px"
//               fontWeight="500"
//               borderRadius="10px"
//               backgroundColor="#017931"
//               color="white"
//               paddingX="5%"
//               paddingY={{ base: "7%", md: "4%" }}
//               marginTop="2%"
//             >
//               Book and Inspection
//             </Button>
//           </Flex>
//         </Box>
//       </Flex>

//       <Box
//         paddingX={{ base: "0", md: "5%" }}
//         paddingY="5%"
//         backgroundColor="#F0FFD0"
//       >
//         <Box textAlign="center" paddingY="5%">
//           <Text fontSize={{ base: "24px", md: "32px" }} fontWeight="600">
//             Our core services
//           </Text>
//           <Text>Explore our core landscaping services</Text>
//         </Box>

//         <Flex
//           flexDirection={{ base: "column", md: "row" }}
//           alignItems="center"
//           color="#002D3A"
//         >
//           <Box flex="1" marginRight="2%">
//             <Image src={si1} />
//           </Box>
//           <Box flex="1">
//             <Text marginY="2%" fontSize="20px" fontWeight="600">
//               Landscape and maintenance service
//             </Text>
//             <Box>
//               <Text fontWeight="600" marginBottom="2%">
//                 Meticulous Landscape Design:
//               </Text>
//               <Text marginBottom="2%">
//                 Collaborate with our expert designers to craft a tailored
//                 landscape plan that reflects your style and enhances your
//                 outdoor living experience.
//               </Text>
//             </Box>

//             <Box marginBottom="2%">
//               <Text fontWeight="600" marginBottom="2%">
//                 Professional Installation:
//               </Text>
//               <Text marginBottom="2%">
//                 Watch your dream landscape come to life with our skilled
//                 installation team. We handle every aspect, from plant placement
//                 to hardscape construction, with precision and care.
//               </Text>
//             </Box>

//             <Box marginBottom="2%">
//               <Text fontWeight="600" marginBottom="2%">
//                 Seasonal Maintenance:
//               </Text>
//               <Text marginBottom="2%">
//                 Our commitment doesn't end with installation. Our seasonal
//                 maintenance services keep your landscape looking vibrant and
//                 healthy throughout the year. From pruning and mulching to
//                 irrigation checks, we've got you covered.
//               </Text>
//             </Box>

//             <Box marginBottom="2%">
//               <Text fontWeight="600" marginBottom="2%">
//                 Plant Health Care:
//               </Text>
//               <Text marginBottom="2%">
//                 Ensure the longevity of your greenery with our specialized plant
//                 health care programs. Our experts assess, treat, and nourish
//                 your plants to promote growth and resilience.
//               </Text>
//             </Box>
//             <Button
//               margin="2% 0"
//               backgroundColor="#017931"
//               padding={{ md: "4% 6%", base: "7% 6%" }}
//               fontWeight="400"
//               color="white"
//             >
//               Book an inspection
//             </Button>
//           </Box>
//         </Flex>

//         <Flex
//           flexDirection={{ base: "column-reverse", md: "row" }}
//           alignItems="center"
//           paddingY="5%"
//         >
//           <Box flex="1">
//             <Text marginY="2%" fontSize="20px" fontWeight="600">
//               Soft scalping and Mulching
//             </Text>
//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Soft Scalping:
//               </Text>
//               <Text margin="2% 0">
//                 Experience the rejuvenating touch of our soft scalping service,
//                 carefully tailored to remove thatch, debris, and accumulated
//                 organic matter from your lawn. This gentle process stimulates
//                 healthier grass growth, improves nutrient absorption, and
//                 enhances the overall resilience of your turf
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Mulching Magic:
//               </Text>
//               <Text margin="2% 0">
//                 Discover the wonders of mulching as we artfully apply a
//                 protective layer of organic or inorganic material to your
//                 landscape. Mulch acts as a natural insulator, regulating soil
//                 temperature, conservation moisture, and suppressing weed growth.
//                 Our mulching solutions not only enhance the visual appeal of
//                 your beds but also contribute to the long-term health of your
//                 plants.
//               </Text>
//             </Box>
//             <Button
//               margin="2% 0"
//               backgroundColor="#017931"
//               padding={{ md: "4% 6%", base: "7% 6%" }}
//               fontWeight="400"
//               color="white"
//             >
//               Book an inspection
//             </Button>
//           </Box>
//           <Box marginLeft={{ base: "0 ", md: "3%" }} flex="1">
//             <Image src={si2} />
//           </Box>
//         </Flex>

//         <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
//           <Box marginRight={{ base: "0", md: "3%" }} flex="1">
//             <Image src={si3} />
//           </Box>
//           <Box flex="1">
//             <Text marginY="2%" fontSize="20px" fontWeight="600">
//               Tree Pruning
//             </Text>
//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Structural Pruning:
//               </Text>
//               <Text>
//                 Enhance the overall form and structure of your trees to promote
//                 a balanced and aesthetically pleasing canopy.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Deadwood Removal:
//               </Text>
//               <Text>
//                 Safeguard your landscape by eliminating dead or diseased
//                 branches, reducing the risk of potential hazards.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Crown Thinning:
//               </Text>
//               <Text>
//                 Improve air circulation and sunlight penetration through
//                 selective removal of inner branches, fostering a healthier and
//                 more resilient tree.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Crown Reduction:
//               </Text>
//               <Text>
//                 Mitigate potential risks and maintain the proportion of your
//                 tree by strategically reducing the overall canopy size.
//               </Text>
//             </Box>

//             <Button
//               margin="2% 0"
//               backgroundColor="#017931"
//               padding={{ md: "4% 6%", base: "7% 6%" }}
//               fontWeight="400"
//               color="white"
//             >
//               Book an inspection
//             </Button>
//           </Box>
//         </Flex>

//         <Flex
//           flexDirection={{ base: "column-reverse", md: "row" }}
//           alignItems="center"
//           paddingY="5%"
//         >
//           <Box flex="1">
//             <Text marginY="2%" fontSize="20px" fontWeight="600">
//               Rubbish Removal
//             </Text>
//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Green Waste Disposal:
//               </Text>
//               <Text>
//                 Safely and responsibly dispose of garden clippings, leaves,
//                 branches, and other organic debris.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Construction Debris Cleanup:
//               </Text>
//               <Text>
//                 Streamline your construction or renovation projects by letting
//                 us handle the removal of construction debris, packaging
//                 materials, and discarded materials.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 General Rubbish Clearance:
//               </Text>
//               <Text>
//                 Tackle household clutter effortlessly with our comprehensive
//                 rubbish removal service, covering a wide range of non-hazardous
//                 waste.
//               </Text>
//             </Box>

//             <Box>
//               <Text>Eco-Friendly Recycling:</Text>
//               <Text>
//                 Prioritize sustainability with our commitment to recycling. We
//                 separate recyclables to minimize environmental impact.
//               </Text>
//             </Box>
//             <Button
//               margin="2% 0"
//               backgroundColor="#017931"
//               padding={{ md: "4% 6%", base: "7% 6%" }}
//               fontWeight="400"
//               color="white"
//             >
//               Book an inspection
//             </Button>
//           </Box>
//           <Box marginLeft={{ md: "3%", base: "0" }} flex="1">
//             <Image src={si4} />
//           </Box>
//         </Flex>

//         <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
//           <Box marginRight={{ base: "0", md: "3%" }} flex="1">
//             <Image src={si5} />
//           </Box>
//           <Box flex="1">
//             <Text marginY="2%" fontSize="20px" fontWeight="600">
//               High Pressure Cleaning
//             </Text>
//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Paved Areas and Driveways:
//               </Text>
//               <Text>
//                 Say goodbye to stubborn stains and accumulated dirt on your
//                 driveways, pathways, and paved areas.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Exterior Walls and Facades:
//               </Text>
//               <Text>
//                 Restore the original vibrancy of your home or business by
//                 eliminating dirt, mildew, and environmental pollutants from
//                 exterior walls and facades
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Deck and Patio Cleaning:
//               </Text>
//               <Text>
//                 Enhance the appeal of your outdoor living spaces with a thorough
//                 cleaning of decks, patios, and other recreational areas
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Fences and Retaining Walls:
//               </Text>
//               <Text>
//                 Remove dirt, algae, and weathered stains from fences and
//                 retaining walls, bringing back their original luster.
//               </Text>
//             </Box>
//             <Button
//               margin="2% 0"
//               backgroundColor="#017931"
//               padding={{ md: "4% 6%", base: "7% 6%" }}
//               fontWeight="400"
//               color="white"
//             >
//               Book an inspection
//             </Button>
//           </Box>
//         </Flex>

//         <Flex
//           flexDirection={{ base: "column-reverse", md: "row" }}
//           alignItems="center"
//           paddingY="5%"
//         >
//           <Box flex="1">
//             <Text marginY="2%" fontSize="20px" fontWeight="600">
//               Fencing
//             </Text>
//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Custom Design and Installation:
//               </Text>
//               <Text>
//                 Collaborate with our design team to create a fencing solution
//                 that perfectly complements your property's architecture and your
//                 unique style
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Security Fencing:
//               </Text>
//               <Text>
//                 Safeguard your property with our durable and secure fencing
//                 options, designed to provide both protection and peace of mind.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Decorative Fencing:
//               </Text>
//               <Text>
//                 Enhance the visual appeal of your property with decorative
//                 fencing that adds character and charm to your outdoor spaces.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Privacy Fencing:
//               </Text>
//               <Text>
//                 Create a secluded oasis with our privacy fencing solutions,
//                 offering an elegant barrier while maintaining a sense of
//                 serenity.
//               </Text>
//             </Box>
//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Wood, Metal, and Vinyl Fencing:
//               </Text>
//               <Text>
//                 Choose from a variety of materials, including classic wood,
//                 contemporary metal, or low-maintenance vinyl, to suit your
//                 preferences and budget.
//               </Text>
//             </Box>
//             <Button
//               margin="2% 0"
//               backgroundColor="#017931"
//               padding={{ md: "4% 6%", base: "7% 6%" }}
//               fontWeight="400"
//               color="white"
//             >
//               Book an inspection
//             </Button>
//           </Box>
//           <Box marginLeft={{ base: "0", md: "3%" }} flex="1">
//             <Image src={si6} />
//           </Box>
//         </Flex>

//         <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
//           <Box flex="1" marginRight={{ base: "0", md: "3%" }}>
//             <Image src={si7} />
//           </Box>
//           <Box flex="1">
//             <Text marginY="2%" fontSize="20px" fontWeight="600">
//               Concreating
//             </Text>
//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Decorative Concrete:
//               </Text>
//               <Text>
//                 Elevate your pathways, driveways, and outdoor living areas with
//                 decorative concrete finishes, including stamped patterns,
//                 textures, and coloring options.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Patio and Deck Construction:
//               </Text>
//               <Text>
//                 Create a versatile and inviting outdoor space with our patio and
//                 deck construction services, using high-quality concrete for
//                 durability and longevity.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Retaining Walls:
//               </Text>
//               <Text>
//                 Strengthen the structural integrity of your landscape while
//                 adding a touch of sophistication with our expertly designed and
//                 constructed concrete retaining walls.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Driveways and Walkways:
//               </Text>
//               <Text>
//                 Ensure a grand entrance to your property with professionally
//                 crafted driveways and walkways that marry functionality with
//                 aesthetic appeal.
//               </Text>
//             </Box>
//             <Button
//               margin="2% 0"
//               backgroundColor="#017931"
//               padding={{ md: "4% 6%", base: "7% 6%" }}
//               fontWeight="400"
//               color="white"
//             >
//               Book an inspection
//             </Button>
//           </Box>
//         </Flex>

//         <Flex
//           flexDirection={{ base: "column-reverse", md: "row" }}
//           alignItems="center"
//           paddingY="5%"
//         >
//           <Box flex="1">
//             <Text marginY="2%" fontSize="20px" fontWeight="600">
//               Paving
//             </Text>
//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Custom Paver Design:
//               </Text>
//               <Text>
//                 Collaborate with our design experts to create a unique and
//                 tailored paving layout that complements your property's
//                 architecture and your personal style
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Patios and Outdoor Entertainment Areas:
//               </Text>
//               <Text>
//                 Transform your outdoor space into a welcoming retreat with our
//                 expertly crafted patios and entertainment areas, using
//                 high-quality pavers for lasting beauty.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Driveway Paving:
//               </Text>
//               <Text>
//                 Make a lasting first impression with an impeccably paved
//                 driveway, combining durability and elegance to enhance your
//                 property's curb appeal.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Walkways and Path Paving:
//               </Text>
//               <Text>
//                 Ensure a seamless and visually appealing connection between
//                 different areas of your landscape with our skillfully designed
//                 walkways and paths.
//               </Text>
//             </Box>
//             <Button
//               margin="2% 0"
//               backgroundColor="#017931"
//               padding={{ md: "4% 6%", base: "7% 6%" }}
//               fontWeight="400"
//               color="white"
//             >
//               Book an inspection
//             </Button>
//           </Box>
//           <Box marginLeft={{ base: "0", md: "3%" }} flex="1">
//             <Image src={si8} />
//           </Box>
//         </Flex>

//         <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
//           <Box flex="1">
//             <Image src={si9} />
//           </Box>
//           <Box flex="1">
//             <Text marginY="2%" fontSize="20px" fontWeight="600">
//               Retaining Wall
//             </Text>
//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Custom Design Solutions:
//               </Text>
//               <Text>
//                 Collaborate with our design experts to create a retaining wall
//                 that seamlessly integrates with the natural contours of your
//                 landscape while reflecting your unique style.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Structural Integrity:
//               </Text>
//               <Text>
//                 Ensure the longevity and stability of your landscape with our
//                 professionally engineered retaining walls, designed to withstand
//                 soil pressure and prevent erosion.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Versatile Material Options:
//               </Text>
//               <Text>
//                 Choose from a variety of materials such as natural stone,
//                 concrete blocks, or timber to achieve the desired look that
//                 complements your property's aesthetics.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Functional Terracing:
//               </Text>
//               <Text>
//                 Maximize usable space on sloped terrain by incorporating
//                 retaining walls for effective terracing, creating visually
//                 appealing and practical areas for planting or seating
//               </Text>
//             </Box>
//             <Button
//               margin="2% 0"
//               backgroundColor="#017931"
//               padding={{ md: "4% 6%", base: "7% 6%" }}
//               fontWeight="400"
//               color="white"
//             >
//               Book an inspection
//             </Button>
//           </Box>
//         </Flex>

//         <Flex
//           flexDirection={{ base: "column-reverse", md: "row" }}
//           alignItems="center"
//           paddingY="5%"
//         >
//           <Box flex="1">
//             <Text marginY="2%" fontSize="20px" fontWeight="600">
//               Garden Makeover and Upgrades
//             </Text>
//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Comprehensive Design Consultation:
//               </Text>
//               <Text>
//                 Collaborate with our design experts to conceptualize a garden
//                 makeover that aligns with your vision, preferences, and
//                 lifestyle.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Planting and Greenery Enhancements:
//               </Text>
//               <Text>
//                 Introduce a burst of color and texture with carefully selected
//                 plants, flowers, and trees that thrive in your specific
//                 environment.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Hardscape Renewal:
//               </Text>
//               <Text>
//                 Upgrade pathways, patios, and other hardscape elements to
//                 complement the overall design and functionality of your garden.
//               </Text>
//             </Box>

//             <Box>
//               <Text margin="2% 0" fontWeight="600">
//                 Water Features and Lighting:
//               </Text>
//               <Text>
//                 Enhance the ambiance with the addition of water features or
//                 strategic lighting, creating a magical atmosphere during day and
//                 night.
//               </Text>
//             </Box>
//             <Button
//               margin="2% 0"
//               backgroundColor="#017931"
//               padding={{ md: "4% 6%", base: "7% 6%" }}
//               fontWeight="400"
//               color="white"
//             >
//               Book an inspection
//             </Button>
//           </Box>
//           <Box flex="1" marginLeft={{ base: "0", md: "3%" }}>
//             <Image src={si10} />
//           </Box>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };

// export default ServiceSecOne;
