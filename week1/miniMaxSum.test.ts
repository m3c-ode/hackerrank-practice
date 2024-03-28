import { minMaxSorted } from "./miniMaxSum";

describe("miniMaxSum", () => {
  it("should log the min sum and right sum by side", () => {
    const consoleLogMock = jest.spyOn(console, "log").mockImplementation();

    const testArr = [1, 2, 3, 4, 5];
    minMaxSorted(testArr);

    expect(consoleLogMock).toHaveBeenCalled();
    expect(consoleLogMock).toHaveBeenNthCalledWith(1, "10 14");

    consoleLogMock.mockRestore();
  });
});
