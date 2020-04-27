import React, {memo} from 'react';
import {Image} from 'react-native';

const Picture = ({...props}) => {
  return <Image {...props} />;
};
export default memo(Picture);
