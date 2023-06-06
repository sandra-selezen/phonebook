import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";

import React from 'react';

export const ContactModal = ({ isOpen, onClose, title, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} variant='sunset'>
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='20%'
        backdropBlur='2px'
      />
      <ModalContent>
      <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}