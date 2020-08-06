import React, {memo} from 'react';
import CodePin from 'react-native-pin-code';

const Pin = (props) => {
  return <CodePin  {...props} />;
};
export default memo(Pin);
