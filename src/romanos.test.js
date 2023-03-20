import romano from "./romanos.js";

describe("Numero romano", () => {
  it("deberia representar el numero 1 en romano", () => {
    expect(romano(1)).toEqual("I");
  });
});
