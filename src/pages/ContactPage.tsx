import { Box, Center, Flex } from "@chakra-ui/react";
import ContactModal from "../components/contactcomponents/ContactModal";
import GetInTouch from "../components/contactcomponents/GetInTouch";
import SecondHeader from "../components/navbar/SecondHeader";

const ContactPage = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <SecondHeader
        title="Contact Us"
        subtitle="GET IN TOUCH"
        imageUrl="/src/assets/Hero.png"
        height="296px"
        textsize="16px"
      />

      {/* Contact Section */}
      <Box display="flex" justifyContent="center" alignItems="center" w="100%" mt="10">
      <Flex justify="center" align="center" mt="50px" gap="50px" flexWrap="wrap">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full items-center">
          {/* ContactModal */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <ContactModal />
          </div>

          {/* GetInTouch */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <GetInTouch />
          </div>
        </div>
        </Flex>
        </Box>

      {/* Google Maps Section */}
      <Center className="w-full mt-14 px-4 lg:px-0">
        <div className="w-full max-w-4xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d12973.09072848217!2d10.749156426411538!3d35.62100365444449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x13020f9eece33c61%3A0x54d0813bc5281d07!2sJemmel!3m2!1d35.624504099999996!2d10.7585984!5e0!3m2!1sfr!2stn!4v1739640853596!5m2!1sfr!2stn"
            width="100%"
            height="400"
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </Center>
    </div>
  );
};

export default ContactPage;
