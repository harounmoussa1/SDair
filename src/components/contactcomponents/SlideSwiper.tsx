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
      slidesPerView={1} // Default to 1 slide per view
      spaceBetween={22}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 1, // 1 slide on small screens
        },
        768: {
          slidesPerView: 2, // 2 slides on medium screens
        },
        1024: {
          slidesPerView: 3, // 3 slides on larger screens
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
            fontSize: '20px',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          <Box>
            <Text fontSize="lg" fontWeight="bold">{slide.name}</Text>
            <Box bg="white" h="217px" w="607px" mt="15px" display="flex" alignItems="center" justifyContent="center" borderRadius="8px">
              <Text color="black" px={4} textAlign="center">{slide.avis}</Text>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideSwiper;
