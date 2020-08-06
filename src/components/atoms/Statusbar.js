import React, {memo} from 'react';
import {StatusBar} from 'react-native';

const Statusbar = (props) => {
  return <StatusBar {...props} />;
};
export default memo(Statusbar);
