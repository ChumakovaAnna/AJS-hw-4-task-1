import getNumber from "../getNumber";

describe("getNumber", () => {
  test("String is number", () => {
    const result = getNumber("4654");

    expect(result).toBe(4654);
  });
  test("String is hexadecimal notation number", () => {
    const result = getNumber("0x12");

    expect(result).toBe(0);
  });
  test("String is empty", () => {
    expect(() => {
      getNumber("");
    }).toThrow();
  });
  test("String is not number", () => {
    expect(() => {
      getNumber("xjcvlkdsj");
    }).toThrow();
  });
});
