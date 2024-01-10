import { ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${({ theme }) => theme.device.width}px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.xxxlarge};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  margin-bottom: 10px;
`;

export const Logo = styled(Animatable.View)`
  align-items: center;
  justify-content: center;
`;

export const Background = styled(ImageBackground).attrs(({ theme }) => ({}))`
  z-index: -1;
`;
