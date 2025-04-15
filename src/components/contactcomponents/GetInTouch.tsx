import {
  Text,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

import { SubmitHandler, useForm } from "react-hook-form";
import { client } from  "../../sanity/sanityClient";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  notes: string;
}

const GetInTouch = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();

const onSubmit: SubmitHandler<IFormInput> = async (data) => {
  try {
    await client.create({
      _type: 'contact',
      ...data,
      submittedAt: new Date().toISOString(),
    });
    alert('Votre message a été envoyé avec succès !');
    reset(); // ← clear form fields
  } catch (err) {
    console.error(err);
    alert("Une erreur s'est produite. Veuillez réessayer.");
  }
};


  return (
    <Card
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
      backgroundColor="white"
      color="white"
      p="6"
    >
      <CardHeader>
        <Heading fontSize={{ base: "30px", md: "40px", lg: "45px" }} color="#004F87">
        Prenez Contact Avec Nous,
        </Heading>
        <Text fontSize="md" color="#5A7CA9">
         nous vous répondrons dans les plus brefs délais.
        </Text>
      </CardHeader>

      <CardBody>
        <Stack spacing="20px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input backgroundColor="#F4F4F4" h="51px" {...register("firstName")} placeholder="Prénom" color="black" required/>
                <Input backgroundColor="#F4F4F4" h="51px" {...register("lastName")} placeholder="Nom" color="black" required/>
              </div>

              <Input backgroundColor="#F4F4F4" h="51px" {...register("email")} placeholder="Email" color="black" type="email" required/>
              <Input backgroundColor="#F4F4F4" h="51px" {...register("subject")} placeholder="Sujet" color="black" required/>
              <Textarea
  backgroundColor="#F4F4F4"
  h="127px"
  {...register("notes")}
  placeholder="Description"
  color="black"
  resize="none" // optional: prevents resizing by user
  required
/>
              <Button
              type="submit"
              borderRadius="10px"
              backgroundColor="#5A7CA9"
              w="full"
              h="51px"
              color="white"
              fontSize="lg"
            >envoyer</Button>           
             </div>
          </form>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GetInTouch;
