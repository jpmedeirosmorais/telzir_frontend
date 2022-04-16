import { render, screen, fireEvent } from "@testing-library/react";

import { Dropdown } from "./Dropdown";

const dropdownProps = {
  labelText: "Dropdown",
  options: ["Option 1", "Option 2", "Option 3"],
};

describe("Dropdown", () => {
  it("renders", () => {
    expect(render(<Dropdown {...dropdownProps} />)).toBeTruthy();
  });

  it("should render and click in a option", () => {
    render(<Dropdown {...dropdownProps} />);
    const dropdown = screen.getByTestId("dropdown");
    fireEvent.click(dropdown);
    const option = screen.getByTestId("option-Option 1");
    fireEvent.click(option);
    expect(screen.getByText("Option 1")).toBeTruthy();
  });

  it("should render with callback", () => {
    const callback = jest.fn();
    render(<Dropdown {...dropdownProps} callback={callback} />);
    const dropdown = screen.getByTestId("dropdown");
    expect(fireEvent.click(dropdown)).toBeTruthy();
    const option1 = screen.getByTestId("option-Option 1");
    expect(fireEvent.click(option1)).toBeTruthy();
    expect(fireEvent.click(dropdown)).toBeTruthy();
    const option2 = screen.getByTestId("option-Option 2");
    expect(fireEvent.click(option2)).toBeTruthy();
  });
});
