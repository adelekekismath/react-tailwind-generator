import program from "./index"; // Assure-toi que le bon chemin est utilisé
import inquirer from "inquirer";
import * as generatorModule from "./generator"; 


jest.spyOn(generatorModule, "writeComponentFile");

describe("CLI commands", () => {
  const originalArgv = process.argv;

  beforeAll(() => {
    // Mock inquirer prompt
    jest.spyOn(inquirer, "prompt").mockResolvedValue({
      name: "TestComponent",
      type: "button",
      className: "bg-blue-500",
      props: "disabled,icon",
    });
  });

  beforeEach(() => {
    // Réinitialise process.argv avant chaque test
    process.argv = ["ts-node", "index.ts"];
    jest.clearAllMocks();
  });

  afterAll(() => {
    // Restaure process.argv après tous les tests
    process.argv = originalArgv;
  });

  it("should run the interactive command", async () => {
    process.argv = ["ts-node", "./index.ts", "interactive"]; 
    await program.parseAsync(process.argv); 

    expect(inquirer.prompt).toHaveBeenCalled();
    expect(generatorModule.writeComponentFile).toHaveBeenCalledWith(
      "button",
      "TestComponent",
      "bg-blue-500",
      ["disabled", "icon"]
    );
  });

  it("should run the generate command with default props", async () => {
    process.argv = ["ts-node", "./index.ts", "generate", "TestComponentAlert", "alert", "-c", "bg-red-500"];
    await program.parseAsync(process.argv);
    
    expect(generatorModule.writeComponentFile).toHaveBeenCalledWith(
      "alert",
      "TestComponentAlert",
      "bg-red-500",
    [""]
    );

    });

    it("should run the generate command with custom props", async () => {
      process.argv = ["ts-node", "./index.ts", "generate", "TestComponentAvar", "avatar", "-c", "bg-green-500", "-p", "size,rounded"];
        await program.parseAsync(process.argv);

        expect(generatorModule.writeComponentFile).toHaveBeenCalledWith(
          "avatar",
          "TestComponentAvar",
          "bg-green-500",
          ["size", "rounded"]
        );
    });

    it("should run the generate command with default props", async () => {
        process.argv = ["ts-node", "./index.ts", "generate", "TestComponentBadge", "badge", "-c", "bg-yellow-500"];
        await program.parseAsync(process.argv);
    
        expect(generatorModule.writeComponentFile).toHaveBeenCalledWith(
            "badge",
            "TestComponentBadge",
            "bg-yellow-500",
            [""]
        );
        });

        it("should run the generate command with custom props", async () => {
            process.argv = ["ts-node", "./index.ts", "generate", "TestComponentCard", "card", "-c", "bg-purple-500", "-p", "title,description"];
            await program.parseAsync(process.argv);
    
            expect(generatorModule.writeComponentFile).toHaveBeenCalledWith(
                "card",
                "TestComponentCard",
                "bg-purple-500",
                ["title", "description"]
            );
        });

  it("should run the generate command", async () => {
    process.argv = ["ts-node", "./index.ts", "generate", "TestComponent", "button", "-c", "bg-blue-500", "-p", "disabled,icon"];
    await program.parseAsync(process.argv);

    expect(generatorModule.writeComponentFile).toHaveBeenCalledWith(
      "button",
      "TestComponent",
      "bg-blue-500",
      ["disabled", "icon"]
    );
  });
});
