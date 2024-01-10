import React from "react";
import Modal from "react-native-modal";
import Button from "../Button";
import * as S from "./styles";

interface OffLineModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const TestIds: { [key: string]: string } = {
  rootView: "DetailsModal/rootView",
};

const OffLineModal: React.FC<OffLineModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <S.Container>
        <S.Content>
          <S.Title>Conexão</S.Title>
          <S.SubTitle>
            Você está sem conexão com a internet no momento.
          </S.SubTitle>
          <S.SubTitle>
            Mais não se preocupe você pode continuar usando o aplicativo
            normalmente.
          </S.SubTitle>

          <S.ButtonArea>
            <Button
              title="Fechar"
              type="cancel"
              size="small"
              onPress={onClose}
            />
          </S.ButtonArea>
        </S.Content>
      </S.Container>
    </Modal>
  );
};

export default OffLineModal;
