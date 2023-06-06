import { Box, Text, Link } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  return (
    <Box
      as='footer'
      padding={'24px 32px'}
      textAlign={'center'}
      bgGradient='linear(90deg, #2A6571 0%, #C15553 100%)'
    >
      <Text>
        &#169; 2023 | All Rights Reserved | Developed with 💙💛 by{" "}
        <Link href='https://github.com/sandra-selezen' isExternal>Sandra Selezen</Link>
      </Text>
    </Box>
  )
}