import styled from "styled-components/native";
import theme from "../../theme";

export type TypeButton = "accept" | "disable" | "link" | "auxiliary" | "cancel";

export type SizeButton = "small" | "medium" | "large";
interface ButtonProps {
  type: TypeButton;
  size: SizeButton;
}

interface ButtonTitleProps {
  type: TypeButton;
}

const buttonColor = {
  accept: theme.colors.green,
  cancel: theme.colors.red,
  link: theme.colors.white,
  disable: theme.colors.lightGray,
  auxiliary: theme.colors.white,
};

const buttonTitleColor = {
  accept: theme.colors.white,
  cancel: theme.colors.white,
  link: theme.colors.darkGray,
  disable: theme.colors.white,
  auxiliary: theme.colors.darkGray,
};

const sizeButton = {
  small: "40",
  medium: "70",
  large: "100",
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: ${({ size }) => (size ? sizeButton[size] : 100)}%;
  background: ${({ type }) => buttonColor[type]};
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const TitleButton = styled.Text<ButtonTitleProps>`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ type }) => buttonTitleColor[type]};
  text-decoration-color: ${({ theme }) => theme.colors.orange};
`;
