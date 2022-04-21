import ErrorHandler from "./errorHandler";

class DesertIsland {
  private _map: IslandMap;
  private _perimeter: number = 0;

  constructor(map: IslandMap) {
    new ErrorHandler(map).verify();
    this._map = map;
    this.setPerimeter();
  }

  calculateRowPerimeter(total, row, i) {
    const rowPerimeter = row.reduce((rowTotal, cell, j) => {
      let newTotal = rowTotal;

      const previousCell = row[j - 1];
      const previousRowCell = this._map[i - 1]?.[j];

      if (previousCell !== undefined && previousCell !== cell) {
        newTotal += 1;
      }

      if (previousRowCell !== undefined && previousRowCell !== cell) {
        newTotal += 1;
      }

      return newTotal;
    }, 0);
    return rowPerimeter + total;
  }

  setPerimeter() {
    const rowsPerimeter = this._map.reduce((total, row, i) => {
      return this.calculateRowPerimeter(total, row, i);
    }, 0);

    this._perimeter = rowsPerimeter;
  }

  get perimeter() {
    return this._perimeter;
  }
}

export default DesertIsland;
