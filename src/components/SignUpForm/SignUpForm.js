import { Button, FormControl, FormLabel, Input, Icon } from '@chakra-ui/react';
import { Field, Formik, Form } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { RiUserFill, RiMailFill, RiLock2Fill, RiLoginBoxFill } from "react-icons/ri";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export const SignUpForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor='name'><Icon as={RiUserFill} />Full name</FormLabel>
            <Field as={Input} id='name' name='name' type='text' placeholder='Enter your full name' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='email'><Icon as={RiMailFill} />Email</FormLabel>
            <Field as={Input} id='email' name='email' type='email' placeholder='Enter email' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='password'><Icon as={RiLock2Fill} />Password</FormLabel>
            <Field as={Input} id='password' name='password' type='password' placeholder='Enter password' />
          </FormControl>
          <Button type='submit'><Icon as={RiLoginBoxFill} />Sign Up</Button>
        </Form>
      )}
    </Formik>
  )
};