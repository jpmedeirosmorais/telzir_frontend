import { render } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading", () => {
  it("should render correctly", () => {
    expect(render(<Loading />)).toMatchSnapshot();
  });
});
