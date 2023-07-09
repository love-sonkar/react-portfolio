import React from "react";
import ContactForm from "../components/ContactForm";
import MapsContainer from "../components/MapsContainer";
import { Container, ContainerCenter, Heading } from "../components/utility";

const Contact = () => {
  return (
    <Container className="p-4">
      <Heading className="text-center">Contact Us</Heading>
      <ContainerCenter className="p-4 m-4 gap-3 flex-col md:flex-row">
        <ContactForm />
        <MapsContainer />
      </ContainerCenter>
    </Container>
  );
};

export default Contact;
