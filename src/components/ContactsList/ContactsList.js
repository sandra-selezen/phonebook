import { VStack, Text, Box } from '@chakra-ui/react';
import { useError, useFilteredContacts, useIsLoading } from 'hooks/hooks';
import React from 'react';

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
          {contacts.map}
          <Text></Text>
        </VStack>
      )}
      
    </>
  )
}