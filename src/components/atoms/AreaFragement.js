import React, {memo} from 'react';
import {SafeAreaView} from 'react-native';

const AreaFragement = props => {
  return <SafeAreaView {...props}>{props.children}</SafeAreaView>;
};
export default memo(AreaFragement);
