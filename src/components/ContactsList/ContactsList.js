import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { VStack, StackDivider, Text, Box, Button, Flex, Spinner } from '@chakra-ui/react';
import React from 'react';
import { RiUserUnfollowFill } from 'react-icons/ri';

export const ContactList = ({ contacts, isLoading, error }) => {

  const dispatch = useDispatch();
  
  const onDeleteContact = (contactId) => dispatch(deleteContact(contactId));

  return (
    <>
      {isLoading && <Spinner />}
      {!error && !isLoading && contacts?.length > 0 && (
        <VStack
          height={'340px'}
          overflow={'scroll'}
          spacing={4}
          divider={<StackDivider
            borderColor={'white'} />}>
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