import { Button, FormControl, FormLabel, Input, Icon } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { RiPhoneFill, RiUserFill, RiUserAddFill } from "react-icons/ri";
import { useContacts } from 'hooks/hooks';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addContact } from 'redux/operations';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const initialValues = {
  name: "",
  number: "",
};

export const ContactForm = () => {

  const contacts = useContacts();
  const dispatch = useDispatch();

  const isReplicated = ({ name, number }) => {
    const normalizedContactName = name.toLowerCase().trim();
    const normalizedContactNumber = number.trim();
    const replicatedContactName = contacts.find(contact => {
      return (contact.name.toLowerCase().trim() === normalizedContactName && contact.number.trim() === normalizedContactNumber)
    });

    return Boolean(replicatedContactName);
  }

  const onAddContact = ({ name, number }) => {

    isReplicated({ name, number })
      ? toast('This contact is already in your Phonebook!', { icon: '👻', })
      : dispatch(addContact({ name, number }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        console.log(values);
        onAddContact({ ...values });
        actions.resetForm();
      }}
    >
      <Form onSubmit={onAddContact}>
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
    </Formik>
  )
};