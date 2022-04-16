import DesertIsland from ".";

describe("Error handling", () => {
  it("Throws an error if input is not an array", () => {
    expect(() => {
      // @ts-ignore
      new DesertIsland({});
    }).toThrow("Map must be an array");
  });

  it("Throws an error if input is an empty array", () => {
    expect(() => {
      new DesertIsland([]);
    }).toThrow("Map must have at least one land or sea cell");
  });

  it("Throws an error if input is an empty array within an empty array", () => {
    expect(() => {
      new DesertIsland([[]]);
    }).toThrow("Map must have at least one land or sea cell");
  });

  it("Throws an error if input has arrays of different lengths", () => {
    expect(() => {
      new DesertIsland([[0, 1], [1]]);
    }).toThrow("Map must have rows of equal length");
  });
});

describe("Desert Island", () => {
  it("Calculates the correct perimeter of a map with one row", () => {
    expect(new DesertIsland([[1, 0, 1, 0]]).perimeter).toBe(3);
  });

  it("Calculates the correct perimeter of a map with one column", () => {
    expect(new DesertIsland([[1], [1], [0], [1]]).perimeter).toBe(2);
  });

  it("Calculates the correct perimeter of a map", () => {
    expect(
      new DesertIsland([
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ]).perimeter
    ).toBe(12);
  });
});
