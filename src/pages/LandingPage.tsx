import { Center, Heading } from "@chakra-ui/react";
import HeroSection from "../components/HomeComponent/HeroSection"
import NosProduit from "../components/HomeComponent/NosProduit"
import Process from "../components/HomeComponent/Process"
import SlideSwiper from "../components/contactcomponents/SlideSwiper";


const LandingPage = () => {
  const slidesData = [
    { name: 'Client XXX', avis: 'This is a testimonial from Client XXX.' },
    { name: 'Slide 2', avis: 'Feedback from Slide 2.' },
    { name: 'Slide 3', avis: 'Review from Slide 3.' },
    { name: 'Slide 4', avis: 'Testimonial from Slide 4.' },
    { name: 'Slide 5', avis: 'Comment from Slide 5.' },
    { name: 'Slide 6', avis: 'Opinion from Slide 6.' },
  ];
  return (
    
    
     
      <div>
        
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-EENV77MR14"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EENV77MR14');
</script>

        <HeroSection />
        <Process />
      
        <NosProduit />
        <Center>
        <Heading mt={100} color="#004F87" fontSize={50} >Opinions des clients</Heading>
        </Center>
        <Center mt={100}>
        <SlideSwiper slides={slidesData} />
      </Center>
      </div>
       
    
  )
}

export default LandingPage
