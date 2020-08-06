import React, {memo} from 'react';
import {ScrollView} from 'react-native';

const ScrollV = props => {
  return <ScrollView {...props}>{conprops.children}</ScrollView>;
};
export default memo(ScrollV);
