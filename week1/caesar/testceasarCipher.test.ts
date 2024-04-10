import { cipher } from "./caesarSipher";

describe("should correctly rotate the text", () => {
  it("should return", () => {
    const result = "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj";
    const input = "Always-Look-on-the-Bright-Side-of-Life";
    const factor = 5;
    const output = cipher(input, factor);
    expect(output).toBe(result);
  });
  it("should return proper output", () => {
    const result = "okffng-Qwvb";
    const input = "middle-Outz";
    const factor = 2;
    const output = cipher(input, factor);
    expect(output).toBe(result);
  });
});
