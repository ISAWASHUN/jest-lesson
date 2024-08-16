describe("配列に関するテスト", () => {
  it("入れるに要素を追加できる", () => {
    const arr = []
    arr.push('element')
    expect(arr.length).toBe(1)
  })

  it("配列の要素を取得できる", () => {
    const arr = ['element']
    expect(arr[0]).toBe('element')
  })
})
