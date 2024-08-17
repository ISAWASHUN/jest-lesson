it("モック関数が呼び出される", () => {
  const mock = jest.fn();
  mock();
  expect(mock).toHaveBeenCalled();
});

it("モック関数が2回数呼び出される", () => {
  const mock = jest.fn();
  mock();
  mock();
  expect(mock).toHaveBeenCalledTimes(2);
});

it("モック関数に引数が渡される", () => {
  const mock = jest.fn();
  mock("Hello Mock");
  expect(mock).toHaveBeenCalledWith("Hello Mock");
});