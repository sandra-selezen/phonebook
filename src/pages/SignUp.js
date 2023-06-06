import React from 'react';
import { Heading } from '@chakra-ui/react';
import { CommonContainer } from 'components/Container/CommonContainer';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';

const SignUp = () => {
  return (
    <CommonContainer>
      <Heading textAlign={'center'} marginBottom={'12px'}>Sign Up</Heading>
      <SignUpForm />
    </CommonContainer>
  )
};

export default SignUp;