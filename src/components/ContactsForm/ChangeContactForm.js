import { Button, FormControl, FormLabel, Input, Icon } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { RiPhoneFill, RiUserFill } from "react-icons/ri";
import { useContacts } from 'hooks/hooks';
import { useDispatch } from 'react-redux';
import { changeContact } from 'redux/operations';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const initialValues = {
  name: "",
  number: "",
};

export const ChangeContactForm = () => {

  const contacts = useContacts();
  console.log(contacts);
  const dispatch = useDispatch();

  const onChangeContact = () => {

  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onChangeContact}
    >
      <Form>
        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='name'><Icon as={RiUserFill} mr={'8px'} />Name</FormLabel>
          <Field as={Input} id='name' name='name' type='text' placeholder='Enter contact name' />
        </FormControl>
        <FormControl isRequired marginBottom={'12px'}>
          <FormLabel htmlFor='number'><Icon as={RiPhoneFill} mr={'8px'} />Number</FormLabel>
          <Field as={Input} id='number' name='number' type='tel' placeholder='Enter contact phone number' />
        </FormControl>
        <Button type='submit'>Change contact</Button>
      </Form>
    </Formik>
  )

}