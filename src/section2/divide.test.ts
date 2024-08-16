// toThrow

import { divide, ZeroDivisorError } from './divide';

it('0で割るとエラーが発生する', () => {
  expect(() => divide(1, 0)).toThrow('0で割ることはできません');
  expect(() => divide(1, 0)).toThrow(ZeroDivisorError);
});
