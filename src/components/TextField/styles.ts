import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '@/styles/colors';
import { fonts } from '@/styles/fonts';

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.gray1 as any,
})`
  font-family: ${fonts.medium};
  background-color: ${colors.black2};
  padding: 4px 8px;
  border-radius: 2px;
  border: 1px solid ${colors.black4};
`;
