import { render } from "@testing-library/react";

import Bootstrap from "./Bootstrap";

describe("Bootstrap", () => {
  it("renders", () => {
    expect(render(<Bootstrap />)).toMatchSnapshot();
  });
});
