import React, { memo } from "react";
import { TextInputProps } from "react-native";
import { default as Theme } from "../../theme";
import { Container, Content, Input, Label, ValidationMessage } from "./styles";
import { useViewModel } from "./viewMode";

export type Mask = "date" | "default" | "phoneNumber";

export type BackgroundColor = "transparent" | "white";
export type ColorPlaceholder = "blue" | "white";
export type ColorLabel = "blue" | "white";

export interface Props extends TextInputProps {
  mask?: Mask;
  label: string;
  labelColor?: string;
  disabled?: boolean;
  hasTextArea?: boolean;
  backgroundColor?: BackgroundColor;
  colorText?: string;
  inputLength?: number;
  messageError?: string;
  validation?: string | boolean;
  clearValidation?: () => void;
  displaySecureIndicator?: boolean;
  onChangeText: (text: string) => void;
}

const InputText = (props: Props) => {
  const {
    label,
    labelColor = Theme.colors.opacityBlack,
    inputRef,
    isVisible,
    validation,
    setVisible,
    onChangeText,
    messageError,
    inputLength,
    clearValidation,
    handleTextChange,
    colorText = Theme.colors.darkGray,
    disabled = false,
    hasTextArea = false,
    mask = "default",
    backgroundColor = "white",
    triggerInputFocus,
    displaySecureIndicator = false,
    ...others
  } = useViewModel(props);

  return (
    <Container disabled={disabled}>
      <Label labelColor={labelColor}>{label}</Label>
      <Content
        disabled={disabled}
        activeOpacity={0.9}
        backgroundColor={backgroundColor}
        hasError={!!validation}
        hasTextArea={hasTextArea}
        onPress={triggerInputFocus}
      >
        <Input
          {...others}
          ref={inputRef}
          colorText={colorText}
          disabled={disabled}
          secureTextEntry={isVisible}
          onChangeText={handleTextChange}
          hasSecureIndicator={displaySecureIndicator}
          placeholderTextColor={Theme.colors.placeholderTextColor}
        />
      </Content>

      <ValidationMessage>{validation}</ValidationMessage>
    </Container>
  );
};

export default memo(InputText);
