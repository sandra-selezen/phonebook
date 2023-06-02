import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import { Link as NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box>
      <Flex gap={'32px'}>
        <Box><Link as={NavLink} to="/signup">Sign Up</Link></Box>
        <Box><Link as={NavLink} to="/login">Log In</Link></Box>
      </Flex>
    </Box>
  )
}