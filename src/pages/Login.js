import React from 'react';
import { CommonContainer } from 'components/Container/CommonContainer';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Heading } from '@chakra-ui/react';

const Login = () => {
  return (
    <CommonContainer>
      <Heading textAlign={'center'} marginBottom={'12px'}>Log In</Heading>
      <LoginForm />
    </CommonContainer>
  )
};

export default Login;