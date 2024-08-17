import { readFile } from "./mock_module";
import fs from "fs";

jest.mock("fs");
const mockFs = jest.mocked(fs);
mockFs.readFileSync.mockReturnValue("Hello Mock");


it("readFileがデータを返却する", () => {
  const result = readFile("test");
  expect(result).toBe("Hello Mock");
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
})