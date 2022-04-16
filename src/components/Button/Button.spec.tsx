import { render } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("renders without callback", () => {
    expect(render(<Button value="Button" />)).toBeTruthy();
  });

  it("renders with callback", () => {
    expect(render(<Button value="Button" callback={() => {}} />)).toBeTruthy();
  });
});
