import romano from "./romanos.js";

describe("Numero romano", () => {
  it("deberia representar el numero 1 en romano", () => {
    expect(romano(1)).toEqual("I");
  });
  it("deberia representar el numero 2 en romano", () => {
    expect(romano(2)).toEqual("II");
  });
  it("deberia representar el numero 3 en romano", () => {
    expect(romano(3)).toEqual("III");
  });
  it("deberia representar cualquier unidad en romano", () => {
    expect(romano(7)).toEqual("VII");
  });
  it("deberia representar el numero 10 en romano", () => {
    expect(romano(10)).toEqual("X");
  });
  it("deberia representar el numero 20 en romano", () => {
    expect(romano(20)).toEqual("XX");
  });
  it("deberia representar el cualquier decena en romano", () => {
    expect(romano(60)).toEqual("LX");
  });
  it("deberia representar el numero 73 en romano", () => {
    expect(romano(73)).toEqual("LXXIII");
  });
  it("deberia representar el numero 100 en romano", () => {
    expect(romano(100)).toEqual("C");
  });
});
