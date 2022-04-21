import getPerimeter from "./small";

describe("Desert Island", () => {
  it("Calculates the correct perimeter of a map with one row", () => {
    expect(getPerimeter([[1, 0, 1, 0]])).toBe(3);
  });

  it("Calculates the correct perimeter of a map with one column", () => {
    expect(getPerimeter([[1], [1], [0], [1]])).toBe(2);
  });

  it("Calculates the correct perimeter of a map", () => {
    expect(
      getPerimeter([
        [0, 0],
        [0, 1],
      ])
    ).toBe(2);
  });

  it("Calculates the correct perimeter of a map", () => {
    expect(
      getPerimeter([
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ])
    ).toBe(12);
  });
  it("Calculates the correct perimeter of a map with two islands", () => {
    expect(
      getPerimeter([[
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ], [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ]])
    ).toBe(24);
  });
 
});






