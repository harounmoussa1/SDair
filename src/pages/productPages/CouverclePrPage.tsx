import React from 'react'
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import ProductDetail from '../../components/productdetailpages/ProductDetailPage';
import ProductInfo from '../../components/productdetailpages/ProductInfo';
import ProductsSlide from '../../components/HomeComponent/ProductsSlide';
import { products } from '../../constants';
import couvercle1 from "../../assets/couvercleImg/couvercle1.jpg"
import couvercle2 from "../../assets/couvercleImg/couvercle2.jpg"
import couvercle3 from "../../assets/couvercleImg/couvercle3.jpg"

const CouverclePrPage = () => {
  const images = [couvercle1,couvercle2,couvercle3];

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
       <ProductInfo productName="Couvercles de protection" description="Industry-leading noise cancellation with superior sound quality." />
    </div>
 </Flex>
</Box>
<Heading mt={100} paddingLeft={360} color="#004F87">Autres Produits</Heading>
<Center mt={10} marginRight={100}>
<ProductsSlide slides={products.filter(product => product.id !== 4)} /> </Center>
 </div>
  )
}

export default CouverclePrPage