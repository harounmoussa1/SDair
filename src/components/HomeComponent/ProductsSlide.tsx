import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProduitModal from "./ProduitModal";
import "swiper/css";
import "swiper/css/pagination";

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface SlideSwiperProps {
  slides: Product[];
}

const ProductsSlide: React.FC<SlideSwiperProps> = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30} // Increased space for better layout
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
      style={{ width: "80%", height: "600px" }} // Controls overall Swiper size
    >
      {slides.map((product) => (
        <SwiperSlide
          key={product.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "400px", // Fixed width for uniformity
            height: "550px", // Fixed height for uniformity
          }}
        >
          <ProduitModal
            name={product.name}
            description={product.description}
            imageUrl={product.imageUrl}
            link={product.link}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsSlide;
