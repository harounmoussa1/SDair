import { CardBody, Center, Heading, Stack, Text, Image, Card, SimpleGrid, Box, Input, Flex, Link, IconButton, Button } from "@chakra-ui/react";
import SecondHeader from "../components/navbar/SecondHeader";
import { Fondateur_Presentation, ABOUT_TEXT } from '../constants/index.ts';
import Fondateur from "../assets/Fondateur.png";
import entreprise from "../assets/entreprise.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import SlideSwiper from "../components/contactcomponents/SlideSwiper";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  Name: string;
  avis: string;
  email: string;
}

const AproposPage = () => {
  const slidesData = [
    { name: 'Client XXX', avis: 'This is a testimonial from Client XXX.' },
    { name: 'Slide 2', avis: 'Feedback from Slide 2.' },
    { name: 'Slide 3', avis: 'Review from Slide 3.' },
    { name: 'Slide 4', avis: 'Testimonial from Slide 4.' },
    { name: 'Slide 5', avis: 'Comment from Slide 5.' },
    { name: 'Slide 6', avis: 'Opinion from Slide 6.' },
  ];

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div>
      {/* SecondHeader */}
      <SecondHeader
        subtitle="DECOUVRER PLUS D'INFORMATIONS"
        title="A Propos De Nous"
        imageUrl='/src/assets/aproposimg.png'
        height="296px"
        textsize="16px"
      />

      {/* A propos de notre entreprise */}
      <Center mt="50px">
        <Heading color="black" >
        <span className="text-[#004F87]">A propos de notre  </span>
        <span className="text-[#00AEEB]">entreprise</span>
        </Heading>
      </Center>

      {/* Card */}
      <Center mt="50px">
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          gap="10px"
          className="max-w-7xl"
        >
          <Image
            className="rounded-md object-fill w-full sm:w-[591px] sm:h-[403px]"
            src={entreprise}
          />
          <Stack>
          <CardBody>
          <Text py="4" className="w-full sm:w-[594px] sm:h-[144px] text-lg" fontFamily="Montserrat">
            {ABOUT_TEXT}
          </Text>
          <SimpleGrid mt="80px" columns={{ base: 1, sm: 3 }} spacing={10} justifyContent="center" justifyItems="center">
            <Box className="shadow-xl w-[185px] h-[85px] rounded-lg bg-white flex flex-col items-center justify-center">
              <Text className="text-4xl text-[#00AEEB] font-bold">+ 110</Text>
              <Text className="text-base text-[#004F87] text-1xl font-bold">clients</Text>
            </Box>
            <Box className="shadow-xl w-[185px] h-[85px] rounded-lg bg-white flex flex-col items-center justify-center">
              <Text className="text-4xl text-[#00AEEB] font-bold">+ 20 km</Text>
              <Text className="text-base text-[#004F87] text-1xl font-bold">de gaines fabriquées</Text>
            </Box>
            <Box className="shadow-xl w-[185px] h-[85px] rounded-lg bg-white flex flex-col items-center justify-center">
              <Text className="text-4xl text-[#00AEEB] font-bold">+ 13</Text>
              <Text className=" text-[#004F87] text-1xl font-bold">gouvernorats livrés</Text>
            </Box>
          </SimpleGrid>
        </CardBody>

          </Stack>
        </Card>
      </Center>

{/* Rencontrer notre fondateur */}
<Box className="bg-[#5A7CA929] mt-24 p-8">
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
    {/* Image */}
    <Box className="flex justify-center">
      <Image
        className="rounded-md object-fill w-80 h-80 sm:w-96 sm:h-96"
        src={Fondateur}
        alt="Fondateur"
      />
    </Box>

    {/* Text */}
    <Box>
      <Heading as="h1" fontSize="2xl" fontWeight="bold" fontFamily="Montserrat">
        <span className="text-[#004F87]">Rencontrer notre </span>
        <span className="text-[#00AEEB]">fondateur</span>
      </Heading>
      <Text color="#1E1E1E" mt={5} fontSize="lg" fontFamily="Montserrat">
        {Fondateur_Presentation}
      </Text>

      {/* Social Media Links */}
      <Flex mt={5} gap={8} justifyContent="left">
        <Link href="https://www.facebook.com/sdairtn/?locale=fr_FR" isExternal>
          <IconButton
            icon={<FaFacebook />}
            aria-label="Facebook Profile"
            fontSize="40px"
            colorScheme="facebook"
            color="#004F87"
          />
        </Link>
        <Link href="https://www.linkedin.com/company/sdair-heating-and-air-conditioning/?originalSubdomain=fr" isExternal>
          <IconButton
            icon={<FaLinkedin />}
            aria-label="LinkedIn Profile"
            fontSize="40px"
            colorScheme="linkedin"
            color="#004F87"
          />
        </Link>
      </Flex>
    </Box>
  </SimpleGrid>
</Box>

{/* Client Testimonials */}
<Center mt="100px">
        <Heading color="black" >
        <span className="text-[#004F87]">Opinions de   </span>
        <span className="text-[#00AEEB]">nos client</span>
        </Heading>
      </Center>
<Center mt={20}>
  <SlideSwiper slides={slidesData} />
</Center>

{/* Form Section */}
<Center mt={32}>
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full sm:w-[600px]">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <Input
          backgroundColor="#F4F4F4"
          h="51px"
          w="full"
          mr="4px"
          {...register("Name")}
          borderRadius="10px"
          placeholder="Nom De L'Entreprise"
        />
      </div>
      <div>
        <Input
          backgroundColor="#F4F4F4"
          h="51px"
          w="full"
          borderRadius="10px"
          {...register("email")}
          placeholder="Email"
        />
      </div>
    </div>
    <div>
      <Input
        h="51px"
        w="full"
        backgroundColor="#F4F4F4"
        borderRadius="10px"
        {...register("avis")}
        placeholder="Insérer Votre Avis"
      />
    </div>
    <Button
      type="submit"
      borderRadius="10px"
      backgroundColor="#5A7CA9"
      w="full"
      h="51px"
      color="white"
      fontSize="lg"
    >envoyer</Button>
  </form>
</Center>

    </div>
  );
};

export default AproposPage;
