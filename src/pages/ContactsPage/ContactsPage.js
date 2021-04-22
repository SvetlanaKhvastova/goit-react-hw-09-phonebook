import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import Contacts from "../../components/Contacts/Contacts";
import { contactsOperations } from "../../redux/todos/index";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />

        <Contacts />
      </Container>
    </>
  );
}
