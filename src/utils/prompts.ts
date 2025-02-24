import inquirer from "inquirer";
import { COMPONENT_TYPES } from "./constants";

export const promptUser = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Component name?",
      validate: (input: string) => input.trim() !== "" || "Component name is required.",
    },
    {
      type: "list",
      name: "type",
      message: "Component type?",
      choices: COMPONENT_TYPES,
    },
    {
      type: "input",
      name: "className",
      message: "TailwindCSS class name?",
      default: "p-4 bg-gray-100 rounded-lg",
    },
    {
      type: "input",
      name: "props",
      message: "Props (comma separated or leave empty):",
      filter: (input: string) => input.split(",").map((prop) => prop.trim()),
    },
  ]);

  return answers;
};