import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Header = () => {
  return (
    <Flex as={'header'} justifyContent={'space-between'} padding={'24px 32px'}>
      <Navigation />
      <AuthNav />
    </Flex>
  )
}