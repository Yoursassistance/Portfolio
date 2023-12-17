import { Box, Text, Flex, Image, Button } from '@chakra-ui/react'
import React from 'react'
import si1 from "../Assets/Svg/si1.svg";
import si2 from "../Assets/Svg/si2.svg";
const ServicePartOne = () => {
  return (
    <Box>
       <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          color="#002D3A"
        >
          <Box flex="1" marginRight="2%">
            <Image src={si1} />
          </Box>
          <Box flex="1">
            <Text marginY="2%" fontSize="20px" fontWeight="600">
              Landscape and maintenance service
            </Text>
            <Box>
              <Text fontWeight="600" marginBottom="2%">
                Meticulous Landscape Design:
              </Text>
              <Text marginBottom="2%">
                Collaborate with our expert designers to craft a tailored
                landscape plan that reflects your style and enhances your
                outdoor living experience.
              </Text>
            </Box>

            <Box marginBottom="2%">
              <Text fontWeight="600" marginBottom="2%">
                Professional Installation:
              </Text>
              <Text marginBottom="2%">
                Watch your dream landscape come to life with our skilled
                installation team. We handle every aspect, from plant placement
                to hardscape construction, with precision and care.
              </Text>
            </Box>

            <Box marginBottom="2%">
              <Text fontWeight="600" marginBottom="2%">
                Seasonal Maintenance:
              </Text>
              <Text marginBottom="2%">
                Our commitment doesn't end with installation. Our seasonal
                maintenance services keep your landscape looking vibrant and
                healthy throughout the year. From pruning and mulching to
                irrigation checks, we've got you covered.
              </Text>
            </Box>

            <Box marginBottom="2%">
              <Text fontWeight="600" marginBottom="2%">
                Plant Health Care:
              </Text>
              <Text marginBottom="2%">
                Ensure the longevity of your greenery with our specialized plant
                health care programs. Our experts assess, treat, and nourish
                your plants to promote growth and resilience.
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

        <Flex
          flexDirection={{ base: "column-reverse", md: "row" }}
          alignItems="center"
          paddingY="5%"
        >
          <Box flex="1">
            <Text marginY="2%" fontSize="20px" fontWeight="600">
              Soft scalping and Mulching
            </Text>
            <Box>
              <Text margin="2% 0" fontWeight="600">
                Soft Scalping:
              </Text>
              <Text margin="2% 0">
                Experience the rejuvenating touch of our soft scalping service,
                carefully tailored to remove thatch, debris, and accumulated
                organic matter from your lawn. This gentle process stimulates
                healthier grass growth, improves nutrient absorption, and
                enhances the overall resilience of your turf
              </Text>
            </Box>

            <Box>
              <Text margin="2% 0" fontWeight="600">
                Mulching Magic:
              </Text>
              <Text margin="2% 0">
                Discover the wonders of mulching as we artfully apply a
                protective layer of organic or inorganic material to your
                landscape. Mulch acts as a natural insulator, regulating soil
                temperature, conservation moisture, and suppressing weed growth.
                Our mulching solutions not only enhance the visual appeal of
                your beds but also contribute to the long-term health of your
                plants.
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
          <Box marginLeft={{ base: "0 ", md: "3%" }} flex="1">
            <Image src={si2} />
          </Box>
        </Flex>
    </Box>
  )
}

export default ServicePartOne
