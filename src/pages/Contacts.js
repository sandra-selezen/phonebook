import {
  VisuallyHidden,
  Heading,
  Box,
  Text,
  Button,
  useDisclosure,
  Stack
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useError, useFilteredContacts, useIsLoading } from 'hooks/hooks';

import { ContactModal } from 'components/Modal/ContactModal';
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
      <Stack
        direction={['column', 'column', 'row', 'row']}
        justifyContent={'space-between'}
        alignItems={'center'}
        marginBottom={'12px'}
      >
        {!contacts.length && !error && !isLoading && (
          <Box><Text fontWeight={'700'}>Your Phonebook is empty 🥺</Text></Box>
        )}
        {contactsCount > 0 && (
          <Box><Text fontWeight={'700'}>You have {contactsCount === 1 ? `${contactsCount} contact` : `${contactsCount} contacts`} in the Phonebook 😀</Text></Box>
        )}
        <Box><Button onClick={onOpen}>Add new contact</Button></Box>
      </Stack>
      
      <Filter />
      <ContactModal isOpen={isOpen} onClose={onClose} title={'Add new contact'}>
        <ContactForm />
      </ContactModal>
      <ContactList contacts={contacts} isLoading={isLoading} error={error} />
    </CommonContainer>
  )
};

export default Contacts;