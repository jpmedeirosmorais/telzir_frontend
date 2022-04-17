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

    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "test" } });

    expect(screen.getByText("test")).toBe("test");
    expect(handleFuction).toHaveBeenCalled();
  });
});
