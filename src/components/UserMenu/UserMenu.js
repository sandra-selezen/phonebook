import { Button, Text, Icon, HStack, Avatar } from '@chakra-ui/react';
import { RiLogoutBoxFill } from "react-icons/ri";
import { useAuth } from 'hooks/hooks';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
  return (
    <HStack>
      <Avatar name={user.name} src='https://bit.ly/broken-link' />
      <Text>{user.name}</Text>
      <Button type='button' onClick={handleLogOut}><Icon as={RiLogoutBoxFill} />Log Out</Button>
    </HStack>
  )
}