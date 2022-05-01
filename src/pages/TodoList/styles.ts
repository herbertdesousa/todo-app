import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '@/styles/colors';
import { fonts } from '@/styles/fonts';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.black1};
`;

export const Header = styled.View`
  margin: 64px 0 48px 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: ${fonts.semibold};
`;

export const ListHiddenItem = styled.TouchableOpacity`
  position: absolute;
  right: 0px;

  align-items: flex-end;
  padding-right: 12px
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.red};
`;

export const ListHiddenItemIcon = styled(MaterialIcons as any)`
  color: ${colors.white};
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  background: ${colors.black3};

  margin-top: 24px;
`;

export const AddButtonIcon = styled(MaterialIcons as any)`
  color: ${colors.white};
  margin-right: 8px;
`;
