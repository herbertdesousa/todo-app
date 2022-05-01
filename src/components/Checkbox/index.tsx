/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { CheckboxButton, CheckboxIcon } from './styles';

interface ICheckboxProps {
  style?: StyleProp<ViewStyle>;

  defaultValue?: boolean;
  onChange?(checked: boolean): void;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  style,
  defaultValue,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(defaultValue || false);
  return (
    <CheckboxButton
      isChecked={isChecked}
      activeOpacity={0.8}
      style={style}
      onPress={() => {
        if (onChange) onChange(!isChecked);
        setIsChecked(st => !st);
      }}
    >
      {isChecked && <CheckboxIcon name="check" size={20} />}
    </CheckboxButton>
  );
};

export default Checkbox;
