import { render } from "@testing-library/react";

import { Banner } from "./Banner";

describe("Banner", () => {
  it("renders", () => {
    expect(render(<Banner />)).toMatchSnapshot();
  });
});
