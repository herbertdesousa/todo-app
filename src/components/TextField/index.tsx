import React from 'react';
import { TextInputProps } from 'react-native';

import { Input } from './styles';

const TextField: React.FC<TextInputProps> = ({ ...props }) => {
  return <Input {...props} />;
};

export default TextField;
