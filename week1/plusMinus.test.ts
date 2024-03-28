import { plusMinus } from "./plusMinus";

describe("plusMinus", () => {
  it("should log the correcto ratios", () => {
    // Mock console.log
    const consoleLogMock = jest.spyOn(console, "log").mockImplementation();

    // Test input
    const testArray = [-4, 3, -9, 0, 4, 1];
    plusMinus(testArray);

    // Assert console.log calls
    expect(consoleLogMock).toHaveBeenCalledTimes(3);
    expect(consoleLogMock).toHaveBeenNthCalledWith(1, "0.500000");
    expect(consoleLogMock).toHaveBeenNthCalledWith(2, "0.333333");
    expect(consoleLogMock).toHaveBeenNthCalledWith(3, "0.166667");

    // Restore mock
    consoleLogMock.mockRestore();
  });
  it("should log the correcto ratios", () => {
    // Mock console.log
    const consoleLogMock = jest.spyOn(console, "log").mockImplementation();

    // Test input
    const testArray = [0, 0, -1, 1, 1];
    plusMinus(testArray);

    // Assert console.log calls
    expect(consoleLogMock).toHaveBeenCalledTimes(3);
    expect(consoleLogMock).toHaveBeenNthCalledWith(1, "0.400000");
    expect(consoleLogMock).toHaveBeenNthCalledWith(2, "0.200000");
    expect(consoleLogMock).toHaveBeenNthCalledWith(3, "0.400000");

    // Restore mock
    consoleLogMock.mockRestore();
  });
});
