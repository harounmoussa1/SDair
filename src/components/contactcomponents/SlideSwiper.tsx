import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Box, Text } from '@chakra-ui/react';


export type Slide = {
  name: string;
  avis: string;
};

interface SlideSwiperProps {
  slides: Slide[];
}

const SlideSwiper = ({ slides }: SlideSwiperProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
      style={{
        paddingBottom: "40px",
        width: '100%', // Ensure the Swiper takes the full width
        maxWidth: '100%'
         // Adds space between slides and dots
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      {slides.map((slide, index) => (
     <SwiperSlide
     key={index}
     style={{
       display: 'flex',
       justifyContent: 'center',
     }}
   >
     <Box
       w="full"
       maxW={{ base: "90%", sm: "500px", md: "600px", lg: "850px" }}
       bg="#EEF1F6"
       color="black"
       borderRadius="10px"
       padding="20px"
     >
       <Text fontSize="lg" fontWeight="bold" textAlign="center">
         {slide.name}
       </Text>
   
       <Box
         bg="white"
         h={{ base: "200px", md: "217px" }}
         w="full"
         mt="15px"
         px="4"
         py="6"
         borderRadius="8px"
         display="flex"
         alignItems="center"
         justifyContent="center"
         textAlign="center"
         overflow="hidden"
         maxW={{ base: "90%", sm: "500px", md: "600px", lg: "950px" }}
       >
         <Text color="black" wordBreak="break-word" whiteSpace="normal">
           {slide.avis}
         </Text>
       </Box>
     </Box>
   </SwiperSlide>
   
      ))}
    </Swiper>
  );
};

export default SlideSwiper;
