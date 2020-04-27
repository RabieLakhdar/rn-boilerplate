import React, {memo} from 'react';
import Title from '_atoms/Title';
import {TouchableOpacity} from 'react-native';

const Button = ({title, titleStyle, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <Title title={title} style={titleStyle} />
    </TouchableOpacity>
  );
};
export default memo(Button);
