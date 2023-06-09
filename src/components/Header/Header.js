import React from 'react';
import { Stack } from '@chakra-ui/react';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Stack
      as={'header'}
      direction={['column', 'column', 'row', 'row']}
      alignItems={'center'}
      justifyContent={'space-between'}
      padding={'24px 32px'}
      bgGradient='linear-gradient(90deg, #2A6571 0%, #C15553 100%)'
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Stack>
  )
}