import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Box, Text } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/pagination';

type Slide = {
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
        paddingBottom: "40px", // Adds space between slides and dots
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
            backgroundColor: '#EEF1F6',
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            padding: '20px',
            height: '100%', // Ensures slide content stays centered vertically
          }}
        >
          <Box
            w="full"
            maxW="600px"
            display="flex"
            flexDirection="column"
            alignItems="center"
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
            >
              <Text color="black">{slide.avis}</Text>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideSwiper;
