import React, { lazy, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Text } from '@chakra-ui/react';
import { Layout } from './Layout';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { useAuth } from 'hooks/hooks';
import { refreshUser } from 'redux/auth/operations';

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
        <Route path="contacts" element={<PrivateRoute component={ContactsPage} redirectTo='/login' />} />
        <Route path="register" element={<RestrictedRoute component={SignUpPage} redirectTo='/contacts' />} />
        <Route path="login" element={<RestrictedRoute component={LoginPage} redirectTo='/contacts' />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  )
};