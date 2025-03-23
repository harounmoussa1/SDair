import { Box, Center, Text } from "@chakra-ui/react";
interface SecondHeaderProps {
  title: string;
  subtitle: string;
  imageUrl:string;
  height:string;
  textsize:string;
}

const SecondHeader: React.FC<SecondHeaderProps> = ({ title, subtitle, imageUrl,height,textsize }) => {
  return (
    <div className="mt-20 flex justify-center"    >
      <Center  style={{
      backgroundImage: `url(${imageUrl})`, // Correct way to use url
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} h={height} color="white" w="full">
        <Box textAlign="center">
          <Text as="b" fontSize="45px" display="block">
            {title}
          </Text>
          <Text fontSize={textsize} display="block">
            {subtitle}
          </Text>
        </Box>
      </Center>
    </div>
  );
};

export default SecondHeader;