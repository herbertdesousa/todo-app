import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '@/styles/colors';

interface ICheckboxButtonProps {
  isChecked: boolean;
}

export const CheckboxButton = styled.TouchableOpacity<ICheckboxButtonProps>`
  align-items: center;
  justify-content: center;

  height: 24px;
  width: 24px;
  border-radius: 8px;
  border: 2px solid ${colors.black4};

  ${props =>
    props.isChecked &&
    css`
      border: 0;
      background-color: ${colors.green};
    `}
`;

export const CheckboxIcon = styled(MaterialIcons as any)`
  color: ${colors.white};
`;
