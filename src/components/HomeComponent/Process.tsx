import {  Center, Heading } from '@chakra-ui/react'
import ProcessModal from './ProcessModal'
import { faComments , faGears,faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'

const Process = () => {
  return (
    <div>
      <Center>
     <Heading color="#004F87" fontSize={50} mt={130} >Notre Process</Heading>
      </Center>
    <Center h="651px" w="full" bg="white" className='grid-cols-3 gap-30' >
       
       <ProcessModal title={'Discussion'} subtitle={'Lorem ipsum dolor sit amet, consectetur ut labore. Lorem ipsum dolor  consectetur ut labore.Lorem ipsum dolor sit amet, consectetur ut labore. Lorem ipsum dol  consectetur ut labore.Lorem ipsum dolor '} icon={faComments} />
       <ProcessModal title={'Installation'} subtitle={'Lorem ipsum dolor sit amet, consectetur ut labore. Lorem ipsum dolor  consectetur ut labore.Lorem ipsum dolor sit amet, consectetur ut labore. Lorem ipsum dol  consectetur ut labore.Lorem ipsum dolor '} icon={faGears} />
       <ProcessModal title={'Maintenance'} subtitle={'Lorem ipsum dolor sit amet, consectetur ut labore. Lorem ipsum dolor  consectetur ut labore.Lorem ipsum dolor sit amet, consectetur ut labore. Lorem ipsum dol  consectetur ut labore.Lorem ipsum dolor '} icon={faScrewdriverWrench} />

   
</Center>
    </div>

  )
}

export default Process