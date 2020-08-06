import React, {memo} from 'react';
import {SafeAreaView} from 'react-native';

const AreaView = props => {
  return <SafeAreaView {...props}>{props.children}</SafeAreaView>;
};
export default memo(AreaView);
