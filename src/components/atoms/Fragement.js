import React, {memo} from 'react';
import {View} from 'react-native';

const Fragement = props => {
  return <View {...props}>{props.children}</View>;
};
export default memo(Fragement);
