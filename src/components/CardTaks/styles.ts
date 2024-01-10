import styled from "styled-components/native";

interface IListCard {
  completed: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.shadowColor} 3px 5px 5px;
  border-radius: ${({ theme }) => theme.spacings.small};
  padding: ${({ theme }) => theme.spacings.xlarge};
  margin-bottom: ${({ theme }) => theme.spacings.small};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  elevation: 5;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.small};
`;

export const TextTask = styled.Text<IListCard>`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  line-height: 24px;
  color: ${({ theme, completed }) =>
    completed ? theme.colors.red : theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 16px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const CardImage = styled.Image`
  margin-top: ${({ theme }) => theme.spacings.small};
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Card = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;
