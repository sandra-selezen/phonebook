import React, { lazy, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { Layout } from './Layout';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/hooks';
import { refreshUser } from 'redux/auth/operations';
import { Text } from '@chakra-ui/react';

const HomePage = lazy(() => import("../pages/Home"));
const ContactsPage = lazy(() => import("../pages/Contacts"));
const SignUpPage = lazy(() => import("../pages/SignUp"));
const LoginPage = lazy(() => import("../pages/Login"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (<Text>Refreshing user...</Text>) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  )
};