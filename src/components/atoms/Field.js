import React, {memo} from 'react';
import {TextInput} from 'react-native';

const Field = ({...props}) => {
  return <TextInput {...props} />;
};
export default memo(Field);
