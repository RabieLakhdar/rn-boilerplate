import React, {memo} from 'react';
import {ScrollView} from 'react-native';

const ScrollFragement = props => {
  return <ScrollView {...props}>{conprops.children}</ScrollView>;
};
export default memo(ScrollFragement);
