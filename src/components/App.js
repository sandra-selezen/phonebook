import React from 'react';
// import { lazy } from "react";
// import { Routes, Route } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

// const HomePage = lazy(() => import("../pages/Home"));
// const ContactsPage = lazy(() => import("../pages/Contacts"));
// const SignUpPage = lazy(() => import("../pages/SignUp"));
// const LoginPage = lazy(() => import("../pages/Login"));

export const App = () => {
  return (
    <div>
      <Header />
      Welcome to your Phonebook
      <Footer />
    </div>
    // <Routes>
    //   <Route path="/" element={<HomePage />}>
    //     <Route index element={<HomePage />} />
    //     <Route path="/contacts" element={<ContactsPage />} />
    //     <Route path="/signup" element={<SignUpPage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="*" element={<HomePage />} />
    //   </Route>
    // </Routes>
  );
};
