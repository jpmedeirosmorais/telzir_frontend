import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

const props = {
  placeholder: "placeholder",
  label: "label",
};

describe("Input", () => {
  it("should render correctly", () => {
    render(<Input {...props} />);

    expect(screen.getByText("label")).toBeInTheDocument();
  });

  it("should change value in input", () => {
    const handleFuction = jest.fn();

    render(<Input {...props} callback={handleFuction} />);

    const input: any = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "123" } });

    expect(input.value).toBe("123");
    expect(handleFuction).toHaveBeenCalled();
  });

  it("should not be able to change the value in input if it is disabled", () => {
    const handleFuction = jest.fn();

    render(<Input {...props} callback={handleFuction} />);

    const input: any = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "abc" } });

    expect(input.value).toBe("");
    expect(handleFuction).not.toHaveBeenCalled();
  });
});
