import { useRef, useState } from "react";
import { TextInput } from "react-native";
import { mask as useMask } from "react-native-mask-text";

import { Mask, Props } from ".";

export const useViewModel = (props: Props) => {
  const {
    validation,
    onChangeText,
    clearValidation,
    mask = "default",
    displaySecureIndicator = false,
  } = props;

  const inputRef = useRef<TextInput | undefined>();
  const [isVisible, setVisible] = useState(displaySecureIndicator);

  const handleTextChange = (text: string): void => {
    const inputType: Record<Mask, string> = {
      default: text,
      date: useMask(text, "99/99/9999"),
      phoneNumber: useMask(text, "(99) 99999-9999"),
    };

    onChangeText(inputType[mask]);

    if (!!validation && clearValidation) {
      clearValidation();
    }
  };

  const triggerInputFocus = (): void => {
    inputRef?.current?.focus();
  };

  return {
    inputRef,
    isVisible,
    setVisible,
    handleTextChange,
    triggerInputFocus,
    ...props,
  };
};
