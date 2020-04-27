import React, {memo} from 'react';
import Title from 'components/atoms/Title';
import {TouchableOpacity} from 'react-native';

const Button = (props) => {
  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};
export default memo(Button);
