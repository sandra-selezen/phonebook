import React, { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { Layout } from './Layout';

const HomePage = lazy(() => import("../pages/Home"));
const AddContactPage = lazy(() => import("../pages/AddContact"));
const ContactsPage = lazy(() => import("../pages/Contacts"));
const SignUpPage = lazy(() => import("../pages/SignUp"));
const LoginPage = lazy(() => import("../pages/Login"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="add-contact" element={<AddContactPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};