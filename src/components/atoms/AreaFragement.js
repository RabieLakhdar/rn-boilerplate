import React, {memo} from 'react';
import {SafeAreaView} from 'react-native';

const AreaFragement = props => {
  return <SafeAreaView {...props}>{content}</SafeAreaView>;
};
export default memo(AreaFragement);
