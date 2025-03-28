import ProductDetail from "../../components/productdetailpages/ProductDetailPage"; 
import ImgTextile1 from "../../assets/gaineTextileImg/ImgTextile1.jpg";
import ImgTextile2 from "../../assets/gaineTextileImg/ImgTextile2.jpg";
import ImgTextile3 from "../../assets/gaineTextileImg/ImgTextil3.jpg";
import ImgTextile4 from "../../assets/gaineTextileImg/ImgTextile4.jpg";
import ImgTextile5 from "../../assets/gaineTextileImg/ImgTextile5.jpg";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import ProductInfo from "../../components/productdetailpages/ProductInfo";
import ProductsSlide from "../../components/HomeComponent/ProductsSlide";
import { products } from "../../constants";

const GainTextilePage = () => {
  const images = [ImgTextile1, ImgTextile2, ImgTextile3, ImgTextile4, ImgTextile5];

  return (
    <div>
  <Box display="flex" justifyContent="center" alignItems="center" w="100%" mt="10">
  <Flex justify="center" align="center" mt="50px" gap="50px" flexWrap="wrap">
  <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full items-center">
          {/* product photos */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <ProductDetail images={images} />
          </div>

          {/* product description */}
       <ProductInfo productName="Gaine Textile" description="Toute sorte de forme à savoir les circulaires, demi-circulaires, oblong, quart de cercle.
Le tissu utilisé est de classement au feu M0 ou M1 ou non classé." />
    </div>
 </Flex>
</Box>
<Heading mt={100} paddingLeft={360} color="#004F87">Autres Produits</Heading>
<Center mt={10} marginRight={100}>
<ProductsSlide slides={products.filter(product => product.id !== 1)} /> </Center>
 </div>
)
};

export default GainTextilePage;
