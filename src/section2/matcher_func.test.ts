// toBe
it("数値のテスト", () => {
  expect(2 + 2).toBe(4);
})

it("文字列のテスト", () => {
  expect("Hello, World!").toBe("Hello, World!");
})

// toEqual
it("配列のテスト", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  expect(arr1).toEqual(arr2);
})

it("objectのテスト", () => {
  const obj1 = { name: "Alice" };
  const obj2 = { name: "Alice" };
  expect(obj1).toEqual(obj2);
});

// not
it("notのテスト", () => {
  expect(2 + 2).not.toBe(5);
})

