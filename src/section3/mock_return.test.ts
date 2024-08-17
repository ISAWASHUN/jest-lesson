it("モック関数に戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue("Hello Mock");
  expect(mockFunc()).toBe("Hello Mock");
  expect(mockFunc()).toBe("Hello Mock");
})

it("モック関数に一度だけ返されるように設置する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValueOnce("Hello Mock");
  expect(mockFunc()).toBe("Hello Mock");
})

it("モック関数に非同期な戻り値を設定する", async () => {
  const mockFunc = jest.fn();
  mockFunc.mockResolvedValue("Hello Mock");
  expect(await mockFunc()).toBe("Hello Mock");
});
