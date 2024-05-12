import { compare } from "..";

describe("compare", () => {
  describe("test successfully matching", () => {
    it("should test object matching", () => {
      const callback = jest.fn();

      const isMatch = compare(
        { a: 1, b: [2], c: { gg: 9, r: "3" } },
        { a: 1, b: [2], c: { gg: 9, r: "3" } },
        callback
      );

      expect(isMatch).toBe(true);
      expect(callback).toBeCalledTimes(0);
    });

    it("should test array matching", () => {
      const callback = jest.fn();

      const isMatch = compare(
        [1, [{}, NaN, [[0]]]],
        [1, [{}, NaN, [[0]]]],
        callback
      );

      expect(isMatch).toBe(true);
      expect(callback).toBeCalledTimes(0);
    });
  });

  describe("test nagative matching", () => {
    it("should call calback when object is not match", () => {
      const callback = jest.fn();

      const isMatch = compare({ a: 1 }, { a: 2 }, callback);

      expect(isMatch).toBe(false);
      expect(callback).toBeCalledTimes(1);
    });
  });
});
