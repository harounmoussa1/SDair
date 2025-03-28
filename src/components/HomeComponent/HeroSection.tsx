import { Box,  Center,Flex,Link,Text } from "@chakra-ui/react"
import landingpageimg from "../../assets/landingpageimg.png"


const HeroSection = () => {
  return (
    <div >
        <div className="mt-20 flex justify-center"    >
          <Center  style={{
          backgroundImage: `url(${landingpageimg})`, // Correct way to use url
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} h="751px"  color="white" w="full">
            <Box textAlign="center">
              <Text as="b" fontSize="80px" display="block">
              SDair Tunisie
              </Text>
              <Text fontSize="32px" display="block" mt={10}>
              La première société Tunisienne spécialisée dans la fabrication
              </Text>
              <Text fontSize="32px" display="block">
                des gaines textiles et manchettes souples
              </Text>
              <Flex justify="center" mt={20}>
              <Link 
                href="/apropos" 
                _hover={{ textDecoration: "none" }} 
              >
                <Flex
                  as="button"
                  bg="#F4F4F4"
                  color="#004F87"
                  px="32px"
                  py="12px"
                  borderRadius="md"
                  fontWeight="bold"
                  fontSize="20px"
                  _hover={{ bg: "#e0e0e0" }}
                >
                  SAVOIR PLUS
                </Flex>
              </Link>
            </Flex>            </Box>
          </Center>
        </div>
        
    </div>
  )
}

export default HeroSection