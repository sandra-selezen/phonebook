import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import { Link as NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box>
      <Flex as={'nav'} gap={'32px'}>
        <Box><Link as={NavLink} to="/">Home</Link></Box>
        {isLoggedIn && (<Box><Link as={NavLink} to="/contacts">Contacts</Link></Box>)}
      </Flex>
    </Box>
  )
}