import { useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { VStack, StackDivider, Text, Box, Button, Flex } from '@chakra-ui/react';
import { useError, useFilteredContacts, useIsLoading } from 'hooks/hooks';
import React, { useEffect } from 'react';
import { RiUserUnfollowFill } from 'react-icons/ri';

export const ContactList = () => {

  const contacts = useFilteredContacts();
  const isLoading = useIsLoading();
  const error = useError();

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = (contactId) => dispatch(deleteContact(contactId));

  return (
    <>
      {!contacts.length && !error && !isLoading && (
        <Box><Text>Your Phonebook is empty</Text></Box>
      )}
      {!error && !isLoading && contacts?.length > 0 && (
        <VStack spacing={4} divider={<StackDivider borderColor={'white'} />}>
          {contacts.map(contact => (
            <Flex key={contact.id} alignItems={'center'} gap={'24px'}>
              <Box>
                <Text>{contact.name}: {contact.number}</Text>
              </Box>
              <Box>
                <Button title='Delete contact' aria-label='Delete contact' onClick={() => onDeleteContact(contact.id)}><RiUserUnfollowFill /></Button>
              </Box>
            </Flex>
          ))}
        </VStack>
      )}
      
    </>
  )
}