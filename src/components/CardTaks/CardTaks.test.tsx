import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import CardTaks from ".";
import { withTheme } from "../../theme/withTheme";

describe("CardTaks Component", () => {
  const mockProps = {
    id: 1,
    task: "Launch",
    completed: false,
    image: "https://example.com/test-image.jpg",
    file: "sample-file",
    onAction: jest.fn(),
  };

  it("renders the CardTaks component with correct data", () => {
    const { getByText, getByTestId } = render(
      withTheme(<CardTaks {...mockProps} />)
    );

    const launchText = getByText("LAUNCH");
    const nameText = getByText("Launch");
    const container = getByTestId("component-CardTaks");

    expect(launchText).toBeTruthy();
    expect(nameText).toBeTruthy();
    expect(container).toBeTruthy();
  });

  it("calls the onAction callback when pressed", () => {
    const { getByTestId } = render(withTheme(<CardTaks {...mockProps} />));
    const container = getByTestId("component-CardTaks");

    fireEvent.press(container);

    expect(mockProps.onAction).toHaveBeenCalled();
  });
});
