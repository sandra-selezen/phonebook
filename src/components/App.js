import React from 'react';
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { SignUpForm } from './SignUpForm/SignUpForm';

export const App = () => {
  return (
    <div>
      <Header />
      <SignUpForm />
      Welcome to your Phonebook
      <Footer />
    </div>
  );
};
