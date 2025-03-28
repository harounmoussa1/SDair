import  { useState } from "react";

interface ProductDetailProps {
  images: string[];
}

const ProductDetail = ({ images }: ProductDetailProps) => {
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="flex flex-col gap-6">
          <img src={activeImg} alt="Product" className="w-full h-full aspect-square object-cover" />
          <div className="flex flex-row justify-between h-24">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImg(img)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
