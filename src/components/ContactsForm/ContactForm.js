import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
});

const initialValues = {
  name: "",
  number: "",
};

export const ContactForm = () => {
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
            <Field as={Input} id='name' name='name' type='text' placeholder='Enter contact name' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='number'>Email</FormLabel>
            <Field as={Input} id='number' name='number' type='number' placeholder='Enter contact phone number' />
          </FormControl>
          <Button type='submit'>Sign Up</Button>
        </Form>
      )}
    </Formik>
  )
};