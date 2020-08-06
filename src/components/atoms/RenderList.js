import React, {memo} from 'react';
import {FlatList} from 'react-native';

const RenderList = (props) => {
  return <FlatList {...props} />;
};
export default memo(RenderList);
