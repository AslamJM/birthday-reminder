import {Modal, Text, Button} from 'native-base';
import React from 'react';
import {useAtom, useAtomValue} from 'jotai';
import {modalOpen, userIdAtom, modelTypeAtom} from '../atoms';
import {deleteUser} from '../firebase/auth';
import {storeData} from '../storage';

const ConsentModal = () => {
  const [open, setOpen] = useAtom(modalOpen);
  const [userId, setUserId] = useAtom(userIdAtom);
  const type = useAtomValue(modelTypeAtom);

  const logout = async () => {
    await storeData('');
    setUserId('');
  };

  const deleteAccount = async () => {
    await deleteUser(userId);
    storeData('');
    setUserId('');
  };

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)}>
      <Modal.Content>
        <Modal.Header>Warning!!</Modal.Header>
        <Modal.Body>
          <Text>
            {type === 'logout'
              ? 'do you want to log out from he app?'
              : "do you want to delete your account? you can't go back."}
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="success"
              onPress={type === 'logout' ? logout : deleteAccount}>
              Sure
            </Button>
            <Button
              variant="solid"
              colorScheme="error"
              onPress={() => setOpen(false)}>
              No
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ConsentModal;
