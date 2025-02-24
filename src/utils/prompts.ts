import inquirer from "inquirer";
import { COMPONENT_TYPES, DEFAULT_CLASSES, DEFAULT_PROPS } from "./constants";
import { ComponentType } from "./types";


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
    ]);
  
    const defaultClasses = DEFAULT_CLASSES[answers.type as ComponentType];
  
    const additionalAnswers = await inquirer.prompt([
      {
        type: "input",
        name: "className",
        message: `TailwindCSS class name? (default: ${defaultClasses}): `,
        default: defaultClasses,
      }
    ]);
  
    return { ...answers, ...additionalAnswers };
  };