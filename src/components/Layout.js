import React, { Suspense } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';
import bgImage from '../images/login-bg.png';

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Box as='main' bgImage={bgImage} bgPosition="center" bgRepeat="no-repeat" objectFit={'cover'} objectPosition={'center'}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
      <Toaster position="top-center" />
    </Box>
  )
};