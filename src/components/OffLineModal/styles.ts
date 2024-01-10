import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 16px;
`;

export const ButtonArea = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacings.xxxlarge};
  gap: ${({ theme }) => theme.spacings.medium};
`;
