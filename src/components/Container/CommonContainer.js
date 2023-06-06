import { Container } from '@chakra-ui/react';
import React from 'react';

export const CommonContainer = ({ children }) => {
  return (
    <Container
      width={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      position={'absolute'}
      top={'50%'}
      left={'50%'}
      transform='translate(-50%, -50%)'
      paddingTop={'40px'}
      paddingBottom={'40px'}
    >
      {children}
    </Container>
  )
}