import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure
} from '@chakra-ui/react';
import { ContactForm } from 'components/ContactsForm/ContactForm';
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
          <ModalFooter>
            <Button onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
        
      </Modal>
    </CommonContainer>
  )
};

export default Contacts;