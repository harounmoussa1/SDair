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

const SlideSwiper: React.FC<SlideSwiperProps> = ({ slides }) => {
  return (
    <>
    <Swiper
      slidesPerView={3}
      spaceBetween={22}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{
            width: '680px',
            height: '354px',
            backgroundColor: '#EEF1F6',
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            borderRadius: '10px',
          }}
        >
          <Box>
            <Text>{slide.name}</Text>
            <Box bg="white" h="217px" w="600px" mt="15px" display="flex" alignItems="center" justifyContent="center">
              <Text color="black">{slide.avis}</Text>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};

export default SlideSwiper;