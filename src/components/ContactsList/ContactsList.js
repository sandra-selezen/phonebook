import { VStack, Text, Box, Button, Flex } from '@chakra-ui/react';
import { useError, useFilteredContacts, useIsLoading } from 'hooks/hooks';
import React from 'react';
import { RiUserUnfollowFill } from 'react-icons/ri';

export const ContactList = () => {

  const contacts = useFilteredContacts();
  const isLoading = useIsLoading();
  const error = useError();

  return (
    <>
      {!contacts.length && !error && !isLoading && (
        <Box><Text>Your Phonebook is empty</Text></Box>
      )}
      {!error && !isLoading && contacts?.length > 0 && (
        <VStack spacing='24px'>
          {contacts.map(contact => (
            <Flex key={contact.id} alignItems={'center'}>
              <Text>{contact.name}: {contact.number}</Text>
              <Button title='Delete contact' aria-label='Delete contact'><RiUserUnfollowFill /></Button>
            </Flex>
          ))}
        </VStack>
      )}
      
    </>
  )
}