import {
  Text,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Stack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ContactModal = () => {
  return (
    <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" 
      backgroundColor="gray.700" color="white" p="6">
      <CardHeader>
        <Heading fontSize={{ base: "30px", md: "40px", lg: "45px" }}>Contact Us</Heading>
      </CardHeader>

      <CardBody>
        <Stack spacing="6">
          <Box>
            <Heading size="xs" textTransform="uppercase" mb="2">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Address
            </Heading>
            <Text fontSize="16px">Surkhet, NP12 Birendranagar 06</Text>
          </Box>

          <Box>
            <Heading size="xs" textTransform="uppercase" mb="2">
              Phone
            </Heading>
            <Text fontSize="16px">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> +0098 9893 5647
            </Text>
            <Text fontSize="16px">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> +0096 3434 5678
            </Text>
          </Box>

          <Box>
            <Heading size="xs" textTransform="uppercase" mb="2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email
            </Heading>
            <Text fontSize="16px">codinglab@gmail.com</Text>
            <Text fontSize="16px">info.codinglab@gmail.com</Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ContactModal;
