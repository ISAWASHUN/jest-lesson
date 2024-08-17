import { Calculator } from './mock_spy';

it("sumメソッドが呼び出される", () => {
  const calculator = new Calculator();
  const spy = jest.spyOn(calculator, "sum");
  const result = calculator.sum(1, 2);
  expect(result).toBe(3);
  expect(spy).toHaveBeenCalledTimes(1);

  spy.mockRestore();
});
