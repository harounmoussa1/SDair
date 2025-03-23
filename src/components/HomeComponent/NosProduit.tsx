import { Center, Box, Heading } from "@chakra-ui/react";
import ProductsSlide from "./ProductsSlide";
import { products } from "../../constants";

const NosProduit = () => {
  return (
    <Box 
      bg="#E5EAF1" 
      h="100vh" 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center"
      gap="70px"
    >
      <Heading color="#004F87" textAlign="center" fontSize={50}>Nos Produits</Heading>
      <ProductsSlide slides={products} />
    </Box>
  );
};

export default NosProduit;
