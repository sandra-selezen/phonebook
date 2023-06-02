import React from 'react';
import { Flex } from '@chakra-ui/react';
import { MainNav } from 'components/MainNav/MainNav';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Header = () => {
  return (
    <Flex as={'header'} justifyContent={'space-between'} padding={'24px 32px'}>
      <MainNav />
      <AuthNav />
    </Flex>
  )
}