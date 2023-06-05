import React, { Suspense } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <>
      <Header />
      <Box as='main'>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
      <Toaster position="top-center" />
    </>
  )
};