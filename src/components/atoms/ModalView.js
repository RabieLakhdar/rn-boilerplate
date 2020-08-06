import React, {memo} from 'react';
import Modal from 'react-native-modal';

const ModalView = (props) => {
  return <Modal {...props}>{props.children}</Modal>;
};
export default memo(ModalView);
