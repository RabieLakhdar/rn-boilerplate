import React, {memo} from 'react';
import {Text} from 'react-native';

const Title = props => {
  return <Text {...props}>{props.children}</Text>;
};
export default memo(Title);
