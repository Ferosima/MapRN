import { hash } from "..";

describe("hash", () => {
  it("should always generate same hash string", () => {
    expect(hash({ a: 1, b: [2] })).toMatchSnapshot();
  });
});
