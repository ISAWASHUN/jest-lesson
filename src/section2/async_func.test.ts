import { delay } from "./async_func";

it('delayがしてされた時間後にメッセージを返す', async () => {
  const result = await delay("test", 1000);
  expect(result).toBe("test");
});

it('timeがマイナスの場合はエラーが発生する', async () => {
  try {
    const result = await delay("test", -1000);
  } catch(err) {
    expect(err).toEqual(new Error("timeは0以上で指定してください"));
  }
});
