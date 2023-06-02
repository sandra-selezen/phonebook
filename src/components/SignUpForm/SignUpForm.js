import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field, Formik, Form } from 'formik';
import React from 'react';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const initialValues = {
  name: "",
  email: "",
  password: "",
}

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
            <FormLabel htmlFor='name'>Full name</FormLabel>
            <Field as={Input} id='name' name='name' type='text' placeholder='Enter your full name' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Field as={Input} id='email' name='email' type='email' placeholder='Enter email' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Field as={Input} id='password' name='password' type='password' placeholder='Enter password' />
          </FormControl>
          <Button type='submit'>Sign Up</Button>
        </Form>
      )}
    </Formik>
  )
}