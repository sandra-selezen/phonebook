import { Box, Button, Text } from '@chakra-ui/react';
import { useAuth } from 'hooks/hooks';
import React from 'react';

export const UserMenu = () => {
  const { user } = useAuth();
  return (
    <Box>
      <Text>{user.name}</Text>
      <Button type='button'>Logout</Button>
    </Box>
  )
}