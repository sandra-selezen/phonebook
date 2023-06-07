import { useDispatch } from 'react-redux';
import { updateContact, deleteContact } from 'redux/operations';
import {
  VStack,
  StackDivider,
  Text,
  Box,
  Button,
  Spinner,
  Flex,
  useDisclosure
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiUserUnfollowFill, RiUserSettingsFill } from 'react-icons/ri';
import { ContactModal } from 'components/Modal/ContactModal';
import { ChangeContactForm } from 'components/ContactsForm/ChangeContactForm';
import { toast } from 'react-hot-toast';

export const ContactList = ({ contacts, isLoading, error }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [selectedContact, setSelectedContact] = useState(null);
  
  const dispatch = useDispatch();
  
  const onDeleteContact = (contactId) => dispatch(deleteContact(contactId));
  
  const handleEditContact = (contact) => {
    setSelectedContact(contact);
    onOpen();
  };

  const onHandleSubmit = (values) => {
    dispatch(updateContact(values));
    setSelectedContact(null);
    toast.success('Contact updated successfully');
    onClose();
  };

  return (
    <>
      {isLoading && <Spinner />}
      {!error && !isLoading && contacts?.length > 0 && (
        <VStack
          align='stretch'
          maxHeight={'340px'}
          overflow={'scroll'}
          spacing={4}
          divider={<StackDivider borderColor={'white'} />}>
          {contacts.map(contact => (
            <Flex key={contact.id} justifyContent={'space-between'} alignItems={'center'}>
              <Box>
                <Text>{contact.name}: {contact.number}</Text>
              </Box>
              <Flex>
                <Button title='Edit contact' aria-label='Edit contact' mr={'12px'} onClick={() => handleEditContact(contact)}><RiUserSettingsFill /></Button>
                <Button title='Delete contact' aria-label='Delete contact' onClick={() => onDeleteContact(contact.id)}><RiUserUnfollowFill /></Button>
              </Flex>
            </Flex>
          ))}
        </VStack>
      )}
      <ContactModal isOpen={isOpen} onClose={onClose} title={'Change contact'}>
        <ChangeContactForm initialValues={selectedContact} onSubmit={onHandleSubmit} />
      </ContactModal>
    </>
  )
}