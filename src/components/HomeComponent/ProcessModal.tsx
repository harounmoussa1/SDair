import { Card, CardBody, CardHeader, Center, Heading, Text, IconButton } from '@chakra-ui/react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ProcessModalProps {
  title: string
  subtitle: string
  icon: IconDefinition
}

const ProcessModal = ({ title, subtitle, icon }: ProcessModalProps) => {
  return (
    <Card h="322px" w="349px" bg="#FFFFFF">
      <CardHeader>
        <Center>
          <IconButton
            w="111px"
            h="111px"
            isRound={true}
            variant="solid"
            bg="#5A7CA9"
            aria-label="Icon"
            fontSize="50px"
            color="white"
            icon={<FontAwesomeIcon icon={icon} />}
          />
        </Center>
      </CardHeader>
      <CardBody>
        <Center>
          <Heading size="md" color="#004F87">
            {title}
          </Heading>
        </Center>
        <Center>
          <Text fontSize="12px" color="black" mt={5}>
            {subtitle}
          </Text>
        </Center>
      </CardBody>
    </Card>
  )
}

export default ProcessModal
