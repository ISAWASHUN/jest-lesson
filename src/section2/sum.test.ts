import { sum } from "./sum";

// it("1と2を足すと3になる", () => {
//   expect(sum(1, 2)).toBe(3);
// });


it.each([
  [1, 2, 3],
  [2, 3, 5],
  [3, 4, 7],
])("sum(%i, %i) = %i", (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
});
