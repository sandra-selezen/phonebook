import { Box, Text, Link } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  return (
    <Box as='footer' padding={'24px 32px'} textAlign={'center'}>
      <Text>
        &#169; 2023 | All Rights Reserved | Developed with 💙💛 by <Link href='https://www.linkedin.com/in/aleksandra-selezen/' isExternal>Sandra Selezen</Link>
      </Text>
    </Box>
  )
}