import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import { Link as NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Box>
      <Flex as={'nav'} gap={'32px'}>
        <Box><Link as={NavLink} to="/">Home</Link></Box>
        <Box><Link as={NavLink} to="/contacts">Contacts</Link></Box>
      </Flex>
    </Box>
  )
}