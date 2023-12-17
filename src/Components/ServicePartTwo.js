import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import React from "react";
import si3 from "../Assets/Svg/si3.svg";
// import si4 from "../Assets/Svg/si4.svg";
// import si5 from "../Assets/Svg/si5.svg";

const ServicePartTwo = () => {
  return (
    <Box>
      <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
        <Box marginRight={{ base: "0", md: "3%" }} flex="1">
          <Image src={si3} />
        </Box>
        <Box flex="1">
          <Text marginY="2%" fontSize="20px" fontWeight="600">
            Tree Pruning
          </Text>
          <Box>
            <Text margin="2% 0" fontWeight="600">
              Structural Pruning:
            </Text>
            <Text>
              Enhance the overall form and structure of your trees to promote a
              balanced and aesthetically pleasing canopy.
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Deadwood Removal:
            </Text>
            <Text>
              Safeguard your landscape by eliminating dead or diseased branches,
              reducing the risk of potential hazards.
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Crown Thinning:
            </Text>
            <Text>
              Improve air circulation and sunlight penetration through selective
              removal of inner branches, fostering a healthier and more
              resilient tree.
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Crown Reduction:
            </Text>
            <Text>
              Mitigate potential risks and maintain the proportion of your tree
              by strategically reducing the overall canopy size.
            </Text>
          </Box>

          <Button
            margin="2% 0"
            backgroundColor="#017931"
            padding={{ md: "4% 6%", base: "7% 6%" }}
            fontWeight="400"
            color="white"
          >
            Book an inspection
          </Button>
        </Box>
      </Flex>

      {/* <Flex
        flexDirection={{ base: "column-reverse", md: "row" }}
        alignItems="center"
        paddingY="5%"
      >
        <Box flex="1">
          <Text marginY="2%" fontSize="20px" fontWeight="600">
            Rubbish Removal
          </Text>
          <Box>
            <Text margin="2% 0" fontWeight="600">
              Green Waste Disposal:
            </Text>
            <Text>
              Safely and responsibly dispose of garden clippings, leaves,
              branches, and other organic debris.
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Construction Debris Cleanup:
            </Text>
            <Text>
              Streamline your construction or renovation projects by letting us
              handle the removal of construction debris, packaging materials,
              and discarded materials.
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              General Rubbish Clearance:
            </Text>
            <Text>
              Tackle household clutter effortlessly with our comprehensive
              rubbish removal service, covering a wide range of non-hazardous
              waste.
            </Text>
          </Box>

          <Box>
            <Text>Eco-Friendly Recycling:</Text>
            <Text>
              Prioritize sustainability with our commitment to recycling. We
              separate recyclables to minimize environmental impact.
            </Text>
          </Box>
          <Button
            margin="2% 0"
            backgroundColor="#017931"
            padding={{ md: "4% 6%", base: "7% 6%" }}
            fontWeight="400"
            color="white"
          >
            Book an inspection
          </Button>
        </Box>
        <Box marginLeft={{ md: "3%", base: "0" }} flex="1">
          <Image src={si4} />
        </Box>
      </Flex>

      <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
        <Box marginRight={{ base: "0", md: "3%" }} flex="1">
          <Image src={si5} />
        </Box>
        <Box flex="1">
          <Text marginY="2%" fontSize="20px" fontWeight="600">
            High Pressure Cleaning
          </Text>
          <Box>
            <Text margin="2% 0" fontWeight="600">
              Paved Areas and Driveways:
            </Text>
            <Text>
              Say goodbye to stubborn stains and accumulated dirt on your
              driveways, pathways, and paved areas.
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Exterior Walls and Facades:
            </Text>
            <Text>
              Restore the original vibrancy of your home or business by
              eliminating dirt, mildew, and environmental pollutants from
              exterior walls and facades
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Deck and Patio Cleaning:
            </Text>
            <Text>
              Enhance the appeal of your outdoor living spaces with a thorough
              cleaning of decks, patios, and other recreational areas
            </Text>
          </Box>

          <Box>
            <Text margin="2% 0" fontWeight="600">
              Fences and Retaining Walls:
            </Text>
            <Text>
              Remove dirt, algae, and weathered stains from fences and retaining
              walls, bringing back their original luster.
            </Text>
          </Box>
          <Button
            margin="2% 0"
            backgroundColor="#017931"
            padding={{ md: "4% 6%", base: "7% 6%" }}
            fontWeight="400"
            color="white"
          >
            Book an inspection
          </Button>
        </Box>
      </Flex> */}
    </Box>
  );
};

export default ServicePartTwo;
