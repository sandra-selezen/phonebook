import {
  VisuallyHidden,
  Heading,
  Box,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useError, useFilteredContacts, useIsLoading } from 'hooks/hooks';

import { ContactForm } from 'components/ContactsForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { CommonContainer } from 'components/Container/CommonContainer';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {

  const contacts = useFilteredContacts();
  const isLoading = useIsLoading();
  const error = useError();
  const contactsCount = contacts.length;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <CommonContainer>
      <VisuallyHidden><Heading>Contacts Page</Heading></VisuallyHidden>
      {!contacts.length && !error && !isLoading && (
        <Box><Text>Your Phonebook is empty</Text></Box>
      )}
      {contactsCount > 0 && (
        <Box><Text>You have {contactsCount === 1 ? `${contactsCount} contact` : `${contactsCount} contacts`} in Phonebook</Text></Box>
      )}
      <Button onClick={onOpen}>Add new contact</Button>
      <Filter />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContactForm />
          </ModalBody>
        </ModalContent>
      </Modal>
      <ContactList contacts={contacts} isLoading={isLoading} error={error} />
    </CommonContainer>
  )
};

export default Contacts;