import { heightPercentageToDP } from "@utils/DeviceResolution";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  padding: ${({ theme }) => theme.spacings.medium};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  position: absolute;
  elevation: 40;
  bottom: 50px;
  right: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
`;

export const TouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 20px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.purple};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  font-weight: bold;
  text-align: justify;
`;

export const EmptyListImage = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: ${heightPercentageToDP("25%")}px;
`;

export const Filter = styled.View`
  padding-left: ${({ theme }) => theme.spacings.medium};
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacings.medium};
`;

export const FilterButtonText = styled.Text`
  margin-left: ${({ theme }) => theme.spacings.medium};
`;

export const ClearFilterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacings.medium};
`;

export const ClearFilterButtonText = styled.Text`
  margin-left: ${({ theme }) => theme.spacings.medium};
  color: red;
`;
