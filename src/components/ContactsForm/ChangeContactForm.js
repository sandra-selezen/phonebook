import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Icon,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { RiPhoneFill, RiUserFill } from "react-icons/ri";

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

export const ChangeContactForm = ({ initialValues, onSubmit }) => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form>
        <FormControl marginBottom={'12px'}>
          <FormLabel htmlFor='name'><Icon as={RiUserFill} mr={'8px'} />Name</FormLabel>
          <Field as={Input} id='name' name='name' type='text' />
        </FormControl>
        <FormControl marginBottom={'12px'}>
          <FormLabel htmlFor='number'><Icon as={RiPhoneFill} mr={'8px'} />Number</FormLabel>
          <Field as={Input} id='number' name='number' type='tel' />
        </FormControl>
        <Button type='submit'>Change contact</Button>
      </Form>
    </Formik>
  )

}