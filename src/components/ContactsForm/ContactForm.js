import { Button, FormControl, FormLabel, Input, Icon } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { RiPhoneFill, RiUserFill, RiUserAddFill } from "react-icons/ri";

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
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
            <FormLabel htmlFor='name'><Icon as={RiUserFill} />Name</FormLabel>
            <Field as={Input} id='name' name='name' type='text' placeholder='Enter contact name' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='number'><Icon as={RiPhoneFill} />Number</FormLabel>
            <Field as={Input} id='number' name='number' type='tel' placeholder='Enter contact phone number' />
          </FormControl>
          <Button type='submit'><Icon as={RiUserAddFill} />Add contact</Button>
        </Form>
      )}
    </Formik>
  )
};