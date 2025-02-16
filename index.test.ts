import { program } from "commander";
import inquirer from "inquirer";
import { writeComponentFile } from "./src/generator";

jest.mock("./src/generator", () => ({
  writeComponentFile: jest.fn(),
}));

describe("CLI commands", () => {
  beforeAll(() => {
    // Mock inquirer prompt
    jest.spyOn(inquirer, "prompt").mockResolvedValue({
      name: "TestComponent",
      type: "button",
      className: "bg-blue-500",
      props: "disabled,icon",
    });

    // Mock process.argv
    process.argv = ["node", "index.js"];
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should run the interactive command", async () => {
    process.argv.push("interactive");
    await program.parseAsync(process.argv);

    expect(inquirer.prompt).toHaveBeenCalled();
    expect(writeComponentFile).toHaveBeenCalledWith(
      "button",
      "TestComponent",
      "bg-blue-500",
      ["disabled", "icon"]
    );
  });

  it("should run the generate command", async () => {
    process.argv.push("generate", "TestComponent", "button", "-c", "bg-blue-500", "-p", "disabled,icon");
    await program.parseAsync(process.argv);

    expect(writeComponentFile).toHaveBeenCalledWith(
      "button",
      "TestComponent",
      "bg-blue-500",
      ["disabled", "icon"]
    );
  });
});