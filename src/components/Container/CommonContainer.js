import { Container } from '@chakra-ui/react';
import React from 'react';

export const CommonContainer = ({ children }) => {
  return (
    <Container width={['container.sm', 'container.md', 'container.lg', 'container.xl']}>
      {children}
    </Container>
  )
}