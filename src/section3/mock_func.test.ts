it("初めてのモック関数", () => {
  // jest.fn()
  const mockFunc = jest.fn(() => "Hello Mock");
  expect(mockFunc()).toBe("Hello Mock");
})

it("mockImplementation", () => {
  const mockFunc = jest.fn();
  mockFunc.mockImplementation(() => "Hello Mock");
  expect(mockFunc()).toBe("Hello Mock");
})
