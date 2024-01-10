import { TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { BackgroundColor } from ".";

interface ComponentProps {
  disabled?: boolean;
}

export const Container = styled.View<ComponentProps>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const TouchArea = styled.View``;

interface InputContent {
  hasError?: boolean;
  disabled?: boolean;
  backgroundColor?: BackgroundColor;
  labelColor?: string;
  hasTextArea?: boolean;
}

export const Label = styled.Text<InputContent>`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 6px;
  color: ${({ labelColor }) => labelColor};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: 800;
`;

export const Content = styled(TouchableOpacity).attrs<InputContent>(
  ({ theme }) => ({
    placeholderTextColor: theme.colors.subtext,
  })
)<InputContent>`
  width: 100%;
  height: ${({ hasTextArea }) => (hasTextArea ? "120px" : "56px")};
  padding: ${({ hasTextArea }) => (hasTextArea ? "16px" : "0 16px")};
  border-radius: 12px;
  flex-direction: row;
  align-items: ${({ hasTextArea }) => (hasTextArea ? "flex-start" : "center")};
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: 800;

  background-color: ${({ theme, disabled, backgroundColor }) => {
    return disabled ? theme.colors.lightBlue : backgroundColor;
  }};

  border: 1px solid
    ${({ hasError, theme }) => {
      return hasError ? theme.colors.danger : theme.colors.border;
    }};
`;

interface InputProps {
  disabled: boolean;
  hasSecureIndicator: boolean;
  colorText?: string;
}

export const Input = styled(TextInput)<InputProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: 700;
  width: 100%;
  padding-right: 20px;
  color: ${({ disabled, theme, colorText }) =>
    disabled ? theme.colors.darkGray : colorText};
  font-weight: 700;
`;

export const ValidationMessage = styled.Text`
  font-size: 12px;
  margin-top: 4px;
  font-weight: 700;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.danger};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
