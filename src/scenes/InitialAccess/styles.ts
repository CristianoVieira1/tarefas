import { heightPercentageToDP } from "@utils/DeviceResolution";
import { ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.blue};
  width: ${({ theme }) => theme.device.width}px;
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacings.medium};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  font-weight: bold;
  text-align: justify;
`;

export const Submit = styled(Animatable.View)`
  justify-content: center;
  align-items: center;
  padding-top: ${heightPercentageToDP("10%")}px;
  width: 100%;
`;

export const Background = styled(ImageBackground).attrs(({ theme }) => ({}))`
  z-index: -1;
`;
