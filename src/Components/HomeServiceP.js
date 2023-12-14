import { Box, Image, Text, Flex, Button, Spacer } from "@chakra-ui/react";
import React from "react";
import transformBefore from "../Assets/Svg/transformBefore.svg";
import transformDesign from "../Assets/Svg/transformDesign.svg";
import transformAfter from "../Assets/Svg/transformAfter.svg";
import transformMaintenance from "../Assets/Svg/transformMaintenance.svg";
import serviceImg1 from "../Assets/Svg/serviceImg1.svg";
import serviceImg2 from "../Assets/Svg/serviceImg2.svg";
import serviceImg3 from "../Assets/Svg/serviceImg3.svg";
import serviceImg4 from "../Assets/Svg/serviceImg4.svg";
import dot from "../Assets/Svg/dot.svg";
import client1 from "../Assets/Svg/client1.svg";
import client2 from "../Assets/Svg/client2.svg";
import client3 from "../Assets/Svg/client3.svg";
import client4 from "../Assets/Svg/client4.svg";
import client5 from "../Assets/Svg/client5.svg";
import client6 from "../Assets/Svg/client6.svg";
import logoC from "../Assets/Svg/logoC.svg";

const HomeServiceP = () => {
  return (
    <Box padding="5% 0 0 0" backgroundColor="#002D3A">
      <Box paddingX="5%" textAlign="center">
        <Text fontSize="32px" fontWeight="600">
          We transform backyards
        </Text>
        <Text marginX="20%">
          Transforming ordinary backyards into extraordinary outdoor
          sanctuaries. Our expertise lies in turning your vision into a
          captivating reality, creating a haven where nature and design
          harmonize seamlessly.
        </Text>
      </Box>

      <Flex paddingX="5%" marginTop="5%">
        <Box flex="1">
          <Image width="370px" height="430px" src={transformBefore} />
          <Flex>
            <Image marginRight="5px" src={dot} />
            <Text fontSize="20px" fontWeight="600">
              Before
            </Text>
          </Flex>
          <Text width="90%">
            Witness the canvas before our touch – a snapshot of the existing
            space that sparks the inspiration for transformation.
          </Text>
        </Box>

        <Box flex="1">
          <Image width="370px" height="430px" src={transformDesign} />
          <Flex>
            <Image marginRight="5px" src={dot} />
            <Text fontSize="20px" fontWeight="600">
              Design
            </Text>
          </Flex>
          <Text width="90%">
            Dive into the creative journey as our experts craft a personalized
            design, envisioning the possibilities and shaping the blueprint for
            your dream landscape.
          </Text>
        </Box>

        <Box flex="1">
          <Image width="370px" height="430px" src={transformAfter} />
          <Flex>
            <Image marginRight="5px" src={dot} />
            <Text fontSize="20px" fontWeight="600">
              After
            </Text>
          </Flex>
          <Text width="90%">
            Experience the magic of metamorphosis. The "After" captures the
            breathtaking realization of the design, showcasing the transformed
            space in all its vibrant glory.
          </Text>
        </Box>

        <Box flex="1">
          <Image width="370px" height="430px" src={transformMaintenance} />
          <Flex>
            <Image marginRight="5px" src={dot} />
            <Text fontSize="20px" fontWeight="600">
              Maintenance
            </Text>
          </Flex>
          <Text width="90%">
            Our commitment doesn't end with the transformation. "Maintenance"
            reveals the ongoing care, ensuring your outdoor haven remains a
            flourishing testament to Seedtime Landscaping's expertise.
          </Text>
        </Box>
      </Flex>

      <Box paddingX="5%" textAlign="center" marginTop="3%">
        <Button backgroundColor="white" padding="2% 5%" borderRadius="10px">
          Book an Inspection
        </Button>
      </Box>

      <Box paddingX="5%" marginTop="10%">
        <Box textAlign="center">
          <Text fontSize="32px" fontWeight="600">
            Our Services
          </Text>
          <Text>
            Craft a vision for your outdoor sanctuary with our meticulous
            variety of services
          </Text>
        </Box>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginTop="2%"
        >
          <Flex marginY="3%" alignItems="center">
            <Flex
              marginRight="3%"
              alignItems="flex-end"
              justifyContent="flex-end"
              flex="1"
            >
              <Image src={serviceImg1} />
            </Flex>
            <Box textAlign="right" flex="1">
              <Text width="60%" fontSize="24px" fontWeight="600">
                Landscape and maintenance service
              </Text>
              <Text marginTop="3%" fontSize="14px" width="60%">
                Unleash the full potential of your outdoor space with our
                Landscape and Maintenance Service. From initial design to
                ongoing care, we offer a comprehensive solution to ensure your
                landscape remains vibrant, healthy, and impeccably maintained.
              </Text>
              <Box textAlign="center" marginTop="3%">
                <Button
                  backgroundColor="white"
                  padding="4% 5%"
                  borderRadius="10px"
                  fontWeight="500"
                >
                  View More
                </Button>
              </Box>
            </Box>
          </Flex>

          <Flex marginY="3%" alignItems="center">
            <Flex
              flexDirection="column"
              alignItems="flex-end"
              textAlign="left"
              flex="1"
            >
              <Text width="60%" fontSize="24px" fontWeight="600">
                Soft scalping and Mulching
              </Text>
              <Text marginTop="3%" fontSize="14px" width="60%">
                Elevate your landscape's health and beauty with Soft Scalping
                and Mulching. Soft scalping promotes lush growth, while mulching
                ensures soil health and moisture retention. Experience the
                transformative touch that enhances both aesthetics and
                sustainability.
              </Text>
              <Box width="60%" marginTop="3%">
                <Button
                  backgroundColor="white"
                  padding="7% 9%"
                  borderRadius="10px"
                  fontWeight="500"
                >
                  View More
                </Button>
              </Box>
            </Flex>

            <Flex marginLeft="3%" flex="1">
              <Image src={serviceImg2} />
            </Flex>
          </Flex>

          <Flex marginY="3%" alignItems="center">
            <Flex
              marginRight="3%"
              alignItems="flex-end"
              justifyContent="flex-end"
              flex="1"
            >
              <Image src={serviceImg3} />
            </Flex>
            <Box textAlign="right" flex="1">
              <Text width="60%" fontSize="24px" fontWeight="600">
                Tree Pruning
              </Text>
              <Text marginTop="3%" fontSize="14px" width="60%">
                Shape, strengthen, and beautify your trees with our Tree Pruning
                services. Our expert arborists carefully trim and sculpt,
                promoting the overall health, safety, and aesthetics of your
                cherished arboreal assets.
              </Text>
              <Box textAlign="center" marginTop="3%">
                <Button
                  backgroundColor="white"
                  padding="4% 5%"
                  borderRadius="10px"
                  fontWeight="500"
                >
                  View More
                </Button>
              </Box>
            </Box>
          </Flex>

          <Flex marginY="3%" alignItems="center">
            <Flex
              flexDirection="column"
              alignItems="flex-end"
              textAlign="left"
              flex="1"
            >
              <Text width="60%" fontSize="24px" fontWeight="600">
                Rubbish Removal
              </Text>
              <Text marginTop="3%" fontSize="14px" width="60%">
                Effortless decluttering with our Rubbish Removal services.
                Whether it's green waste, construction debris, or general
                clutter, we swiftly clear and responsibly dispose of unwanted
                materials, leaving your space clean and refreshed.
              </Text>
              <Box width="60%" marginTop="3%">
                <Button
                  backgroundColor="white"
                  padding="7% 9%"
                  borderRadius="10px"
                  fontWeight="500"
                >
                  View More
                </Button>
              </Box>
            </Flex>

            <Flex marginLeft="3%" flex="1">
              <Image src={serviceImg4} />
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Box marginTop="5%" backgroundColor="#F0FFD0" paddingY="3%">
        <Flex paddingX="5%">
          <Box>
            <Image width="60%" src={client1} />
          </Box>
          <Spacer />
          <Box>
            <Image  width="60%" src={client2} />
          </Box>
          <Spacer />
          <Box>
            <Image width="60%" src={client3} />
          </Box>
          <Spacer />
          <Box>
            <Image width="60%" src={client4} />
          </Box>
          <Spacer />
          <Box>
            <Image width="60%" src={client5} />
          </Box>
          <Spacer />
          <Box>
            <Image width="60%" src={client6} />
          </Box>
        </Flex>
      </Box>

      <Box marginX="15%" marginY="5%" color="#002D3A" borderRadius="20px" backgroundColor="white">
        <Flex alignItems="center" justifyContent="center" paddingY="3%">
            <Box marginRight="4%">
                <Text fontSize="48px" fontWeight="600">Have a project in mind?</Text>
                <Text fontSize="24px" fontWeight="600">Schedule a consult.</Text>
                <Button backgroundColor="#09AD00" color="white" padding="7% 15%" marginTop="2%">Contact Us</Button>
            </Box>
            <Box>
                <Image src={logoC} />
            </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomeServiceP;
