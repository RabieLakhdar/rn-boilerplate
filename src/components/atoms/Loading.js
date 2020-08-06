import React, {memo} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

const Loading = (props) => {
  return <Spinner {...props} />;
};
export default memo(Loading);
