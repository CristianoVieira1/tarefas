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

export const Text = styled.Text`
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

export const UploadArea = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImagePreview = styled.View`
  margin: 0 10px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 10px;
`;

export const AttachmentPreview = styled.View`
  margin: 0 10px;
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

export const ProgressContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacings.small};
  padding: 0 ${({ theme }) => theme.spacings.small};
`;

export const ProgressText = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 38px;
`;
