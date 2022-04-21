class ErrorHandler {
  private _map: IslandMap;

  constructor(map: IslandMap) {
    this._map = map;
  }

  verify() {
    const isArray = Array.isArray(this._map);

    if (!isArray) {
      throw new Error("Map must be an array");
    }

    const firstRowLength = this._map[0]?.length;

    const outerHasContent = this._map.length > 0;
    const innerHasContent = firstRowLength > 0;
    const hasContent = outerHasContent && innerHasContent;

    if (!hasContent) {
      throw new Error("Map must have at least one land or sea cell");
    }

    const rowLengthsAreEqual = !this._map.some(
      (row) => row.length !== firstRowLength
    );

    if (!rowLengthsAreEqual) {
      throw new Error("Map must have rows of equal length");
    }
  }
}

export default ErrorHandler;
