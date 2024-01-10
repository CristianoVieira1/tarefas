import React, { useEffect, useState } from "react";
import { Animated, View } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialIcons";
import theme from "../../theme";
import Button from "../Button";
import InputText from "../InputText";
import * as S from "./styles";

interface CreateTaskModalProps {
  file: string;
  image: string;
  isVisible: boolean;
  onClose: () => void;
  onAction: () => void;
  textInput: string;
  onActionImagePicker: () => void;
  onActionDocumentPicker: () => void;
  setTextInput: (text: string) => void;
}

export const TestIds: { [key: string]: string } = {
  rootView: "DetailsModal/rootView",
};

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  file,
  image,
  onClose,
  onAction,
  textInput,
  isVisible,
  setTextInput,
  onActionImagePicker,
  onActionDocumentPicker,
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisibleInternal, setIsVisibleInternal] = useState(false);
  const animatedProgress = new Animated.Value(0);

  const NotFoundImage =
    "https://firebasestorage.googleapis.com/v0/b/tasks-6cb2d.appspot.com/o/notFoundImage.png?alt=media&token=efac920c-f3b9-4924-8cc3-17e08b48830c";

  const getFileName = (uri: string, maxLength = 10) => {
    const pathArray = uri.split("/");
    const fileName = pathArray[pathArray.length - 1];

    if (fileName.length > maxLength) {
      const truncatedName = fileName.substring(0, maxLength - 3) + "...";
      return truncatedName;
    }

    return fileName;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
        Animated.timing(animatedProgress, {
          toValue: progress + 1,
          duration: 10000,
          useNativeDriver: false,
        }).start();
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress, isVisibleInternal]);

  useEffect(() => {
    if (isVisible) {
      setProgress(0);
      animatedProgress.setValue(0);
      setIsVisibleInternal(true);
    } else {
      setIsVisibleInternal(false);
    }
  }, [isVisible]);

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <S.Container>
        <S.Content>
          <S.Title>Criar Tarefa</S.Title>
          <InputText
            mask="default"
            value={textInput}
            placeholder="Digite o título da tarefa"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            onChangeText={(text) => setTextInput(text)}
            label="Tarefa *"
          />

          <S.Wrapper>
            <S.UploadArea onPress={onActionImagePicker}>
              <S.CardImage
                source={{
                  uri: image ? image : NotFoundImage,
                }}
              />

              <S.Text>Anexar imagem</S.Text>
            </S.UploadArea>

            <S.UploadArea onPress={onActionDocumentPicker}>
              {file ? (
                <S.ProgressContainer>
                  <View>
                    <S.ProgressText>{`${progress.toFixed(0)}%`}</S.ProgressText>
                  </View>
                </S.ProgressContainer>
              ) : (
                <Icon
                  name="cloud-upload"
                  size={40}
                  color={theme.colors.gray}
                  style={{
                    marginTop: 10,
                  }}
                />
              )}

              <S.Text>
                {file ? `Arquivo: ${getFileName(file)}` : "Anexar arquivo"}
              </S.Text>
            </S.UploadArea>
          </S.Wrapper>

          <S.ButtonArea>
            <Button
              title="Cancelar"
              type="cancel"
              size="small"
              onPress={onClose}
            />

            <Button
              title="Criar Tarefa"
              type={textInput === "" ? "disable" : "accept"}
              size="small"
              onPress={onAction}
              disabled={textInput === ""}
            />
          </S.ButtonArea>
        </S.Content>
      </S.Container>
    </Modal>
  );
};

export default CreateTaskModal;
