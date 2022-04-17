import { render } from "@testing-library/react";

import { Table } from "./Table";

const columnsProps = {
  columns: [
    {
      title: "with plan",
      lines: ["line 1", "line 2"],
    },
    {
      title: "without plan",
      lines: ["line 1", "0"],
    },
  ],
};

describe("Table", () => {
  it("should render correctly", () => {
    expect(render(<Table {...columnsProps} />)).toMatchSnapshot();
  });
});
