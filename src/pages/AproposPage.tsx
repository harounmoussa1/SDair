import { CardBody, Center, Heading, Stack ,Text, Image, Card, SimpleGrid, Box, Avatar, Input} from "@chakra-ui/react";
import SecondHeader from "../components/navbar/SecondHeader";


import SlideSwiper from "../components/contactcomponents/SlideSwiper";
import { SubmitHandler, useForm } from "react-hook-form";
interface IFormInput {
  Name: string,
  avis: string,
  email:string,
}
const AproposPage = () => {
  const slidesData = [
    { name: 'Client XXX', avis: 'This is a testimonial from Client XXX.' },
    { name: 'Slide 2', avis: 'Feedback from Slide 2.' },
    { name: 'Slide 3', avis: 'Review from Slide 3.' },
    { name: 'Slide 4', avis: 'Testimonial from Slide 4.' },
    { name: 'Slide 5', avis: 'Comment from Slide 5.' },
    { name: 'Slide 6', avis: 'Opinion from Slide 6.' },
  ];
  const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
  <div>
    <SecondHeader 
    subtitle="DECOUVRER PLUS D'INFORMATIONS" 
    title="A Propos De Nous" 
    imageUrl='/src/assets/aproposimg.png' 
    height="296px" 
    textsize={"16px"}/>
    <Center mt="50px">   
       <Heading color="black">A propos de notre entreprise</Heading>
    </Center>
    <Center mt="50px">
      
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  gap="10px"
>
  <Image
  className="rounded-sm"
    objectFit='cover'
    width="591px"
    h="403px"
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Text py='4' w="594px" h="144px">
            Lorem ipsum dolor sit amet, consectetur ut labore. Lorem ipsum dolor sit amet, consectetur ut labore. Lorem ipsum dolor sit amet, consectetur ut labore. 

      Lorem ipsum dolor sit amet, consectetur ut labore. Lorem ipsum dolor sit amet
      </Text>
      <SimpleGrid mt="50px" columns={3} spacing={10} justifyContent="center" justifyItems="center">
        <Box className="shadow-xl w-[185px] h-[85px] rounded-lg" bg='#FFFFFF'>
          <h1>15+</h1>
          <h3>aaaaaa</h3>
        </Box>
        <Box bg='#FFFFFF' className="shadow-xl w-[185px] h-[85px] rounded-lg" >
          <h1>15+</h1>
          <h3>aaaaaa</h3>
        </Box>
        <Box bg='#FFFFFF' className="shadow-xl w-[185px] h-[85px] rounded-lg" >
        <h1>15+</h1>
        <h3>aaaaaa</h3>
        </Box>
      </SimpleGrid>
    </CardBody>
  </Stack>
</Card>
    </Center>
    <Box h="516px" w="100%" bg="#95A2B2" mt="90px" p={20}>
  <SimpleGrid columns={2} spacing={10} alignItems="center">
    <Box display="flex" justifyContent="center">
      <Avatar h="328px" w="328px" />
    </Box>
    <Box>
      <Heading>Rencontrer notre fondateur</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur ut labore. Lorem ipsum dolor sit amet, consectetur ut labore. Lorem ipsum dolor sit amet, consectetur ut labore.
      </Text>
    </Box>
  </SimpleGrid>
</Box>
    <Center mt={150}>
    <SlideSwiper slides={slidesData} />
      </Center>
      <Center mt={75}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4 ">

            <div>
                <Input backgroundColor='#F4F4F4' h="51px" w="218px" mr="4px" {...register("Name")} borderRadius="10px" placeholder="Nom et Prénom"/>
                <Input backgroundColor='#F4F4F4' h="51px" w="297px" borderRadius="10px"{...register("email")} placeholder="email"/>
            </div>
            
                <Input h="51px" w="522px" backgroundColor='#F4F4F4' borderRadius="10px" {...register("avis")} placeholder="Insérer votre avis "/>
               
           
        <Input borderRadius="10px" backgroundColor='#5A7CA9' w="135px" h="51px" type="submit" justifySelf="center"/>
        </div>
        </form>
      </Center>
  </div>
  )
}

export default AproposPage