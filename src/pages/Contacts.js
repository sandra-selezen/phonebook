import {
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
import { ContactForm } from 'components/ContactsForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { CommonContainer } from 'components/Container/CommonContainer';
import React from 'react';

const Contacts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <CommonContainer>
      <Text>Contacts Page</Text>
      <Button onClick={onOpen}>Add new contact</Button>
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
      <ContactList />
    </CommonContainer>
  )
};

export default Contacts;