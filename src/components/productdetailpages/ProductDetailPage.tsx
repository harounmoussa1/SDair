import { useState } from "react";

interface ProductDetailProps {
  images: string[];
}

const ProductDetail = ({ images }: ProductDetailProps) => {
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        {/* Active Image */}
        <img
          src={activeImg}
          alt="Product"
          className="w-full aspect-square object-cover rounded-lg shadow"
        />

        {/* Thumbnails */}
        <div className="flex flex-wrap justify-center gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-20 rounded-md object-cover cursor-pointer border-2 ${
                img === activeImg ? "border-blue-600" : "border-transparent"
              }`}
              onClick={() => setActiveImg(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
